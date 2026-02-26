"use client";

import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flame, Music, Activity } from "lucide-react";

export default function RitualsPreview() {
    const rituals = [
        {
            icon: <Flame className="w-12 h-12" strokeWidth={1} />,
            title: "Daily Havan",
            desc: "Every morning, we invoke the divine through the Agni Hotra fire ceremony. This daily purification practice is open to all.",
            link: "/rituals",
            linkText: "Witness the Ritual",
            color: "text-orange-600",
            bg: "bg-orange-50",
            border: "border-orange-100"
        },
        {
            icon: <Activity className="w-12 h-12" strokeWidth={1} />,
            title: "Ganapati Havan",
            desc: "Specialized pujas to remove obstacles and align our Sankalpa (intention) with cosmic intelligence.",
            link: "/rituals",
            linkText: "Learn More",
            color: "text-amber-600",
            bg: "bg-amber-50",
            border: "border-amber-100"
        },
        {
            icon: <Music className="w-12 h-12" strokeWidth={1} />,
            title: "Weekly Satsang",
            desc: "\"Satsangaad Bhavatihi Saadhutvam.\" Immerse yourself in spiritual discourse, Kirtan, and community every week.",
            link: "/satsang",
            linkText: "Join the Circle",
            color: "text-teal-600",
            bg: "bg-teal-50",
            border: "border-teal-100"
        },
    ];

    return (
        <Section id="rituals-preview" className="relative bg-white overflow-hidden py-24">
            {/* Animated Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow pointer-events-none" />

            <div className="text-center mb-16 relative z-10">
                <ScrollReveal>
                    <span className="inline-block px-4 py-1.5 bg-brand-base text-brand-primary-dark border border-brand-primary/10 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                        The Heart of Our Practice
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 font-display leading-tight">
                        Sacred Rituals & <br /><span className="text-brand-primary italic font-serif">Agni Hotra</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl text-brand-text-muted italic font-serif opacity-80 decoration-clone">
                        "Yajña (Sacrifice) is the navel of the universe." — Rig Veda
                    </p>
                </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10 px-4">
                <ScrollReveal className="order-2 md:order-1">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 group h-[600px]">
                        <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <Image
                            src="/img/optimized/ceremony.webp"
                            alt="Agni Hotra sacred fire ceremony at Anantadrishti Yoga ashram in Rishikesh, India"
                            fill
                            className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                        />
                        {/* Overlay Text */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-dark/80 to-transparent text-white z-20">
                            <p className="font-serif italic text-lg opacity-90">"Agni is the mouth of the Gods."</p>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="order-1 md:order-2 space-y-6">
                    {rituals.map((ritual, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className={`flex gap-6 p-6 rounded-2xl border ${ritual.border} shadow-sm hover:shadow-md transition-all duration-300 bg-white group hover:bg-gradient-to-r hover:${ritual.bg} hover:to-white`}>
                                <div className={`shrink-0 w-16 h-16 rounded-full ${ritual.bg} flex items-center justify-center ${ritual.color} group-hover:scale-110 transition-transform duration-500`}>
                                    {ritual.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-dark mb-2 font-display">
                                        {ritual.title}
                                    </h3>
                                    <p className="text-brand-text-muted text-sm leading-relaxed mb-3 font-light">
                                        {ritual.desc}
                                    </p>
                                    <Link
                                        href={ritual.link}
                                        className={`inline-flex items-center ${ritual.color} font-bold hover:opacity-80 uppercase text-[10px] tracking-widest group/link transition-all`}
                                    >
                                        {ritual.linkText}
                                        <ArrowRight className="ml-1 w-3 h-3 transform group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}
