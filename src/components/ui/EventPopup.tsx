"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

interface EventData {
    title: string;
    subtitle: string;
    date: string;
    location: string;
    ctaText: string;
    ctaLink: string;
}

const currentEvent: EventData = {
    title: "Advanced Pranayama Immersion",
    subtitle: "3, 5 or 7-Day intensive in Rishikesh",
    date: "March - June 2026",
    location: "Rishikesh, India",
    ctaText: "Learn More",
    ctaLink: "/retreats/advanced-pranayama-immersion",
};

export function EventPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already dismissed this event
        const dismissed = sessionStorage.getItem("event-popup-dismissed");
        if (dismissed) return;

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        sessionStorage.setItem("event-popup-dismissed", "true");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleDismiss}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed top-1/2 left-1/2 z-[201] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-100">
                            {/* Header gradient */}
                            <div className="bg-gradient-to-r from-brand-dark to-stone-800 p-6 relative">
                                <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-10" />
                                <button
                                    onClick={handleDismiss}
                                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                                    aria-label="Close popup"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                                <span className="inline-block px-3 py-1 bg-brand-primary/90 rounded-full text-xs font-bold tracking-wider text-white mb-3 uppercase">
                                    Upcoming Event
                                </span>
                                <h3 className="text-2xl font-bold font-serif text-white">
                                    {currentEvent.title}
                                </h3>
                                <p className="text-amber-200/80 mt-1 text-sm">
                                    {currentEvent.subtitle}
                                </p>
                            </div>

                            {/* Body */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-center gap-3 text-brand-text-muted">
                                    <Calendar className="w-5 h-5 text-brand-primary shrink-0" />
                                    <span className="text-sm font-medium">{currentEvent.date}</span>
                                </div>
                                <div className="flex items-center gap-3 text-brand-text-muted">
                                    <MapPin className="w-5 h-5 text-brand-primary shrink-0" />
                                    <span className="text-sm font-medium">{currentEvent.location}</span>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <Link
                                        href={currentEvent.ctaLink}
                                        onClick={handleDismiss}
                                        className="flex-1 bg-brand-primary hover:bg-brand-primary-dark text-white text-center py-3 rounded-xl font-semibold transition-colors shadow-md"
                                    >
                                        {currentEvent.ctaText}
                                    </Link>
                                    <button
                                        onClick={handleDismiss}
                                        className="px-6 py-3 rounded-xl border border-gray-200 text-brand-text-muted hover:bg-gray-50 font-medium transition-colors"
                                    >
                                        Later
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
