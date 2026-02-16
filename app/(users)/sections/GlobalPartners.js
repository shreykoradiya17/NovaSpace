import React from 'react';
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import nasaLogo from "@/assets/Nasa-logo.png";
import esaLogo from "@/assets/Esa-logo.png";
import isroLogo from "@/assets/Isro-logo.png";
import jaxaLogo from "@/assets/Jaxa-logo.png";
import roscosLogo from "@/assets/Roscos-logo.png";

const GlobalPartners = () => {
  return (
    <div className="py-[70px] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1]">
          Global Partners
        </h2>
        <div
          className={cn(
            "text-white w-full scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
          )}>
          <Marquee autoFill={true} className="mt-6">
            <Image src={nasaLogo} width={120} height={100} alt="nasa" className="me-35 partner_loog"/>
            <Image src={esaLogo} width={120} height={100} alt="nasa" className="me-35 partner_loog"/>
            <Image src={isroLogo} width={120} height={100} alt="nasa" className="me-35 partner_loog"/>
            <Image src={roscosLogo} width={120} height={100} alt="nasa" className="me-35 partner_loog"/>
            <Image src={jaxaLogo} width={120} height={100} alt="nasa" className="me-35 partner_loog"/>
          </Marquee>
        </div>
      </div>
  )
}

export default GlobalPartners