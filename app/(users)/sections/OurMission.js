import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { GlareCard } from '@/components/ui/glare-card'
import React from 'react'



const OurMission = ({ data }) => {

  return (
    <div className='antialiased dark:bg-black dark:bg-grid-white/[0.05] overflow-hidden py-[90px]'>
      <div className='max-w-7xl m-auto px-8 lg:px-0'>
        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px]">
          {data?.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[90%] md:max-w-2xl text-center text-[12px] md:text-base font-normal text-neutral-300 opacity-[0.9]">
          {data?.description}
        </p>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
          {data?.projects?.map((project) => (
            <AnimatedTooltip key={project.id} type={project.type} year={project.year} status={project.status}>
              <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                <img
                  className="h-full w-full absolute inset-0 object-cover"
                  src={project.image}
                  alt="Abstract colorful gradient background"
                />
                <p className="font-bold text-white text-lg z-10">{project.id}</p>
                <p className="font-normal text-base text-neutral-200 mt-4 z-10">
                  {project.description}
                </p>
              </GlareCard>
            </AnimatedTooltip>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurMission
