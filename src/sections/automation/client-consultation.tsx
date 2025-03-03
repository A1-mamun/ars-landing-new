"use client";
import { Button } from "@nextui-org/react";
import { clientConsultationData } from "@/data";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ClientConsultation = () => {
  const [textIndex, setTextIndex] = useState(0);
  const text = clientConsultationData[textIndex];
  const nextTextIndex = () => {
    setTextIndex(
      (prevIndex) => (prevIndex + 1) % clientConsultationData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTextIndex();
    }, 4000);

    return () => clearInterval(interval);
  }, [textIndex]);

  // Container variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.13 }, // Delay between letters
    },
    exit: { opacity: 0, transition: { duration: 0.5 } }, // Smooth exit animation
  };

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 40 }, // Start from bottom
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="px-3 xxs:px-5 md:px-16 lg:px-24 xl:px-32 2xl:px-48 3xl:px-60 py-10 lg:py-14 xl:py-16 2xl:py-20">
      <div className="bg-midnight-blue px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 3xl:px-20 py-10 md:py-12 lg:py-16 xl:py-20 rounded-[32px] ">
        <h1 className="text-[28px] xxs:text-[32px] md:text-[44px] lg:text-[56px] xl:text-[68px] 2xl:text-[80px] font-semibold md:font-bold text-white">
          Let Us Automate <br /> Your{" "}
          <span className="text-ars-cyan inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex} // Key change triggers re-render
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="inline-flex"
              >
                {text.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="text-brand-white text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] flex flex-col gap-3 md:gap-4 lg:gap-5 mt-2 w-full md:w-3/5 lg:w-[70%] leading-4 md:leading-5 lg:leading-6 xl:leading-7">
            <p>
              Transform your manufacturing facility into a state-of-the-art
              smart factory with our comprehensive industrial automation
              solutions. We integrate cutting-edge technologies to streamline
              production, enhance efficiency, and drive your facility towards
              Industry 4.0 standards.
            </p>
            <p>
              Whether you&apos;re upgrading an existing facility or building a
              new smart factory, our automation experts design scalable
              solutions that optimize your manufacturing processes. Experience
              increased productivity, improved quality control, reduced
              operational costs, and enhanced workplace safety through our
              integrated automation systems.
            </p>
          </div>

          <Button
            radius="full"
            size="lg"
            className="text-ars-cyan px-8 bg-[#FFFFFFCC] text-sm font-semibold md:-mb-3 lg:-mb-5 w-fit"
          >
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientConsultation;
