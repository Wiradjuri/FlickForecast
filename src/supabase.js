import { createClient } from '@supabase/supabase-js'

// Replace with your Supabase project values
const supabaseUrl = 'https://dtkchxoxibpcnanxzzul.supabase.co' // <- your project URL
const supabaseAnonKey = 'your-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0a2NoeG94aWJwY25hbnh6enVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4OTAxNTgsImV4cCI6MjA2NTQ2NjE1OH0.JdV6sz1rdcOoHUg5Aqf9aHdOqHd5FstLL_iNjaCH-ck'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
