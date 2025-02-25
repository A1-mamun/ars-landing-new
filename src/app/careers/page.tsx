import {
  CareerHero,
  CareerJobs,
  Header,
  JoinOurTeam,
  LatestResources,
} from "@/sections";
import { client } from "@/utils/contentful/contentful";

const fetchBlogs = async () => {
  const result = await client.getEntries({
    content_type: "blog", // Replace with your actual content type ID
  });
  return result.items || []; // Ensure an array is returned
};

export default async function Career() {
  const Blogs = await fetchBlogs();
  return (
    <>
      <Header />
      <main>
        <CareerHero />
        <CareerJobs />
        <JoinOurTeam largeTitle />
        <LatestResources blogs={Blogs} />
      </main>
    </>
  );
}
