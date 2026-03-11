import { CometCard } from '@/components/ui/comet-card'
import React from 'react'

const CoreTechnologies = ({ data }) => {
    return (
        <div className='antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] overflow-hidden py-[90px]'>
            <div className="max-w-7xl m-auto flex flex-col items-center justify-center relative px-8 lg:px-0">
                <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px]">
                    {data?.sectionTitle}
                </h2>
                <p className="mx-auto mt-4 max-w-[90%] md:max-w-2xl text-center text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
                    {data?.description}
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 w-full mt-8'>
                    {data?.items?.map((item, index) => (
                        <div key={index} className=''>
                            <CometCard>
                                <button
                                    type="button"
                                    className=" flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-2"
                                    aria-label={`View ${item.title}`}
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
                                                alt={item.title}
                                                src={item.image}
                                                style={{
                                                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                                                    opacity: 1,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                                        <div className="text-xs text-left">{item.title}</div>
                                    </div>
                                </button>
                            </CometCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CoreTechnologies