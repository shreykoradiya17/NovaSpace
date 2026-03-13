"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "motion/react";

export const AnimatedTooltip = ({
  type,
  year,
  status,
  children
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              whiteSpace: "nowrap",
            }}
            className="absolute top-16 left-1/2 z-[100] flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-2xl min-w-max border border-white/10"
          >
            <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            <div className="relative z-30 text-sm font-bold text-white tracking-tighter">
              {type}
            </div>
            <div className="text-[10px] text-white/50 flex items-center gap-1">
              {year} • {status}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
