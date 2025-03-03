import Image from "next/image";
import Logo from "@/assets/images/ARS Redesign.svg";
import { SolutionsCarousel } from "@/components";

const OurSolutions = () => {
  return (
    <section className="px-3 xxs:px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 3xl:px-44 pb-10 lg:pb-14 xl:pb-20">
      <div className="bg-midnight-blue px-4 py-6 md:pt-0 md:px-8 2xl:px-12 3xl:px-16 rounded-2xl md:rounded-[32px] md:h-[720px] lg:h-[800px] 2xl:h-[760px] ">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-brand-white text-xl md:text-3xl lg:text-4xl xl:text-5xl font-medium ">
            Revolutionising Automation, <br />
            One Innovation at a Time
          </h1>
          <Image
            src={Logo}
            alt="logo"
            className="hidden xs:block w-20 h-20 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44"
          ></Image>
        </div>
        <div className="mt-2 md:-mt-7 lg:-mt-7 xl:-mt-6">
          <p className="text-cyan-blue md:text-[22px] lg:text-2xl font-medium">
            Explore Our Solutions
          </p>
        </div>

        <div className="mt-5 md:mt-8 lg:mt-10 xl:mt-11">
          <SolutionsCarousel />
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
