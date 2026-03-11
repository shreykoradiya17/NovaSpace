import { BackgroundBeams } from '@/components/ui/background-beams'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import Link from 'next/link'
import React from 'react'

const ContactHero = ({ data }) => {
    return (
        <div
            className="h-[40rem] w-full bg-black antialiased relative flex flex-col items-center justify-center">
            <div className="p-4 flex flex-col items-center pt-20 md:pt-20">
                <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl lg:text-7xl leading-[1.1]" dangerouslySetInnerHTML={{ __html: data?.title }}>
                </h1>
                <p className="mx-auto mt-5 max-w-[90%] md:max-w-2xl text-center text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
                    Partner with NovaSpace to develop advanced space technologies, satellite systems, and autonomous orbital platforms.
                </p>
            </div>
            <BackgroundBeams />
        </div>
    )
}

export default ContactHero