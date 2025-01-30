import Image from "next/image";

const WarehouseRef = () => {
  return (
    <div
      className="relative isolate w-full min-h-screen lg:min-h-[135vh] flex items-start padding-responsive"
      style={{
        backgroundImage: "url('/warehouse-black-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        src="/warehouse-no-text-no-bg.png"
        alt="Warehouse Picture"
        className="absolute top-0 left-0 w-full h-full object-contain object-[center_90%] xxs:object-[center_80%] xs:object-center -z-10"
      />
      {/* Content Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 lg:gap-20 xl:gap-24 2xl:gap-36 3xl:gap-40 mx-auto text-white">
        {/* Left Column: Title */}
        <div className="flex">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl ">
            Take it to the next level on-site.
          </h1>
        </div>

        {/* Right Column: Description */}
        <div className="flex ">
          <p className="text-sm leading-normal md:text-base md:leading-normal lg:text-lg lg:leading-normal xl:text-xl xl:leading-normal">
            A robot alone is just a tool, but when fully integrated into your
            operations, it becomes a transformative solution. Imagine seamless
            autonomous material flows powering your efficiency, smart Fleet
            Management Control software optimizing every move, and end-to-end
            24/7 support ensuring peak performance around the clock. Unlocking
            new levels of productivity and innovation.
            <br />
            The sky isn&apos;t the limit; it&apos;s just the beginning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarehouseRef;
