import { GlareCard } from '@/components/ui/glare-card'
import React from 'react'

const MissionVission = () => {
    return (
        <>
            <div className='antialiased dark:bg-black dark:bg-grid-white/[0.05] overflow-hidden py-[90px] pt-[40px] md:pt-[90px]'>
                <div className='max-w-7xl m-auto px-8 lg:px-0 flex gap-10 items-center flex-col md:flex-row'>
                    <div className='flex flex-col flex-grow order-1 md:order-0'>
                        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px] ">
                            Our Mission
                        </h2>
                        <h3 className="mt-6 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-1xl font-bold text-transparent md:text-2xl lg:text-3xl leading-[1.1] p-[1px] opacity-[0.6]">
                            Building Autonomous Space Infrastructure
                        </h3>
                        <p className=" mt-6 text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
                            Our mission is to develop intelligent autonomous systems that strengthen satellite operations, enable advanced orbital robotics, and support sustainable deep-space exploration.
                            <br />
                            <br />
                            We aim to create reliable space technologies that enhance connectivity, improve mission efficiency, and expand the possibilities of modern orbital infrastructure.
                            {/* <br />
                            <br />
                            Through continuous innovation and engineering excellence, we are building the autonomous platforms that will power the next generation of satellite networks and space missions. */}
                        </p>
                    </div>
                    <div className='w-full lg:w-[400px] md:w-[350px] flex-shrink-0 order-0 md:order-1'>
                        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                            <img
                                className="h-full w-full absolute inset-0 object-cover"
                                src="https://img.freepik.com/premium-photo/satellite-orbiting-earth-with-visible-solar-panels-antennas_1327465-59915.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&semt=ais_hybrid&w=740&q=80"
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
                                src="https://img.freepik.com/premium-photo/space-ship-with-space-ship-top-it_1064589-199950.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&w=740&q=80"
                                alt="Abstract colorful gradient background"
                            />
                        </GlareCard>
                    </div>
                    <div className='flex flex-col flex-grow'>
                        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px]">
                            Our Vision
                        </h2>
                        <h3 className="mt-6 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-1xl font-bold text-transparent md:text-2xl lg:text-3xl leading-[1.1] p-[1px] opacity-[0.6]">
                            Expanding Humanity’s Presence in Space
                        </h3>
                        <p className=" mt-6 text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
                            Our vision is a future where intelligent space infrastructure supports continuous exploration, strengthens global communication, and unlocks new frontiers of scientific research.
                            <br />
                            <br />
                            We imagine autonomous orbital systems working seamlessly to power satellite networks, expand deep-space capabilities, and enable sustainable space operations.
                            {/* <br />
                            <br />
                            By advancing next-generation space technologies, we strive to create an ecosystem where innovation in orbit accelerates discovery, connectivity, and humanity’s expansion beyond Earth. */}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MissionVission