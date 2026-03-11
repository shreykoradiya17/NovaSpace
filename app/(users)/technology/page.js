"use client";
import React from 'react';
import TechnologyHero from './components/TechnologyHero'
import CoreTechnologies from '../sections/CoreTechnologies'
import TechnologyDetails from './components/TechnologyDetails'
import SystemArchitecture from './components/SystemArchitecture'
import HomeCta from '../sections/HomeCta'
import { useTechnologyData } from '@/hooks/use-queries'

const page = () => {
    const { data, isLoading } = useTechnologyData();

    if (isLoading) {
        return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;
    }

    console.log(data, 'techno')
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

export default page