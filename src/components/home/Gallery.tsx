"use client";

import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";

// Using a mix of images from the analysis
const galleryImages = [
    "/images/advanced-pranayama-3.webp",
    "/images/yoga-hall.webp",
    "/images/client-1.webp",
    "/images/client-2.webp",
    "/images/client-3.webp",
    "/images/img-0230.webp",
    "/images/img-0236.webp",
    "/images/pranayama-retreat.webp"
];

export default function Gallery() {
    return (
        <Section id="gallery" className="bg-brand-base relative py-24 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('/img/pattern.png')] bg-repeat opacity-[0.05] mix-blend-multiply pointer-events-none" />

            <div className="text-center mb-16 relative z-10">
                <ScrollReveal>
                    <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded-full text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
                        Visual Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display">
                        Life at Anvantadrishti
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-brand-text-muted font-light">
                        Moments of connection, practice, and joy from our ashram in the Himalayas.
                    </p>
                </ScrollReveal>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 relative z-10 px-4 md:px-0">
                {galleryImages.map((src, index) => (
                    <ScrollReveal key={index} delay={index * 0.05} className={`group overflow-hidden rounded-2xl relative aspect-square shadow-lg ${index % 3 === 0 ? 'md:row-span-2' : ''}`}>
                        {/* Note: Row span logic requires masonary layout support which grid doesn't do perfectly without plugins, sticking to simple grid for stability but adding aspect ratio variation if images supported it. For now keeping aspect-square for uniformity or we can use object-cover */}
                        <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
                            <span className="text-white text-sm font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 flex items-center gap-2">
                                <Instagram className="w-4 h-4" /> View on Insta
                            </span>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            <div className="text-center relative z-10">
                <div className="inline-block p-1 rounded-full bg-gradient-to-r from-brand-primary/50 to-transparent">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-dark rounded-full font-bold hover:bg-orange-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        View Full Gallery <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </Section>
    );
}
