"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SanskritVerse } from "@/components/ui/SanskritVerse";
import { BookOpen } from "lucide-react";

const techniques = [
    { name: "Nadi Shodhana", sanskrit: "नाडी शोधन", desc: "Alternate nostril breathing that balances the nervous system and purifies the energy channels" },
    { name: "Kapalabhati", sanskrit: "कपालभाति", desc: "Skull-shining breath that cleanses the respiratory system and energizes the mind" },
    { name: "Bhastrika", sanskrit: "भस्त्रिका", desc: "Bellows breath that increases metabolic rate and awakens kundalini energy" },
    { name: "Ujjayi", sanskrit: "उज्जायी", desc: "Victorious breath with gentle throat constriction for focus and calming" },
    { name: "Bhramari", sanskrit: "भ्रामरी", desc: "Humming bee breath that soothes the mind and relieves stress" },
    { name: "Sitali & Sitkari", sanskrit: "शीतली & सीत्कारी", desc: "Cooling breaths that reduce body heat and calm the nervous system" },
];

export default function PranayamaPage() {
    return (
        <main className="min-h-screen bg-brand-base">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-b from-sky-50 to-brand-base overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="text-6xl" aria-hidden="true">🌬️</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-brand-dark mb-6 font-display"
                    >
                        Pranayama Course in Rishikesh
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed mb-4 font-serif italic"
                    >
                        Master the Ancient Science of Yogic Breathing
                    </motion.p>
                    <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full" />
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
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 font-display">Master Your Breath</h2>
                            <div className="prose prose-lg text-brand-text-muted leading-relaxed space-y-4">
                                <p>
                                    Pranayama is the fourth limb of Patanjali&apos;s Ashtanga Yoga. The word comes from &quot;prana&quot; (life force) and &quot;ayama&quot; (extension/control). Through breath control, we gain mastery over the vital life force that flows through us.
                                </p>
                                <blockquote className="italic text-sky-600 border-l-4 border-sky-400 pl-4 my-6">
                                    &quot;तस्मिन् सति श्वासप्रश्वासयोर्गतिविच्छेदः प्राणायामः&quot;
                                    <br />
                                    Pranayama is the regulation of the incoming and outgoing breath.
                                    <br />
                                    <span className="text-sm">— Yoga Sutra 2.49</span>
                                </blockquote>
                                <p>
                                    Regular pranayama practice purifies the nadis (energy channels), calms the mind, increases vitality, and prepares the practitioner for meditation.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-sky-100 rounded-2xl transform -rotate-1" />
                            <Image
                                src="/images/pranayama.webp"
                                alt="Pranayama breathing technique class at Anantadrishti Yoga in Rishikesh, India"
                                width={600}
                                height={400}
                                className="relative rounded-xl shadow-lg w-full h-auto object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Classical Texts on Pranayama */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-sky-200">
                            <BookOpen className="w-4 h-4 text-sky-600" />
                            <span className="text-sm font-semibold text-sky-600">Classical Wisdom</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-4">
                            Ancient Teachings on Prāṇāyāma
                        </h2>
                        <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
                            Timeless wisdom from the Haṭha Yoga Pradīpikā
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <SanskritVerse
                                sanskrit="चले वाते चलं चित्तं निश्चले निश्चलं भवेत्"
                                transliteration="Cale vāte calaṃ cittaṃ niścale niścalaṃ bhavet"
                                translation="When the breath moves, the mind moves. When the breath becomes steady, the mind becomes steady."
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
                                sanskrit="प्राणायामेन युक्तेन सर्वरोगक्षयो भवेत्"
                                transliteration="Prāṇāyāmena yuktena sarva-roga-kṣayo bhavet"
                                translation="Proper practice of prāṇāyāma destroys all diseases."
                                compact
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto"
                    >
                        <SanskritVerse
                            sanskrit="योगी स्थाणुत्वमाप्नोति ततो वायुनिरोधनम्"
                            transliteration="Yogī sthāṇutvam āpnoti tato vāyu-nirodhanam"
                            translation="Therefore, the yogī should restrain the breath to attain steadiness."
                            compact
                        />
                    </motion.div>
                </div>
            </section>

            {/* Understanding Prana */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-sky-600 font-bold tracking-wider uppercase text-sm">Prāṇa Vidya</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display mb-4 mt-2">Understanding Vital Energy</h2>
                        <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
                            "Prāṇa" is not just breath; it is the master key to life. "Āyāma" means both control and expansion.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100">
                            <h3 className="text-2xl font-bold text-brand-dark mb-6 font-display">The 5 Prāṇas (Pañca Prāṇa)</h3>
                            <ul className="space-y-4">
                                {[
                                    { name: "Prāṇa", desc: "Inward moving energy (Head & Chest). governs intake & inspiration." },
                                    { name: "Apāna", desc: "Downward moving energy (Pelvis). governs elimination & creativity." },
                                    { name: "Samāna", desc: "Balancing energy (Navel). governs digestion & assimilation." },
                                    { name: "Udāna", desc: "Upward moving energy (Throat). governs speech & growth." },
                                    { name: "Vyāna", desc: "Circulating energy (Whole Body). governs circulation & movement." }
                                ].map((p, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span className="w-6 h-6 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center text-xs font-bold shrink-0 mt-1">{i + 1}</span>
                                        <div>
                                            <strong className="text-brand-dark block">{p.name}</strong>
                                            <span className="text-brand-text-muted text-sm">{p.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-sky-500"
                            >
                                <h4 className="font-bold text-lg text-brand-dark mb-2">Alpa-prāṇa vs Mahā-prāṇa</h4>
                                <p className="text-brand-text-muted">
                                    In Sanskrit, sounds are classified by breath volume. <strong>Alpa-prāṇa</strong> (little breath) sounds require minimal effort, while <strong>Mahā-prāṇa</strong> (great breath) sounds require a forceful expulsion of vital energy. This linguistic science mirrors the yogic science of energy management.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-500"
                            >
                                <h4 className="font-bold text-lg text-brand-dark mb-2">Therapeutic Benefits</h4>
                                <SanskritVerse
                                    sanskrit="प्राणायामात् क्षयं याति सर्वरोगसमुद्भवः"
                                    transliteration="Prāṇāyāmāt kṣayaṃ yāti sarva-roga-samudbhavaḥ"
                                    translation="Through Pranayama, the root causes of all diseases are destroyed."
                                    compact
                                    className="bg-transparent p-0 shadow-none border-0 mb-2"
                                />
                                <p className="text-sm text-brand-text-muted mt-2">— Gheraṇḍa Saṁhitā 5.77</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Techniques */}
            <section className="py-16 md:py-24 bg-sky-50/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display">Pranayama Techniques</h2>
                        <p className="text-brand-text-muted mt-2">Classical breathing practices we teach</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {techniques.map((technique, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg"
                            >
                                <h3 className="text-xl font-bold text-brand-dark mb-1">{technique.name}</h3>
                                <p className="text-sky-600 font-serif mb-3">{technique.sanskrit}</p>
                                <p className="text-brand-text-muted text-sm">{technique.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display">Benefits of Pranayama</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { icon: "🧠", text: "Improves mental clarity and focus" },
                            { icon: "💪", text: "Increases energy and vitality" },
                            { icon: "😌", text: "Reduces stress and anxiety" },
                            { icon: "🫁", text: "Strengthens respiratory system" },
                            { icon: "⚡", text: "Balances the nervous system" },
                            { icon: "🧘", text: "Prepares mind for meditation" },
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
                            >
                                <span className="text-2xl">{benefit.icon}</span>
                                <span className="text-brand-dark">{benefit.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pranayama Retreat CTA */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-sky-500 to-blue-500">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">3-Day Pranayama Retreat</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Immerse yourself in advanced breathing practices with our intensive pranayama retreat.
                    </p>
                    <Link
                        href="/retreats/3-day-pranayama-retreat"
                        className="inline-block bg-white text-sky-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-sky-50 transition-all shadow-lg"
                    >
                        View Pranayama Retreat
                    </Link>
                </div>
            </section>
        </main>
    );
}
