const AutomationHero = () => {
  return (
    <section className="relative  h-[300px] md:h-[500px] lg:h-screen ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0"
        src="/videos/automation-hero.mp4"
        height={"100%"}
        width={"100%"}
        autoPlay
        loop
        muted
      />
      <div
        className="absolute top-0 left-0 w-full h-full z-10 text-white text-center flex justify-center items-center text-xl md:text-4xl lg:text-5xl xl:text-6xl font-medium"
        style={{
          background: `linear-gradient(180deg, rgba(5, 144, 200, 0.40) 0%, rgba(1, 37, 51, 0.10) 32.5%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)`,
        }}
      >
        <h1>Keep it simple!</h1>
      </div>
    </section>
  );
};

export default AutomationHero;
