// export function generateStaticParams() {
//   return blogsResourcesData.map((blog) => ({
//     id: blog.id,
//   }));
// }

// export default async function ReadBlog({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const id = (await params).id;
//   const blogData = blogsResourcesData.find((blog) => blog.id === id);
//   return (
//     <>
//       <BlogReadButton />
//       {blogData ? (
//         <main
//           className="h-screen padding-responsive py-2 lg:py-2 xl:py-2"
//           style={{
//             background:
//               "linear-gradient(to bottom, rgba(34, 169, 225, 0.5), rgba(215, 239, 249, 1)), linear-gradient(to right top, rgba(5, 144, 200, 0.02), rgba(13, 36, 38, 1))",
//           }}
//         >
//           <iframe
//             src={blogData.file}
//             width="100%"
//             height="100%"
//             className="border-none"
//             title={blogData.title}
//           />
//           {/* <BlogPdf file={blogData.file} /> */}
//         </main>
//       ) : (
//         <main>
//           <div className="flex flex-col h-screen items-center justify-center bg-midnight-blue text-ars-primary padding-responsive">
//             <h1 className="text-4xl font-semibold">No Blog Found</h1>
//             <p className="text-xl font-medium text-ars-cyan">Wrong blog link</p>
//           </div>
//         </main>
//       )}
//     </>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlogReadButton } from "@/components";
import { client } from "@/utils/contentful/contentful";
import { Asset } from "contentful";
import Image from "next/image";

export async function generateStaticParams() {
  const result = await client.getEntries({
    content_type: "blog",
  });

  return result.items.map((blog) => ({
    id: blog.fields.slug,
  }));
}

const fetchBlogBySlug = async (slug: string) => {
  const result = await client.getEntries({
    content_type: "blog",
    "fields.slug": slug,
  });

  if (!result.items.length) {
    throw new Error(`No blog found for slug: ${slug}`);
  }

  return result.items[0];
};

const ReadBlog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  // console.log(id);

  const blog = await fetchBlogBySlug(id);

  return (
    <div className="px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 3xl:px-44">
      <div className="h-16 bg-ars-cyan rounded-b-full"></div>
      <div className="flex justify-end py-10 lg:py-14 xl:py-20">
        <h2 className="text-7xl font-semibold w-[470px] text-right">
          {(blog.fields as any).title}
        </h2>
      </div>
      <div className="flex  gap-20">
        <Image
          className="border-t-[20px] border-r-[20px] border-ars-cyan rounded-tr-[80px]"
          src={`https:${
            (blog.fields.featuredImage as Asset).fields.file?.url as string
          }`}
          alt={(blog.fields.featuredImage as Asset).fields.title as string}
          width={700}
          height={400}
        />
        <p>{(blog.fields as any).content.content[0].content[0].value}</p>
      </div>
      <BlogReadButton />
    </div>
  );
};

export default ReadBlog;
