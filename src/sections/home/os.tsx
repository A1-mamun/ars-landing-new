"use client";

import OsLogo from "@/../../public/ars-os.png";
import OsImage from "@/../../public/home-os.jpeg";
import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const OS = () => {
  return (
    <section
      className="h-[500px] md:h-[600px] lg:h-screen "
      style={{
        background: `url(${OsImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full bg-[#000000B3] padding-responsive flex flex-col justify-center gap-1 md:gap-3 lg:gap-5 text-white">
        <Image
          width={200}
          className="w-32 md:w-40 lg:w-48 mb-1 md:mb-0"
          src={OsLogo}
          alt="Os Logo"
        />
        <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl w-full md:w-4/5 lg:w-3/4 xl:w-3/5 2xl:w-1/2">
          A versatile and user-friendly operating system designed to streamline
          robotic functionalities
        </h2>
        <p className="w-full md:w-2/3 lg:w-1/2 text-xs leading-normal md:text-sm md:leading-normal lg:text-base lg:leading-normal xl:text-lg xl:leading-normal mt-2 md:mt-4 lg:mt-5">
          arsOS is designed to enable operational independence, empowering
          robots to function autonomously with minimal human intervention. arsOS
          allows robots to make real-time decisions, adapt to changing
          environments, and perform complex tasks with high precision. Built-in
          self-monitoring and diagnostic tools ensure that robots can identify
          and resolve issues proactively, minimizing downtime and maintenance
          needs.
        </p>
        <div className="flex gap-4 items-center mt-4 md:mt-8 lg:mt-10">
          <p className="text-sm md:text-base font-medium">Learn About ARS OS</p>
          <Button
            as={Link}
            href="/company"
            isIconOnly
            radius="full"
            className="bg-ars-cyan-60 text-xs md:text-sm text-white font-medium "
          >
            {ICONS.arrow_right}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OS;
