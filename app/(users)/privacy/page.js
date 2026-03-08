import React from 'react';
import { Shield, Lock, Eye, Server, Database, UserCheck } from 'lucide-react';
import HomeCta from '../sections/HomeCta';

const PrivacyPolicyPage = () => {
    return (
        <main className="min-h-screen bg-black text-zinc-300 selection:bg-white/30 pt-24 md:pt-32">
            {/* Minimal Header */}
            <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                {/* <div className="inline-flex items-center justify-center p-3 bg-white/5 border border-white/10 rounded-2xl mb-6 backdrop-blur-md">
                    <Shield className="w-8 h-8 text-white" />
                </div> */}
                <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-4xl lg:text-5xl leading-[1.1] p-[1px]">
                    Privacy & Security Protocol
                </h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto mt-4">
                    Effective Date: March 2026. At NovaSpace, we prioritize the secure handling of your mission data and personal information.
                </p>
            </header>

            {/* Content Body */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">

                {/* Intro Section */}
                <section className="bg-zinc-900/30 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                        <Lock className="w-6 h-6 text-indigo-400" />
                        1. Information We Collect
                    </h2>
                    <div className="space-y-4 text-zinc-400 leading-relaxed">
                        <p>
                            When you engage with NovaSpace digital platforms, mission control interfaces, or communication channels, we may collect the following types of information:
                        </p>
                        <ul className="list-none space-y-3 ml-2">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                <span><strong className="text-white/80 font-medium">Identity & Contact Data:</strong> Name, professional title, organization, email, and secure communication identifiers.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                <span><strong className="text-white/80 font-medium">Technical & Usage Data:</strong> IP addresses, browser types, interaction telemetry, and authentication logs when accessing our secure portals.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                                <span><strong className="text-white/80 font-medium">Mission Parameters:</strong> Information voluntarily provided regarding project constraints, orbital requirements, or payload specifications.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="bg-zinc-900/30 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative overflow-hidden">
                    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                        <Database className="w-6 h-6 text-emerald-400" />
                        2. How We Use Your Data
                    </h2>
                    <p className="text-zinc-400 leading-relaxed mb-6">
                        NovaSpace utilizes collected telemetry and data strictly for operational, security, and partnership optimization purposes:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-black/50 border border-white/5 rounded-2xl p-6">
                            <h3 className="text-lg font-medium text-white mb-2">Service Delivery</h3>
                            <p className="text-sm text-zinc-400">To provide, maintain, and improve our aerospace engineering consulting and launch coordination services.</p>
                        </div>
                        <div className="bg-black/50 border border-white/5 rounded-2xl p-6">
                            <h3 className="text-lg font-medium text-white mb-2">Security & Integrity</h3>
                            <p className="text-sm text-zinc-400">To monitor infrastructure health, prevent unauthorized access to mission-critical systems, and ensure platform stability.</p>
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="bg-zinc-900/30 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                        <Server className="w-6 h-6 text-purple-400" />
                        3. Data Storage & Encryption
                    </h2>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                        All sensitive mission data and communication logs are stored on highly secure, geographically distributed servers. We employ military-grade AES-256 encryption for data at rest and TLS 1.3 protocols for data in transit.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                        NovaSpace adheres to strict international compliance standards, ensuring that cross-border data transfers meet all regulatory requirements for the aerospace sector.
                    </p>
                </section>

                {/* Section 4 */}
                <section className="bg-zinc-900/30 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
                    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                        <Eye className="w-6 h-6 text-blue-400" />
                        4. Information Sharing
                    </h2>
                    <p className="text-zinc-400 leading-relaxed">
                        NovaSpace does <strong className="text-white font-medium">not</strong> sell, rent, or trade your personal or organizational data to third parties. Data is only shared with trusted orbital partners and regulatory agencies when strictly necessary for mission execution or when mandated by international space law.
                    </p>
                </section>

                {/* Section 5 */}
                <section className="bg-zinc-900/30 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
                    <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                        <UserCheck className="w-6 h-6 text-orange-400" />
                        5. Your Access Rights
                    </h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Under applicable privacy regulations, you retain full operational clearance to request access to, correction of, or deletion of your personal data stored within our systems. To exercise these rights, please securely transmit a request to your designated NovaSpace liaison or contact our central privacy officer.
                    </p>
                </section>

                {/* Contact Banner */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-md">
                    <h3 className="text-xl font-semibold text-white mb-2">Need Further Protocol Clarification?</h3>
                    <p className="text-zinc-400 mb-6">Our security and legal teams are on standby.</p>
                    <a href="mailto:privacy@novaspace.com" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors">
                        Contact Privacy Officer
                    </a>
                </div>

            </article>

            {/* Reusing existing CTA */}
            <HomeCta
                ctaTitle="Secure Your Future in Space"
                ctaDescription="Review our compliance certifications or initialize a secure collaboration channel today."
                ctaButton="Contact Security Team"
            />
        </main>
    );
};

export default PrivacyPolicyPage;
