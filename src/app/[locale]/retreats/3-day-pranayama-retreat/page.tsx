"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SanskritVerse } from "@/components/ui/SanskritVerse";
import { WisdomLinks } from "@/components/ui/WisdomLinks";
import { Check, Calendar, Wind, Brain, Activity, Clock, Heart, Coffee, Leaf, Moon } from "lucide-react";
import { CourseSchema } from "@/components/seo/JsonLd";

const schedule = [
    { time: "6:00 AM", activity: "Shatkarma (Cleansing)", icon: "💧" },
    { time: "6:30 AM", activity: "Pranayama & Breathwork", icon: "🌬️", highlight: true },
    { time: "8:00 AM", activity: "Hatha Yoga (Gentle)", icon: "🧘" },
    { time: "9:30 AM", activity: "Sattvic Breakfast", icon: "🥥", meal: true },
    { time: "11:00 AM", activity: "Pranayama Theory & Philosophy", icon: "📖" },
    { time: "1:00 PM", activity: "Lunch", icon: "🍲", meal: true },
    { time: "3:00 PM", activity: "Yoga Nidra / Rest", icon: "😴" },
    { time: "4:00 PM", activity: "Afternoon Pranayama", icon: "🌬️", highlight: true },
    { time: "6:00 PM", activity: "Meditation / Trataka", icon: "🕯️" },
    { time: "7:30 PM", activity: "Dinner", icon: "🍛", meal: true },
];

const inclusions = [
    { category: "Stay", icon: Moon, items: ["4 Nights Accommodation", "Private/Shared Room", "Attached Bathroom", "River View Options"] },
    { category: "Food", icon: Leaf, items: ["All Sattvic Meals", "Herbal Teas", "Detox Juices", "Filtered Water"] },
    { category: "Practice", icon: Wind, items: ["Daily Pranayama", "Hatha Yoga", "Meditation", "Yogic Cleansing"] },
    { category: "Knowledge", icon: Brain, items: ["Pranayama Theory", "Breath Science", "Stress Management", "Take-home Practice"] },
];



export default function ThreeDayPranayamaRetreatPage() {
    return (
        <>
            <CourseSchema
                name="3-Day Pranayama & Breathwork Retreat in Rishikesh"
                description="Master the art of breath in our 3-day pranayama retreat. Learn ancient yogic breathing techniques, reduce stress, and boost vitality in Rishikesh, India."
                url="https://www.anantadrishtiyoga.com/retreats/3-day-pranayama-retreat"
                instances={[
                    {
                        name: "3-Day Pranayama Retreat",
                        startDate: "2026-03-13",
                        endDate: "2026-03-16",
                        price: "300",
                        priceCurrency: "USD",
                        location: "Anantadrishti Yoga, Rishikesh"
                    },
                    {
                        name: "3-Day Pranayama Retreat",
                        startDate: "2026-04-13",
                        endDate: "2026-04-16",
                        price: "300",
                        priceCurrency: "USD",
                        location: "Anantadrishti Yoga, Rishikesh"
                    }
                ]}
            />

            <main className="min-h-screen bg-brand-base">
                {/* Hero Section */}
                <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-brand-base text-brand-dark overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <Image
                            src="/img/extern/outdoor-yoga-5.jpg"
                            alt="Pranayama breathing practice session during a 3-day retreat at Anantadrishti Yoga in Rishikesh"
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
                            <span className="inline-block py-1.5 px-4 rounded-full bg-cyan-100 text-cyan-800 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-cyan-200">
                                Breath & Vitality
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight drop-shadow-sm">
                                3-Day Pranayama<br />
                                <span className="text-cyan-700">Retreat</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-brand-text-muted mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                                "प्राणायाम परमो तपः" (Prāṇāyāma paramo tapaḥ)
                                <br className="hidden md:block" />
                                <span className="text-lg md:text-xl opacity-90 mt-2 block">
                                    Discover the healing power of breath in a short, immersive getaway along the Ganges.
                                </span>
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base font-medium">
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Calendar className="w-4 h-4 text-cyan-600" /> 4 Nights / 3 Days
                                </div>
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Wind className="w-4 h-4 text-cyan-600" /> Deep Breathwork
                                </div>
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Activity className="w-4 h-4 text-cyan-600" /> Stress Relief
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                <Link
                                    href="#pricing"
                                    className="bg-cyan-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-cyan-700 transition-all shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1"
                                >
                                    Book Now - $300
                                </Link>
                                <Link
                                    href="#schedule"
                                    className="bg-white/80 text-brand-dark px-10 py-4 rounded-full text-lg font-semibold hover:bg-white transition-all backdrop-blur-sm border border-gray-200 hover:border-gray-300 shadow-sm"
                                >
                                    View Schedule
                                </Link>
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
                                Unlock Your Vital Force
                            </h2>
                            <div className="prose prose-lg text-brand-text-muted leading-relaxed space-y-6">
                                <p>
                                    Pranayama is the ancient science of breath control. By regulating the breath, we
                                    regulate the mind and the vital energy (Prana) within the body.
                                </p>
                                <p>
                                    In this 3-day retreat, you will learn essential breathing techniques to reduce stress,
                                    improve lung capacity, boost immunity, and attain a state of deep inner calm.
                                </p>
                                <blockquote className="italic text-cyan-600 border-l-4 border-cyan-500 pl-6 my-8 py-2 bg-cyan-50/50 rounded-r-lg">
                                    &quot;When the breath wanders the mind also is unsteady. But when the breath is
                                    calmed the mind too will be still.&quot;
                                    <br />
                                    <span className="text-sm font-semibold opacity-80 not-italic mt-1 block">- Hatha Yoga Pradipika</span>
                                </blockquote>
                                <p>
                                    This retreat is perfect for those seeking a quick reset or anyone dealing with
                                    anxiety, stress, or respiratory issues.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-[2rem] transform rotate-2 opacity-70" />
                            <Image
                                src="/img/extern/outdoor-yoga-8.jpg"
                                alt="Pranayama Practice"
                                width={600}
                                height={800}
                                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[3/4]"
                            />
                        </motion.div>
                    </div>
                </Section>

                {/* Benefits Grid */}
                <Section variant="light" pattern="lotus">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                                Benefits of Pranayama
                            </h2>
                            <p className="text-brand-text-muted text-lg">Why dedicate 3 days to your breath?</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Stress Reduction", desc: "Calms the nervous system instantly", icon: Activity },
                                { title: "Mental Clarity", desc: "Sharpens focus and concentration", icon: Brain },
                                { title: "Better Sleep", desc: "Cures insomnia and improves rest", icon: Moon },
                                { title: "Detoxification", desc: "Removes toxins through breath", icon: Leaf },
                                { title: "Emotional Balance", desc: "Stabilizes mood swings", icon: Heart },
                                { title: "Energy Boost", desc: "Increases vitality and prana", icon: Wind },
                            ].map((item, i) => (
                                <Card key={i} className="p-6 text-center hover:bg-cyan-50/40 border-t-4 border-t-cyan-400">
                                    <item.icon className="w-10 h-10 text-cyan-500 mx-auto mb-4" />
                                    <h3 className="font-bold text-xl text-brand-dark mb-2 font-display">{item.title}</h3>
                                    <p className="text-brand-text-muted">{item.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Schedule */}
                <Section id="schedule" className="bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                                Daily Rhythm
                            </h2>
                            <p className="text-brand-text-muted text-xl">Balance of practice, rest, and learning</p>
                        </div>

                        <div className="bg-cyan-50/30 rounded-3xl shadow-lg border border-cyan-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <tbody>
                                        {schedule.map((item, i) => (
                                            <tr
                                                key={i}
                                                className={`border-b last:border-0 border-gray-100 transition-colors hover:bg-white/50 ${item.meal
                                                    ? "bg-amber-50/30"
                                                    : item.highlight
                                                        ? "bg-cyan-100/30"
                                                        : ""
                                                    }`}
                                            >
                                                <td className="p-5 font-bold w-1/3 text-cyan-700 whitespace-nowrap flex items-center gap-3">
                                                    <span className="text-xl">{item.icon}</span> {item.time}
                                                </td>
                                                <td className="p-5">
                                                    <span className={`text-base ${item.meal ? "font-bold text-brand-dark" : "font-medium text-brand-text"}`}>
                                                        {item.activity}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Inclusions */}
                <Section className="bg-stone-50">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">Everything Included</h2>
                        <p className="text-brand-text-muted text-xl">All-inclusive package for $300 USD</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {inclusions.map((category, i) => (
                            <Card key={i} className="p-8 bg-white border border-stone-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <category.icon className="w-6 h-6 text-cyan-600" />
                                    <h3 className="font-bold text-xl text-brand-dark font-display">{category.category}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {category.items.map((item, j) => (
                                        <li key={j} className="flex items-center gap-3 text-brand-text-muted">
                                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </Section>

                {/* Pricing CTA */}
                <Section id="pricing" className="bg-brand-base text-brand-dark relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/img/pattern-mandala-dark.png')] opacity-10" />

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Invest in Your Health</h2>
                            <p className="text-brand-text-muted text-xl max-w-2xl mx-auto">
                                Join us for 4 days of rejuvenation and discovery.
                            </p>
                        </div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white text-brand-dark p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg mx-auto relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-cyan-600 text-white text-xs px-4 py-1.5 rounded-bl-xl font-bold uppercase tracking-widest">
                                Limited Spots
                            </div>
                            <h3 className="text-3xl font-bold mb-2 font-display">3-Day Retreat</h3>
                            <div className="text-6xl font-bold text-cyan-600 mb-6">
                                $300 <span className="text-lg text-gray-500 font-medium">USD</span>
                            </div>

                            <div className="space-y-4 mb-8 text-left max-w-xs mx-auto text-gray-600">
                                <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 4 Nights Accommodation</div>
                                <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> All Meals Included</div>
                                <div className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Complete Tuition</div>
                            </div>

                            <Link
                                href="/contact?retreat=3day"
                                className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-xl transition-colors font-bold text-lg shadow-lg hover:shadow-cyan-500/25"
                            >
                                Reserve Now
                            </Link>
                        </motion.div>
                    </div>
                </Section>

                {/* Wisdom Links */}
                <WisdomLinks />
            </main>
        </>
    );
}
