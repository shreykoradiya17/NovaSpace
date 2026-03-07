import AboutHero from "../sections/AboutHero";
import HomeCta from "../sections/HomeCta";
import MissionVission from "../sections/MissionVission";
import OurStrory from "../sections/OurStrory";
import { OurTeam } from "../sections/OurTeam";

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