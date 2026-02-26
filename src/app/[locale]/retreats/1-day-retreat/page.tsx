"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { WisdomLinks } from "@/components/ui/WisdomLinks";
import { Check, Calendar, Mountain, Users, Heart, Sparkles, Sun, Moon } from "lucide-react";
import { CourseSchema } from "@/components/seo/JsonLd";

const schedule = [
    { time: "7:00 AM", activity: "Arrival & Welcome Tea", icon: "🍵" },
    { time: "7:30 AM", activity: "Morning Pranayama", icon: "🌬️" },
    { time: "9:00 AM", activity: "Sattvic Breakfast", icon: "🥥", meal: true },
    { time: "10:00 AM", activity: "Hatha Yoga Session", icon: "🧘" },
    { time: "12:30 PM", activity: "Waterfall Hike & Philosophy", icon: "🏔️", highlight: true },
    { time: "2:00 PM", activity: "Lunch by the River", icon: "🍲", meal: true },
    { time: "4:00 PM", activity: "Meditation in Nature", icon: "🧘‍♂️" },
    { time: "5:30 PM", activity: "Evening Yoga & Closing", icon: "🙏" },
    { time: "7:00 PM", activity: "Dinner (optional overnight)", icon: "🍛", meal: true },
];

const inclusions = [
    { icon: "🧘", text: "2 Yoga Sessions (Pranayama & Asana)" },
    { icon: "🏔️", text: "Waterfall Hike & Philosophy" },
    { icon: "🧘‍♂️", text: "Guided Nature Meditation" },
    { icon: "🥥", text: "Breakfast & Lunch" },
    { icon: "🍵", text: "Welcome Tea & Snacks" },
    { icon: "📖", text: "Yoga Philosophy Discussion" },
];



export default function OneDayRetreatPage() {
    return (
        <>
            <CourseSchema
                name="1-Day Yoga Retreat in Rishikesh"
                description="Experience a full-day yoga retreat in Rishikesh with Hatha yoga, pranayama, waterfall hike, and meditation. Perfect for beginners and travelers."
                url="https://www.anantadrishtiyoga.com/retreats/1-day-retreat"
                instances={[
                    {
                        name: "1-Day Yoga Retreat",
                        startDate: "2026-03-15",
                        endDate: "2026-03-15",
                        price: "150",
                        priceCurrency: "USD",
                        location: "Anantadrishti Yoga, Rishikesh"
                    },
                    {
                        name: "1-Day Yoga Retreat",
                        startDate: "2026-04-12",
                        endDate: "2026-04-12",
                        price: "150",
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
                            src="/img/extern/outdoor-yoga-7.jpg"
                            alt="Outdoor yoga and waterfall hike during a one-day retreat at Anantadrishti Yoga in Rishikesh"
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
                            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-800 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-blue-200">
                                Experience Yoga in Nature
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight drop-shadow-sm">
                                One Day<br />
                                <span className="text-blue-700">Reset Retreat</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-brand-text-muted mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                                Recharge your soul with a complete yoga experience in nature.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base font-medium">
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Calendar className="w-4 h-4 text-blue-600" /> 1 Day / 4 Sessions
                                </div>
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Mountain className="w-4 h-4 text-blue-600" /> Waterfall Hike
                                </div>
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Sparkles className="w-4 h-4 text-blue-600" /> Perfect Intro
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                <Link
                                    href="#pricing"
                                    className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
                                >
                                    Book Now - $150
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
                                A Perfect Introduction
                            </h2>
                            <div className="prose prose-lg text-brand-text-muted leading-relaxed space-y-6">
                                <p>
                                    Our One Day Yoga Retreat is designed for travelers passing through Rishikesh or anyone
                                    looking for a quick yet profound reset. It’s the perfect way to experience the ashram
                                    lifestyle without a long-term commitment.
                                </p>
                                <p>
                                    Immerse yourself in authentic Hatha yoga, breathwork, and meditation. The highlight of the day
                                    is a scenic hike to a hidden waterfall, where we discuss yoga philosophy in nature&apos;s embrace.
                                </p>
                                <p>
                                    <span className="font-bold text-blue-600">No prior experience needed.</span> Just bring an open heart and comfortable clothes.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-[2rem] transform -rotate-2 opacity-70" />
                            <Image
                                src="/img/extern/outdoor-yoga-5.jpg"
                                alt="Outdoor yoga and waterfall hike during a day retreat at Anantadrishti Yoga, Rishikesh"
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
                            <Card variant="default" className="p-8 md:p-10 bg-gradient-to-br from-white to-blue-50/50 border-blue-100/50">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-dark font-display">Perfect For</h3>
                                </div>
                                <ul className="space-y-4 text-brand-text-muted">
                                    {[
                                        "Travelers passing through Rishikesh",
                                        "Complete beginners to yoga",
                                        "Those curious about ashram life",
                                        "People with limited time",
                                        "Anyone seeking a nature retreat",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 bg-blue-100 rounded-full p-0.5">
                                                <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" strokeWidth={3} />
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
                                        "Authentic Hatha Yoga practice",
                                        "Pranayama breathing techniques",
                                        "Scenic waterfall meditation",
                                        "Traditional sattvic meals",
                                        "Peaceful ashram atmosphere",
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

                {/* Schedule */}
                <Section id="schedule" className="bg-white">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                                <Sun className="w-4 h-4" /> Full Day Experience
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                                Day Schedule
                            </h2>
                            <p className="text-brand-text-muted text-xl">Flow of the day</p>
                        </div>

                        <div className="bg-blue-50/30 rounded-3xl shadow-lg border border-blue-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <tbody>
                                        {schedule.map((item, i) => (
                                            <tr
                                                key={i}
                                                className={`border-b last:border-0 border-gray-100 transition-colors hover:bg-white/50 ${item.meal
                                                    ? "bg-amber-50/30"
                                                    : item.highlight
                                                        ? "bg-blue-100/30"
                                                        : ""
                                                    }`}
                                            >
                                                <td className="p-5 font-bold w-1/3 text-blue-700 whitespace-nowrap flex items-center gap-3">
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

                {/* Inclusions & Overnight Option */}
                <Section className="bg-stone-50">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">What&apos;s Included</h2>
                        <p className="text-brand-text-muted text-xl">All-inclusive day package</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                        {inclusions.map((item, i) => (
                            <Card key={i} className="p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
                                <span className="text-3xl bg-stone-100 w-12 h-12 rounded-full flex items-center justify-center">{item.icon}</span>
                                <span className="font-semibold text-brand-dark">{item.text}</span>
                            </Card>
                        ))}
                    </div>

                    {/* Optional Overnight */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Moon className="w-32 h-32 text-white" />
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2 font-display flex items-center gap-3">
                                    <Moon className="w-6 h-6" /> Stay the Night
                                </h3>
                                <p className="text-blue-100 mb-6 max-w-lg">
                                    Extend your bliss! Add an overnight stay to experience the ashram&apos;s evening
                                    satsang and peaceful morning vibes.
                                </p>
                                <ul className="text-sm grid grid-cols-2 gap-y-2 gap-x-8">
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-200" /> Private/Shared Room</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-200" /> Dinner Included</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-200" /> Evening Satsang</li>
                                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-200" /> Morning Havan</li>
                                </ul>
                            </div>
                            <div className="text-center bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 min-w-[200px]">
                                <p className="text-sm uppercase tracking-widest font-bold text-blue-200 mb-1">Add-on</p>
                                <p className="text-4xl font-bold mb-1">+$50</p>
                                <p className="text-xs text-blue-200">per person</p>
                            </div>
                        </div>
                    </motion.div>
                </Section>

                {/* Pricing */}
                <Section id="pricing" className="bg-white">
                    <div className="max-w-lg mx-auto text-center">
                        <Card className="p-10 border-2 border-blue-500 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
                            <h3 className="text-3xl font-bold text-brand-dark mb-4 font-display">One Day Retreat</h3>
                            <div className="text-6xl font-bold text-blue-600 mb-6">
                                $150 <span className="text-lg text-gray-500 font-medium">USD</span>
                            </div>
                            <p className="text-brand-text-muted mb-8">Full day access • All inclusive</p>

                            <Link
                                href="/contact?retreat=1day"
                                className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl transition-colors font-bold text-lg shadow-lg hover:shadow-blue-500/25"
                            >
                                Book Now
                            </Link>
                            <p className="text-xs text-gray-400 mt-4">Safe & Secure Payment</p>
                        </Card>
                    </div>
                </Section>

                {/* Wisdom Links */}
                <WisdomLinks />
            </main>
        </>
    );
}
