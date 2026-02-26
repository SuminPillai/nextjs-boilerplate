"use client";

import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ApproachIntention() {
    return (
        <Section className="bg-stone-50 py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-stretch relative z-10 px-4">
                {/* Approach */}
                <ScrollReveal>
                    <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl shadow-brand-dark/5 border border-stone-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-500">
                        <span className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-4 block">Methodology</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">Our Approach</h2>
                        <p className="text-brand-text-muted text-lg leading-relaxed mb-8 flex-grow font-light">
                            We believe true yoga begins inside—when breath becomes subtle, the mind becomes silent, and awareness becomes steady.
                        </p>

                        <blockquote className="border-l-4 border-teal-500 pl-6 italic my-6 bg-teal-50/30 p-8 rounded-r-2xl">
                            <p className="text-2xl font-serif text-teal-800 mb-2">“समत्वं योग उच्यते”</p>
                            <p className="text-stone-500 text-sm italic mb-2">(Samatvaṁ yoga ucyate)</p>
                            <p className="text-teal-700 font-medium text-lg">Equanimity is Yoga.</p>
                            <footer className="text-xs font-bold text-teal-600 mt-4 uppercase tracking-wider">— Bhagavad Gita 2.48</footer>
                        </blockquote>

                        <p className="text-stone-500 text-sm mt-auto italic border-t border-stone-100 pt-6">
                            Each practice session is designed to cultivate balance, discipline, and inner stillness, allowing practitioners to carry yogic awareness into daily life.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Intention */}
                <ScrollReveal delay={0.2}>
                    <div className="bg-brand-primary/5 p-10 md:p-12 rounded-[2.5rem] border border-brand-primary/10 flex flex-col h-full hover:bg-brand-primary/10 transition-colors duration-500">
                        <span className="text-brand-primary-dark font-bold tracking-widest uppercase text-xs mb-4 block">Purpose</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">Our Intention</h2>
                        <p className="text-brand-text-muted text-lg leading-relaxed mb-8 flex-grow font-light">
                            Anantadrishti Yoga School exists to nurture seekers, not followers; experiencers, not imitators. Our aim is to revive the authentic yogic tradition while guiding individuals toward their own inner guru.
                        </p>

                        <blockquote className="border-l-4 border-brand-primary pl-6 italic my-6 bg-amber-100/50 p-8 rounded-r-2xl">
                            <p className="text-2xl font-serif text-brand-primary-dark mb-2">“न हि ज्ञानेन सदृशं”</p>
                            <p className="text-stone-500 text-sm italic mb-2">(Na hi jñānena sadṛśaṁ)</p>
                            <p className="text-brand-primary-dark font-medium text-lg">There is nothing as purifying as true knowledge.</p>
                            <footer className="text-xs font-bold text-brand-primary-dark mt-4 uppercase tracking-wider">— Bhagavad Gita 4.38</footer>
                        </blockquote>
                    </div>
                </ScrollReveal>
            </div>

            <ScrollReveal>
                <div className="mt-24 text-center relative z-10 px-4">
                    <h3 className="text-sm font-bold text-brand-text-muted uppercase tracking-[0.3em] mb-6 opacity-60">
                        Anantadrishti Yoga School
                    </h3>
                    <p className="text-3xl md:text-5xl font-display font-bold text-brand-dark leading-tight max-w-5xl mx-auto">
                        Where Practice Becomes <span className="text-brand-primary italic font-serif">Prayer</span>,<br className="hidden md:block" />
                        Breath Becomes <span className="text-teal-600 italic font-serif">Awareness</span>,<br className="hidden md:block" />
                        and Vision Becomes <span className="text-brand-dark italic font-serif">Infinite</span>.
                    </p>
                </div>
            </ScrollReveal>
        </Section>
    );
}
