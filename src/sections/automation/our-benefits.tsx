"use client";

import { useEffect, useState } from "react";
import { ourBenefitsData, ourBenefitsCardData } from "@/data";
import { motion } from "framer-motion";
const OurBenefits = () => {
  const [benefitTextIndex, setBenefitTextIndex] = useState(0);

  const nextTextIndex = () => {
    setBenefitTextIndex(
      (prevIndex) => (prevIndex + 1) % ourBenefitsData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTextIndex();
    }, 3000);

    return () => clearInterval(interval);
  }, [benefitTextIndex]);

  return (
    <section className="px-3 xxs:px-5 md:px-16 lg:px-24 xl:px-32 2xl:px-48 3xl:px-60 pb-10 lg:pb-14 xl:pb-16 2xl:pb-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
        Our Benefits
      </h2>
      <div
        className="flex flex-col xl:flex-row gap-7 md:gap-8 lg:gap-10 xl:gap-4 2xl:gap-5 items-center justify-between xs:px-4 sm:px-6 md:px-0 xl:px-5 2xl:px-7 3xl:px-10
      py-5 md;py-6 w-full"
      >
        <div
          onClick={nextTextIndex}
          className=" bg-ars-cyan rounded-3xl w-full xl:max-w-[235px] 2xl:max-w-[250px] h-44 xxs:h-40 xs:h-36 sm:h-28 md:h-32 lg:h-36 xl:h-[360px] px-6 py-5 md:px-8 md:py-6 xl:px-6 xl:py-6 cursor-pointer "
        >
          <motion.p
            key={benefitTextIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="text-brand-white text-lg md:text-xl lg:text-2xl xl:text-[22px] 2xl:text-2xl font-semibold"
          >
            {ourBenefitsData[benefitTextIndex]}
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xxs:gap-4 xs:gap-5 sm:gap-10 md:gap-5 xl:gap-[14px] 2xl:gap-7 3xl:gap-5 xl:justify-items-end col-span-4 flex-1">
          {ourBenefitsCardData.map((data, index) => (
            <div
              key={index}
              className="max-w-[200px] 3xl:max-w-[220px] h-72 xxs:h-[272px] md:h-80 rounded-2xl bg-[#FFFFFF14] hover:bg-[#FFFFFF3A] hover:cursor-pointer duration-200 px-3 xs:px-4 md:px-3  py-6 lg:px-5 lg:py-10 xl:px-4 xl:py-9 3xl:px-6 3xl:py-12"
            >
              <h4 className="text-xl lg:text-2xl xl:text-[22px] 2xl:text-2xl text-cyan-blue border-b border-ars-cyan pb-4">
                {data.title}
              </h4>
              <p className="text-xs text-brand-black pt-4">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;
