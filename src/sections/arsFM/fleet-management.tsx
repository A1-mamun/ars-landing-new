import { FleetManagementCard, FleetManagementCardReverse } from "@/components";
import { fleetManagementData } from "@/data";

const FleetManagement = () => {
  return (
    <section className="px-3 xxs:px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-36 3xl:px-44 pb-10 lg:pb-14 xl:pb-20 font-dm-sans bg-ice-blue">
      <p className="uppercase font-semibold text-xs md:text-sm 2xl:text-base mb-2 lg:mb-3">
        FLEET MANAGEMNET
      </p>
      <div className="space-y-10 lg:space-y-14 2xl:space-y-20">
        {fleetManagementData.map((data, index) =>
          index % 2 === 0 ? (
            <FleetManagementCard key={index} />
          ) : (
            <FleetManagementCardReverse key={index} />
          )
        )}
      </div>
    </section>
  );
};

export default FleetManagement;
