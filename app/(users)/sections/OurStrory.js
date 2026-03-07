import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { GlareCard } from '@/components/ui/glare-card'
import React from 'react'

const OurStrory = () => {
    return (
        <div className='antialiased dark:bg-black dark:bg-grid-white/[0.05] overflow-hidden py-[90px] pt-[40px] md:pt-[90px]'>
            <div className='max-w-7xl m-auto px-8 lg:px-0 flex gap-10 items-center flex-col md:flex-row'>
                <div className='w-full lg:w-[400px] md:w-[350px] flex-shrink-0'>
                    <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                        <img
                            className="h-full w-full absolute inset-0 object-cover"
                            src="https://img.freepik.com/premium-photo/rocket-engine-being-refueled-before-scheduled-launch_1327465-57898.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&semt=ais_hybrid&w=740&q=80"
                            alt="Abstract colorful gradient background"
                        />
                    </GlareCard>
                </div>
                <div className='flex flex-col flex-grow'>
                    <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px]">
                        Our Story
                    </h2>
                    <h3 className="mt-6 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-1xl font-bold text-transparent md:text-2xl lg:text-3xl leading-[1.1] p-[1px] opacity-[0.6]">
                        Engineering the Future of Space
                    </h3>
                    <p className=" mt-6 text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
                        NovaSpace was founded to expand the capabilities of modern space infrastructure through intelligent autonomous systems.
                        <br />
                        <br />
                        Our engineers design propulsion technologies, satellite networks, and robotic platforms that operate reliably in complex orbital environments.
                        {/* <br />
                        <br />
                        Through continuous research and collaboration with global partners, we are developing the systems that will power the next generation of space missions. */}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurStrory