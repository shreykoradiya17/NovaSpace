"use client";
import React from 'react';
import TechnologyHero from './components/TechnologyHero'
import CoreTechnologies from '../sections/CoreTechnologies'
import TechnologyDetails from './components/TechnologyDetails'
import SystemArchitecture from './components/SystemArchitecture'
import HomeCta from '../sections/HomeCta'
import { useTechnologyData } from '@/hooks/use-queries'
import SpaceLoader from '@/components/SpaceLoader';

const TechnologyClient = () => {
    const { data, isLoading } = useTechnologyData();

    if (isLoading) {
        return <SpaceLoader />;
    }

    return (
        <>
            <TechnologyHero data={data?.hero} />
            <CoreTechnologies data={data?.coreTechnologies} />
            <TechnologyDetails />
            <SystemArchitecture className='mt-5' />
            <HomeCta data={data?.cta} />
        </>
    )
}

export default TechnologyClient;
