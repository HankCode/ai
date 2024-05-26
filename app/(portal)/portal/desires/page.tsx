import { createClient } from "@/utils/supabase/server";

const page = async () => {
  const supabase = createClient();

  let { data, error } = await supabase.from("manifestations").select("*");

  if (error) {
    return <div>{error.message}</div>;
  }

  if (data) {
    return (
      <div>
        {data.map((manifestation: Manifestation) => (
          <div key={manifestation.id}>
            <p>{manifestation.created_at}</p>
            <h2>{manifestation.title}</h2>
            <p>{manifestation.description}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default page;
