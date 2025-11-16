import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, company, phone, source } = body

    console.log('Received reservation request:', { fullName, email, company, phone, source })

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Full name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create Supabase client with service role key for server-side operations
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    
    console.log('Supabase URL:', supabaseUrl)
    console.log('Service key exists:', !!supabaseKey)
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase credentials')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    console.log('Attempting to insert reservation...')

    // Insert reservation into database
    const { data, error } = await supabase
      .from('reservations')
      .insert([
        {
          full_name: fullName,
          email: email.toLowerCase().trim(),
          company: company || null,
          phone: phone || null,
          source: source || 'unknown',
        },
      ])
      .select()
      .single()

    console.log('Insert result:', { data, error })

    if (error) {
      // Check for unique constraint violation (duplicate email)
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already registered' },
          { status: 409 }
        )
      }

      // Check if table doesn't exist
      if (error.code === '42P01') {
        console.error('Table does not exist! Please run the SQL setup script.')
        return NextResponse.json(
          { error: 'Database not properly configured. Please contact support.' },
          { status: 500 }
        )
      }

      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to create reservation' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Reservation created successfully',
        data 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
