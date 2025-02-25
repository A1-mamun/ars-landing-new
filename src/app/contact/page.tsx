import { Careers, Contacts, Header, LatestResources } from "@/sections";
import { client } from "@/utils/contentful/contentful";

const fetchBlogs = async () => {
  const result = await client.getEntries({
    content_type: "blog", // Replace with your actual content type ID
  });
  return result.items || []; // Ensure an array is returned
};

const Contact = async () => {
  const Blogs = await fetchBlogs();
  return (
    <>
      <Header />
      <main>
        <Contacts />
        <Careers />
        <LatestResources blogs={Blogs} />
      </main>
    </>
  );
};

export default Contact;
