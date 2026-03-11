"use client";

import { useHomeData } from "@/hooks/use-queries";
import CoreTechnologies from "./sections/CoreTechnologies";
import GlobalPartners from "./sections/GlobalPartners";
import Hero from "./sections/Hero";
import HomeCta from "./sections/HomeCta";
import OurMission from "./sections/OurMission";
import TimelineDemo from "./sections/Timeline";

export default function Home() {
  const { data, isLoading } = useHomeData();

  if (isLoading) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <>
      <Hero data={data?.hero} />
      <GlobalPartners />
      <CoreTechnologies data={data?.coreTechnologies} />
      <TimelineDemo />
      <OurMission data={data?.ourMission} />
      <HomeCta data={data?.cta} />
    </>
  );
}
