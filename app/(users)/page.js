import CoreTechnologies from "./sections/CoreTechnologies";
import GlobalPartners from "./sections/GlobalPartners";
import Hero from "./sections/Hero";
import HomeCta from "./sections/HomeCta";
import OurMission from "./sections/OurMission";
import TechnologyHero from "./technology/components/TechnologyHero";
import TimelineDemo from "./sections/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <GlobalPartners />
      <CoreTechnologies />
      <TimelineDemo />
      <OurMission />
      <HomeCta ctaTitle="Ready to Build the Next Breakthrough in Space?" ctaDescription="Partner with NovaSpace to develop autonomous orbital systems, satellite intelligence, and next-generation aerospace solutions." ctaButton="Start Collaboration" />
    </>
  );
}
