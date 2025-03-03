import { Button } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import joinTeamImage from "@/../../public/team-picture.png";
import arsBgImage from "@/../../public/ars-background.svg";

const JoinOurTeam = () => {
  return (
    <section className="flex flex-col items-center gap-y-4 bg-ice-blue padding-x pb-2 sm:pb-4 md:px-24 2xl:px-[12%] 3xl:px-[20%] 4xl:px-[25%]">
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl text-center text-ars-cyan font-semibold"
      >
        Unlock Efficiency with Automation
      </h1>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-center max-w-[425px] sm:max-w-[775px] lg:max-w-[920px] leading-5 sm:leading-6 lg:leading-7">
      Struggling with bottlenecks in your workflow? Discover how robotic automation can cut costs, boost productivity, and eliminate manual errors—customized for your industry. Let&apos;s explore the possibilities together. No commitment, just expert insights.
      </p>
        <Button
          as={Link}
          href="/careers"
          radius="full"
          size="lg"
          className="bg-cyan-blue-50 text-sm text-white font-semibold w-fit px-8"
        >
         Get Free Consultation
        </Button>
      <div
        className="pt-[8.5%] mt-10"
        style={{
          backgroundImage: `url(${arsBgImage.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-ice-blue to-transparent to-15% z-10" />
          <Image src={joinTeamImage} alt="Team Picture" className="w-10/12" />
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
