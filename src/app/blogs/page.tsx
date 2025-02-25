import { Header, BlogsHero, GetInTouch, Resources } from "@/sections";
import { client } from "@/utils/contentful/contentful";

const fetchBlogs = async () => {
  const result = await client.getEntries({
    content_type: "blog", // Replace with your actual content type ID
  });
  return result.items || []; // Ensure an array is returned
};
const Blogs = async () => {
  const Blogs = await fetchBlogs();
  console.log(Blogs);
  return (
    <>
      <Header />
      <main
        className="bg-fixed min-h-screen "
        style={{
          background: `
          linear-gradient(30deg, rgba(5, 144, 200, 0.02) 51.31%, #0D242673 114.45%), 
          linear-gradient(30deg, #D7EFF9 51.31%, #0590C8B3 114.45%)`,
        }}
      >
        <div className=" h-full">
          <BlogsHero blogs={Blogs} />
          <Resources blogs={Blogs} />
          <GetInTouch />
        </div>
      </main>
    </>
  );
};

export default Blogs;
