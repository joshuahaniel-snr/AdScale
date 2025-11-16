-- Create reservations table for collecting user data
CREATE TABLE IF NOT EXISTS reservations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  company TEXT,
  phone TEXT,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS reservations_email_idx ON reservations(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS reservations_created_at_idx ON reservations(created_at DESC);

-- Enable Row Level Security
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for signup)
CREATE POLICY "Allow anonymous inserts" ON reservations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow service role full access
CREATE POLICY "Allow service role full access" ON reservations
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create policy to allow authenticated users full access
CREATE POLICY "Allow authenticated full access" ON reservations
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_reservations_updated_at
  BEFORE UPDATE ON reservations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
