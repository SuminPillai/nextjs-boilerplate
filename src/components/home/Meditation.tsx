"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Meditation() {
    return (
        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax-like fix */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/meditation.webp"
                    alt="Morning meditation session overlooking the Ganges at Anantadrishti Yoga in Rishikesh"
                    fill
                    className="object-cover"
                    priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay" />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <ScrollReveal>
                    <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
                        Inner Peace
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold font-display mb-8 drop-shadow-lg tracking-tight">
                        Journey Inward
                    </h2>

                    <div className="max-w-3xl mx-auto mb-12">
                        <p className="text-2xl md:text-3xl font-light italic font-serif leading-relaxed drop-shadow-md text-white/90">
                            "Meditation is not a practice mode;<br />it is a quality of existence."
                        </p>
                        <div className="w-24 h-px bg-white/50 mx-auto my-8" />
                        <p className="text-lg md:text-xl font-sans font-light text-white/80 max-w-2xl mx-auto">
                            Join our guided meditation sessions to cultivate mindfulness, clarity, and deep inner silence amidst the Himalayan energy.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button asChild size="lg" className="bg-white text-brand-dark hover:bg-brand-ase hover:text-brand-primary border-none text-lg px-10 py-7 rounded-full shadow-2xl transition-all transform hover:scale-105 hover:shadow-white/20">
                            <Link href="/meditation">
                                Discover Techniques
                            </Link>
                        </Button>
                        <Link href="/contact" className="text-white font-bold hover:text-brand-primary transition-colors border-b border-white/30 hover:border-brand-primary pb-1">
                            Join a Session
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
