"use client";

import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function VideoTestimonials() {
    const videos = [
        {
            id: "QdMQu4qadlI",
            title: "Anantadrishti Yoga Student Review",
        },
        {
            id: "YIoBJKeMOqM",
            title: "Anantadrishti Yoga Experience",
        },
    ];

    return (
        <Section id="video-testimonials" className="bg-brand-base py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-80" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollReveal>
                        <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                            Visual Stories
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 font-display">
                            Hear From Our Community
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-brand-text-muted font-light">
                            Real experiences from students who have journeyed with us.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {videos.map((video, index) => (
                        <ScrollReveal key={video.id} delay={index * 0.1} className="w-full">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                ></iframe>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}
