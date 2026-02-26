"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Users, Calendar, Star, Award } from "lucide-react";

interface StatItemProps {
    icon: React.ElementType;
    value: number;
    suffix?: string;
    label: string;
    delay?: number;
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    );
}

function StatItem({ icon: Icon, value, suffix = "", label, delay = 0 }: StatItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            className="text-center group relative p-6 rounded-3xl transition-all duration-300 hover:bg-white/40 hover:shadow-lg hover:backdrop-blur-sm"
        >
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-amber-100/80 to-orange-100/80 text-brand-primary shadow-inner group-hover:scale-110 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300 ring-1 ring-white/50">
                <Icon className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-brand-dark mb-3 font-display drop-shadow-sm">
                <CountUp value={value} suffix={suffix} />
            </div>
            <p className="text-brand-text-muted font-medium uppercase tracking-wide text-sm">{label}</p>
        </motion.div>
    );
}

export default function Stats() {
    return (
        <Section className="relative py-24 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-base via-white to-brand-base opacity-80" />
            <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-[0.03] mix-blend-multiply" />

            <div className="relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-amber-100/50 text-brand-primary-dark border border-amber-200/50 rounded-full text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
                            Why Choose Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-6">
                            Trusted by Practitioners Worldwide
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto opacity-50" />
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    <StatItem
                        icon={Users}
                        value={500}
                        suffix="+"
                        label="Graduates"
                        delay={0}
                    />
                    <StatItem
                        icon={Award}
                        value={200}
                        suffix="/500"
                        label="RYS Yoga Alliance"
                        delay={0.1}
                    />
                    <StatItem
                        icon={Calendar}
                        value={15}
                        suffix="+"
                        label="Experienced Gurus"
                        delay={0.2}
                    />
                    <StatItem
                        icon={Star}
                        value={4.9}
                        label="Google Rating"
                        delay={0.3}
                    />
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-wrap items-center justify-center gap-6 md:gap-10"
                >
                    <div className="group flex items-center gap-4 px-8 py-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:shadow-md hover:border-amber-100 transition-all duration-300">
                        <img
                            src="/img/yoga-alliance-badge.webp"
                            alt="Yoga Alliance RYS 200 certified school badge - Anantadrishti Yoga Rishikesh"
                            className="h-14 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                        <div className="text-left">
                            <p className="font-bold text-brand-dark text-sm font-display tracking-wide">Registered Yoga School</p>
                            <p className="text-xs text-brand-text-muted font-medium">RYS 200, RYS 300</p>
                        </div>
                    </div>

                    <div className="group flex items-center gap-4 px-8 py-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:shadow-md hover:border-green-100 transition-all duration-300">
                        <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                            <Star className="w-7 h-7 text-green-600/80 group-hover:text-green-600 transition-colors" fill="currentColor" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-brand-dark text-sm font-display tracking-wide">127 Google Reviews</p>
                            <p className="text-xs text-brand-text-muted font-medium">4.9 Average Rating</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
