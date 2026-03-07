"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function OurTeam() {
    const [active, setActive] = useState(null);
    const ref = useRef(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10" />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[90%] md:max-w-[500px] relative h-fit md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden">
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />

                                <motion.button
                                    key={`button-${active.title}-${id}`}
                                    layout
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: {
                                            duration: 0.05,
                                        },
                                    }}
                                    className="flex absolute top-2 right-2  items-center justify-center bg-white rounded-full h-6 w-6"
                                    onClick={() => setActive(null)}>
                                    <CloseIcon />
                                </motion.button>
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200">
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400">
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                                        Connect
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <div className="antialiased dark:bg-black dark:bg-grid-white/[0.05] overflow-hidden py-[60px] pt-[40px] md:pt-[60px]">
                <div className="max-w-7xl m-auto px-8 lg:px-0">
                    <h2 className="text-center bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px] ">
                        Leadership & Research Team
                    </h2>
                    <ul className="max-w-4xl mx-auto w-full gap-4 mt-6">
                        {cards.map((card, index) => (
                            <motion.div
                                layoutId={`card-${card.title}-${id}`}
                                key={`card-${card.title}-${id}`}
                                onClick={() => setActive(card)}
                                className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
                                <div className="flex gap-4 flex-col md:flex-row ">
                                    <motion.div layoutId={`image-${card.title}-${id}`}>
                                        <img
                                            width={100}
                                            height={100}
                                            src={card.src}
                                            alt={card.title}
                                            className="h-40 w-full md:h-14 md:w-14 rounded-lg object-cover object-top" />
                                    </motion.div>
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${card.title}-${id}`}
                                            className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                                            {card.description}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${card.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                                            {card.title}
                                        </motion.p>
                                    </div>
                                </div>
                                <motion.button
                                    layoutId={`button-${card.title}-${id}`}
                                    className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0">
                                    {card.ctaText}
                                </motion.button>
                            </motion.div>
                        ))}
                    </ul>

                </div>

            </div>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        description: "Dr. Ethan Clarke",
        title: "Chief Executive Officer",
        src: "https://img.freepik.com/free-photo/portrait-elegant-professional-businessman_23-2150917272.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&semt=ais_hybrid&w=740&q=80",
        ctaText: "View Details",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Dr. Ethan Clarke leads NovaSpace with over two decades of experience in aerospace systems engineering and satellite mission architecture. His work focuses on developing scalable orbital platforms capable of supporting future global space infrastructure.
                    <br />
                    <br />
                    At NovaSpace, Ethan drives the long-term vision of building autonomous space systems that expand humanity’s technological reach beyond Earth.
                </p>
            );
        },
    },
    {
        description: "Dr. Maya Nakamura",
        title: "Chief Technology Officer",
        src: "https://img.freepik.com/premium-photo/confident-young-businesswoman-portrait-with-arms-crossed-modern-office-setting_920413-3339.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&w=740&q=80",
        ctaText: "View Details",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Dr. Maya Nakamura oversees NovaSpace’s advanced propulsion systems and satellite intelligence platforms. Her research focuses on efficient orbital maneuvering and autonomous navigation systems.
                    <br />
                    <br />
                    At NovaSpace, Maya guides the engineering strategy that integrates AI-driven systems with modern spacecraft architecture.
                </p>
            );
        },
    },

    {
        description: "Lucas Reinhardt",
        title: "Head of Robotics Engineering",
        src: "https://img.freepik.com/premium-photo/robotics-engineer-examining-robot-factory_1004054-19911.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&semt=ais_hybrid&w=740&q=80",
        ctaText: "View Details",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Lucas Reinhardt leads the development of NovaSpace’s orbital robotics platforms used for satellite servicing and modular assembly.
                    <br />
                    <br />
                    Lucas leads a multidisciplinary engineering team developing robotic platforms that will support future orbital infrastructure and maintenance operations.
                </p>
            );
        },
    },
    {
        description: "Dr. Sofia Alvarez",
        title: "Director of Space Systems",
        src: "https://img.freepik.com/premium-photo/womens-with-laptop_1197721-59403.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&semt=ais_hybrid&w=740&q=80",
        ctaText: "View Details",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Dr. Sofia Alvarez specializes in satellite architecture and large-scale orbital network design. She oversees the structural and operational integration of NovaSpace’s satellite platforms.
                    <br />
                    <br />
                    At NovaSpace, Sofia coordinates cross-disciplinary engineering teams to deliver resilient spacecraft systems.
                </p>
            );
        },
    },
    {
        description: "Daniel Park",
        title: "Head of Mission Operations",
        src: "https://img.freepik.com/premium-photo/he-will-make-sure-everything-goes-according-plan-portrait-cheerful-professional-male-architect-standing-with-arms-folded-while-looking-camera-inside-building_590464-30835.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&semt=ais_hybrid&w=740&q=80",
        ctaText: "View Details",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Daniel manages NovaSpace’s mission control and orbital operations programs. He leads the teams responsible for monitoring satellite telemetry and ensuring stable mission performance.
                    <br />
                    <br />
                    Daniel ensures NovaSpace missions maintain reliability and safety across complex orbital conditions.
                </p>
            );
        },
    },
    {
        description: "Aisha Rahman",
        title: "Lead AI Systems Engineer",
        src: "https://img.freepik.com/premium-photo/cyber-security-cloud-networkcyber-security-technology-online-data-protection-innovative-perception_1149930-2294.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&w=740&q=80",
        ctaText: "View Details",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Aisha Rahman develops the machine learning systems that power NovaSpace’s autonomous satellite networks and Earth observation analytics.
                    <br />
                    <br />
                    At NovaSpace, Aisha leads the AI research initiatives that enable satellites to operate with greater autonomy and efficiency.
                </p>
            );
        },
    },
];
