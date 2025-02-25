import { ICONS } from "@/utils/icons";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const BlogCard = ({
  title,
  img,
  category,
  description,
  time,
  linkTo,
}: {
  title: string;
  img: string;
  category: string;
  description: string;
  time: number;
  linkTo: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-7 md:gap-10 lg:gap-12 xl:gap-16 py-7 md:py-10 lg:py-12 xl:py-14 border-b border-deep-blue-20">
      <div className="w-full lg:w-1/2 rounded-3xl">
        <Image
          src={img}
          alt={title}
          width="100%"
          className="rounded-3xl h-[250px] xs:h-[280px] sm:h-[300px] md:h-[350px] xl:h-[420px] object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-between gap-8">
        <div className="space-y-3 md:space-y-4 lg:space-y-5">
          <h1 className="text-ars-cyan text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
            {title}
          </h1>
          <p>{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-ars-cyan font-medium uppercase">
            {category} <br />
            <span className="text-[#67829E] lowercase">{time} min read</span>
          </p>
          <Button
            as={Link}
            href={linkTo}
            isIconOnly
            radius="full"
            className="bg-ars-cyan-60 text-xs md:text-sm text-deep-blue font-medium "
          >
            {ICONS.arrow_right}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
