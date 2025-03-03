import {
  AutomationHero,
  ClientConsultation,
  GetInTouch,
  Header,
  JoinOurTeamAutomation,
  LatestResources,
  OurBenefits,
  OurSolutions,
} from "@/sections";

const Automation = () => {
  return (
    <>
      <Header />
      <main className="bg-fixed min-h-screen ">
        <div className=" h-full">
          <AutomationHero />
          <div
            className="h-full"
            style={{
              background: `
          linear-gradient(20deg, rgba(5, 144, 200, 0.02) 51.31%, #0D242673 114.45%), 
          linear-gradient(20deg, #D7EFF9 51.31%, #0590C8B3 114.45%)`,
            }}
          >
            <ClientConsultation />
            <OurBenefits />
            <OurSolutions />
          </div>
          <JoinOurTeamAutomation />
          <LatestResources />
          <GetInTouch />
        </div>
      </main>
    </>
  );
};

export default Automation;
