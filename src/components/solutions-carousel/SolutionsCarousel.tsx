/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { ourSolutionsCardData } from "@/data";
import { Button } from "@nextui-org/react";

const SolutionsCarousel = () => {
  let swiperInstance: any = null;
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        750: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1536: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={1500}
      onSwiper={(swiper) => (swiperInstance = swiper)}
      onMouseEnter={() => swiperInstance?.autoplay.stop()}
      onMouseLeave={() => swiperInstance?.autoplay.start()}
      className="mySwiper"
    >
      {ourSolutionsCardData.map((data, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full sm:max-w-xs md:max-w-sm xl:max-w-md rounded-xl h-[400px] xxs:h-[380px] xs:h-[320px] sm:h-[400px] md:h-[300px] md:hover:h-[520px] lg:h-[320px] lg:hover:h-[560px] xl:h-[300px] xl:hover:h-[530px]  2xl:h-[270px] 2xl:hover:h-[480px] hover:cursor-pointer duration-200 group px-5 py-6 xs:px-7 sm:px-5 md:px-6 md:py-10 lg:px-5 lg:py-6 xl:px-6 3xl:px-8 3xl:py-8 "
            onMouseEnter={() => swiperInstance?.autoplay.stop()}
            onMouseLeave={() => swiperInstance?.autoplay.start()}
            style={{
              background:
                "linear-gradient(131deg, #FFF 61.3%, #22A9E1 303.02%)",
            }}
          >
            <h2 className="text-ars-cyan text-2xl md:text-3xl xl:text-4xl font-semibold mb-2">
              {data.title}
            </h2>
            <p className="text-midnight-blue text-xs md:text-sm xl:text-base">
              {data.description}
            </p>

            <div className="md:hidden md:group-hover:block">
              <div className="flex flex-row flex-wrap gap-3 mt-5 ">
                {data.buttonData.map((button, index) => (
                  <Button
                    radius="full"
                    size="sm"
                    key={index}
                    className="bg-ars-cyan-60 text-midnight-blue text-xs md:text-sm font-medium lg:px-4 lg:py-5  "
                  >
                    {button}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SolutionsCarousel;
