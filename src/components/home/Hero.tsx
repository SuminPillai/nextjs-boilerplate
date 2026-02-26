"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import Link from "next/link";
import { useDictionary } from "@/components/providers/DictionaryProvider";

export function Hero() {
    const dict = useDictionary();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
            id="home"
        >
            {/* Background with Parallax */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <Image
                    src="/img/optimized/herosection.webp"
                    alt="Yoga students practicing asanas at Anantadrishti Yoga overlooking the Ganges in Rishikesh"
                    fill
                    sizes="100vw"
                    className="object-cover object-center scale-110"
                    priority
                    quality={80}
                />
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-brand-primary-dark/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-black/30" />
            </motion.div>

            {/* Hero Content */}
            <motion.div
                style={{ y: textY }}
                className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center h-full"
            >
                {/* Glassmorphic Container for Title */}
                <div className="p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl relative overflow-hidden group max-w-5xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 font-display text-white drop-shadow-2xl tracking-tight">
                        <motion.span
                            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-block"
                        >
                            {dict.hero.title1}
                        </motion.span>
                        <br />
                        <motion.span
                            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="inline-block text-brand-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4"
                        >
                            {dict.hero.title2}
                        </motion.span>
                    </h1>

                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent mx-auto my-8 opacity-80" />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg sm:text-xl md:text-2xl text-amber-100 font-serif italic tracking-wide text-shadow-soft max-w-4xl mx-auto mb-10"
                    >
                        {dict.hero.subtitle}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-12 flex flex-col sm:flex-row gap-6"
                >
                    <Link href="/about">
                        <AnimatedButton
                            size="lg"
                            className="text-lg px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-none shadow-lg hover:shadow-xl rounded-full transition-all duration-500"
                        >
                            {dict.hero.cta}
                        </AnimatedButton>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-white/60 text-xs tracking-[0.2em] uppercase font-medium">{dict.hero.scroll}</span>
                    <a aria-label="Scroll down" href="#about" className="block p-2">
                        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start p-1 backdrop-blur-sm">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-1 h-2 bg-white rounded-full"
                            />
                        </div>
                    </a>
                </div>
            </motion.div>

            {/* Decorative Wave Transition */}
            <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-[1px]">
                <div className="relative h-24 w-full overflow-hidden">
                    <svg
                        fill="none"
                        viewBox="0 0 1440 120"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute bottom-0 w-full h-full text-brand-base fill-current"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z" />
                    </svg>
                    <svg
                        fill="none"
                        viewBox="0 0 1440 120"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute bottom-0 w-full h-full text-brand-base fill-current opacity-30 bottom-2"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,80 C480,20 960,100 1440,40 L1440,120 L0,120 Z" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
