"use client";
import React from 'react';
import MissionHero from './components/MissionHero'
import MissionListing from './components/MissionListing'
import TimelineDemo from '../sections/Timeline'
import HomeCta from '../sections/HomeCta'
import { useMissionsData } from '@/hooks/use-queries';

const page = () => {
    const { data, isLoading } = useMissionsData();

    if (isLoading) {
        return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;
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

export default page