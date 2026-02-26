"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export default function DailyClasses() {
    const schedule = [
        { time: "07:30 AM", title: "Pranayama (Advanced)", desc: "Intensive breathwork & retention.", border: "border-brand-primary", bg: "bg-brand-base", hoverBg: "hover:bg-brand-primary" },
        { time: "09:30 AM", title: "Hatha Alignment", desc: "Asana precision & flow.", border: "border-teal-500", bg: "bg-teal-50", hoverBg: "hover:bg-teal-600" },
        { time: "11:00 AM", title: "Prana Foundation", desc: "Basics of correct breathing.", border: "border-brand-primary", bg: "bg-brand-base", hoverBg: "hover:bg-brand-primary" },
        { time: "05:30 PM", title: "Meditation & Kirtan", desc: "Quiet mind & open heart.", border: "border-teal-500", bg: "bg-teal-50", hoverBg: "hover:bg-teal-600" },
    ];

    return (
        <Section id="pranayama-spotlight" className="bg-white relative py-20 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-base/30 skew-x-12 -mr-20" />

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 relative z-10">
                <ScrollReveal>
                    <div>
                        <span className="inline-block px-3 py-1 bg-teal-100/50 text-teal-700 border border-teal-200 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                            Our Specialization
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display leading-tight">
                            Mastering the <br /><span className="text-teal-600 italic font-serif">Divine Breath</span>
                        </h2>
                        <div className="prose prose-lg text-brand-text-muted leading-relaxed mb-8 font-light">
                            <p className="mb-4">
                                <strong className="text-brand-dark font-medium">Prana</strong> is the bridge between the body and the mind. We are one of
                                Rishikesh's few schools offering specialized, in-depth <strong className="text-brand-dark font-medium">Pranayama training</strong> for all
                                levels.
                            </p>
                            <p>
                                Whether you are looking to manage stress or awaken Kundalini, our guided sessions
                                provide a safe and profound container for exploration.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20 rounded-full px-8">
                                <Link href="/3-day-pranayama-retreat">
                                    3-Day Immersion
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-teal-600/30 text-teal-600 hover:bg-teal-50 rounded-full px-8">
                                <Link href="/pranayama">
                                    Daily Classes
                                </Link>
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2} className="relative group">
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-700 hover:scale-[1.02]">
                        <Image
                            src="/img/optimized/advancedpranayama3.webp"
                            alt="Advanced Pranayama Practice"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -inset-4 bg-teal-100/60 rounded-3xl rotate-2 -z-10 transition-transform duration-500 group-hover:rotate-3" />
                    <div className="absolute -inset-4 bg-brand-base/60 rounded-3xl -rotate-2 -z-20 transition-transform duration-500 group-hover:-rotate-3 scale-105" />
                </ScrollReveal>
            </div>

            <div className="relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-brand-dark font-display mb-2">Daily Sadhana Schedule</h3>
                        <p className="text-brand-text-muted font-light">Join us for drop-in classes in the heart of Tapovan</p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {schedule.map((slot, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div
                                className={`${slot.bg} rounded-2xl p-6 text-center border border-transparent hover:border-current transition-all duration-300 h-full flex flex-col justify-center group relative overflow-hidden`}
                            >
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${slot.hoverBg} -z-10`} />

                                <div className={`inline-flex mx-auto items-center justify-center w-10 h-10 rounded-full mb-3 ${slot.border.includes('teal') ? 'bg-teal-100 text-teal-700' : 'bg-amber-100 text-amber-700'} group-hover:bg-white/20 group-hover:text-white transition-colors`}>
                                    <Clock className="w-5 h-5" />
                                </div>

                                <div className={`font-bold text-xl mb-1 ${slot.border.includes('teal') ? 'text-teal-700' : 'text-brand-primary-dark'} group-hover:text-white transition-colors`}>
                                    {slot.time}
                                </div>
                                <h4 className="font-bold text-brand-dark text-lg mb-2 group-hover:text-white transition-colors">{slot.title}</h4>
                                <p className="text-sm text-brand-text-muted group-hover:text-white/90 transition-colors">{slot.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/book-class"
                        className="inline-flex items-center text-brand-primary font-bold hover:text-brand-primary-dark transition-colors group"
                    >
                        <span className="border-b-2 border-brand-primary/30 group-hover:border-brand-primary pb-0.5 transition-all">View Full Schedule & Book</span>
                        <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </Section>
    );
}
