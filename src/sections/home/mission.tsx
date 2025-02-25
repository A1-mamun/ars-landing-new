"use client";

import { ICONS } from "@/utils/icons";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const OurMission = () => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center min-h-[300px] h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-left-bottom z-0"
        src="/videos/home-mission-cropped.mp4"
        height={"100%"}
        width={"100%"}
        autoPlay
        loop
        muted
      />
      <div
        className="absolute top-0 left-0 w-full h-full z-10 text-white"
        style={{
          background: `linear-gradient(9deg, rgba(0, 0, 0, 0.00) 10.28%, rgba(0, 0, 0, 0.53) 85.02%, rgba(0, 0, 0, 0.67) 125.34%, #000 172.89%), linear-gradient(280deg, rgba(0, 0, 0, 0.00) 14.76%, rgba(0, 0, 0, 0.25) 75.1%, rgba(0, 0, 0, 0.67) 107.65%, #000 146.04%), linear-gradient(180deg, #0590C899 5%, rgba(130, 130, 126, 0.00) 100%)`,
        }}
      >
        <div className="h-full bg-gradient-to-tl from-[#FFFFFF00] to-[#000000CC] padding-responsive flex flex-col justify-center gap-1 md:gap-3 lg:gap-7">
          <h5 className="text-sm md:text-xl lg:text-2xl">Our Mission</h5>
          <h2 className="text-lg md:text-3xl lg:text-4xl xl:text-5xl font-medium">
            Empowering Seamless Transition to Full Automation
          </h2>
          <p className="w-full md:w-2/3 lg:w-1/2 text-xs leading-normal md:text-sm md:leading-normal lg:text-base lg:leading-normal xl:text-lg xl:leading-normal mt-2 md:mt-4 lg:mt-5">
            We aim to help companies acclimatize with the rapidly changing
            demands of todays world with our Autonomous Mobile Robots (AMR)
            accompanied by our no-code automation software to achieve a smooth
            transition to fully automated facilities. Our solutions are designed
            to propel you forward ahead of the competition.
          </p>
          <div className="flex gap-2 items-center mt-4 md:mt-6 lg:mt-8">
            <p className="text-sm md:text-base font-semibold">Learn About Us</p>
            <Button
              as={Link}
              href="/company"
              isIconOnly
              radius="full"
              className=" bg-ars-cyan-60 text-xs md:text-sm text-white font-medium "
            >
              {ICONS.arrow_right}
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="bg-gradient-to-t from-ice-blue via-[#0590C866] to-ars-cyan-60 h-full text-white">
      </div> */}
    </section>
  );
};

export default OurMission;
