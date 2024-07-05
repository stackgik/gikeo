import { createClient, SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmeXdrdXRjbHloemJ1ZWx5ZXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzNDMyNjcsImV4cCI6MjAzMzkxOTI2N30.mhuEZXDSyNG-yuk0ptFkTvxsWg4KSalhnOA6s4jVhYM";
export const supabaseUrl: string = "https://yfywkutclyhzbuelyewc.supabase.co";

export const supabase: SupabaseClient = createClient(supabaseUrl, SUPABASE_KEY);
