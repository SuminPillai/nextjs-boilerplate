"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phases = [
    { duration: 2000, text: "Prepare...", scale: 0.6 },
    { duration: 4000, text: "Breathe In...", scale: 1 },
    { duration: 2000, text: "Hold...", scale: 1 },
    { duration: 6000, text: "Breathe Out...", scale: 0.6 },
];

export default function BreathingPortal() {
    const [isBreathing, setIsBreathing] = useState(false);
    const [phaseIndex, setPhaseIndex] = useState(0);
    const [circleScale, setCircleScale] = useState(0.6);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const cycle = useCallback((index: number) => {
        const phase = phases[index];
        setPhaseIndex(index);
        setCircleScale(phase.scale);

        timerRef.current = setTimeout(() => {
            const nextIndex = (index + 1) % phases.length;
            cycle(nextIndex);
        }, phase.duration);
    }, []);

    const startBreathing = () => {
        setIsBreathing(true);
        cycle(0);
    };

    const stopBreathing = () => {
        setIsBreathing(false);
        if (timerRef.current) clearTimeout(timerRef.current);
        setPhaseIndex(0);
        setCircleScale(0.6);
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    return (
        <section className="py-24 bg-brand-base relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('/img/pattern.png')] bg-repeat" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 text-amber-300">
                        Meditation Portal
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-dark mb-4">
                        Breathe With Us
                    </h2>
                    <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">
                        Follow the breathing circle to calm your mind. Inhale as it expands, exhale as it contracts.
                    </p>
                </div>

                {/* Breathing Circle */}
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-amber-500/20" />

                        {/* Animated breathing circle */}
                        <motion.div
                            className="w-48 h-48 rounded-full bg-gradient-to-br from-brand-primary/40 to-amber-400/20 border-2 border-amber-400/50 flex items-center justify-center backdrop-blur-sm"
                            animate={{
                                scale: isBreathing ? circleScale : 0.6,
                            }}
                            transition={{
                                duration: isBreathing ? phases[phaseIndex].duration / 1000 : 0.5,
                                ease: "easeInOut",
                            }}
                        >
                            {/* Inner glow */}
                            <motion.div
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400/30 to-brand-primary/20"
                                animate={{
                                    scale: isBreathing ? circleScale : 0.6,
                                    opacity: isBreathing ? [0.5, 1, 0.5] : 0.5,
                                }}
                                transition={{
                                    duration: isBreathing ? phases[phaseIndex].duration / 1000 : 0.5,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>

                        {/* Rotating dots */}
                        {isBreathing && (
                            <motion.div
                                className="absolute inset-0"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                            >
                                {[0, 90, 180, 270].map((deg) => (
                                    <div
                                        key={deg}
                                        className="absolute w-2 h-2 bg-amber-400 rounded-full"
                                        style={{
                                            top: "50%",
                                            left: "50%",
                                            transform: `rotate(${deg}deg) translateY(-125px) translate(-50%, -50%)`,
                                        }}
                                    />
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* Phase text */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={isBreathing ? phaseIndex : "idle"}
                            className="text-2xl font-serif text-brand-primary italic h-10"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            aria-live="polite"
                        >
                            {isBreathing ? phases[phaseIndex].text : "Breathe"}
                        </motion.p>
                    </AnimatePresence>

                    {/* Toggle button */}
                    <button
                        onClick={isBreathing ? stopBreathing : startBreathing}
                        className={`px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${isBreathing
                                ? "bg-stone-500 hover:bg-stone-600"
                                : "bg-brand-primary hover:bg-brand-primary-dark"
                            }`}
                        aria-pressed={isBreathing}
                    >
                        {isBreathing ? "Stop Guide" : "Start Breathing Guide"}
                    </button>
                </div>
            </div>
        </section>
    );
}
