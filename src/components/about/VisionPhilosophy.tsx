"use client";

import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function VisionPhilosophy() {
    return (
        <Section className="bg-brand-dark relative overflow-hidden py-24">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('/img/pattern.png')] bg-repeat opacity-[0.05] pointer-events-none mix-blend-overlay" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 relative z-10 px-4">
                {/* Vision */}
                <ScrollReveal>
                    <div className="relative group overflow-hidden rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-12 hover:bg-white/10 transition-colors duration-500 h-full flex flex-col">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150"></div>

                        <span className="inline-block px-3 py-1 bg-brand-primary/20 text-brand-primary border border-brand-primary/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 w-fit">
                            Our Vision
                        </span>

                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white group-hover:text-amber-200 transition-colors">
                            Yoga as Consciousness
                        </h2>

                        <p className="text-stone-300 leading-relaxed mb-10 text-lg font-light flex-grow">
                            At Anantadrishti Yoga School, yoga is perceived as a science of consciousness. We emphasize awareness, discipline, and devotion, allowing practitioners to experience harmony at physical, mental, emotional, and spiritual levels.
                        </p>

                        <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/5 relative z-10">
                            <p className="text-2xl font-serif text-amber-300 mb-3">“युज्यते अनेन इति योगः”</p>
                            <p className="text-stone-400 text-sm italic mb-4 font-mono tracking-wide">(Yujyate anena iti yogaḥ)</p>
                            <p className="text-white font-medium text-lg border-l-2 border-brand-primary pl-4">That which unites is Yoga.</p>
                        </div>

                        <p className="mt-8 text-stone-400 text-sm leading-relaxed relative z-10 border-t border-white/5 pt-6">
                            Union refers to 3 aspects here: What was before union? What is union? And what is after union? Yoga here is not about achievement rather transformation of senses from Duality to Nonduality.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Philosophy */}
                <ScrollReveal delay={0.2}>
                    <div className="relative group overflow-hidden rounded-[2.5rem] bg-stone-100 p-10 md:p-12 shadow-2xl border border-stone-200 h-full flex flex-col">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 transition-transform duration-700 group-hover:scale-150"></div>

                        <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 border border-teal-200 rounded-full text-xs font-bold tracking-widest uppercase mb-6 w-fit">
                            Our Philosophy
                        </span>

                        <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6 group-hover:text-teal-700 transition-colors">
                            Tradition & Wisdom
                        </h2>

                        <p className="text-brand-text-muted leading-relaxed mb-10 text-lg font-light flex-grow">
                            We draw inspiration from the Shastras like Yoga Sutras, Bhagavad Gita, Upanishads, and Hatha Yoga texts, presenting yoga in its pure and traditional form, adapted thoughtfully for modern life.
                        </p>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative z-10">
                            <p className="text-2xl font-serif text-teal-700 mb-3">“उद्धरेदात्मनाऽत्मानं”</p>
                            <p className="text-stone-400 text-sm italic mb-4 font-mono tracking-wide">(Uddhared ātmanā’ tmānaṁ...)</p>
                            <p className="text-brand-dark font-medium text-lg border-l-2 border-teal-500 pl-4">One must raise oneself by one’s own mind.</p>
                            <footer className="text-xs font-bold text-stone-400 mt-3 uppercase tracking-wider">— Bhagavad Gita 6.5</footer>
                        </div>

                        <p className="mt-8 text-brand-text-muted text-sm leading-relaxed relative z-10 font-medium border-t border-stone-200 pt-6">
                            Our teachings encourage self-effort (<span className="text-brand-dark font-serif italic">Abhyasa</span>) and detachment (<span className="text-brand-dark font-serif italic">Vairagya</span>) as the twin pillars of transformation.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </Section>
    );
}
