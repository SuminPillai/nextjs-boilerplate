"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SanskritVerseProps {
    sanskrit: string;
    transliteration: string;
    translation: string;
    className?: string;
    compact?: boolean;
    lightMode?: boolean;
}

export function SanskritVerse({
    sanskrit,
    transliteration,
    translation,
    className,
    compact = false,
    lightMode = false,
}: SanskritVerseProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(
                "relative rounded-xl overflow-hidden",
                compact ? "p-4" : "p-6 md:p-8",
                lightMode ? "bg-white/10 backdrop-blur-sm border border-white/10" : "bg-gradient-to-br from-amber-50 to-orange-50",
                className
            )}
        >
            {/* Decorative background */}
            {!lightMode && <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-50" />}
            <div className={cn("absolute inset-0 border-l-4", lightMode ? "border-brand-primary/50" : "border-brand-primary")} />

            {/* Content */}
            <div className="relative space-y-3">
                {/* Sanskrit text */}
                <p
                    className={cn(
                        "font-serif text-shadow-soft",
                        compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl",
                        lightMode ? "text-white" : "text-brand-dark"
                    )}
                    style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                >
                    {sanskrit}
                </p>

                {/* Transliteration */}
                <p
                    className={cn(
                        "italic",
                        compact ? "text-sm md:text-base" : "text-base md:text-lg",
                        lightMode ? "text-gray-300" : "text-brand-text-muted"
                    )}
                >
                    {transliteration}
                </p>

                {/* Translation */}
                <p
                    className={cn(
                        "border-t pt-3",
                        compact ? "text-sm md:text-base" : "text-base md:text-lg",
                        lightMode ? "text-gray-100 border-white/20" : "text-brand-text border-amber-200"
                    )}
                >
                    {translation}
                </p>
            </div>

            {/* Decorative corner accent */}
            {!lightMode && <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-bl-full" />}
        </motion.div>
    );
}

interface SanskritVerseInlineProps {
    sanskrit: string;
    transliteration: string;
    translation: string;
}

export function SanskritVerseInline({
    sanskrit,
    transliteration,
    translation,
}: SanskritVerseInlineProps) {
    return (
        <div className="inline-block">
            <span
                className="font-serif text-brand-primary text-lg"
                style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
            >
                {sanskrit}
            </span>
            <span className="text-sm text-brand-text-muted italic ml-2">
                ({transliteration})
            </span>
            {translation && (
                <span className="block text-sm text-brand-text mt-1">
                    {translation}
                </span>
            )}
        </div>
    );
}
