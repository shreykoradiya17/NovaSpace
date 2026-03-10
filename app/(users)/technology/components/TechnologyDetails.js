"use client";
import React from 'react'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

const content = [
    {
        title: "Advanced Propulsion Systems",
        description: (
            <div>
                <p>Our propulsion platforms are engineered for precision thrust control, fuel efficiency, and long-duration orbital maneuverability.</p>
                <p className='mt-3'>Integrated real-time performance monitoring enables adaptive adjustments for optimal mission stability and extended satellite lifespan.</p>

                <ul style={{ listStyleType: 'disc', paddingLeft: '15px' }} className='mt-3'>
                    <li>Smart thrust vector control</li>
                    <li>Fuel optimization algorithms</li>
                    <li>Deep-space maneuver readiness</li>
                    <li>Autonomous orbital correction</li>
                </ul>
            </div>
        ),
        content: (
            <img
                src="https://img.freepik.com/premium-photo/close-up-large-metal-object-building_974546-96377.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&semt=ais_hybrid&w=740&q=80"
                width={300}
                height={300}
                className="h-full w-full object-cover grayscale hover:scale-[1.03] transition-all ease-in duration-300"
                alt="linear board demo" />
        ),
    },
    {
        title: "Intelligent Satellite Networks",
        description: (
            <div>
                <p>NovaSpace satellites operate as coordinated, AI-driven networks capable of autonomous navigation, collision avoidance, and dynamic orbital positioning.</p>
                <p className='mt-3'>Onboard processing reduces latency and enhances real-time decision-making across distributed space systems.</p>

                <ul style={{ listStyleType: 'disc', paddingLeft: '15px' }} className='mt-3'>
                    <li>Autonomous trajectory planning</li>
                    <li>Real-time telemetry optimization</li>
                    <li>Collision prediction & avoidance</li>
                    <li>Adaptive communication routing</li>
                </ul>
            </div>
        ),
        content: (
            <img
                src="https://img.freepik.com/premium-photo/cargo-space-craft-earth-planet-dark-background-sci-fi-wallpaper-space-station-orbiting-earth-space-ship-space-art-wallpaper-solar-observatory-elements-this-image-furnished-by-nasa-3d-illustration_150455-17241.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&w=740&q=80"
                width={300}
                height={300}
                className="h-full w-full object-cover grayscale hover:scale-[1.03] transition-all ease-in duration-300"
                alt="linear board demo" />
        ),
    },
    {
        title: "Earth Observation AI",
        description: (
            <div>
                <p>Our machine learning infrastructure transforms high-resolution satellite imagery into actionable environmental and infrastructure intelligence.</p>
                <p className='mt-3'>Advanced analytics models detect anomalies, monitor climate patterns, and support rapid-response decision systems.</p>

                <ul style={{ listStyleType: 'disc', paddingLeft: '15px' }} className='mt-3'>
                    <li>Climate & environmental monitoring</li>
                    <li>Infrastructure analytics</li>
                    <li>Disaster detection systems</li>
                    <li>Predictive modeling pipelines</li>
                </ul>
            </div>
        ),
        content: (
            <img
                src="https://img.freepik.com/free-photo/control-table-spacecraft-from-inside_23-2151828221.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&w=740&q=80"
                width={300}
                height={300}
                className="h-full w-full object-cover grayscale hover:scale-[1.03] transition-all ease-in duration-300"
                alt="linear board demo" />
        ),
    },
    {
        title: "Autonomous Orbital Robotics",
        description: (
            <div>
                <p>Robotic platforms designed for in-orbit servicing, satellite assembly, and modular expansion reduce operational risk and increase mission scalability.</p>
                <p className='mt-3'>Advanced autonomy enables precise manipulation in microgravity environments.</p>

                <ul style={{ listStyleType: 'disc', paddingLeft: '15px' }} className='mt-3'>
                    <li>In-orbit satellite servicing</li>
                    <li>Modular orbital assembly</li>
                    <li>Precision robotic maneuvering</li>
                    <li>Remote autonomous operations</li>
                </ul>
            </div>
        ),
        content: (
            <img
                src="https://img.freepik.com/premium-photo/space-station-orbiting-blue-planet-3d-illustration_659132-711.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&w=740&q=80"
                width={300}
                height={300}
                className="h-full w-full object-cover grayscale hover:scale-[1.03] transition-all ease-in duration-300"
                alt="linear board demo" />
        ),
    },
];

const TechnologyDetails = () => {
    return (
        <div className="w-full">
            <StickyScroll content={content} />
        </div>
    )
}

export default TechnologyDetails