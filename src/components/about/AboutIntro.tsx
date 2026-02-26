"use client";

import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function AboutIntro() {
    return (
        <Section className="bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/img/pattern.png')] bg-repeat opacity-[0.03] pointer-events-none" />

            <ScrollReveal>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-10 leading-tight">
                        Understanding <span className="text-brand-primary italic font-serif">Anantadrishti</span> in Oneself
                    </h2>

                    <div className="prose prose-lg prose-stone mx-auto text-left md:text-justify text-brand-text-muted font-light leading-loose">
                        <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-brand-primary first-letter:mr-2 event-none">
                            Anantadrishti Yoga School is a space dedicated to the holistic understanding of Yoga as a way of life, not merely a physical discipline. Rooted in the ancient wisdom of Indian philosophy, our approach integrates <strong className="font-medium text-brand-dark">Hatha Yoga, Pranayama, Meditation, Yogic Ethics, Bhakti (devotion), and Spiritual Inquiry</strong>, guiding the seeker toward inner clarity.
                        </p>
                        <p>
                            The word Anantadrishti means “Infinite Vision”—the vision that transcends limitations of body, mind, and ego. Through disciplined practice and right understanding, yoga becomes a journey from the finite to the infinite.
                        </p>

                        <div className="my-12 relative group">
                            <div className="absolute inset-0 bg-amber-50 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>
                            <blockquote className="relative bg-white border border-amber-100 p-8 md:p-10 rounded-2xl shadow-sm text-center">
                                <p className="text-3xl font-serif text-brand-dark mb-4 text-brand-primary">“योगश्चित्तवृत्तिनिरोधः”</p>
                                <p className="text-lg text-stone-500 italic mb-2">(Yogaś citta-vṛtti-nirodhaḥ)</p>
                                <p className="text-xl font-medium text-brand-dark mb-6">Yoga is the stilling of the fluctuations of the mind.</p>
                                <footer className="text-xs font-bold text-brand-primary uppercase tracking-widest border-t border-amber-100 pt-4 inline-block px-4">
                                    — Yoga Sutra of Patanjali (1.2)
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </Section>
    );
}
