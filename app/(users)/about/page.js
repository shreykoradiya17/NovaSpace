import AboutHero from "./components/AboutHero";
import HomeCta from "../sections/HomeCta";
import MissionVission from "./components/MissionVission";
import OurStrory from "./components/OurStrory";
import { OurTeam } from "./components/OurTeam";

const AboutPage = () => {
    return (
        <>
            <AboutHero />
            <OurStrory />
            <MissionVission />
            <OurTeam />
            <HomeCta ctaTitle="Join Us in Building the Future of Space" ctaDescription="NovaSpace collaborates with research institutions, aerospace companies, and technology partners to develop next-generation space systems." ctaButton="Contact Mission Team" />
        </>
    )
}

export default AboutPage;