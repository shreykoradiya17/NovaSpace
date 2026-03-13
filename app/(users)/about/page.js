import AboutClient from "./AboutClient";

export const metadata = {
    title: "About Us",
    description: "Learn more about NovaSpace's mission, vision, and the team dedicated to pioneering the next generation of space exploration.",
    openGraph: {
        title: "About NovaSpace | Our Story & Vision",
        description: "Discover the journey and the people behind NovaSpace's revolutionary space technology.",
    },
};

const AboutPage = () => {
    return <AboutClient />;
};

export default AboutPage;