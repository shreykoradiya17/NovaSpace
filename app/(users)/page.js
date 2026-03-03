import CoreTechnologies from "./sections/CoreTechnologies";
import GlobalPartners from "./sections/GlobalPartners";
import Hero from "./sections/Hero";
import HomeCta from "./sections/HomeCta";
import OurMission from "./sections/OurMission";
import TechnologyHero from "./sections/TechnologyHero";
import TimelineDemo from "./sections/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <GlobalPartners />
      <CoreTechnologies />
      <TimelineDemo />
      <OurMission />
      <HomeCta />
    </>
  );
}
