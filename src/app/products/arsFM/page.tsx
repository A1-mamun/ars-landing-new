import {
  ArsFMHero,
  CoreFunctionality,
  Feature,
  FleetManagement,
  GetInTouch,
  Header,
} from "@/sections";

const ARSFM = () => {
  return (
    <>
      <Header />
      <main>
        <ArsFMHero />
        <CoreFunctionality />
        <FleetManagement />
        <Feature />
        <GetInTouch />
      </main>
    </>
  );
};

export default ARSFM;
