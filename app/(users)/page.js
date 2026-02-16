import CoreTechnologies from "./sections/CoreTechnologies";
import GlobalPartners from "./sections/GlobalPartners";
import Hero from "./sections/Hero";
import OurMission from "./sections/OurMission";
import TimelineDemo from "./sections/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <GlobalPartners />
      <CoreTechnologies />
      <TimelineDemo />
      <OurMission />
    </>
  );
}
