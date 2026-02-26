"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { Flame, Wind, ScrollText, ArrowRight } from "lucide-react";

export default function About() {
    const usps = [
        {
            icon: <Flame className="w-10 h-10 text-brand-primary" strokeWidth={1.5} />,
            title: "Daily Havan",
            desc: "We are one of the rare schools performing a Daily Havan (Fire Ritual) to purify the atmosphere and ignite your inner spiritual fire.",
            link: "/rituals",
            linkText: "Discover Our Rituals",
            color: "border-brand-primary/30",
            hoverBorder: "group-hover:border-brand-primary",
            bgIcon: "bg-orange-100/50",
            hoverBg: "group-hover:bg-orange-100"
        },
        {
            icon: <Wind className="w-10 h-10 text-teal-600" strokeWidth={1.5} />,
            title: "Pranayama Mastery",
            desc: "Specialized training in the science of breath. From foundational techniques to advanced Pranayama Retreats.",
            link: "/pranayama",
            linkText: "Explore The Breath",
            color: "border-teal-500/30",
            hoverBorder: "group-hover:border-teal-500",
            bgIcon: "bg-teal-50",
            hoverBg: "group-hover:bg-teal-100"
        },
        {
            icon: <ScrollText className="w-10 h-10 text-amber-600" strokeWidth={1.5} />,
            title: "Living Philosophy",
            desc: "Study the Yoga Sutras and Vedanta not just as text, but as a practical guide to self-realization and liberation.",
            link: "/yoga-philosophy",
            linkText: "Wisdom Teachings",
            color: "border-amber-400/30",
            hoverBorder: "group-hover:border-amber-400",
            bgIcon: "bg-amber-100/50",
            hoverBg: "group-hover:bg-amber-100"
        },
    ];

    return (
        <Section className="relative bg-brand-base overflow-hidden py-24" id="about">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-base via-orange-50/50 to-brand-base" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/img/pattern.png')] bg-repeat mix-blend-multiply" />
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white to-transparent opacity-80" />

            <div className="text-center mb-16 relative z-10">
                <ScrollReveal>
                    <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary-dark rounded-full text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm border border-brand-primary/20">
                        Why Choose Anantadrishti?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 drop-shadow-sm font-display leading-tight">
                        Ancient Wisdom,<br /><span className="italic font-serif text-brand-primary">Modern Sanctuary</span>
                    </h2>
                    <div className="w-20 h-1 bg-brand-primary/30 mx-auto mb-6 rounded-full" />
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-text-muted font-light leading-relaxed">
                        More than a yoga school—we are a living tradition. Experience the authentic
                        spiritual heritage of Rishikesh in a space designed for transformation.
                    </p>
                </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10 px-4 md:px-0">
                {usps.map((usp, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                        <div
                            className={`h-full flex flex-col items-center text-center p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden`}
                        >
                            {/* Top Accent Border */}
                            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-brand-primary`} />

                            {/* Decorative circle behind icon */}
                            <div
                                className={`absolute -right-10 -top-10 w-32 h-32 ${usp.bgIcon} rounded-full opacity-0 group-hover:opacity-50 transition-all duration-700 blur-2xl`}
                            />

                            <div className={`relative z-10 mb-6 w-20 h-20 flex items-center justify-center rounded-2xl ${usp.bgIcon} ${usp.hoverBg} transition-colors duration-500`}>
                                {usp.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-brand-dark mb-4 font-display">
                                {usp.title}
                            </h3>

                            <p className="text-brand-text-muted mb-8 leading-relaxed flex-grow font-light">
                                {usp.desc}
                            </p>

                            <Link
                                href={usp.link}
                                className="inline-flex items-center text-brand-dark font-bold hover:text-brand-primary transition-colors group/link text-sm uppercase tracking-wide"
                            >
                                {usp.linkText}
                                <span className="ml-2 w-6 h-6 rounded-full bg-brand-base flex items-center justify-center group-hover/link:bg-brand-primary group-hover/link:text-white transition-all duration-300">
                                    <ArrowRight className="w-3 h-3 transform group-hover/link:translate-x-0.5 transition-transform" />
                                </span>
                            </Link>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </Section>
    );
}
