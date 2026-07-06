import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ajwsjznwwjbprdyaeila.supabase.co";
const supabaseAnonKey = "sb_publishable_A8FvQ4GTb7cHs9HVi4LPsw_nJEmZBJH";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
