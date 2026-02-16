import { CometCard } from '@/components/ui/comet-card'
import React from 'react'

const CoreTechnologies = () => {
    return (
        <div className='antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] overflow-hidden py-[90px]'>
            <div className="max-w-7xl m-auto flex flex-col items-center justify-center relative px-8 lg:px-0">
                <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px]">
                    Core Technologies
                </h2>
                <p className="mx-auto mt-4 max-w-[90%] md:max-w-2xl text-center text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
                    From autonomous satellites to next-generation propulsion, our technologies are designed to enable reliable, scalable, and intelligent space infrastructure.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 w-full mt-8'>
                    <div className=''>
                        <CometCard>
                            <button
                                type="button"
                                className=" flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-2"
                                aria-label="View invite F7RA"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: "none",
                                    opacity: 1,
                                }}
                            >
                                <div className="mx-2 flex-1">
                                    <div className="relative mt-2 aspect-[3/4] w-full">
                                        <img
                                            loading="lazy"
                                            className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                                            alt="Invite background"
                                            src="https://img.freepik.com/premium-photo/close-up-large-metal-object-building_974546-96377.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&semt=ais_hybrid&w=740&q=80"
                                            style={{
                                                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                                opacity: 1,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                                    <div className="text-xs text-left">Advanced Propulsion Systems</div>
                                </div>
                            </button>
                        </CometCard>
                    </div>
                    <div className=''>
                        <CometCard>
                            <button
                                type="button"
                                className=" flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-2"
                                aria-label="View invite F7RA"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: "none",
                                    opacity: 1,
                                }}
                            >
                                <div className="mx-2 flex-1">
                                    <div className="relative mt-2 aspect-[3/4] w-full">
                                        <img
                                            loading="lazy"
                                            className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                                            alt="Invite background"
                                            src="https://img.freepik.com/premium-photo/cargo-space-craft-earth-planet-dark-background-sci-fi-wallpaper-space-station-orbiting-earth-space-ship-space-art-wallpaper-solar-observatory-elements-this-image-furnished-by-nasa-3d-illustration_150455-17241.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&w=740&q=80"
                                            style={{
                                                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                                opacity: 1,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                                    <div className="text-xs text-left">Intelligent Satellite Networks</div>
                                </div>
                            </button>
                        </CometCard>
                    </div>
                    <div className=''>
                        <CometCard>
                            <button
                                type="button"
                                className=" flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-2"
                                aria-label="View invite F7RA"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: "none",
                                    opacity: 1,
                                }}
                            >
                                <div className="mx-2 flex-1">
                                    <div className="relative mt-2 aspect-[3/4] w-full">
                                        <img
                                            loading="lazy"
                                            className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                                            alt="Invite background"
                                            src="https://img.freepik.com/free-photo/control-table-spacecraft-from-inside_23-2151828221.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&w=740&q=80"
                                            style={{
                                                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                                opacity: 1,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                                    <div className="text-xs text-left">Earth Observation AI</div>
                                </div>
                            </button>
                        </CometCard>
                    </div>
                    <div className=''>
                        <CometCard>
                            <button
                                type="button"
                                className=" flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-2"
                                aria-label="View invite F7RA"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: "none",
                                    opacity: 1,
                                }}
                            >
                                <div className="mx-2 flex-1">
                                    <div className="relative mt-2 aspect-[3/4] w-full">
                                        <img
                                            loading="lazy"
                                            className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                                            alt="Invite background"
                                            src="https://img.freepik.com/premium-photo/space-station-orbiting-blue-planet-3d-illustration_659132-711.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&w=740&q=80"
                                            style={{
                                                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                                opacity: 1,
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                                    <div className="text-xs text-left">Autonomous Orbital Robotics</div>
                                </div>
                            </button>
                        </CometCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoreTechnologies