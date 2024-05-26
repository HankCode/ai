import { redirect } from "next/navigation";
import { signout } from "../auth/login/actions";
import { createClient } from "@/utils/supabase/server";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <div className="text-2xl font-semibold">Hello {data.user.email}</div>
      <form>
        <button formAction={signout} className="underline cursor-pointer">
          Logout here
        </button>
      </form>
    </div>
  );
}
