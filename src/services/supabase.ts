import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { config } from "../config";

const supabaseKey = config.supabaseKey as string;
export const supabaseUrl = config.supabaseUrl as string;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key");
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

console.log(supabase, supabaseKey, supabaseUrl);
