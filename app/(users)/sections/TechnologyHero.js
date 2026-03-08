"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import React from "react";


const TechnologyHero = () => {
    return (
        <div
            className="h-[40rem] w-full bg-black antialiased relative flex flex-col items-center justify-center">
            <div className="p-4 flex flex-col items-center pt-20 md:pt-20">
                <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl lg:text-7xl leading-[1.1]">
                    Advanced Autonomous<br />Space Systems
                </h1>
                <p className="mx-auto mt-5 max-w-[90%] md:max-w-2xl text-center text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
                    NovaSpace develops high-performance propulsion, satellite intelligence, and robotic orbital platforms designed to operate reliably in complex space environments.
                </p>
                <div className="mt-6">
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <Link href="/missions">Explore Missions</Link>
                    </HoverBorderGradient>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    )
}

export default TechnologyHero


