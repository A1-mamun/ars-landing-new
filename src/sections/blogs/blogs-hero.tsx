"use client";
import { Button, Image } from "@nextui-org/react";
import { ICONS } from "@/utils/icons";
import { useState } from "react";
import { blogsResourcesData } from "@/data";
const BlogsHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogsResourcesData.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogsResourcesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentData = blogsResourcesData[currentIndex];

  return (
    <section className="padding-responsive">
      <div className="mt-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-medium">
          Resources
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-4 md:mt-6 lg:mt-8">
          <h5 className="max-w-xs text-xl font-medium text-[#0D2426]">
            Ready to join an exciting, fast- growing fintech scaleup? We&pos;ve
            been waiting for you.
          </h5>
          <p className="max-w-sm text-deep-blue">
            We&apos;re an international team working across various business
            areas. Roles with Recharge focus on our Group Business and
            Recharge.com brands. Startselect roles focus on our prepaid gaming
            brand Startselect.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center lg:gap-5 xl:gap-8 mt-12 ">
        <div className="hidden lg:block">
          <Button
            isIconOnly
            isDisabled={currentIndex === 0}
            onPress={handleLeftClick}
            className="disabled:bg-deep-blue-5 bg-white text-cyan-blue-50 hover:text-white font-medium rounded-l-lg border-r-2 border-cyan-blue hover:bg-cyan-blue-30 duration-300"
          >
            {ICONS.arrow_left}
          </Button>
        </div>

        <div className="bg-[#FFFFFF33] p-4 md:p-6 lg:p-8 rounded-3xl ">
          <Image
            src={currentData.img}
            width="100%"
            alt="hero image"
            className="rounded-3xl border-t-4 border-ars-cyan h-[200px] md:h-[350px] lg:h-[450px] xl:h-[500px] w-full"
          />
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-deep-blue mt-5 md:mt-6 mb-3 md:mb-4">
            {currentData.title}
          </h1>
          <div className="flex flex-col lg:flex-row gap-10 justify-between items-end">
            <p className="text-[#1D2227] text-sm md:text-base w-full lg:w-3/4">
              {currentData.description}
            </p>
            <div className="flex gap-10 items-center justify-between w-full lg:w-1/4">
              <p className="text-deep-blue font-medium">
                {currentData.category} <br />
                <span className="text-[#67829E]">{currentData.time}</span>
              </p>
              <Button
                isIconOnly
                radius="full"
                className="bg-ars-cyan-60 text-deep-blue font-medium "
              >
                {ICONS.arrow_right}
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Button
            isIconOnly
            isDisabled={currentIndex === blogsResourcesData.length - 1}
            onPress={handleRightClick}
            className="disabled:bg-deep-blue-5 bg-white text-cyan-blue-50 hover:text-white font-medium rounded-r-lg border-l-2 border-cyan-blue hover:bg-cyan-blue-30 duration-300"
          >
            {ICONS.arrow_right}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;
