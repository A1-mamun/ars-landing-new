"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-[300px] h-screen w-full bg-[url('/home-hero.jpeg')] bg-cover bg-[85%_center]">
      <div className="bg-gradient-to-tl from-[#FFFFFF00] to-[#000000B3] h-full padding-responsive flex flex-col justify-center gap-2 md:gap-3 text-ars-primary">
        {/* <p className="text-xs lg:text-sm">An ARS Robot Development</p> */}
        <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
          Revolutionising Automation <br /> Driving Innovation
        </h2>
        <div>
          <Button
            as={Link}
            href="/company"
            size="sm"
            radius="full"
            className="bg-cyan-blue px-6 md:px-12 py-4 md:py-6 text-sm md:text-base font-medium text-ars-gray mt-2"
          >
            Our Company
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
