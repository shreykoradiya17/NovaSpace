"use client";
import AboutHero from "./components/AboutHero";
import HomeCta from "../sections/HomeCta";
import MissionVission from "./components/MissionVission";
import OurStrory from "./components/OurStrory";
import { OurTeam } from "./components/OurTeam";
import { useAboutData } from "@/hooks/use-queries";
import SpaceLoader from "@/components/SpaceLoader";

const AboutClient = () => {
    const { data, isLoading } = useAboutData();

    if (isLoading) {
        return <SpaceLoader />;
    }
    return (
        <>
            <AboutHero data={data?.hero} />
            <OurStrory data={data?.story} />
            <MissionVission missionData={data?.mission} visionData={data?.vision} />
            <OurTeam />
            <HomeCta data={data?.cta} />
        </>
    )
}

export default AboutClient;
