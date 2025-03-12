"use client";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <section className="padding-responsive font-dm-sans bg-ice-blue">
      <div className="space-y-2 lg:space-y-3 2xl:space-y-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-2 lg:space-y-3 2xl:space-y-4"
        >
          <p className="uppercase font-semibold text-xs md:text-sm 2xl:text-base">
            Core Functionality
          </p>
          <div className="flex justify-between">
            <h1 className="text-ars-cyan text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold w-full sm:w-4/5 md:w-3/4 2xl:w-3/5">
              Boost efficiency and safety with ARS&apos; innovative automation
              solutions
            </h1>
            <div className="hidden md:inline-block">
              <Button
                radius="full"
                className=" bg-cyan-blue uppercase text-sm text-white font-bold md:px-6 md:py-5 lg:px-7 lg:py-6  2xl:px-8 2xl:py-7"
              >
                Discover More
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, x: -100, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-medium w-full sm:w-4/5 md:w-3/4 2xl:w-3/5"
        >
          Enhance efficiency, reduce costs, and improve safety with ARS
          automation.
        </motion.h3>
      </div>
      <div className="w-full bg-[#151721] rounded-3xl h-[450px] mt-7 md:mt-8 lg:mt-10 2xl:mt-14"></div>
    </section>
  );
};

export default Feature;
