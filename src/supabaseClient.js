import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ldfqwhqoiyejutxcxaln.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZnF3aHFvaXllanV0eGN4YWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1NjA4NjgsImV4cCI6MjA3OTEzNjg2OH0.8xVMpUZi_X-ZeG4DNhs8vbZZZ49RH8_H5PmypGYvNi4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);