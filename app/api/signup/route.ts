import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body;

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create Supabase server client
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      }
    );

    // Insert email into waitlist table
    const { error } = await supabase.from("waitlist").insert({
      email,
      source,
    });

    if (error) {
      // Handle duplicate email error
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on our waitlist!" },
          { status: 400 }
        );
      }
      throw error;
    }

    return NextResponse.json(
      { message: "Successfully signed up!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[v0] Signup error:", error);
    return NextResponse.json(
      { error: "Failed to sign up. Please try again." },
      { status: 500 }
    );
  }
}
