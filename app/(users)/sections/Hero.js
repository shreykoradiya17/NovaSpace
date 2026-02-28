import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import React from 'react'

const Hero = () => {
    return (
        <div className="relative flex h-[30rem] md:h-[40rem] w-full overflow-hidden  bg-black antialiased md:items-center md:justify-center">
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
                )}
            />

            <Spotlight
                className="-top-0 left-10 md:-top-20 lg:left-60"
                fill="white"
            />
            <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-20 flex flex-col items-center gap-2 justify-center">
                <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl lg:text-7xl leading-[1.1]">
                    Building Next-Gen<br /> Space Systems.
                </h1>
                <p className="mx-auto mt-4 max-w-[90%] md:max-w-2xl text-center text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
                    NovaSpace develops advanced propulsion, AI-powered satellites, and autonomous orbital systems designed to power the next era of space exploration.
                </p>

                <div className="mt-6">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <span>View Missions</span>
                    </HoverBorderGradient>
                </div>
            </div>
        </div>
    )
}

export default Hero