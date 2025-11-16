# 🚀 Supabase Setup Instructions

## Step 1: Access Supabase SQL Editor

1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/sflhaqquojyeofwebrnp
2. Click on **SQL Editor** in the left sidebar
3. Click on **New Query**

## Step 2: Create the Reservations Table

Copy and paste the entire contents of the file `scripts/create-reservations-table.sql` into the SQL editor, then click **RUN**.

This will create:
- ✅ The `reservations` table with all required fields
- ✅ Indexes for better query performance
- ✅ Row Level Security (RLS) policies
- ✅ Auto-update trigger for `updated_at` field

## Step 3: Verify the Table

1. Go to **Table Editor** in the left sidebar
2. You should see a new table called `reservations`
3. Click on it to view its structure

## Expected Table Structure

| Column      | Type                     | Required | Unique | Default                |
|-------------|--------------------------|----------|--------|------------------------|
| id          | uuid                     | ✓        | ✓      | auto-generated         |
| full_name   | text                     | ✓        | -      | -                      |
| email       | text                     | ✓        | ✓      | -                      |
| company     | text                     | -        | -      | null                   |
| phone       | text                     | -        | -      | null                   |
| source      | text                     | -        | -      | null                   |
| created_at  | timestamp with time zone | ✓        | -      | current UTC timestamp  |
| updated_at  | timestamp with time zone | ✓        | -      | current UTC timestamp  |

## Step 4: Test the Integration

1. Make sure your app is running (`pnpm dev`)
2. Open http://localhost:3000
3. Click any "Get Early Access" button
4. Fill out the reservation form
5. Submit the form
6. Go back to Supabase Table Editor → reservations table
7. You should see your new reservation entry!

## Security Notes

- **Anonymous users can only INSERT** - This allows the signup form to work
- **The email field is unique** - Prevents duplicate signups
- **RLS is enabled** - Protects your data
- **Service role has full access** - For admin operations

## Troubleshooting

### "Failed to create reservation" error
- Check that the table was created successfully
- Verify RLS policies are in place
- Ensure the `.env.local` file has the correct Supabase credentials

### Duplicate email error
- This is expected behavior if someone tries to sign up twice with the same email
- The user will see: "This email is already registered"

## Viewing Reservations

To view all reservations:
1. Go to Supabase Dashboard
2. Navigate to **Table Editor**
3. Click on **reservations**
4. View all submissions with full details and timestamps

You can also export the data to CSV from the table editor!
