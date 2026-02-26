"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Shield, Award, CheckCircle2 } from "lucide-react";

export default function Partners() {
    const certifications = [
        {
            name: "Yoga Alliance RYS 200",
            description: "Registered Yoga School",
            icon: Award,
            color: "text-brand-primary",
            bg: "bg-amber-50"
        },
        {
            name: "Yoga Alliance RYS 300",
            description: "Advanced Training",
            icon: Award,
            color: "text-brand-primary",
            bg: "bg-amber-50"
        },
        {
            name: "Continuing Education Provider",
            description: "YACEP Certified",
            icon: CheckCircle2,
            color: "text-green-600",
            bg: "bg-green-50"
        },
    ];

    return (
        <Section className="bg-gradient-to-b from-white to-amber-50/20 py-20 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.4] bg-[url('/img/pattern.png')] bg-repeat mix-blend-multiply pointer-events-none" />

            <ScrollReveal>
                <div className="text-center mb-10 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-green-100/50 text-green-800 rounded-full text-sm font-bold border border-green-200/50 mb-6 shadow-sm">
                        <Shield className="w-4 h-4" />
                        Certifications & Accreditations
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-2">
                        Internationally Recognized Training
                    </h2>
                    <p className="text-brand-text-muted font-light">Global standards for global teachers</p>
                </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4 relative z-10">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 text-center hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 group"
                    >
                        <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl ${cert.bg} ${cert.color} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                            <cert.icon className="w-8 h-8" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-bold text-brand-dark mb-2 text-lg font-display">{cert.name}</h3>
                        <p className="text-sm text-brand-text-muted font-medium">{cert.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Yoga Alliance Explanation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12 text-center max-w-3xl mx-auto px-4 relative z-10"
            >
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-brand-dark/5">
                    <p className="text-brand-text-muted text-sm md:text-base leading-relaxed">
                        <strong className="text-brand-dark font-serif text-lg text-brand-primary">Yoga Alliance</strong> is the largest nonprofit association representing the yoga community worldwide.
                        Our <strong className="text-brand-dark font-medium">RYS (Registered Yoga School)</strong> status means you can register as an{" "}
                        <strong className="text-brand-dark font-medium">RYT (Registered Yoga Teacher)</strong> upon completing our program,
                        allowing you to teach yoga professionally anywhere in the world.
                    </p>
                </div>
            </motion.div>
        </Section>
    );
}
