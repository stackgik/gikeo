import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { config } from "../config";

const SUPABASE_KEY = config.supabaseKey;
const supabaseUrl: string = "https://yfywkutclyhzbuelyewc.supabase.co";
const supabaseKey = SUPABASE_KEY as string;

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
