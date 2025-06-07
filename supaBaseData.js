import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fxhcpoiumnmovddshfmu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4aGNwb2l1bW5tb3ZkZHNoZm11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NzkzNTYsImV4cCI6MjA2NDU1NTM1Nn0.He2Gh6Cu5bTetyTxL1cVMG09EEER7bl9PTUpjkZHSl4"
);

export default supabase;
