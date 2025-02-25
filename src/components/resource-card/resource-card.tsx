import { ICONS } from "@/utils/icons";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ResourceCard = ({
  title,
  img,
  category,
  time,
}: {
  title: string;
  img: string;
  category: string;
  time: string;
}) => {
  return (
    <Card
      radius="sm"
      shadow="sm"
      className="md:hover:scale-105 h-full duration-200 border-b border-ars-cyan pb-10 max-w-96"
    >
      <Image
        radius="lg"
        width="100%"
        alt={title}
        className="object-cover object-top h-[10rem] rounded-t-3xl "
        src={`${img}`}
      />
      <CardBody className="mt-3 p-0">
        <div
          className="flex flex-row lg:flex-col xl:flex-row gap-3 mb-3
        "
        >
          <div className=" bg-white text-[#67829E] uppercase text-xs font-medium rounded-full pl-2 pr-4 py-1 w-fit flex items-center gap-1">
            {ICONS.dot}
            {category}
          </div>
          <div className="text-cyan-blue-50 uppercase text-xs font-medium flex items-center gap-1">
            {ICONS.dot}
            {time}
          </div>
        </div>
        <h2 className="text-lg text-indigo font-medium">{title}</h2>
      </CardBody>

      <CardFooter>
        <div className="flex gap-4 items-center">
          <p className="font-medium">Read More</p>
          <Button
            as={Link}
            href="/blogs"
            size="sm"
            isIconOnly
            radius="full"
            className="bg-ars-cyan-60 text-lg text-white "
          >
            {ICONS.arrow_right_big}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
