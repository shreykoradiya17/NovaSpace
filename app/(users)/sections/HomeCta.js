"use client";
import React from 'react';
import { WavyBackground } from '@/components/ui/wavy-background';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

const HomeCta = () => {
    return (
        <WavyBackground className="w-full overflow-hidden mx-auto pb-40 px-4">
            <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px]">
                Ready to Build the Next Breakthrough in Space?
            </h2>
            <p className="mx-auto mt-4 max-w-[90%]  text-center text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
                Partner with NovaSpace to develop autonomous orbital systems, satellite intelligence, and next-generation aerospace solutions.
            </p>
            <button className="mt-6 relative left-[50%] translate-x-[-50%] px-4 py-2 font-medium border border-neutral-300  text-neutral-100 hover:bg-neutral-100 hover:text-black text-md rounded-full hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                Start Collaboration
            </button>
        </WavyBackground>
    )
}

export default HomeCta