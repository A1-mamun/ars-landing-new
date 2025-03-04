/* eslint-disable @typescript-eslint/no-explicit-any */
import { Blog } from "@/utils/dataTypes/types";
import { Asset } from "contentful";
import Image from "next/image";
import React from "react";

const BlogDetails = ({ blog }: Blog) => {
  return (
    <section className="padding-responsive">
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
    </section>
  );
};

export default BlogDetails;
