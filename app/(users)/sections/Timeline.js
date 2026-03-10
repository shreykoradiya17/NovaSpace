import { Timeline } from '@/components/ui/timeline'
import Image from 'next/image';
import React from 'react'
import comp2018 from '@/assets/nova2018img.png';
import comp2020 from '@/assets/nova2020img.png';
import comp2022 from '@/assets/nova2022img.png';
import comp2024 from '@/assets/nova2024img.png';

const TimelineDemo = () => {
    const data = [
        {
            title: "2018",
            content: (
                <div key="2018">
                    <h2 className="text-lg md:text-4xl mb-4 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent max-w-4xl">
                        Company Founded
                    </h2>
                    <p className="mb-8 text-xs font-normal md:text-sm text-neutral-300 opacity-[0.9]">
                        NovaSpace established with a mission to develop autonomous space infrastructure systems.
                    </p>
                    <Image
                        src={comp2018}
                        alt="company 2018"
                        width={500}
                        height={500}
                        className="h-[auto_!important] ] w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "2020",
            content: (
                <div key="2020">
                    <h2 className="text-lg md:text-4xl mb-4 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent max-w-4xl">
                        First Satellite Deployment
                    </h2>
                    <p className="mb-8 text-xs font-normal md:text-sm text-neutral-300 opacity-[0.9]">
                        Successfully launched our first experimental AI-assisted satellite into low Earth orbit.
                    </p>
                    <Image
                        src={comp2020}
                        alt="company 2018"
                        width={500}
                        height={500}
                        className="h-[auto_!important] ] w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div key="2022">
                    <h2 className="text-lg md:text-4xl mb-4 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent max-w-4xl">
                        Global Research Partnerships
                    </h2>
                    <p className="mb-8 text-xs font-normal md:text-sm text-neutral-300 opacity-[0.9]">
                        Partnered with multiple international aerospace research labs to expand propulsion and orbital robotics programs.
                    </p>
                    <Image
                        src={comp2022}
                        alt="company 2018"
                        width={500}
                        height={500}
                        className="h-[auto_!important] ] w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div key="2024">
                    <h2 className="text-lg md:text-4xl mb-4 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent max-w-4xl">
                        Autonomous Orbital Platform
                    </h2>
                    <p className="mb-8 text-xs font-normal md:text-sm text-neutral-300 opacity-[0.9]">
                        Introduced fully autonomous satellite navigation system enabling real-time adaptive orbital control.
                    </p>
                    <Image
                        src={comp2024}
                        alt="company 2018"
                        width={500}
                        height={500}
                        className="h-[auto_!important] ] w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    )
}

export default TimelineDemo