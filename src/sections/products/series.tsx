"use client";
import { Image } from "@nextui-org/react";
import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { productsSliderData } from "@/data";

import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const Series = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const chartOptions = {
    pieHole: 0.7,
    pieSliceText: "none",
    backgroundColor: "transparent",
    legend: "none",
    tooltip: { trigger: "none" },
    colors: productsSliderData[activeIndex].colors,
  };
  return (
    <section className="bg-gradient-to-tr from-white to-ars-cyan ">
      <div className="bg-gradient-to-tr from-ice-blue to-[#FFFFFF33] h-full padding-responsive ">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          {productsSliderData.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center gap-0 md:mt-5 lg:mt-0 xl:-mt-14  ">
                <div className="">
                  <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl text-midnight-blue text-end">
                    {product.title1}
                  </h3>

                  <Image
                    src={product.img1}
                    alt={product.title1}
                    className="w-32 md:w-36 lg:w-44 "
                  />
                </div>
                <div className="relative max-w-md flex items-center justify-center ">
                  <div className="absolute flex items-center justify-center w-full h-full">
                    <h2 className=" text-[10px] md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-midnight-blue text-center">
                      Industrial AMR <br /> Series
                    </h2>
                  </div>

                  <Chart
                    chartType="PieChart"
                    data={product.chartData}
                    options={chartOptions}
                    className="w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] "
                  />
                </div>
                <div className="">
                  <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl text-midnight-blue">
                    {product.title2}
                  </h3>
                  <Image
                    src={product.img2}
                    alt={product.title2}
                    className="w-32 md:w-36 lg:w-44 "
                  />
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-midnight-blue text-center lg:-mt-10 xl:-mt-14">
                {product.title3}
              </h1>
              <div className="flex justify-center ">
                <Image
                  src={product.img3}
                  alt={product.title3}
                  className="w-96 "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Series;
