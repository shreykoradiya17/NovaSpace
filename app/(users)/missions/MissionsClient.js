"use client";
import React from 'react';
import MissionHero from './components/MissionHero'
import MissionListing from './components/MissionListing'
import TimelineDemo from '../sections/Timeline'
import HomeCta from '../sections/HomeCta'
import { useMissionsData } from '@/hooks/use-queries';
import SpaceLoader from '@/components/SpaceLoader';

const MissionsClient = () => {
    const { data, isLoading } = useMissionsData();

    if (isLoading) {
        return <SpaceLoader />;
    }
    return (
        <>
            <MissionHero data={data?.hero} />
            <MissionListing data={data?.missions} />
            <TimelineDemo />
            <HomeCta data={data?.cta} />
        </>
    )
}

export default MissionsClient;
