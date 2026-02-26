"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

export default function Methodology() {
    return (
        <Section id="methodology" className="bg-brand-base relative overflow-hidden py-24">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                <ScrollReveal>
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block px-3 py-1 bg-brand-dark/5 text-brand-dark/60 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                                Systematic Immersion
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display leading-tight">
                                Classical Yoga <br /><span className="text-brand-primary italic font-serif">Methodology</span>
                            </h2>
                        </div>

                        <div className="prose prose-lg text-brand-text-muted leading-relaxed space-y-6 font-light">
                            <p>
                                At Anantadrishti Yoga School, we follow a systematic immersion into the classical
                                yogic tradition. Our teaching goes beyond physical postures to integrate{" "}
                                <strong className="text-brand-dark font-medium">discipline (Anuśāsanam)</strong>, <strong className="text-brand-dark font-medium">devotion (Bhakti)</strong>, and{" "}
                                <strong className="text-brand-dark font-medium">self-realization</strong>.
                            </p>
                            <p>
                                Teaching yoga is understood as <em className="text-brand-primary font-serif text-xl">Sevā</em> (selfless service). Our 100, 200, and
                                300-hour Teacher Training Courses provide a comprehensive education in Hatha Yoga,
                                Functional Anatomy, and Yogic Philosophy, designed for sincere seekers.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary-dark text-white rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                <Link href="/courses/200-hour-yoga-ttc">
                                    Explore Teacher Training
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-brand-primary/30 text-brand-primary hover:bg-brand-primary/5 rounded-full px-8">
                                <Link href="/about">
                                    Our Methodology
                                </Link>
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2} className="relative perspective-1000">
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/40 ring-1 ring-black/5 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out group">
                        <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <Image
                            src="/img/optimized/yoga-hall.webp"
                            alt="Hatha yoga class in the yoga shala at Anantadrishti Yoga School, Rishikesh"
                            width={600}
                            height={800} // Vertical aspect ratio based on typical layout
                            className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -inset-4 bg-amber-200/30 rounded-3xl rotate-6 -z-10 blur-sm" />
                    <div className="absolute -inset-4 bg-orange-100/30 rounded-3xl -rotate-3 -z-20 scale-105 blur-md" />
                </ScrollReveal>
            </div>
        </Section>
    );
}
