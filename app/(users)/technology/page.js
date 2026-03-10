import React from 'react'
import TechnologyHero from './components/TechnologyHero'
import CoreTechnologies from '../sections/CoreTechnologies'
import TechnologyDetails from './components/TechnologyDetails'
import SystemArchitecture from './components/SystemArchitecture'
import HomeCta from '../sections/HomeCta'

const page = () => {
    return (
        <>
            <TechnologyHero />
            <CoreTechnologies />
            <TechnologyDetails />

            <div className='w-full bg-black py-[90px]'>
                <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px]">
                    Integrated Orbital Architecture
                </h2>
                <p className="mx-auto mt-4 max-w-[90%] md:max-w-2xl text-center text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
                    Our orbital ecosystem connects satellites, ground infrastructure, and AI systems to enable real-time telemetry, intelligent processing, and reliable mission control.
                </p>
                <SystemArchitecture className='mt-5' />
            </div>

            <HomeCta ctaTitle="Let’s Engineer the Next Orbital Breakthrough" ctaDescription="Work with our engineers to design and deploy advanced systems for modern orbital operations." ctaButton="Get Started" />
        </>
    )
}

export default page