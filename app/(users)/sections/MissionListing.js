import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { GlareCard } from '@/components/ui/glare-card'
import React from 'react'

const MissionListing = () => {
    return (
        <div className='antialiased dark:bg-black dark:bg-grid-white/[0.05] overflow-hidden py-[90px]'>
            <div className='max-w-7xl m-auto px-8 lg:px-0'>
                <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px]">
                    Real Orbital Impact
                </h2>
                <p className="mx-auto mt-4 max-w-[90%] md:max-w-2xl text-center text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
                    Our satellite deployments, autonomous orbital programs, and deep-space initiatives power next-generation space infrastructure across the globe and beyond.
                </p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-8'>
                    <AnimatedTooltip type="Earth Observation" year="2020" status="Completed">
                        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                            <img
                                className="h-full w-full absolute inset-0 object-cover"
                                src="https://img.freepik.com/premium-photo/satellite-wallpaper_665280-55784.jpg?uid=R39373662&ga=GA1.1.1161016753.1764785010&semt=ais_related_payload_trends&w=740&q=80"
                                alt="ORION-1 Satellite"
                            />
                            <p className="font-bold text-white text-lg z-10">ORION-1</p>
                            <p className="font-normal text-base text-neutral-200 mt-4 z-10">
                                First AI-assisted orbital satellite providing climate monitoring and terrain analysis.
                            </p>
                        </GlareCard>
                    </AnimatedTooltip>

                    <AnimatedTooltip type="Satellite Network" year="2021" status="Active">
                        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                            <img
                                className="h-full w-full absolute inset-0 object-cover"
                                src="https://img.freepik.com/premium-photo/satellite-with-black-background-word-satellite-left_981168-7900.jpg?uid=R39373662&ga=GA1.1.1161016753.1764785010&semt=ais_related_payload_trends&w=740&q=80"
                                alt="POLARIS NET Satellite"
                            />
                            <p className="font-bold text-white text-lg z-10">POLARIS NET</p>
                            <p className="font-normal text-base text-neutral-200 mt-4 z-10">
                                Satellite communication network delivering autonomous positioning and telemetry optimization.
                            </p>
                        </GlareCard>
                    </AnimatedTooltip>

                    <AnimatedTooltip type="Propulsion Test" year="2022" status="Completed">
                        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                            <img
                                className="h-full w-full absolute inset-0 object-cover"
                                src="https://img.freepik.com/premium-photo/satellite-white-black_1028093-6582.jpg?uid=R39373662&ga=GA1.1.1161016753.1764785010&semt=ais_related_payload_trends&w=740&q=80"
                                alt="HELIOS PROP-X Satellite"
                            />
                            <p className="font-bold text-white text-lg z-10">HELIOS PROP-X</p>
                            <p className="font-normal text-base text-neutral-200 mt-4 z-10">
                                Experimental propulsion validation mission for long-duration deep-orbit satellites.
                            </p>
                        </GlareCard>
                    </AnimatedTooltip>

                    <AnimatedTooltip type="Environmental Intelligence" year="2023" status="Active">
                        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                            <img
                                className="h-full w-full absolute inset-0 object-cover"
                                src="https://img.freepik.com/free-photo/3d-render-global-technology-network-communications-background_1048-13255.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&w=740&q=80"
                                alt="AURORA SCAN System"
                            />
                            <p className="font-bold text-white text-lg z-10">AURORA SCAN</p>
                            <p className="font-normal text-base text-neutral-200 mt-4 z-10">
                                Real-time Earth observation system supporting climate monitoring and disaster detection.
                            </p>
                        </GlareCard>
                    </AnimatedTooltip>

                    <AnimatedTooltip type="Robotic Operations" year="2024" status="Active">
                        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                            <img
                                className="h-full w-full absolute inset-0 object-cover"
                                src="https://img.freepik.com/premium-photo/space-ship-is-shown-this-image_266644-3200.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&w=740&q=80"
                                alt="ORBITAL SERVE-1 Platform"
                            />
                            <p className="font-bold text-white text-lg z-10">ORBITAL SERVE-1</p>
                            <p className="font-normal text-base text-neutral-200 mt-4 z-10">
                                Autonomous robotic platform enabling satellite servicing and orbital maintenance.
                            </p>
                        </GlareCard>
                    </AnimatedTooltip>

                    <AnimatedTooltip type="Lunar Infrastructure" year="2025" status="In Progress">
                        <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                            <img
                                className="h-full w-full absolute inset-0 object-cover"
                                src="https://img.freepik.com/premium-photo/robotic-lander-deploying-scientific-instruments-moons-surface_1327465-64082.jpg?uid=R39373662&ga=GA1.1.1161016753.1764785010&semt=ais_related_payload_trends&w=740&q=80"
                                alt="LUNA-GRID Lander"
                            />
                            <p className="font-bold text-white text-lg z-10">LUNA-GRID</p>
                            <p className="font-normal text-base text-neutral-200 mt-4 z-10">
                                Modular lunar communication and mapping satellite supporting surface exploration.
                            </p>
                        </GlareCard>
                    </AnimatedTooltip>


                </div>
            </div>
        </div>
    )
}

export default MissionListing