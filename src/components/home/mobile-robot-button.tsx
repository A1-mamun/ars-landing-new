"use client";

import { ICONS } from "@/utils/icons";
import { Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";

const MobileRobotButton = ({
  title,
  link,
}: {
  title: string;
  link: string;
}) => {
  return (
    <Tooltip
      content={
        title === "A Series"
          ? `Learn more about the ${title}!`
          : `The ${title} is still under development`
      }
      placement="right"
      showArrow
      radius="full"
      classNames={{
        base: ["before:bg-ars-gray"],
        content: [
          "px-4 py-2 shadow-lg",
          "bg-ars-gray text-sm text-white font-medium",
        ],
      }}
    >
      <Button
        as={Link}
        href={title == "A Series" ? link : "#mobile-robot-section"}
        isIconOnly
        radius="full"
        className="text-white bg-transparent text-2xl md:text-3xl font-bold -ml-1 hover:bg-ars-cyan-60"
      >
        {ICONS.arrow_right_big}
      </Button>
    </Tooltip>
  );
};

export default MobileRobotButton;
