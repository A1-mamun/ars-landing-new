"use client";
import { CoreFunctionalityCard } from "@/components";
import { coreFunctionalityData } from "@/data";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const CoreFunctionality = () => {
  return (
    <section className="padding-responsive font-dm-sans bg-ice-blue">
      <div className="space-y-2 lg:space-y-3 2xl:space-y-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-2 lg:space-y-3 2xl:space-y-4"
        >
          <p className="uppercase font-semibold text-xs md:text-sm 2xl:text-base">
            Feature
          </p>
          <div className="flex justify-between">
            <h1 className="text-ars-cyan text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold w-full sm:w-4/5 md:w-3/4 2xl:w-3/5">
              Explore more features of our fleet management platform
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
          Get total visibility and control in one place.
        </motion.h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-5 xl:gap-14 2xl:gap-16 mt-7 md:mt-8 lg:mt-10 2xl:mt-14 border-b border-black pb-10 lg:pb-14 xl:pb-20"
      >
        {coreFunctionalityData.map((data, index) => (
          <CoreFunctionalityCard
            key={index}
            title={data.title}
            description={data.description}
          ></CoreFunctionalityCard>
        ))}
      </motion.div>
    </section>
  );
};

export default CoreFunctionality;
