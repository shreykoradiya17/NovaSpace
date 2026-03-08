"use client";

import React, { useState } from 'react';
import { Send, Rocket, User, Mail, Building, MessageSquare } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Side: Space Graphic & Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-center lg:text-left text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40 mb-4">
                                Launch Your Next Mission
                            </h2>
                            <p className="text-center lg:text-left text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Share your mission requirements with NovaSpace. Our command center will analyze the request and connect you with the appropriate engineering and mission operations teams.
                            </p>
                        </div>

                        {/* Abstract Space Graphic Container */}
                        <div className="relative w-full aspect-square max-w-sm mx-auto lg:mx-0 flex items-center justify-center scale-75 md:scale-90 lg:scale-[0.85]">
                            {/* Core Graphic */}
                            <div className="relative w-48 h-48 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 backdrop-blur-3xl border border-white/10 flex items-center justify-center shadow-[0_0_100px_rgba(99,102,241,0.2)] mt-8 md:mt-0">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent backdrop-blur-xl" />
                                <Rocket className="w-20 h-20 text-white/80 animate-pulse relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />

                                {/* Solar System Orbit Rings */}
                                <div className="absolute inset-[-15%] rounded-full border border-white/10" />
                                <div className="absolute inset-[-30%] rounded-full border border-white/5" />
                                <div className="absolute inset-[-45%] rounded-full border border-dashed border-white/5 animate-[spin_120s_linear_infinite]" />
                                <div className="absolute inset-[-60%] rounded-full border border-white/5" />
                                {/* <div className="absolute inset-[-75%] rounded-full border border-dashed border-white/5 animate-[spin_180s_linear_infinite_reverse]" /> */}

                                {/* Orbiting Planets (Solar System Effect) */}
                                {/* Planet 1: Mercury-like */}
                                <div className="absolute inset-[-15%] animate-[spin_6s_linear_infinite]">
                                    <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-orange-400 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.8)] -translate-x-1/2 -translate-y-1/2" />
                                </div>

                                {/* Planet 2: Earth-like with a moon */}
                                <div className="absolute inset-[-30%] animate-[spin_12s_linear_infinite]">
                                    {/* The planet body */}
                                    <div className="absolute top-1/2 left-0 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                        {/* Moon orbiting the planet */}
                                        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite]">
                                            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-gray-200 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.8)] -translate-x-1/2 -translate-y-1/2" />
                                        </div>
                                    </div>
                                </div>

                                {/* Planet 3: Mars-like */}
                                <div className="absolute inset-[-45%] animate-[spin_18s_linear_infinite]">
                                    <div className="absolute bottom-0 left-1/2 w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] -translate-x-1/2 translate-y-1/2" />
                                </div>

                                {/* Planet 4: Gas Giant-like with ring */}
                                <div className="absolute inset-[-60%] animate-[spin_25s_linear_infinite]">
                                    <div className="absolute top-1/2 right-0 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-amber-200 via-amber-600 to-amber-900 shadow-[0_0_20px_rgba(217,119,6,0.5)] flex items-center justify-center translate-x-1/2 -translate-y-1/2">
                                        <div className="absolute w-4 h-1 border border-amber-500/40 rounded-[100%] rotate-45" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Glassmorphic Form */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative rounded-3xl bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-6 md:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                {/* Name Field */}
                                <div className="space-y-2">
                                    {/* <label htmlFor="name" className="text-sm font-medium text-white/70 ml-1">Commander Name</label> */}
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-indigo-400 transition-colors">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300"
                                            placeholder="Name"
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="space-y-2">
                                    {/* <label htmlFor="email" className="text-sm font-medium text-white/70 ml-1">Transmission Address (Email)</label> */}
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-purple-400 transition-colors">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>

                                {/* Organization Field */}
                                <div className="space-y-2">
                                    {/* <label htmlFor="organization" className="text-sm font-medium text-white/70 ml-1">Fleet / Organization</label> */}
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-emerald-400 transition-colors">
                                            <Building className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                                            placeholder="Organization"
                                        />
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="space-y-2">
                                    {/* <label htmlFor="message" className="text-sm font-medium text-white/70 ml-1">Mission Briefing</label> */}
                                    <div className="relative group">
                                        <div className="absolute top-4 left-0 pl-4 pointer-events-none text-white/40 group-focus-within:text-blue-400 transition-colors">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pt-3 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none"
                                            placeholder="Describe your message..."
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-500 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-black hover:border-white/20 overflow-hidden"
                                >
                                    {/* <div className="absolute inset-0 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500" /> */}
                                    <span className="relative flex items-center gap-1">
                                        Send Message
                                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 rotate-45" />
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
