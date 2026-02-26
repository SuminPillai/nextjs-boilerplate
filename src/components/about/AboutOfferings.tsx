"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function AboutOfferings() {
    const offerings = [
        {
            icon: "🧘",
            title: "Hatha Yoga",
            desc: "Basic to Advanced alignment, strength, stability, and awareness."
        },
        {
            icon: "🌬️",
            title: "Advanced Pranayama",
            desc: "Regulation of prāṇa for inner balance, vitality, and higher states of consciousness."
        },
        {
            icon: "👁️",
            title: "Meditation",
            desc: "Chakra Awareness, expansion of consciousness, and cultivation of inner silence."
        },
        {
            icon: "📚",
            title: "Philosophy & Ethics",
            desc: "Wisdom from Yoga Sutras, Bhagavad Gita, and Upanishads applied to modern life."
        },
        {
            icon: "🙏",
            title: "Satsang & Yajna",
            desc: "Reflective spiritual dialogue, Fire Ceremonies (Havan), and Nitya Puja."
        },
        {
            icon: "🎓",
            title: "Teacher Training",
            desc: "Internationally certified 100h, 200h, and 300h TTC programs and immersive retreats."
        }
    ];

    return (
        <Section className="bg-brand-surface relative overflow-hidden py-24">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-white border border-brand-dark/5 rounded-full text-brand-text-muted text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                            Curriculum & Practice
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">What We Offer</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-brand-primary to-transparent mx-auto rounded-full"></div>
                        <p className="max-w-2xl mx-auto mt-6 text-lg text-brand-text-muted font-light">
                            A holistic spectrum of yogic practices designed to purify the body, calm the mind, and awaken the spirit.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {offerings.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <Card variant="default" className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/50 bg-white/60 backdrop-blur-md text-center p-8 group h-full flex flex-col items-center rounded-3xl">
                                <span className="text-5xl mb-6 block transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 filter drop-shadow-md grayscale group-hover:grayscale-0">{item.icon}</span>
                                <h3 className="text-xl font-bold text-brand-dark mb-4 font-display group-hover:text-brand-primary transition-colors">{item.title}</h3>
                                <p className="text-brand-text-muted leading-relaxed font-light">{item.desc}</p>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal>
                    <div className="mt-24 text-center">
                        <div className="inline-block bg-white/80 backdrop-blur-md px-10 py-8 rounded-[2rem] border border-brand-primary/10 shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-3xl">
                            <div className="w-12 h-1 bg-brand-primary mx-auto mb-6 rounded-full opacity-50"></div>
                            <p className="text-2xl md:text-3xl font-display text-brand-dark mb-4 leading-normal">
                                “प्राणो हि भगवान् सर्वे प्राणे तिष्ठन्ति देवताः”
                            </p>
                            <p className="text-stone-500 italic mb-4 font-serif text-lg">(Prāṇo hi bhagavān sarve prāṇe tiṣṭhanti devatāḥ)</p>
                            <span className="text-brand-primary-dark font-bold tracking-widest uppercase text-xs md:text-sm border-t border-brand-primary/10 pt-4 block">
                                Prāṇa itself is divine; all energies reside within it.
                            </span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </Section>
    );
}
