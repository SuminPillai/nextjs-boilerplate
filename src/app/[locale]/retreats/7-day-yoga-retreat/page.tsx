"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SanskritVerse } from "@/components/ui/SanskritVerse";
import { WisdomLinks } from "@/components/ui/WisdomLinks";
import { Check, Calendar, Mountain, Heart, Flame, Users, Star, MapPin, Utensils, BookOpen, Sun, Moon } from "lucide-react";

import { CourseSchema } from "@/components/seo/JsonLd";

const dailySchedule = [
    { time: "5:30 AM", activity: "Morning Havan & Prayer", icon: "🔥", highlight: true },
    { time: "6:00 AM", activity: "Pranayama Practice", icon: "🌬️" },
    { time: "7:30 AM", activity: "Hatha Yoga Session", icon: "🧘" },
    { time: "9:00 AM", activity: "Sattvic Breakfast", icon: "🥥", meal: true },
    { time: "11:00 AM", activity: "Philosophy / Free Time", icon: "📖" },
    { time: "1:00 PM", activity: "Lunch", icon: "🍲", meal: true },
    { time: "4:00 PM", activity: "Afternoon Yoga / Activity", icon: "🧘‍♂️" },
    { time: "6:00 PM", activity: "Meditation & Kirtan", icon: "🎵", highlight: true },
    { time: "7:30 PM", activity: "Dinner", icon: "🍛", meal: true },
    { time: "8:30 PM", activity: "Satsang / Rest", icon: "🙏" },
];

const weekHighlights = [
    { day: "Day 1", highlight: "Arrival, Orientation & Welcome Circle", icon: "🙏" },
    { day: "Day 2", highlight: "Full Ashram Day - Routine", icon: "Bhajan" },
    { day: "Day 3", highlight: "Waterfall Hike & Meditation", icon: "Hiking" },
    { day: "Day 4", highlight: "Deeper Pranayama & Philosophy", icon: "Breath" },
    { day: "Day 5", highlight: "Kunjapuri Temple Sunrise Trek", icon: "Sunrise" },
    { day: "Day 6", highlight: "Ganga Aarti & Ghat Visit", icon: "Diya" },
    { day: "Day 7", highlight: "Integration & Closing Ceremony", icon: "Fire" },
    { day: "Day 8", highlight: "Breakfast & Departure", icon: "Namaste" },
];

const curriculum = [
    {
        title: "Hatha Yoga",
        description: "Traditional posture practice focusing on alignment, breath, and awareness",
        sessions: "7 classes",
        color: "border-teal-500",
    },
    {
        title: "Pranayama",
        description: "Breath control techniques to purify and energize the body",
        sessions: "7 sessions",
        color: "border-cyan-500",
    },
    {
        title: "Meditation",
        description: "Guided and silent meditation for inner peace and clarity",
        sessions: "7 sessions",
        color: "border-teal-500",
    },
    {
        title: "Philosophy",
        description: "Introduction to yoga sutras, Vedic wisdom, and spiritual teachings",
        sessions: "Daily talks",
        color: "border-cyan-500",
    },
    {
        title: "Mantra Chanting",
        description: "Sacred sound practices to open the heart and calm the mind",
        sessions: "Daily kirtan",
        color: "border-teal-500",
    },
    {
        title: "Havan Ceremony",
        description: "Traditional fire ritual for purification and blessings",
        sessions: "Daily ritual",
        color: "border-cyan-500",
    },
];

const inclusions = [
    { category: "Stay", icon: Moon, items: ["8 Nights Accommodation", "Private or Shared Room", "Attached Bathroom", "Daily Housekeeping"] },
    { category: "Food", icon: Utensils, items: ["21 Sattvic Meals", "Herbal Tea & Snacks", "Nutritious Vegetarian", "Water & Purified"] },
    { category: "Practice", icon: Heart, items: ["7 Hatha Classes", "7 Pranayama Sessions", "7 Meditation Sessions", "Daily Philosophy"] },
    { category: "Experiences", icon: Mountain, items: ["Waterfall Hike", "Kunjapuri Trek", "Ganga Aarti Visit", "Temple Excursion"] },
];

export default function SevenDayYogaRetreatPage() {
    return (
        <>
            <CourseSchema
                name="7-Day Yoga & Meditation Retreat in Rishikesh"
                description="Experience a transformative 7-day yoga retreat in Rishikesh with daily Hatha, pranayama, meditation, Himalayan treks, and Ganga Aarti. All-inclusive."
                url="https://www.anantadrishtiyoga.com/retreats/7-day-yoga-retreat"
                instances={[
                    {
                        name: "7-Day Yoga Retreat",
                        startDate: "2026-03-01",
                        endDate: "2026-03-08",
                        price: "600",
                        priceCurrency: "USD",
                        location: "Anantadrishti Yoga, Rishikesh"
                    },
                    {
                        name: "7-Day Yoga Retreat",
                        startDate: "2026-04-01",
                        endDate: "2026-04-08",
                        price: "600",
                        priceCurrency: "USD",
                        location: "Anantadrishti Yoga, Rishikesh"
                    }
                ]}
            />

            <main className="min-h-screen bg-brand-base">
                {/* Hero Section */}
                <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-brand-base text-brand-dark overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <Image
                            src="/img/extern/outdoor-yoga-7.jpg"
                            alt="Students practicing yoga outdoors during a 7-day retreat at Anantadrishti Yoga in Rishikesh"
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
                            <span className="inline-block py-1.5 px-4 rounded-full bg-teal-100 text-teal-800 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-teal-200">
                                Complete Transformation
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight drop-shadow-sm">
                                7-Day Yoga Retreat<br />
                                <span className="text-teal-700">Rishikesh</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-brand-text-muted mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                                A comprehensive week of yoga, meditation, philosophy, and cultural experiences in the yoga capital of the world.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base font-medium">
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Calendar className="w-4 h-4 text-teal-600" /> 8 Nights / 9 Days
                                </div>
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Mountain className="w-4 h-4 text-teal-600" /> Himalayan Excursions
                                </div>
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Star className="w-4 h-4 text-yellow-600" /> Most Popular
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                <Link
                                    href="#pricing"
                                    className="bg-teal-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/25 hover:-translate-y-1"
                                >
                                    Book Now - $600
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

                {/* About Section */}
                <Section className="bg-white">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display">
                                Complete Experience
                            </h2>
                            <div className="prose prose-lg text-brand-text-muted leading-relaxed space-y-6">
                                <p>
                                    Our 7-Day Yoga Retreat offers the most complete immersion experience short of a
                                    full teacher training. This week-long journey covers all aspects of traditional
                                    yoga practice.
                                </p>
                                <p>
                                    Each day includes Hatha Yoga, Pranayama, Meditation, and Philosophy. You&apos;ll
                                    experience the full ashram lifestyle - from early morning fire ceremonies to
                                    evening kirtans.
                                </p>
                                <blockquote className="italic text-teal-600 border-l-4 border-teal-500 pl-6 my-8 py-2 bg-teal-50/50 rounded-r-lg">
                                    "Retreat is not an escape, but a return to your true self."
                                </blockquote>
                                <p>
                                    Highlights include a sunrise trek to Kunjapuri Temple, a waterfall meditation
                                    hike, and attending the famous Ganga Aarti ceremony at the ghats of Rishikesh.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-teal-100 to-cyan-100 rounded-[2rem] transform -rotate-2 opacity-70" />
                            <Image
                                src="/img/extern/outdoor-yoga-8.jpg"
                                alt="Students enjoying a 7-day yoga retreat experience at Anantadrishti Yoga in Rishikesh"
                                width={600}
                                height={800}
                                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[3/4]"
                            />
                        </motion.div>
                    </div>
                </Section>

                {/* Perfect For Section */}
                <Section variant="light" pattern="lotus">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card variant="default" className="p-8 md:p-10 bg-gradient-to-br from-white to-teal-50/50 border-teal-100/50">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-teal-100 rounded-xl text-teal-600">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-dark font-display">Perfect For</h3>
                                </div>
                                <ul className="space-y-4 text-brand-text-muted">
                                    {[
                                        "Busy professionals needing a reset",
                                        "Beginners exploring yoga deeply",
                                        "Anyone seeking spiritual retreat",
                                        "Those wanting authentic ashram experience",
                                        "Travelers wanting cultural immersion",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 bg-teal-100 rounded-full p-0.5">
                                                <Check className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" strokeWidth={3} />
                                            </div>
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            <Card variant="default" className="p-8 md:p-10 bg-gradient-to-br from-white to-green-50/50 border-green-100/50">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-green-100/50 rounded-xl text-green-600">
                                        <Heart className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-dark font-display">What You&apos;ll Experience</h3>
                                </div>
                                <ul className="space-y-4 text-brand-text-muted">
                                    {[
                                        "Deep peace and mental clarity",
                                        "Physical rejuvenation & flexibility",
                                        "Authentic Vedic rituals & mantras",
                                        "Sacred excursions to holy sites",
                                        "Connection with like-minded souls",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-100 rounded-full p-0.5">
                                                <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" strokeWidth={3} />
                                            </div>
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </Section>

                {/* Curriculum Grid */}
                <Section className="bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
                                <BookOpen className="w-4 h-4" /> Holistic Learning
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                                What You&apos;ll Learn
                            </h2>
                            <p className="text-brand-text-muted text-lg">A comprehensive curriculum for holistic wellness</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {curriculum.map((section, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className={`h-full p-8 border-t-8 ${section.color}`}>
                                        <h3 className="font-bold text-2xl mb-4 text-brand-dark font-display">{section.title}</h3>
                                        <p className="text-brand-text-muted mb-6">{section.description}</p>
                                        <span className="inline-block text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                            {section.sessions}
                                        </span>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Patañjali Yoga Wisdom */}
                <Section className="bg-brand-base text-brand-dark relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 bg-[url('/img/pattern-mandala.png')] bg-repeat opacity-10" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-white/20">
                                <BookOpen className="w-4 h-4 text-teal-400" />
                                <span className="text-sm font-bold text-teal-600 uppercase tracking-widest">Ancient Teachings</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                                Guided by Wisdom
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
                                    translation="Yoga is the cessation of the fluctuations of the mind."
                                    lightMode={false}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <SanskritVerse
                                    sanskrit="योगः कर्मसु कौशलम्"
                                    transliteration="Yogaḥ karmasu kauśalam"
                                    translation="Yoga is excellence in action."
                                    lightMode={false}
                                />
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* Daily Schedule */}
                <Section id="schedule" className="bg-amber-50/50">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                                Daily Schedule
                            </h2>
                            <p className="text-brand-text-muted text-xl">A typical day at the ashram</p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-teal-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <tbody>
                                        {dailySchedule.map((item, i) => (
                                            <tr
                                                key={i}
                                                className={`border-b last:border-0 border-gray-100 transition-colors hover:bg-teal-50/30 ${item.meal
                                                    ? "bg-amber-50/30"
                                                    : item.highlight
                                                        ? "bg-teal-50/50"
                                                        : ""
                                                    }`}
                                            >
                                                <td className="p-6 font-bold w-1/3 text-teal-600 whitespace-nowrap flex items-center gap-3">
                                                    <span className="text-2xl">{item.icon}</span> {item.time}
                                                </td>
                                                <td className="p-6">
                                                    <span className={`text-lg ${item.meal ? "font-bold text-brand-dark" : "font-medium text-brand-text"}`}>
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

                {/* Week Overview */}
                <Section className="bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                                Week at a Glance
                            </h2>
                            <p className="text-brand-text-muted text-xl">Each day brings new experiences</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {weekHighlights.map((day, i) => (
                                <Card key={i} className="p-6 text-center hover:bg-teal-50/30 transition-colors border-t-4 border-t-teal-400">
                                    <div className="text-sm font-bold text-teal-600 uppercase mb-2">{day.day}</div>
                                    <h4 className="font-bold text-lg text-brand-dark mb-4 min-h-[3rem] items-center flex justify-center">{day.highlight}</h4>
                                    <div className="text-3xl text-brand-primary/20">{day.icon === "Bhajan" ? "🎵" : day.icon === "Hiking" ? "🥾" : day.icon === "Breath" ? "🌬️" : day.icon === "Sunrise" ? "🌅" : day.icon === "Diya" ? "🪔" : day.icon === "Fire" ? "🔥" : day.icon === "Namaste" ? "🙏" : "✨"}</div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Inclusions */}
                <Section className="bg-stone-50">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">Everything Included</h2>
                        <p className="text-brand-text-muted text-xl">Complete package for $600 USD</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {inclusions.map((category, i) => (
                            <Card key={i} className="p-8 bg-white border border-stone-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <category.icon className="w-6 h-6 text-teal-600" />
                                    <h3 className="font-bold text-xl text-brand-dark font-display">{category.category}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {category.items.map((item, j) => (
                                        <li key={j} className="flex items-center gap-3 text-brand-text-muted">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </Section>

                {/* Pricing */}
                <Section id="pricing" className="bg-brand-base text-brand-dark relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/img/pattern-mandala-dark.png')] opacity-10" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Investment in Yourself</h2>
                            <p className="text-brand-text-muted text-xl">Affordable pricing for a life-changing week</p>
                        </div>

                        <div className="max-w-lg mx-auto">
                            {/* Card */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-white text-brand-dark p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-teal-500 text-white text-sm px-6 py-2 rounded-bl-2xl font-bold uppercase tracking-widest">
                                    Best Value
                                </div>
                                <h3 className="text-3xl font-bold mb-2 font-display text-center">7-Day Retreat</h3>
                                <div className="text-6xl font-bold text-teal-600 mb-6 text-center">
                                    $600 <span className="text-lg text-gray-500 font-medium">USD</span>
                                </div>

                                <div className="h-px bg-gray-100 my-8" />

                                <ul className="space-y-4 text-gray-600 mb-10">
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 8 Nights Accommodation</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 3 Sattvic Meals Daily</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Daily Yoga & Meditation</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> All Excursions Included</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Certificate of Completion</li>
                                </ul>

                                <Link
                                    href="/contact?retreat=7day"
                                    className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-4 rounded-xl transition-colors font-bold text-lg shadow-lg hover:shadow-xl"
                                >
                                    Book Now
                                </Link>
                            </motion.div>

                            {/* Early Bird */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-10 text-center"
                            >
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 inline-block">
                                    <p className="text-lg text-brand-text-muted">
                                        💰 Book 30 days in advance and <span className="text-brand-dark font-bold">save $50</span>!
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* Wisdom Links */}
                <WisdomLinks />

                {/* CTA */}
                <Section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                            Ready for Your Reset?
                        </h2>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed">
                            Join us for a transformative week in the Himalayas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link
                                href="/contact?retreat=7day"
                                className="inline-block bg-white text-teal-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1"
                            >
                                Reserve Your Spot
                            </Link>
                            <a
                                href="https://wa.me/918979095535"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-black/20 text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-black/30 transition-all backdrop-blur-sm border border-white/20"
                            >
                                💬 WhatsApp Us
                            </a>
                        </div>
                    </div>
                </Section>
            </main>
        </>
    );
}
