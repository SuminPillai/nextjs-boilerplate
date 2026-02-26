"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";

export default function Testimonials() {
    const reviews = [
        {
            name: "Sarah Jenkins",
            initial: "S",
            date: "2 weeks ago",
            text: "A truly transformative experience. The teachers are authentic, knowledgeable, and supportive. I came here looking for peace and found so much more. The atmosphere in Rishikesh is magical, and this school is the perfect place to immerse yourself in yoga.",
            color: "bg-purple-100 text-purple-600",
        },
        {
            name: "Michael Tan",
            initial: "M",
            date: "a month ago",
            text: "I deepened my practice significantly here. The holistic approach combining Hatha yoga, pranayama, and philosophy was exactly what I needed. The food was nourishing and the location is breathtaking. Highly recommended!",
            color: "bg-blue-100 text-blue-600",
        },
        {
            name: "Emily Roberts",
            initial: "E",
            date: "2 months ago",
            text: "The philosophy classes blew my mind. It wasn't just physical exercise; it was a deep dive into the soul. I am forever grateful to the Anantadrishti family.",
            color: "bg-green-100 text-green-600",
        },
    ];

    return (
        <Section id="testimonials" className="relative overflow-hidden py-24">
            {/* Background Texture via CSS/Image */}
            <div className="absolute inset-0 bg-[url('/img/pattern.png')] bg-repeat opacity-5 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-brand-base/20 pointer-events-none" />

            <div className="text-center mb-20 relative z-10">
                <ScrollReveal>
                    <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-700 border border-amber-100 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                        Community Voices
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display">
                        What Our Students Say
                    </h2>
                    <p className="max-w-xl mx-auto text-lg text-brand-text-muted font-light mb-8">
                        Stories of transformation from our beloved global family.
                    </p>

                    <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-brand-dark/5">
                        <div className="flex text-amber-400 gap-1">
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                            <Star className="w-5 h-5 fill-current" />
                        </div>
                        <span className="text-sm font-bold text-brand-dark">Rated 4.9/5 on Google Reviews</span>
                    </div>
                </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10 px-4">
                {reviews.map((review, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                        <div className="h-full flex flex-col p-8 rounded-[2rem] bg-white border border-brand-dark/5 shadow-sm hover:shadow-xl transition-all duration-500 relative group">
                            {/* Quote Icon */}
                            <div className="absolute top-8 right-8 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors">
                                <Quote className="w-12 h-12 fill-current" />
                            </div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center font-bold text-xl shadow-inner`}>
                                    {review.initial}
                                </div>
                                <div>
                                    <div className="font-bold text-brand-dark font-display text-lg">{review.name}</div>
                                    <div className="flex items-center gap-2 text-xs text-brand-text-muted font-medium">
                                        <div className="flex text-amber-400">
                                            <Star className="w-3 h-3 fill-current" />
                                            <Star className="w-3 h-3 fill-current" />
                                            <Star className="w-3 h-3 fill-current" />
                                            <Star className="w-3 h-3 fill-current" />
                                            <Star className="w-3 h-3 fill-current" />
                                        </div>
                                        <span>• {review.date}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-brand-text-muted text-base leading-relaxed flex-grow italic font-light relative z-10">
                                "{review.text}"
                            </p>

                            <div className="mt-6 pt-6 border-t border-brand-dark/5 flex justify-between items-center opacity-70 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs font-bold text-brand-text-muted uppercase tracking-wider">Verified Student</span>
                                <div className="w-5 h-5 opacity-50 grayscale group-hover:grayscale-0 transition-all">
                                    <img src="/img/google-logo.svg" alt="Google" onError={(e) => e.currentTarget.style.display = 'none'} />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            <div className="text-center mt-12 relative z-10">
                <Link
                    href="/reviews"
                    className="inline-flex items-center text-brand-primary font-bold hover:text-brand-primary-dark transition-colors border-b border-transparent hover:border-current pb-0.5"
                >
                    Read All Reviews on Google <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </Section>
    );
}
