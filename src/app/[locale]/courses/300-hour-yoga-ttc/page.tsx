"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SanskritVerse } from "@/components/ui/SanskritVerse";
import { WisdomLinks } from "@/components/ui/WisdomLinks";
import { Check, Calendar, Award, BookOpen, Users, GraduationCap, Zap, Flame, Heart } from "lucide-react";
import { CourseSchema } from "@/components/seo/JsonLd";

// Data
const curriculum = [
    { title: "Advanced Asanas", items: ["Complex pose sequences", "Arm balances & inversions", "Advanced adjustments", "Therapeutic modifications"], color: "border-purple-500" },
    { title: "Advanced Pranayama", items: ["Kumbhaka practices", "Advanced bandhas", "Pranayama therapy", "Energy cultivation"], color: "border-purple-500" },
    { title: "Yoga Therapy", items: ["Therapeutic applications", "Working with injuries", "Restorative yoga", "Stress management"], color: "border-violet-500" },
    { title: "Advanced Philosophy", items: ["Deeper Yoga Sutras", "Bhagavad Gita", "Tantra philosophy", "Vedantic wisdom"], color: "border-violet-500" },
    { title: "Subtle Body", items: ["Chakra system in depth", "Nadis and energy", "Kundalini basics", "Pranamaya Kosha"], color: "border-purple-500" },
    { title: "Teaching Mastery", items: ["Advanced sequencing", "Workshop design", "Business development", "Mentorship skills"], color: "border-violet-500" },
];

const inclusions = [
    { category: "Accommodation", items: ["28 Nights Stay", "Private or Shared Room", "Attached Bathroom", "Daily Housekeeping"] },
    { category: "Meals", items: ["3 Daily Sattvic Meals", "Herbal Tea & Snacks", "Ayurvedic Options", "Special Diet Support"] },
    { category: "Course Materials", items: ["Advanced Manuals", "T-shirt", "Philosophy Texts", "RYT-500 Certification"] },
    { category: "Experiences", items: ["Temple Pilgrimages", "Ganga Aarti", "Himalayan Excursion", "Guest Lectures"] },
];

export default function ThreeHundredHourTTCPage() {
    return (
        <>
            <CourseSchema
                name="300 Hour Yoga Teacher Training in Rishikesh"
                description="Advanced 300-hour Yoga Teacher Training in Rishikesh, India. RYT 500 pathway. Deep philosophy, yoga therapy, advanced asana. Yoga Alliance RYS 300 certified."
                url="https://www.anantadrishtiyoga.com/courses/300-hour-yoga-ttc"
                instances={[
                    {
                        name: "300 Hour Yoga Teacher Training - March 2026",
                        startDate: "2026-03-01",
                        endDate: "2026-04-01",
                        courseWorkload: "PT300H",
                        price: "2500",
                        priceCurrency: "USD",
                        location: "Anantadrishti Yoga, Rishikesh"
                    },
                    {
                        name: "300 Hour Yoga Teacher Training - May 2026",
                        startDate: "2026-05-01",
                        endDate: "2026-06-01",
                        courseWorkload: "PT300H",
                        price: "2500",
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
                            src="/img/optimized/clients (2).webp"
                            alt="Advanced yoga students in 300-hour teacher training at Anantadrishti Yoga in Rishikesh"
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
                            <span className="inline-block py-1.5 px-4 rounded-full bg-purple-100 text-purple-800 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-purple-200">
                                Advanced Training
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight drop-shadow-sm">
                                300 Hour Yoga<br />
                                <span className="text-purple-700">Teacher Training</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-brand-text-muted mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                                "अभ्यासवैराग्याभ्यां तन्निरोधः" (Abhyāsa-vairāgyābhyāṁ tan-nirodhaḥ)
                                <br className="hidden md:block" />
                                <span className="text-lg md:text-xl opacity-90 mt-2 block">
                                    Advance your teaching skills and complete your RYT-500 certification in Rishikesh.
                                </span>
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base font-medium">
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Calendar className="w-4 h-4 text-purple-600" /> 28 Nights / 29 Days
                                </div>
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <GraduationCap className="w-4 h-4 text-purple-600" /> RYT-500 Pathway
                                </div>
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Award className="w-4 h-4 text-purple-600" /> For 200hr Graduates
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                <Link
                                    href="#pricing"
                                    className="bg-purple-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1"
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
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display">Master Your Teaching</h2>
                            <div className="prose prose-lg text-brand-text-muted leading-relaxed space-y-6">
                                <p>
                                    The 300 Hour Yoga Teacher Training is designed for certified 200-hour yoga teachers who wish to advance their knowledge, refine their teaching skills, and complete their 500-hour certification.
                                </p>
                                <p>
                                    This advanced program delves deeper into yoga philosophy, explores advanced asanas and pranayama techniques, and provides extensive training in therapeutic applications of yoga.
                                </p>
                                <blockquote className="italic text-purple-600 border-l-4 border-purple-500 pl-6 my-8 py-2 bg-purple-50/50 rounded-r-lg">
                                    &quot;तपःस्वाध्यायेश्वरप्रणिधानानि क्रियायोगः&quot; (Tapaḥ svādhyāyeśvarapraṇidhānāni kriyāyogaḥ)
                                    <br />
                                    <span className="text-sm font-semibold opacity-80 not-italic mt-1 block">- Patanjali Yoga Sutra 2.1</span>
                                    <span className="block mt-2 not-italic">Austerity, self-study, and devotion constitute Kriya Yoga.</span>
                                </blockquote>
                                <p>
                                    Upon completion, you will be eligible to register as an RYT-500 with Yoga Alliance, opening doors to advanced teaching opportunities worldwide.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-100 to-violet-100 rounded-[2rem] transform rotate-2 opacity-70" />
                            <Image
                                src="/img/optimized/pranayamareteat.webp"
                                alt="300-hour advanced yoga teacher training session at Anantadrishti Yoga School, Rishikesh"
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
                            <Card variant="default" className="p-8 md:p-10 bg-gradient-to-br from-white to-purple-50/50 border-purple-100/50">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-dark font-display">Perfect For</h3>
                                </div>
                                <ul className="space-y-4 text-brand-text-muted">
                                    {[
                                        "Certified 200hr yoga teachers",
                                        "Teachers wanting RYT-500 credential",
                                        "Those ready for advanced practices",
                                        "Teachers seeking therapeutic skills",
                                        "Those wanting deeper philosophy study",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 bg-purple-100 rounded-full p-0.5">
                                                <Check className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" strokeWidth={3} />
                                            </div>
                                            <span className="text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            <Card variant="default" className="p-8 md:p-10 bg-gradient-to-br from-white to-green-50/50 border-green-100/50">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-green-100/50 rounded-xl text-green-600">
                                        <Zap className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-dark font-display">What You&apos;ll Master</h3>
                                </div>
                                <ul className="space-y-4 text-brand-text-muted">
                                    {[
                                        "RYT-500 Yoga Alliance Certification",
                                        "Advanced arm balances & inversions",
                                        "Yoga therapy & restorative techniques",
                                        "Kundalini & chakra system",
                                        "Business of yoga teaching",
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

                {/* Sacred Seva Section - Advanced */}
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
                                <Heart className="w-4 h-4 text-purple-400" />
                                <span className="text-sm font-bold text-purple-600 uppercase tracking-widest">Mastery & Transmission</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                                Advanced Yogic Transmission
                            </h2>
                            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto font-light leading-relaxed">
                                At the advanced level, teaching becomes a profound act of transmission—sharing the depths of yogic wisdom with authenticity and mastery.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <SanskritVerse
                                    sanskrit="सेवा परमो धर्मः"
                                    transliteration="Sevā paramo dharmaḥ"
                                    translation="Selfless service is the highest duty."
                                    lightMode={true}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <SanskritVerse
                                    sanskrit="आत्मानं विद्धि"
                                    transliteration="Ātmānaṁ viddhi"
                                    translation="Know the Self."
                                    lightMode={true}
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 max-w-4xl mx-auto text-center"
                        >
                            <p className="text-brand-dark leading-relaxed text-lg italic">
                                "This 300-hour advanced program deepens your understanding of yoga philosophy, refines your teaching methodology, and prepares you to guide students through advanced practices with wisdom and compassion."
                            </p>
                        </motion.div>
                    </div>
                </Section>

                {/* Prerequisites */}
                <Section className="bg-purple-50/30">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-10 border-purple-100">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                                    <GraduationCap className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-bold text-brand-dark font-display">Prerequisites</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Completion of 200-hour Yoga Teacher Training (Yoga Alliance registered preferred)",
                                    "Minimum 6 months of teaching experience (recommended)",
                                    "Consistent personal practice",
                                    "Copy of 200hr certificate upon registration",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1 bg-purple-100 rounded-full p-0.5">
                                            <Check className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" strokeWidth={3} />
                                        </div>
                                        <span className="text-lg text-brand-text-muted">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </Section>

                {/* Curriculum */}
                <Section id="curriculum" className="bg-brand-base relative">
                    <div className="absolute inset-0 opacity-30 bg-[url('/img/pattern-lotus.png')] bg-repeat" />

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                                <BookOpen className="w-4 h-4" /> RYT-500 Curriculum
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                                Advanced Curriculum
                            </h2>
                            <p className="text-brand-text-muted text-lg">Deep dive into advanced yoga practices</p>
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
                                                    <span className="text-purple-500 mt-1.5 text-xs">●</span>
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

                {/* Vedic Rituals */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
                                <Flame className="w-4 h-4" /> Spiritual Immersion
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">Advanced Vedic Practices</h2>
                            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
                                The 300hr program includes advanced Vedic rituals, deeper mantra practices, and extended meditation retreats to deepen your spiritual connection.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { name: "Extended Havan Ceremonies", desc: "Deep fire rituals" },
                                { name: "Mantra Diksha", desc: "Personal mantra initiation" },
                                { name: "Silent Retreat Day", desc: "Mauna practice" },
                                { name: "Himalayan Pilgrimage", desc: "Temple visits" },
                            ].map((item, i) => (
                                <Card key={i} className="flex items-center gap-4 p-6 border-l-4 border-l-orange-400 hover:bg-orange-50/20 transition-colors">
                                    <div className="p-3 bg-orange-100 rounded-full text-2xl flex-shrink-0">
                                        🔥
                                    </div>
                                    <div>
                                        <p className="font-bold text-xl text-brand-dark font-display mb-1">{item.name}</p>
                                        <p className="text-brand-text-muted">{item.desc}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Inclusions */}
                <Section className="bg-stone-50">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">Everything Included</h2>
                        <p className="text-brand-text-muted text-xl">Complete advanced training package</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {inclusions.map((category, i) => (
                            <Card key={i} className="p-8 bg-white border border-stone-200">
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
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Investment in Mastery</h2>
                            <p className="text-brand-text-muted text-xl">Complete your RYT-500 certification</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Shared Room */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-white text-brand-dark p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-purple-600 text-white text-sm px-6 py-2 rounded-bl-2xl font-bold uppercase tracking-widest">
                                    Best Value
                                </div>
                                <h3 className="text-2xl font-bold mb-2 font-display">Shared Room</h3>
                                <div className="text-5xl font-bold text-purple-600 mb-6">
                                    $2100 <span className="text-lg text-gray-500 font-medium">USD</span>
                                </div>

                                <div className="h-px bg-gray-100 my-8" />

                                <ul className="space-y-4 text-gray-600 mb-10">
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Twin Sharing AC Room</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 28 Nights Stay</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 3 Meals Daily</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Full Course Access</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> RYT-500 Certification</li>
                                </ul>

                                <Link
                                    href="/contact?course=300hr&room=shared"
                                    className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-4 rounded-xl transition-colors font-bold text-lg shadow-lg hover:shadow-xl"
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
                                <div className="text-5xl font-bold text-purple-500 mb-6">
                                    $2800 <span className="text-lg text-gray-400 font-medium">USD</span>
                                </div>

                                <div className="h-px bg-gray-200 my-8" />

                                <ul className="space-y-4 text-gray-600 mb-10">
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Private AC Room</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 28 Nights Stay</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> 3 Meals Daily</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> Full Course Access</li>
                                    <li className="flex items-center gap-3"><Check className="w-5 h-5 text-green-500" /> RYT-500 Certification</li>
                                </ul>

                                <Link
                                    href="/contact?course=300hr&room=private"
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
                                <h4 className="text-xl font-bold text-purple-400 mb-2">
                                    💰 Early Bird Offer
                                </h4>
                                <p className="text-lg text-brand-text-muted">
                                    Book 60 days in advance and <span className="text-brand-dark font-bold">save $150</span> off your tuition!
                                </p>
                                <div className="mt-4">
                                    <a href="https://wa.me/918979095535" target="_blank" className="text-sm text-gray-400 hover:text-white underline decoration-dotted">
                                        Contact us on WhatsApp for checks availability
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Section>

                {/* Wisdom Links */}
                <WisdomLinks />

                {/* CTA */}
                <Section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                            Advance Your Teaching Career
                        </h2>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed">
                            Take your yoga teaching to the next level with our comprehensive 300-hour advanced training.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-purple-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1"
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
