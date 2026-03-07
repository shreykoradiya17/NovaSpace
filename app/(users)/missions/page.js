import React from 'react'
import MissionHero from '../sections/MissionHero'
import MissionListing from '../sections/MissionListing'
import TimelineDemo from '../sections/Timeline'
import HomeCta from '../sections/HomeCta'

const page = () => {
    return (
        <>
            <MissionHero />
            <MissionListing />
            <TimelineDemo />
            <HomeCta ctaTitle="Partner With Us on Future Missions" ctaDescription="NovaSpace collaborates with research institutions, aerospace organizations, and technology partners to develop next-generation orbital missions." ctaButton="Contact Mission Team" />
        </>
    )
}

export default page