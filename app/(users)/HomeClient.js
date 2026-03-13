"use client";

import { useHomeData } from "@/hooks/use-queries";
import CoreTechnologies from "./sections/CoreTechnologies";
import GlobalPartners from "./sections/GlobalPartners";
import Hero from "./sections/Hero";
import HomeCta from "./sections/HomeCta";
import OurMission from "./sections/OurMission";
import TimelineDemo from "./sections/Timeline";
import SpaceLoader from "@/components/SpaceLoader";

export default function HomeClient() {
    const { data, isLoading } = useHomeData();

    if (isLoading) {
        return <SpaceLoader />;
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
