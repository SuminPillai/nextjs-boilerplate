"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SanskritVerse } from "@/components/ui/SanskritVerse";
import { WisdomLinks } from "@/components/ui/WisdomLinks";
import { Check, Calendar, Award, BookOpen, Users, Heart, Sparkles, Flame } from "lucide-react";
import { CourseSchema } from "@/components/seo/JsonLd";

// Data
const curriculum = [
    { title: "Hatha Yoga Asanas", items: ["Classical poses with proper alignment", "Modifications for different levels", "Use of props"], color: "border-teal-500" },
    { title: "Pranayama Basics", items: ["Foundational breathing techniques", "Breath awareness", "Pranayama safety"], color: "border-teal-500" },
    { title: "Yoga Philosophy", items: ["Introduction to Yoga Sutras", "Yamas & Niyamas", "Eight Limbs overview"], color: "border-cyan-500" },
    { title: "Basic Anatomy", items: ["Skeletal system basics", "Major muscle groups", "Safe movement patterns"], color: "border-cyan-500" },
    { title: "Meditation", items: ["Concentration techniques", "Guided meditation", "Mindfulness practices"], color: "border-teal-500" },
    { title: "Teaching Foundations", items: ["Class structure basics", "Voice and presence", "Demonstration skills"], color: "border-cyan-500" },
];

const inclusions = [
    { category: "Accommodation", items: ["12 Nights Stay", "Private or Shared Room", "Attached Bathroom", "Daily Housekeeping"] },
    { category: "Meals", items: ["3 Daily Sattvic Meals", "Herbal Tea & Snacks", "Nutritious Vegetarian", "Water & Purified"] },
    { category: "Course Materials", items: ["Training Manual", "T-shirt", "Yoga Mat (to use)", "Certificate"] },
    { category: "Experiences", items: ["Temple Visits", "Ganga Aarti", "Waterfall Hike", "Philosophy Talks"] },
];

export default function OneHundredHourTTCPage() {
    return (
        <>
            <CourseSchema
                name="100 Hour Yoga Teacher Training"
                description="A 12-day intensive program for deepening your personal practice and exploring the foundations of yoga."
                url="https://www.anantadrishtiyoga.com/courses/100-hour-yoga-ttc"
                instances={[
                    {
                        name: "100hr YTT",
                        startDate: "2026-03-01",
                        endDate: "2026-03-13",
                        price: "1000",
                        priceCurrency: "USD",
                        courseMode: "Onsite",
                        courseWorkload: "PT100H"
                    }
                ]}
            />
            <main className="min-h-screen bg-brand-base">
                {/* Hero Section */}
                <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-brand-base text-brand-dark overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <Image
                            src="/img/optimized/clients.webp"
                            alt="Students in a 100-hour yoga teacher training class at Anantadrishti Yoga in Rishikesh"
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
                                Foundation Course
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight drop-shadow-sm">
                                100 Hour Yoga<br />
                                <span className="text-teal-700">Teacher Training</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-brand-text-muted mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                                "योगः कर्मसु कौशलम्" (Yogaḥ karmasu kauśalam)
                                <br className="hidden md:block" />
                                <span className="text-lg md:text-xl opacity-90 mt-2 block">
                                    A 12-day intensive program for deepening your personal practice and exploring the foundations of yoga.
                                </span>
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base font-medium">
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Calendar className="w-4 h-4 text-teal-600" /> 12 Nights / 13 Days
                                </div>
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Award className="w-4 h-4 text-teal-600" /> Yoga Alliance Registered
                                </div>
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Sparkles className="w-4 h-4 text-teal-600" /> Perfect for Beginners
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                <Link
                                    href="#pricing"
                                    className="bg-teal-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-500/25 hover:-translate-y-1"
                                >
                                    View Price
                                </Link>
                                <Link
                                    href="#curriculum"
                                    className="bg-white/80 text-brand-dark px-10 py-4 rounded-full text-lg font-semibold hover:bg-white transition-all backdrop-blur-sm border border-gray-200 hover:border-gray-300 shadow-sm"
                                >
                                    Explore Curriculum
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Intro Section */}
                <Section className="bg-white">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display">Begin Your Journey</h2>
                            <div className="prose prose-lg text-brand-text-muted leading-relaxed space-y-6">
                                <p>
                                    The 100 Hour Yoga Teacher Training is ideal for students who wish to deepen their personal practice or explore the possibility of teaching yoga without committing to a full 200-hour program initially.
                                </p>
                                <p>
                                    This foundational course covers the essential elements of Hatha Yoga, including asana practice, pranayama techniques, basic anatomy, and an introduction to yoga philosophy.
                                </p>
                                <blockquote className="italic text-teal-600 border-l-4 border-teal-500 pl-6 my-8 py-2 bg-teal-50/50 rounded-r-lg">
                                    &quot;अथ योगानुशासनम्&quot; (Atha yogānuśāsanam)
                                    <br />
                                    <span className="text-sm font-semibold opacity-80 not-italic mt-1 block">- Patanjali Yoga Sutra 1.1</span>
                                    <span className="block mt-2 not-italic">Now, the instruction of Yoga begins.</span>
                                </blockquote>
                                <p>
                                    Upon completion, you can continue to the 200-hour program to complete your full certification, or simply take what you&apos;ve learned to enhance your personal practice.
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
                                src="/img/optimized/retreats.webp"
                                alt="100-hour yoga teacher training students practicing asanas at Anantadrishti Yoga in Rishikesh"
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
                                        "Complete beginners to yoga",
                                        "Those testing if teaching is right for them",
                                        "Practitioners wanting structured learning",
                                        "People with limited time for full TTC",
                                        "Anyone seeking personal transformation",
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
                                    <h3 className="text-2xl font-bold text-brand-dark font-display">What You&apos;ll Gain</h3>
                                </div>
                                <ul className="space-y-4 text-brand-text-muted">
                                    {[
                                        "Strong foundation in Hatha Yoga",
                                        "Understanding of yoga philosophy",
                                        "Basic pranayama & meditation skills",
                                        "Confidence to continue to 200hr",
                                        "Certificate of Completion",
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

                {/* Sacred Seva Section */}
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
                                <Heart className="w-4 h-4 text-teal-400" />
                                <span className="text-sm font-bold text-teal-600 uppercase tracking-widest">Foundation of Teaching</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                                Yoga as Sacred Service
                            </h2>
                            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto font-light leading-relaxed">
                                Begin your journey understanding yoga teaching as Sevā—selfless service guided by compassion and awareness.
                            </p>
                        </motion.div>

                        <div className="mb-16">
                            <SanskritVerse
                                sanskrit="योगः कर्मसु कौशलम्"
                                transliteration="Yogaḥ karmasu kauśalam"
                                translation="Yoga is excellence in action."
                                lightMode={true}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 max-w-4xl mx-auto text-center"
                        >
                            <p className="text-brand-dark leading-relaxed text-lg italic">
                                "This 100-hour foundation program introduces you to the principles of yogic living and teaching, preparing you for deeper study in the 200-hour course or enriching your personal practice."
                            </p>
                        </motion.div>
                    </div>
                </Section>

                {/* Curriculum */}
                <Section id="curriculum" className="bg-brand-base relative">
                    <div className="absolute inset-0 opacity-30 bg-[url('/img/pattern-lotus.png')] bg-repeat" />

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6">
                                <BookOpen className="w-4 h-4" /> Foundation Program
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                                What You&apos;ll Learn
                            </h2>
                            <p className="text-brand-text-muted text-lg">Foundation for your yoga teaching journey</p>
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
                                        <h3 className="font-bold text-2xl mb-6 text-brand-dark font-display border-b border-gray-100 pb-3">{section.title}</h3>
                                        <ul className="space-y-3">
                                            {section.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-3 text-brand-text-muted">
                                                    <span className="text-teal-500 mt-1.5 text-xs">●</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Inclusions */}
                <Section className="bg-white">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">Everything Included</h2>
                        <p className="text-brand-text-muted text-xl">Complete package for your foundation training</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {inclusions.map((category, i) => (
                            <Card key={i} className="p-8 bg-gradient-to-br from-stone-50 to-white border border-stone-100">
                                <h3 className="font-bold text-xl text-brand-dark mb-6 font-display">{category.category}</h3>
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
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Course Pricing</h2>
                            <p className="text-brand-text-muted text-xl">Choose your accommodation preference</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Shared Room */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-white text-brand-dark p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-teal-500 text-white text-sm px-6 py-2 rounded-bl-2xl font-bold uppercase tracking-widest">
                                    Best Value
                                </div>
                                <h3 className="text-2xl font-bold mb-2 font-display">Shared Room</h3>
                                <div className="text-5xl font-bold text-teal-600 mb-6">
                                    $1000 <span className="text-lg text-gray-500 font-medium">USD</span>
                                </div>

                                <div className="h-px bg-gray-100 my-8" />

                                <ul className="space-y-4 text-gray-600 mb-10">
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Twin Sharing AC Room</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Attached Bathroom</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 3 Meals Daily</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Full Course Access</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Certificate of Completion</li>
                                </ul>

                                <Link
                                    href="/contact?course=100hr&room=shared"
                                    className="block w-full bg-teal-500 hover:bg-teal-600 text-white text-center py-4 rounded-xl transition-colors font-bold text-lg shadow-lg hover:shadow-xl"
                                >
                                    Book Shared Room
                                </Link>
                            </motion.div>

                            {/* Private Room */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-brand-surface text-brand-dark p-8 md:p-10 rounded-3xl shadow-xl border border-white/10 relative"
                            >
                                <h3 className="text-2xl font-bold mb-2 font-display">Private Room</h3>
                                <div className="text-5xl font-bold text-teal-500 mb-6">
                                    $1100 <span className="text-lg text-gray-400 font-medium">USD</span>
                                </div>

                                <div className="h-px bg-gray-200 my-8" />

                                <ul className="space-y-4 text-gray-600 mb-10">
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Private AC Room</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Attached Bathroom</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 3 Meals Daily</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Full Course Access</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Certificate of Completion</li>
                                </ul>

                                <Link
                                    href="/contact?course=100hr&room=private"
                                    className="block w-full bg-gray-900 hover:bg-black text-white text-center py-4 rounded-xl transition-colors font-bold text-lg shadow-lg"
                                >
                                    Book Private Room
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-16 max-w-3xl mx-auto text-center"
                        >
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                                <h4 className="text-xl font-bold text-teal-400 mb-2">
                                    🎓 Upgrade Path
                                </h4>
                                <p className="text-lg text-brand-text-muted">
                                    Complete 100hr holders can upgrade to 200hr for just <span className="text-brand-dark font-bold">$800 more!</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </Section>

                {/* Wisdom Links */}
                <WisdomLinks />

                {/* CTA */}
                <Section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                            Start Your Foundation
                        </h2>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed">
                            The perfect introduction to yoga teaching and deepening your personal practice.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-teal-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1"
                            >
                                Apply Now
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
