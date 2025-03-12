import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

const CoreFunctionalityCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card className="bg-[#151721] rounded-3xl p-4 lg:p-4 2xl:px-11 2xl:py-16 hover:bg-[#030D2D] group duration-200">
      <CardBody className="">
        <div className="rounded-full bg-[#030D2D] group-hover:bg-[#151721] p-3 duration-200 w-fit mb-4 2xl:mb-5">
          <Image width={30} height={30} src="/cpu.svg" alt="cpu image" />
        </div>
        <div className="space-y-3 2xl:space-y-4">
          <h3 className="text-white text-lg 2xl:text-xl font-semibold">
            {title}
          </h3>
          <p className="text-[#D8D8D8] text-[16px] 2xl:text-[18px]">
            {description}
          </p>
        </div>
      </CardBody>
      <CardFooter>
        <Link
          href="/solutions"
          className="uppercase text-ars-cyan lg:text-sm 2xl:text-base font-semibold"
        >
          learn more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CoreFunctionalityCard;
