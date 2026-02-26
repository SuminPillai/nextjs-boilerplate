"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SanskritVerse } from "@/components/ui/SanskritVerse";
import { BookOpen } from "lucide-react";

export default function DevotionPage() {
    return (
        <main className="min-h-screen bg-brand-base">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-b from-rose-50 to-brand-base overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="text-6xl" aria-hidden="true">🙏</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-brand-dark mb-6 font-display"
                    >
                        Bhakti Yoga in Rishikesh
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed mb-4 font-serif italic"
                    >
                        The Path of Devotion, Kirtan & Love
                    </motion.p>
                    <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full" />
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 font-display">The Heart of Yoga</h2>
                            <div className="prose prose-lg text-brand-text-muted leading-relaxed space-y-4">
                                <p>
                                    Bhakti Yoga is the path of devotion, one of the four main paths of yoga alongside Jnana (knowledge), Karma (action), and Raja (meditation). It is the yoga of the heart, where love and devotion become the means of spiritual liberation.
                                </p>
                                <blockquote className="italic text-rose-600 border-l-4 border-rose-400 pl-4 my-6">
                                    &quot;भक्त्या मामभिजानाति यावान्यश्चास्मि तत्त्वतः&quot;
                                    <br />
                                    Through devotion, one comes to know Me in truth.
                                    <br />
                                    <span className="text-sm">— Bhagavad Gita 18.55</span>
                                </blockquote>
                                <p>
                                    At Anantadrishti Yoga, we integrate Bhakti practices into our daily schedule, believing that devotion purifies the heart and opens the door to deeper spiritual experiences.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-rose-100 rounded-2xl transform -rotate-1" />
                            <Image
                                src="/img/extern/herosection.jpg"
                                alt="Bhakti yoga kirtan and devotional practice at Anantadrishti Yoga ashram in Rishikesh"
                                width={600}
                                height={400}
                                className="relative rounded-xl shadow-lg w-full h-auto object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Practices */}
            <section className="py-16 md:py-24 bg-rose-50/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display">Bhakti Practices</h2>
                        <p className="text-brand-text-muted mt-2">Ways to cultivate devotion in daily life</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: "🎵", title: "Kirtan", desc: "Call-and-response devotional singing that opens the heart and creates community" },
                            { icon: "📿", title: "Japa", desc: "Repetition of sacred mantras using mala beads for meditation and focus" },
                            { icon: "🌺", title: "Puja", desc: "Ceremonial worship offering flowers, incense, and light to the Divine" },
                            { icon: "📖", title: "Svadhyaya", desc: "Study of sacred texts like Bhagavad Gita, Ramayana, and poetry of saints" },
                            { icon: "🙏", title: "Seva", desc: "Selfless service as an offering to the Divine through serving others" },
                            { icon: "🕉️", title: "Satsang", desc: "Gathering in the company of truth-seekers for spiritual discourse" },
                        ].map((practice, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg text-center"
                            >
                                <div className="text-4xl mb-4">{practice.icon}</div>
                                <h3 className="text-xl font-bold text-brand-dark mb-2">{practice.title}</h3>
                                <p className="text-brand-text-muted">{practice.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bhakti Wisdom */}
            <section className="py-16 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-rose-200">
                            <BookOpen className="w-4 h-4 text-rose-600" />
                            <span className="text-sm font-semibold text-rose-600">Sacred Teachings</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-4">
                            The Essence of Bhakti
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <SanskritVerse
                                sanskrit="सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज"
                                transliteration="Sarva-dharmān parityajya mām ekaṃ śaraṇaṃ vraja"
                                translation="Abandon all varieties of dharma and surrender unto Me alone."
                                compact
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <SanskritVerse
                                sanskrit="मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु"
                                transliteration="Man-manā bhava mad-bhakto mad-yājī māṃ namaskuru"
                                translation="Always think of Me, become My devotee, worship Me, and offer obeisance unto Me."
                                compact
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Yoga of Sound */}
            <section className="py-16 md:py-24 bg-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-rose-600 font-bold tracking-wider uppercase text-sm">Nāda Yoga</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-6 mt-2">
                                Kīrtana: The Yoga of Sound
                            </h2>
                            <p className="text-lg text-brand-text-muted mb-6">
                                "Nāma-smaraṇa-mātreṇa muktiḥ sambhavati dhruvam" — Through the mere remembrance of the Divine Name, liberation becomes possible.
                            </p>
                            <div className="space-y-4 text-brand-text-muted">
                                <p>
                                    At Anantadrishti, Kirtan is not just singing; it is a medicine for the mind. When we chant together, the ego softens, and the heart opens naturally.
                                </p>
                                <p>
                                    Experience the profound joy of collective chanting (Sankirtan) every evening as the sun sets over the Ganga.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-rose-50 p-8 rounded-2xl border border-rose-100 relative"
                        >
                            <div className="absolute top-4 right-4 text-6xl opacity-10">🕉️</div>
                            <h3 className="text-xl font-bold text-brand-dark mb-4">The Power of Mantra</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="text-rose-500 font-bold">1.</span>
                                    <span className="text-brand-text-muted"><strong>Calms the Mind:</strong> Repetitive sound vibrations soothe the nervous system.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-rose-500 font-bold">2.</span>
                                    <span className="text-brand-text-muted"><strong>Purifies Emotions:</strong> Transforms lower emotions into higher devotion (Bhavana).</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-rose-500 font-bold">3.</span>
                                    <span className="text-brand-text-muted"><strong>Connects Community:</strong> Dissolves barriers between partial selves.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Nitya Puja - Daily Devotion */}
            <section className="py-16 md:py-24 bg-brand-base">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-brand-primary font-semibold tracking-wider uppercase text-sm">Nitya Pūjā</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mt-2">Daily Rhythm of Grace</h2>
                        <p className="text-brand-text-muted mt-4 max-w-2xl mx-auto">
                            "Nityam bhagavatah seva bhaktih ucyate" — Constant service to the Divine is called true devotion.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-rose-100">
                        <div className="space-y-8">
                            {[
                                { time: "5:30 AM", activity: "Morning Aarti & Havan", desc: "Invoking the divine light to guide our day's practice." },
                                { time: "4:00 PM", activity: "Mantra Chanting", desc: "Purifying the mind with Vedic chants." },
                                { time: "5:30 PM", activity: "Evening Puja", desc: "Offering gratitude as the sun sets." },
                                { time: "6:00 PM", activity: "Bhajan & Kirtan", desc: "Merging individual consciousness into the collective heart." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                                    <div className="min-w-[80px] text-rose-600 font-bold text-lg">{item.time}</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-brand-dark mb-1">{item.activity}</h4>
                                        <p className="text-brand-text-muted">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-rose-400 to-pink-500">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">Experience Bhakti</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Join us for daily devotional practices and immerse yourself in the path of love.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-rose-500 px-10 py-4 rounded-full text-lg font-bold hover:bg-rose-50 transition-all shadow-lg"
                    >
                        Join Our Programs
                    </Link>
                </div>
            </section>
        </main >
    );
}
