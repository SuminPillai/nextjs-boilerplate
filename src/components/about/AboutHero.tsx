"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";

export default function AboutHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-orange-50 via-amber-100 to-white text-brand-dark">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 bg-[url('/img/hero-pattern.svg')] opacity-5 bg-cover bg-center mix-blend-multiply"
            />

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-brand-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 backdrop-blur-sm">
                        Anantadrishti (Infinite Vision)
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight drop-shadow-sm">
                        ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-amber-600">ANANTADRISHTI</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    <p className="text-2xl md:text-4xl font-serif text-brand-dark/90 leading-relaxed mb-6 drop-shadow-sm">
                        “अनन्ते चक्षुषी धृत्वा सर्वं ब्रह्ममयं जगत् |<br className="hidden md:block" /> दृष्ट्वा तिष्ठति यः योगी अनन्तदृष्टियोग उच्यते ||”
                    </p>
                    <p className="text-sm md:text-base text-brand-text-muted font-light tracking-widest uppercase opacity-80">
                        (Anante chakshushi drutva sarvam Brhmamaya Jagat. Drustva tishtathi yaha yogii anantadrishtiyoga Uchhate.)
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="max-w-3xl mx-auto bg-white/60 backdrop-blur-md border border-white/40 p-8 md:p-10 rounded-3xl shadow-xl"
                >
                    <p className="text-lg md:text-xl text-brand-text-muted italic font-light leading-relaxed">
                        "The yogi who perceives the entire universe as filled with Brahman (the ultimate reality), with vision turned towards the infinite, is said to be practicing Anantadrṛṣṭiyoga."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
