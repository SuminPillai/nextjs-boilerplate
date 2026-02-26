"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Philosophy() {
    return (
        <Section id="philosophy" className="bg-stone-50 text-brand-dark relative overflow-hidden py-32">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2 animate-pulse-slow" style={{ animationDelay: '1s' }} />

            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.4] bg-[url('/img/pattern.png')] bg-repeat mix-blend-multiply pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                <ScrollReveal>
                    <div className="relative">
                        <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary-dark border border-brand-primary/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                            Ancient Wisdom
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-brand-dark mb-8 font-display leading-tight">
                            Yoga Philosophy <br /><span className="text-brand-primary italic font-serif">& Vision</span>
                        </h2>

                        <div className="prose prose-lg text-brand-text-muted leading-relaxed mb-10 font-light">
                            <p className="mb-6">
                                Philosophy is the viewpoint through which we understand reality. Yoga Philosophy is the
                                transformative journey from <strong className="text-brand-dark font-medium">duality to non-duality</strong>, from suffering to
                                liberation.
                            </p>
                            <p className="mb-6">
                                At Anantadrishti Yoga, we dive deep into:
                            </p>
                            <ul className="space-y-4 mt-4">
                                <li className="flex items-center gap-4 bg-white/60 p-3 rounded-lg border border-brand-dark/5 shadow-sm hover:shadow-md transition-all">
                                    <Sparkles className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    <span className="text-brand-dark font-medium">Patanjali Yoga Sutras</span>
                                </li>
                                <li className="flex items-center gap-4 bg-white/60 p-3 rounded-lg border border-brand-dark/5 shadow-sm hover:shadow-md transition-all">
                                    <Sparkles className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    <span className="text-brand-dark font-medium">Vedanta & Upanishads</span>
                                </li>
                                <li className="flex items-center gap-4 bg-white/60 p-3 rounded-lg border border-brand-dark/5 shadow-sm hover:shadow-md transition-all">
                                    <Sparkles className="w-5 h-5 text-brand-primary flex-shrink-0" />
                                    <span className="text-brand-dark font-medium">The Three Gunas & Pancha Kosha</span>
                                </li>
                            </ul>
                        </div>

                        <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-dark text-white border-none rounded-full px-10 shadow-lg shadow-brand-primary/20 transition-all duration-300 text-lg">
                            <Link href="/yoga-philosophy">
                                Explore Philosophy <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2} className="flex justify-center items-center">
                    <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center">
                        {/* Rotating Rings */}
                        <div className="absolute inset-0 border border-brand-dark/5 rounded-full animate-spin-slow-reverse" style={{ animationDuration: '40s' }} />
                        <div className="absolute inset-8 border border-brand-dark/10 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
                        <div className="absolute inset-16 border border-brand-dark/5 rounded-full animate-spin-slow-reverse" style={{ animationDuration: '25s' }} />

                        {/* Center Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center text-center p-10 backdrop-blur-sm rounded-full bg-white/80 border border-white/60 shadow-2xl">
                            <span className="text-7xl mb-6 filter drop-shadow-sm animate-pulse-slow">👁️</span>
                            <h3 className="text-3xl font-bold font-serif text-brand-dark tracking-widest mb-2">Anantadrishti</h3>
                            <div className="h-px w-20 bg-gradient-to-r from-transparent via-brand-primary to-transparent mb-2" />
                            <p className="text-brand-text-muted uppercase text-xs tracking-[0.4em]">Infinite Vision</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </Section>
    );
}
