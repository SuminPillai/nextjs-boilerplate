"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { SanskritVerse } from "@/components/ui/SanskritVerse"
import { WisdomLinks } from "@/components/ui/WisdomLinks"
import { BookOpen, Sparkles, Brain, Infinity as InfinityIcon, Lightbulb, Scroll, Users, Heart } from "lucide-react"

const philosophies = [
    {
        title: "Patañjali Yoga Sūtras",
        desc: "The classical guide to Raja Yoga, outlining the Eight Limbs (Ashtanga) for mastering the mind and achieving Samadhi.",
        icon: Scroll,
        color: "text-indigo-500",
        bg: "bg-indigo-50",
    },
    {
        title: "Advaita Vedanta",
        desc: "The path of knowledge (Jnana Yoga) teaching non-duality. Realizing that the individual soul (Atman) is one with the Universal Reality (Brahman).",
        icon: InfinityIcon,
        color: "text-purple-500",
        bg: "bg-purple-50",
    },
    {
        title: "Bhagavad Gita",
        desc: "The divine song of duty, devotion, and action. It harmonizes Karma, Bhakti, and Jnana Yoga for a holistic spiritual life.",
        icon: BookOpen,
        color: "text-amber-500",
        bg: "bg-amber-50",
    },
    {
        title: "Hatha Yoga Pradipika",
        desc: "The foundational text on Hatha Yoga, detailing asanas, pranayama, mudras, and bandhas to prepare the body for higher meditation.",
        icon: Brain,
        color: "text-teal-500",
        bg: "bg-teal-50",
    },
]

export default function PhilosophyPage() {
    return (
        <main className="min-h-screen bg-brand-base">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-brand-base text-brand-dark overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/img/optimized/meditation.webp"
                        alt="Meditation and yoga philosophy study at Anantadrishti Yoga in Rishikesh"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-20 mix-blend-multiply grayscale"
                        priority
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-brand-base/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-base/90 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-100 text-indigo-800 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-indigo-200">
                            Ancient Wisdom
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight drop-shadow-sm">
                            Yoga Philosophy<br />
                            <span className="text-indigo-700">in Rishikesh</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-text-muted mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                            "स्वाध्यायादिष्टदेवतासंप्रयोगः"<br />
                            <span className="text-lg opacity-90 mt-2 block">
                                Understanding the nature of Self and Reality through timeless scriptures.
                            </span>
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base font-medium">
                            <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                <Scroll className="w-4 h-4 text-indigo-600" /> Yoga Sutras
                            </div>
                            <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                <InfinityIcon className="w-4 h-4 text-indigo-600" /> Vedanta
                            </div>
                            <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                <BookOpen className="w-4 h-4 text-indigo-600" /> Bhagavad Gita
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <Section className="bg-white">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display">
                            Beyond the Mat
                        </h2>
                        <div className="prose prose-lg text-brand-text-muted leading-relaxed space-y-6">
                            <p>
                                Yoga is often misunderstood as merely physical exercise. However, the physical practice (Asana) is just one of the Eight Limbs of Yoga. The true essence of Yoga lies in its philosophy—a roadmap to self-realization.
                            </p>
                            <p>
                                At Anantadrishti, we emphasize <span className="text-indigo-600 font-semibold">Svādhyāya</span> (self-study). We delve into ancient texts to understand the workings of the mind, the nature of suffering, and the path to liberation (Moksha).
                            </p>
                            <blockquote className="italic text-indigo-600 border-l-4 border-indigo-500 pl-6 my-8 py-2 bg-indigo-50/50 rounded-r-lg">
                                &quot;Yoga is the journey of the self, through the self, to the self.&quot;
                                <br />
                                <span className="text-sm font-semibold opacity-80 not-italic mt-1 block">- Bhagavad Gita</span>
                            </blockquote>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-100 to-purple-100 rounded-[2rem] transform rotate-2 opacity-70" />
                        <Image
                            src="/img/optimized/pranayama.webp"
                            alt="Students studying ancient yoga philosophy texts at Anantadrishti Yoga in Rishikesh"
                            width={600}
                            height={800}
                            className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[3/4]"
                        />
                    </motion.div>
                </div>
            </Section>

            {/* Core Philosophies Grid */}
            <Section variant="light" pattern="lotus">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                            Pillars of Wisdom
                        </h2>
                        <p className="text-brand-text-muted text-lg">The foundational texts we study</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {philosophies.map((item, i) => (
                            <Card key={i} variant="default" className="p-8 flex gap-6 items-start hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-indigo-400">
                                <div className={`p-4 rounded-xl ${item.bg} ${item.color} flex-shrink-0`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-dark mb-3 font-display">{item.title}</h3>
                                    <p className="text-brand-text-muted leading-relaxed">{item.desc}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Key Concepts */}
            <Section className="bg-brand-base text-brand-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern-mandala.png')] opacity-10" />

                <div className="relative z-10 container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-white/20">
                            <Lightbulb className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Core Concepts</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                            Wisdom for Living
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SanskritVerse
                                sanskrit="योगश्चित्तवृत्तिनिरोधः"
                                transliteration="Yogaś-citta-vṛtti-nirodhaḥ"
                                translation="Yoga is the cessation of the fluctuations of the mind. (Patanjali Yoga Sutras 1.2)"
                                lightMode={true}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SanskritVerse
                                sanskrit="तत्त्वमसि"
                                transliteration="Tat Tvam Asi"
                                translation="Thou Art That. (Chandogya Upanishad - You are one with the Divine)"
                                lightMode={true}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SanskritVerse
                                sanskrit="स्थितप्रज्ञस्य का भाषा"
                                transliteration="Sthita-prajñasya kā bhāṣā"
                                translation="Who is the one of steady wisdom? (Bhagavad Gita 2.54)"
                                lightMode={true}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SanskritVerse
                                sanskrit="अहिंसा सत्य अस्तेय"
                                transliteration="Ahimsa Satya Asteya"
                                translation="Non-violence, Truthfulness, Non-stealing. (Foundations of Yama)"
                                lightMode={true}
                            />
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Application */}
            <Section className="bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative order-2 md:order-1"
                        >
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/img/optimized/advanced pranayama.webp"
                                    alt="Yoga philosophy applied to daily practice at Anantadrishti Yoga School, Rishikesh"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <h3 className="text-2xl font-bold mb-2">Living Yoga</h3>
                                        <p className="opacity-90">Integrating wisdom into daily actions</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display">
                                Philosophy in Action
                            </h2>
                            <p className="text-lg text-brand-text-muted mb-6 leading-relaxed">
                                Philosophy is dry without practice. We teach how to apply these ancient insights to modern life—navigating relationships, managing stress, and finding purpose.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-brand-dark font-medium">
                                    <Brain className="w-5 h-5 text-indigo-500" /> Mind Management Techniques
                                </li>
                                <li className="flex items-center gap-3 text-brand-dark font-medium">
                                    <Heart className="w-5 h-5 text-indigo-500" /> Cultivating Compassion (Maitri)
                                </li>
                                <li className="flex items-center gap-3 text-brand-dark font-medium">
                                    <Users className="w-5 h-5 text-indigo-500" /> Ethics used in Daily Living
                                </li>
                            </ul>
                            <Link
                                href="/courses/200-hour-yoga-ttc"
                                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all hover:shadow-indigo-500/30 hover:-translate-y-1"
                            >
                                Study with Us
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Wisdom Links */}
            <WisdomLinks />
        </main>
    )
}
