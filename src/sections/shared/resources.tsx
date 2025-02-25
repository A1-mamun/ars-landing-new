"use client";

import { ResourceCard } from "@/components";
import { resourcesCategories, blogsResourcesData } from "@/data";
import { ICONS } from "@/utils/icons";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const LatestResources = () => {
  const [resources, setResources] = useState<typeof blogsResourcesData | null>(
    blogsResourcesData
  );
  const [activeTab, setActiveTab] = useState(resourcesCategories[0]);

  const filterResources = (category: string) => {
    if (category === "All") {
      blogsResourcesData.length > 4
        ? setResources(blogsResourcesData.slice(0, 4))
        : setResources(blogsResourcesData);
    } else {
      const filteredData = blogsResourcesData.filter(
        (data) => data.category === category
      );

      filteredData.length < 4
        ? setResources(filteredData)
        : setResources(filteredData.slice(0, 4));
    }
    console.log(resources);
  };

  const handleCategoryClick = (category: string) => {
    setActiveTab(category);
    filterResources(category);
  };

  const handleRightButton = () => {
    const currentIndex = resourcesCategories.indexOf(activeTab);
    const nextIndex = currentIndex + 1;
    const nextCategory = resourcesCategories[nextIndex];
    setActiveTab(nextCategory);
    filterResources(nextCategory);
  };

  const handleLeftButton = () => {
    const currentIndex = resourcesCategories.indexOf(activeTab);
    const prevIndex = currentIndex - 1;
    const prevCategory = resourcesCategories[prevIndex];
    setActiveTab(prevCategory);
    filterResources(prevCategory);
  };
  return (
    // <section className="px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 3xl:px-44 pb-10 lg:pb-14 xl:pb-20 bg-ice-blue  ">
    // </section>
    <section className="padding-responsive bg-ice-blue  ">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between mb-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-[#272727] font-medium">
          Latest resources
        </h2>

        <ButtonGroup
          radius="full"
          variant="bordered"
          size="sm"
          className="rounded-full border border-deep-blue-20"
        >
          {resourcesCategories.map((category) => (
            <Button
              key={category}
              className={`${
                activeTab === category && "bg-cyan-blue-30"
              } border-l border-deep-blue-20`}
              onPress={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      {/* latest resources cards medium and large devices view */}
      <div className="hidden md:block h-[355px]">
        <div className="flex items-center md:gap-10 lg:gap-5 xl:gap-10 justify-center h-full">
          <Button
            isDisabled={activeTab === "All"}
            isIconOnly={true}
            className=" disabled:bg-deep-blue-5 bg-white text-cyan-blue-50 hover:text-white font-medium rounded-l-lg border-r-2 border-cyan-blue hover:bg-cyan-blue-30 duration-300"
            onPress={handleLeftButton}
          >
            {ICONS.arrow_left}
          </Button>

          {resources && resources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 lg:gap-5 xl:gap-8 2xl:gap-10 3xl:gap-12 4xl:gap-16">
              {resources.map((resource, idx) => (
                <ResourceCard
                  key={idx}
                  title={resource.title}
                  img={resource.img}
                  category={resource.category}
                  time={resource.time}
                />
              ))}
            </div>
          ) : (
            <div className="relative flex items-center justify-center text-midnight-blue rounded-xl h-full w-full">
              This category is not availbable at the moment.
              <div className="absolute bottom-0 left-1/2 w-1/2 h-[1px] bg-ars-cyan -translate-x-1/2" />
            </div>
          )}

          <Button
            isDisabled={activeTab === "Case Study"}
            isIconOnly
            className=" disabled:bg-deep-blue-5 bg-white text-cyan-blue-50 hover:text-white font-medium rounded-r-lg border-l-2 border-cyan-blue hover:bg-cyan-blue-30 duration-300"
            onPress={handleRightButton}
          >
            {ICONS.arrow_right}
          </Button>
        </div>
      </div>

      {/* latest resources cards small devices view */}
      <div className="md:hidden h-[355px]">
        {resources && resources.length > 0 ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={20}
            slidesPerView={1}
            speed={1000}
            className="mySwiper h-full"
          >
            {resources.map((resource, idx) => (
              <SwiperSlide key={idx}>
                <ResourceCard
                  title={resource.title}
                  img={resource.img}
                  category={resource.category}
                  time={resource.time}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="relative flex items-center justify-center text-midnight-blue rounded-xl h-full w-full text-center">
            This category is not availbable at the moment.
            <div className="absolute bottom-0 left-1/2 w-full h-[1px] bg-ars-cyan -translate-x-1/2" />
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestResources;
