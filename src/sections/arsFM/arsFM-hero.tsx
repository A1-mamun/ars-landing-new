"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { MdPlayArrow } from "react-icons/md";
import { motion } from "framer-motion";

const ArsFMHero = () => {
  return (
    <section
      className="padding-responsive font-dm-sans "
      style={{
        background: `
        linear-gradient(#000000  0%, #00000026 60%, #000000 100%),
        linear-gradient(to right, #A6EFFF99 50%, #22A9E121 70%),linear-gradient(to right, #5F697C 50%, #00000000 70%),#505B66`,
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 pt-5 md:pt-10 lg:pt-12 xl:pt-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-4 md:gap-6 lg:gap-8 xl:gap-10 items-start w-full md:w-2/5"
        >
          <h1 className="text-ars-cyan text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            Enhance Operational Excellence with ARS Fleet Manager
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white">
            By implementing ARS Fleet Manager, businesses can optimize workforce
            efficiency, reduce operational costs, and scale seamlessly to meet
            evolving operational demands. Designed for industrial automation and
            logistics, ARS FM ensures real-time fleet tracking, intelligent
            scheduling, and predictive maintenance—empowering businesses to
            achieve maximum productivity with minimal downtime. Take control of
            your fleet with ARS FM and drive your operations toward a smarter,
            more efficient future.
          </p>
          <Button
            radius="full"
            className="bg-cyan-blue uppercase text-sm text-white font-bold md:px-6 md:py-5 lg:px-7 lg:py-6  2xl:px-8 2xl:py-7"
          >
            Discover More
          </Button>
        </motion.div>
        <div className="relative h-[350px] md:h-[550px] bg-[#151721] rounded-[30px] w-full md:w-3/5">
          <div className="absolute right-6 top-32 flex items-center gap-2">
            <Button
              radius="full"
              isIconOnly
              className="bg-cyan-blue p-3 text-white"
            >
              <MdPlayArrow />
            </Button>
            <p className="text-white text-xs">
              Let&apos;s see how <br /> we did it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArsFMHero;
