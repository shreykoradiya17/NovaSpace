"use client";
import React from 'react';
import { WavyBackground } from '@/components/ui/wavy-background';
import Link from 'next/link';

const HomeCta = ({ data }) => {
    return (
        <WavyBackground className="w-full overflow-hidden mx-auto pb-40 px-4 antialiased flex flex-col items-center">
            <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px]">
                {data?.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[90%]  text-center text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
                {data?.description}
            </p>
            <Link
                href={data?.ctaLink || '/'}
                className="mt-6 px-4 py-2 font-medium border border-neutral-300 text-neutral-100 hover:bg-neutral-100 hover:text-black text-md rounded-full transform transition duration-200 hover:shadow-md block w-fit"
            >
                {data?.button}
            </Link>
        </WavyBackground>
    )
}

export default HomeCta