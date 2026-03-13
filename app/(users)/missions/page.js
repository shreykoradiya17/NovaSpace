import MissionsClient from "./MissionsClient";

export const metadata = {
    title: "Our Missions",
    description: "Explore NovaSpace's past, current, and future missions. From orbital launches to deep-space exploration, see how we're pushing boundaries.",
    openGraph: {
        title: "NovaSpace Missions | Orbital Logistics & Launch",
        description: "Detailed overview of NovaSpace's mission portfolio and aerospace engineering milestones.",
    },
};

const MissionsPage = () => {
    return <MissionsClient />;
};

export default MissionsPage;