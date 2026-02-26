"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ContactHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-brand-dark text-white overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0 bg-[url('/img/hero-pattern.svg')] opacity-10 bg-cover bg-center mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/70 to-brand-dark z-0" />

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-brand-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 backdrop-blur-sm">
                        Connect With Us
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 drop-shadow-2xl">
                        Get In Touch
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="max-w-2xl mx-auto"
                >
                    <p className="text-lg md:text-xl text-stone-200 font-light leading-relaxed drop-shadow-lg">
                        We would love to hear from you. Whether you have a question about our classes, retreats, or just want to say hello, we are here for you.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
