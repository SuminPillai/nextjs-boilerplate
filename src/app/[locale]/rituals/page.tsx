"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { SanskritVerse } from "@/components/ui/SanskritVerse"
import { WisdomLinks } from "@/components/ui/WisdomLinks"
import { Flame, Flower2, Music, Sun, Moon, Sparkles, BookOpen, Heart, Bell } from "lucide-react"

const rituals = [
    {
        title: "Havan (Fire Ceremony)",
        desc: "A sacred Vedic ritual invoking Agni (Fire) to purify the atmosphere and mind. Offerings of ghee and herbs are made with mantras.",
        icon: Flame,
        color: "text-amber-500",
        bg: "bg-amber-50",
    },
    {
        title: "Ganga Aarti",
        desc: "A devotional offering to the sacred river Ganga at sunset. Lamps are lit, bells ring, and chants fill the air in gratitude.",
        icon: Sparkles,
        color: "text-blue-500",
        bg: "bg-blue-50",
    },
    {
        title: "Kirtan & Bhajan",
        desc: "Group chanting of mantras and devotional songs. Opens the heart chakra and induces a meditative state of joy.",
        icon: Music,
        color: "text-purple-500",
        bg: "bg-purple-50",
    },
    {
        title: "Puja (Worship)",
        desc: "Ceremonial worship of deities using flowers, incense, and offerings to cultivate devotion and surrender.",
        icon: Flower2,
        color: "text-rose-500",
        bg: "bg-rose-50",
    },
]

export default function RitualsPage() {
    return (
        <main className="min-h-screen bg-brand-base">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-brand-base text-brand-dark overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/img/extern/havan.jpg"
                        alt="Sacred Vedic Havan fire ceremony at Anantadrishti Yoga in Rishikesh"
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
                        <span className="inline-block py-1.5 px-4 rounded-full bg-amber-100 text-amber-800 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-amber-200">
                            Sacred Traditions
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight drop-shadow-sm">
                            Vedic<br />
                            <span className="text-amber-700">Rituals</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-text-muted mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                            "अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्"<br />
                            <span className="text-lg opacity-90 mt-2 block">
                                Connecting to the divine through ancient ceremonies of fire, sound, and devotion.
                            </span>
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base font-medium">
                            <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                <Flame className="w-4 h-4 text-amber-600" /> Daily Havan
                            </div>
                            <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                <Sparkles className="w-4 h-4 text-amber-600" /> Ganga Aarti
                            </div>
                            <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                <Music className="w-4 h-4 text-amber-600" /> Kirtan
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
                            Purification of Spirit
                        </h2>
                        <div className="prose prose-lg text-brand-text-muted leading-relaxed space-y-6">
                            <p>
                                Rituals (Yajña) are an integral part of the yogic path. They are not mere ceremonies but powerful tools to purify the mind, cleanse the environment, and connect with the cosmic energy.
                            </p>
                            <p>
                                At Anantadrishti, we maintain the sanctity of ancient Vedic traditions. Our days begin with the Havan (fire ceremony) and end with gratitude to Mother Ganga.
                            </p>
                            <blockquote className="italic text-amber-600 border-l-4 border-amber-500 pl-6 my-8 py-2 bg-amber-50/50 rounded-r-lg">
                                &quot;Yajña is the navel of the universe.&quot;
                                <br />
                                <span className="text-sm font-semibold opacity-80 not-italic mt-1 block">- Atharva Veda</span>
                            </blockquote>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-amber-100 to-orange-100 rounded-[2rem] transform rotate-2 opacity-70" />
                        <Image
                            src="/img/extern/havan.jpg"
                            alt="Sacred Havan fire ceremony at Anantadrishti Yoga ashram in Rishikesh, India"
                            width={600}
                            height={800}
                            className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[3/4]"
                        />
                    </motion.div>
                </div>
            </Section>

            {/* Rituals Grid */}
            <Section variant="light" pattern="lotus">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                            Sacred Offerings
                        </h2>
                        <p className="text-brand-text-muted text-lg">Daily practices of devotion and purification</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {rituals.map((item, i) => (
                            <Card key={i} variant="default" className="p-8 flex gap-6 items-start hover:shadow-lg transition-shadow border-t-4 border-transparent hover:border-amber-400">
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

            {/* Vedic Wisdom */}
            <Section className="bg-brand-base text-brand-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern-mandala-dark.png')] opacity-10" />

                <div className="relative z-10 container mx-auto px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-white/20">
                            <BookOpen className="w-4 h-4 text-amber-400" />
                            <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Vedic Wisdom</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                            Ancient Chants
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SanskritVerse
                                sanskrit="ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ।"
                                transliteration="Om Asato Ma Sadgamaya | Tamaso Ma Jyotirgamaya | Mrityorma Amritam Gamaya |"
                                translation="Lead me from the unreal to the real. Lead me from darkness to light. Lead me from death to immortality."
                                lightMode={true}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SanskritVerse
                                sanskrit="ॐ पूर्णमदः पूर्णमिदं पूर्णात् पूर्णमुदच्यते ।"
                                transliteration="Om Purnamadah Purnamidam Purnaat Purnamudachyate |"
                                translation="That is full; this is full. From fullness, fullness comes out."
                                lightMode={true}
                            />
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Experience Section */}
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
                                    src="/img/extern/outdoor-yoga-6.jpg"
                                    alt="Evening Ganga Aarti ceremony on the banks of the Ganges in Rishikesh"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <h3 className="text-2xl font-bold mb-2">Ganga Aarti</h3>
                                        <p className="opacity-90">Every evening at sunset</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display">
                                An Experience of Devotion
                            </h2>
                            <p className="text-lg text-brand-text-muted mb-6 leading-relaxed">
                                Join us in these sacred practices. Whether you are chanting mantras for the first time or are a seasoned practitioner, the energy of group devotion is palpable and transformative.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-brand-dark font-medium">
                                    <Bell className="w-5 h-5 text-amber-500" /> Morning Fire Ceremony (Havan)
                                </li>
                                <li className="flex items-center gap-3 text-brand-dark font-medium">
                                    <Sun className="w-5 h-5 text-amber-500" /> Surya Namaskar with Mantras
                                </li>
                                <li className="flex items-center gap-3 text-brand-dark font-medium">
                                    <Moon className="w-5 h-5 text-amber-500" /> Full Moon Meditations
                                </li>
                            </ul>
                            <Link
                                href="/contact"
                                className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all hover:shadow-amber-500/30 hover:-translate-y-1"
                            >
                                Experience Ashram Life
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
