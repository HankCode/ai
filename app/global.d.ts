import type { Tables } from "@/types/supabase";

declare global {
  type Manifestation = Tables<"manifestations">;
  type User = Tables<"profiles">;
}
