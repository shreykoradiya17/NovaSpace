import { GlareCard } from '@/components/ui/glare-card'
import React from 'react'

const MissionVission = ({ missionData, visionData }) => {
    return (
        <>
            <div className='antialiased dark:bg-black dark:bg-grid-white/[0.05] overflow-hidden py-[90px] pt-[40px] md:pt-[90px]'>
                <div className='max-w-7xl m-auto px-8 lg:px-0 flex gap-10 items-center flex-col md:flex-row'>
                    <div className='flex flex-col flex-grow order-1 md:order-0'>
                        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px] ">
                            {missionData?.title}
                        </h2>
                        <h3 className="mt-6 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-1xl font-bold text-transparent md:text-2xl lg:text-3xl leading-[1.1] p-[1px] opacity-[0.6]">
                            {missionData?.subtitle}
                        </h3>
                        <p className=" mt-6 text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]" dangerouslySetInnerHTML={{ __html: missionData?.description }}>
                        </p>
                    </div>
                    <div className='w-full lg:w-[400px] md:w-[350px] flex-shrink-0 order-0 md:order-1'>
                        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                            <img
                                className="h-full w-full absolute inset-0 object-cover"
                                src={missionData?.image}
                                alt="Abstract colorful gradient background"
                            />
                        </GlareCard>
                    </div>
                </div>
            </div>
            <div className='antialiased dark:bg-black dark:bg-grid-white/[0.05] overflow-hidden py-[90px] pt-[40px] md:pt-[90px]'>
                <div className='max-w-7xl m-auto px-8 lg:px-0 flex gap-10 items-center flex-col md:flex-row'>
                    <div className='w-full lg:w-[400px] md:w-[350px] flex-shrink-0'>
                        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                            <img
                                className="h-full w-full absolute inset-0 object-cover"
                                src={visionData?.image}
                                alt="Abstract colorful gradient background"
                            />
                        </GlareCard>
                    </div>
                    <div className='flex flex-col flex-grow'>
                        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px]">
                            {visionData?.title}
                        </h2>
                        <h3 className="mt-6 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-1xl font-bold text-transparent md:text-2xl lg:text-3xl leading-[1.1] p-[1px] opacity-[0.6]">
                            {visionData?.subtitle}
                        </h3>
                        <p className=" mt-6 text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]" dangerouslySetInnerHTML={{ __html: visionData?.description }}>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MissionVission