"use client";

import React from "react";
import { motion } from "motion/react";
import { Rocket } from "lucide-react";

const SpaceLoader = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
            <div className="relative">
                {/* Glowing aura */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-indigo-500/20 rounded-full blur-3xl"
                />

                {/* Animated Rocket */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="relative z-10"
                >
                    <Rocket className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

                    {/* Engine Exhaust Flame */}
                    <motion.div
                        animate={{
                            scaleY: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-8 bg-gradient-to-t from-orange-500 via-yellow-500 to-transparent blur-[2px] rounded-full origin-top"
                    />
                </motion.div>

                {/* Orbiting particles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-[-40px]"
                    >
                        <div
                            className="w-1 h-1 bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_8px_white]"
                            style={{
                                top: `${i * 30}%`,
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="mt-12 text-zinc-400 font-medium tracking-[0.2em] text-sm uppercase"
            >
                Initializing Mission...
            </motion.p>
        </div>
    );
};

export default SpaceLoader;
