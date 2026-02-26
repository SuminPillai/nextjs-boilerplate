"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SanskritVerse } from "@/components/ui/SanskritVerse";
import { WisdomLinks } from "@/components/ui/WisdomLinks";
import { Check, Calendar, Award, Flame, BookOpen, Users, Heart } from "lucide-react";
import { CourseSchema } from "@/components/seo/JsonLd";

// Data structures (kept consistent with original)
const schedule = [
    { time: "5:30 – 7:00 am", activity: "Nitya Pūjā & Vedic Havan 🔥", highlight: true },
    { time: "7:00 – 9:00 am", activity: "Prāṇāyāma Sādhana & Shadkarma" },
    { time: "9:00 am", activity: "Sattvic Breakfast 🥥", meal: true },
    { time: "11:00 – 1:00 pm", activity: "Hatha Yoga & Functional Anatomy" },
    { time: "1:00 pm", activity: "Lunch 🍲", meal: true },
    { time: "2:30 – 4:00 pm", activity: "Yoga Philosophy" },
    { time: "4:00 – 4:45 pm", activity: "Mantra Chanting 🕉️", highlight: true },
    { time: "5:30 – 6:00 pm", activity: "Evening Pūjā" },
    { time: "6:00 – 7:00 pm", activity: "Bhajan / Kīrtana / Meditation", highlight: true },
    { time: "7:00 – 8:00 pm", activity: "Dinner 🍛", meal: true },
    { time: "8:00 – 9:00 pm", activity: "Satsang / Trāṭaka" },
];

const curriculum = [
    {
        title: "Hatha & Ashtanga",
        items: [
            "Classic Surya Namaskar",
            "Ashtanga Vinyasa Primary Series (Intro)",
            "Correct Alignment & Props Usage",
            "Applied Anatomy in Poses",
            "Art of Adjustment",
        ],
        color: "border-amber-500",
    },
    {
        title: "Prāṇāyāma & Meditation",
        items: [
            "Deep Breathing Techniques",
            "Nadi Shodhan, Kapalbhati, Bhastrika",
            "Bandhas (Energy Locks)",
            "Yoga Nidra & Guided Meditation",
            "Mantra Chanting (Bhakti Yoga)",
        ],
        color: "border-orange-500",
    },
    {
        title: "Philosophy & Ethics",
        items: [
            "Patanjali Yoga Sutras (Eight Limbs)",
            "History of Yoga & Lineage",
            "Ayurveda Basics",
            "Yogic Diet & Lifestyle",
            "Ethics for Yoga Teachers",
        ],
        color: "border-amber-600",
    },
    {
        title: "Anatomy & Physiology",
        items: [
            "Skeletal & Muscular Systems",
            "Respiratory System & Breath",
            "Digestive System & Diet",
            "Spine & Joint Health",
            "Preventing Injuries",
        ],
        color: "border-amber-700",
    },
    {
        title: "Teaching Methodology",
        items: [
            "Structuring a Class",
            "Voice Projection & Cueing",
            "Demonstration Techniques",
            "Student Management",
            "Business of Yoga",
        ],
        color: "border-orange-600",
    },
    {
        title: "Practicum",
        items: [
            "Peer Teaching",
            "Feedback & Assessment",
            "Final Practical Exam",
            "Written Exam",
            "Closing Ceremony",
        ],
        color: "border-brand-primary",
    },
];

const rituals = [
    { name: "Ganapati Havan", description: "For new beginnings", icon: "🔥" },
    { name: "Navadurga Havan", description: "Worshipping Shakti", icon: "🔥" },
    { name: "Guru Puja", description: "Honoring the lineage", icon: "🌺" },
    { name: "Ganga Aarti", description: "River offering", icon: "💧" },
];

const inclusions = [
    { category: "Accommodation", items: ["25 Nights Stay", "Private or Shared AC Room", "Attached Bathroom", "Daily Housekeeping"] },
    { category: "Meals", items: ["3 Daily Sattvic Meals", "Herbal Tea & Snacks", "Nutritious Vegetarian Food"] },
    { category: "Course Materials", items: ["Comprehensive Manuals", "T-shirt", "Neti Pot & Rubber Neti", "Yoga Mat (to use)"] },
    { category: "Experiences", items: ["Weekly Temple Visits", "Ganga Aarti Visit", "Waterfall Excursion", "Cultural Immersion"] },
];

export default function TwoHundredHourTTCPage() {
    return (
        <>
            <CourseSchema
                name="200 Hour Yoga Teacher Training"
                description="Yoga Alliance certified 200-hour yoga teacher training in Rishikesh, India. Learn Hatha, Ashtanga, anatomy, philosophy, pranayama, meditation, and teaching methodology."
                url="https://www.anantadrishtiyoga.com/courses/200-hour-yoga-ttc"
                instances={[
                    {
                        name: "200hr YTT — March 2026",
                        startDate: "2026-03-01",
                        endDate: "2026-03-26",
                        price: "1800",
                        priceCurrency: "USD",
                        courseMode: "Onsite",
                        courseWorkload: "PT200H"
                    },
                    {
                        name: "200hr YTT — April 2026",
                        startDate: "2026-04-01",
                        endDate: "2026-04-26",
                        price: "1800",
                        priceCurrency: "USD",
                        courseMode: "Onsite",
                        courseWorkload: "PT200H"
                    }
                ]}
            />
            <main className="min-h-screen bg-brand-base">
                {/* Hero Section */}
                <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-brand-base text-brand-dark overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-40">
                        <Image
                            src="/img/optimized/yogahall.webp"
                            alt="Students practicing in the yoga hall during 200-hour teacher training at Anantadrishti Yoga, Rishikesh"
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
                                Most Popular Course
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight drop-shadow-sm">
                                200 Hour Yoga<br />
                                <span className="text-amber-700">Teacher Training</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-brand-text-muted mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                                "योगश्चित्तवृत्तिनिरोधः" (Yogaś citta-vṛtti-nirodhaḥ)
                                <br className="hidden md:block" />
                                <span className="text-lg md:text-xl opacity-90 mt-2 block">
                                    A complete 25-day immersion into the path of Yoga in Rishikesh.
                                </span>
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base font-medium">
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Calendar className="w-4 h-4 text-amber-600" /> 25 Nights / 26 Days
                                </div>
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <Award className="w-4 h-4 text-amber-600" /> Yoga Alliance Certified
                                </div>
                                <div className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200 flex items-center gap-2 hover:bg-white/80 transition-colors text-brand-dark">
                                    <span>🕉️</span> Full Immersion
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                <Link
                                    href="#pricing"
                                    className="bg-brand-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-brand-primary-dark transition-all shadow-lg hover:shadow-amber-500/25 hover:-translate-y-1"
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
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display">
                                Transform Your Practice
                            </h2>
                            <div className="prose prose-lg text-brand-text-muted leading-relaxed space-y-6">
                                <p>
                                    The 200 Hour Yoga Teacher Training Course at Anantadrishti Yoga School is our most
                                    popular and comprehensive foundational program. It is designed to take you on a
                                    journey from a student to a confident teacher.
                                </p>
                                <p>
                                    This course covers all essential aspects of yoga: Hatha Yoga, Ashtanga Vinyasa,
                                    Pranayama, Meditation, Anatomy, and Yoga Philosophy. Beyond the physical, we
                                    emphasize <strong>discipline (Anushasana)</strong> and{" "}
                                    <strong>devotion (Bhakti)</strong>.
                                </p>
                                <blockquote className="italic text-brand-primary border-l-4 border-brand-primary pl-6 my-8 py-2 bg-amber-50/50 rounded-r-lg">
                                    &quot;तस्य भूमिषु विनियोगः&quot; (Tasya bhūmiṣu viniyogaḥ)
                                    <br />
                                    <span className="text-sm font-semibold opacity-80 not-italic mt-1 block">- Patanjali Yoga Sutra 3.6</span>
                                    <span className="block mt-2 not-italic">Its application is by stages.</span>
                                </blockquote>
                                <p>
                                    Whether you intend to teach or simply want to deepen your own practice, this
                                    25-day immersion will lay a strong foundation for your spiritual and professional
                                    growth.
                                </p>
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
                                src="/img/optimized/retreats.webp"
                                alt="Student practicing yoga during 200-hour teacher training at Anantadrishti Yoga, Rishikesh"
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
                            <Card variant="default" className="p-8 md:p-10 bg-gradient-to-br from-white to-amber-50/50 border-amber-100/50">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-dark font-display">Perfect For</h3>
                                </div>
                                <ul className="space-y-4 text-brand-text-muted">
                                    {[
                                        "Beginners wanting to deepen their practice",
                                        "Aspiring yoga teachers ready to certify",
                                        "Practitioners seeking spiritual transformation",
                                        "Those wanting authentic Rishikesh experience",
                                        "Career changers exploring yoga as profession",
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

                            <Card variant="default" className="p-8 md:p-10 bg-gradient-to-br from-white to-green-50/50 border-green-100/50">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-green-100/50 rounded-xl text-green-600">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-dark font-display">What You&apos;ll Gain</h3>
                                </div>
                                <ul className="space-y-4 text-brand-text-muted">
                                    {[
                                        "RYT-200 Yoga Alliance Certification",
                                        "Confidence to teach yoga professionally",
                                        "Deep understanding of yoga philosophy",
                                        "Mastery of pranayama & meditation",
                                        "Lifelong community of fellow yogis",
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
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 bg-[url('/img/pattern-mandala.png')] bg-repeat opacity-10" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-white/20">
                                <Heart className="w-4 h-4 text-amber-400" />
                                <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Sacred Teaching</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                                Yoga Teaching as Sacred Sevā
                            </h2>
                            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto font-light leading-relaxed">
                                At Anantadrishti Yoga School, yoga is transmitted as a sacred responsibility, not merely a profession. Teaching yoga is understood as Sevā (selfless service) guided by awareness and compassion.
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
                                    sanskrit="योगः कर्मसु कौशलम्"
                                    transliteration="Yogaḥ karmasu kauśalam"
                                    translation="Yoga is excellence in action."
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
                                "Through disciplined practice and ethical living, teaching becomes an act of devotion offered for the welfare of all. This 200-hour program prepares you not just to instruct asanas, but to embody and transmit the complete yogic tradition with integrity and grace."
                            </p>
                        </motion.div>
                    </div>
                </Section>

                {/* Rishikesh Significance */}
                <Section variant="default">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full mb-6 border border-teal-100">
                                <span className="text-xl">🏔️</span>
                                <span className="text-sm font-bold text-teal-700 uppercase tracking-widest">Yoga Capital of the World</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-6">
                                The Significance of<br />Studying in Rishikesh
                            </h2>
                            <div className="space-y-6 text-brand-text-muted leading-relaxed text-lg">
                                <p>
                                    Rishikesh has been the spiritual seat of yoga, meditation, and Satsang for thousands of years. Studying TTC in Rishikesh allows students to experience yoga within its original cultural, spiritual, and philosophical ecosystem.
                                </p>
                                <p>
                                    At Anantadrishti Yoga School in Rishikesh, learning is supported by the natural stillness of the Himalayas and the sanctity of the Ganga.
                                </p>
                            </div>
                            <div className="mt-10">
                                <SanskritVerse
                                    sanskrit="देशे देशे गुरवो भवन्ति"
                                    transliteration="Deśe deśe guravo bhavanti"
                                    translation="True teachers arise where seekers are prepared."
                                    compact
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-br from-teal-100 to-blue-100 rounded-[2rem] transform -rotate-2 opacity-60" />
                            <Image
                                src="/img/optimized/advancedpranayama3.webp"
                                alt="View of the Himalayas from Anantadrishti Yoga School in Rishikesh"
                                width={600}
                                height={400}
                                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                            />
                        </motion.div>
                    </div>
                </Section>

                {/* Sacred Fire Rituals (Havan) */}
                <Section variant="light" pattern="mandala" className="border-t border-amber-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-1.5 rounded-full mb-6 border border-amber-200">
                                <Flame className="w-4 h-4 text-orange-600" />
                                <span className="text-sm font-bold text-orange-700 uppercase tracking-widest">Vedic Tradition</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-6">
                                Sacred Fire Rituals (Havan)
                            </h2>
                            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto">
                                Havan is an essential Vedic discipline representing offering, purification, and transformation. These sacred fire ceremonies are integral to your TTC experience.
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto mb-16">
                            <SanskritVerse
                                sanskrit="यज्ञो वै विष्णुः"
                                transliteration="Yajño vai viṣṇuḥ"
                                translation="Yajña itself is the Divine."
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Ganapati Havan */}
                            <Card className="p-8 border-l-4 border-l-orange-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-orange-100 rounded-full">
                                        <span className="text-2xl">🔥</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-dark font-display">Ganapati Havan</h3>
                                </div>
                                <p className="text-brand-text-muted text-lg leading-relaxed">
                                    Invoking Lord Ganesha to remove obstacles and bless new beginnings at the start of your training.
                                </p>
                            </Card>

                            {/* Navadurga Havan */}
                            <Card className="p-8 border-l-4 border-l-red-500">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-red-100 rounded-full">
                                        <span className="text-2xl">🔥</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-dark font-display">Navadurga Havan</h3>
                                </div>
                                <p className="text-brand-text-muted text-lg leading-relaxed">
                                    Invoking all nine forms of Divine Mother Durga for strength, wisdom, and spiritual protection.
                                </p>
                            </Card>
                        </div>

                        {/* Nine Forms of Durga */}
                        <Card variant="outline" className="p-10 bg-white/50 backdrop-blur-sm border-orange-100">
                            <h4 className="text-2xl font-bold text-brand-dark mb-8 text-center font-display">
                                The Nine Forms of Devi
                            </h4>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { name: "शैलपुत्री", transliteration: "Shailaputri", meaning: "Daughter of Mountains" },
                                    { name: "ब्रह्मचारिणी", transliteration: "Brahmacharini", meaning: "Devoted Student" },
                                    { name: "चंद्रघंटा", transliteration: "Chandraghanta", meaning: "Moon Bell" },
                                    { name: "कूष्माण्डा", transliteration: "Kushmanda", meaning: "Creator of Universe" },
                                    { name: "स्कन्दमाता", transliteration: "Skandamata", meaning: "Mother of Skanda" },
                                    { name: "कात्यायनी", transliteration: "Katyayani", meaning: "Warrior Goddess" },
                                    { name: "कालरात्रि", transliteration: "Kalaratri", meaning: "Dark Night" },
                                    { name: "महागौरी", transliteration: "Mahagauri", meaning: "Great White Goddess" },
                                    { name: "सिद्धिदात्री", transliteration: "Siddhidatri", meaning: "Bestower of Perfection" },
                                ].map((devi, i) => (
                                    <div
                                        key={i}
                                        className="bg-white p-5 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow text-center"
                                    >
                                        <p
                                            className="font-serif text-2xl text-brand-dark mb-2"
                                            style={{ fontFamily: "'Noto Serif Devanagari', serif" }}
                                        >
                                            {devi.name}
                                        </p>
                                        <p className="text-sm text-brand-primary font-bold uppercase tracking-wider mb-1">{devi.transliteration}</p>
                                        <p className="text-xs text-brand-text-muted">{devi.meaning}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 text-center">
                                <p className="text-brand-text-muted italic">
                                    Subsequently, fourteen days of Havans dedicated to various Devatās are conducted throughout the course.
                                </p>
                            </div>
                        </Card>

                        <div className="mt-16 max-w-2xl mx-auto">
                            <SanskritVerse
                                sanskrit="यज्ञेन यज्ञमयजन्त देवाः"
                                transliteration="Yajñena yajñam ayajanta devāḥ"
                                translation="Through sacred offering, the Divine is worshipped."
                                compact
                            />
                        </div>
                    </div>
                </Section>

                {/* Daily Schedule */}
                <Section className="bg-amber-50 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent" />

                    <div className="container mx-auto px-6 max-w-5xl relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                                Daily Structure & Discipline
                            </h2>
                            <p className="text-brand-text-muted text-xl">
                                A typical day in the ashram focused on Sadhana.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl border border-amber-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <tbody>
                                        {schedule.map((item, i) => (
                                            <tr
                                                key={i}
                                                className={`border-b last:border-0 border-gray-100 transition-colors hover:bg-amber-50/30 ${item.meal
                                                    ? "bg-stone-50"
                                                    : item.highlight
                                                        ? "bg-amber-50/50"
                                                        : ""
                                                    }`}
                                            >
                                                <td className="p-6 font-bold w-1/3 text-brand-primary whitespace-nowrap">
                                                    {item.time}
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
                        <p className="text-center mt-6 text-brand-text-muted italic">
                            * Weekly temple visits to Shakti Pīṭhas also included in the schedule.
                        </p>
                    </div>
                </Section>

                {/* Vedic Rituals Grid */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6">
                                <Flame className="w-4 h-4" /> Spiritual Connection
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-6">
                                Vedic Rituals & Havans
                            </h2>
                            <p className="text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
                                We integrate traditional Vedic Hawan (fire ceremonies) into our course to purify the
                                atmosphere and the mind. These ancient practices connect you to the Vedic lineage.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {rituals.map((ritual, i) => (
                                <Card key={i} className="p-6 text-center hover:bg-orange-50/30 transition-colors border-t-4 border-t-orange-400">
                                    <div className="text-4xl mb-4">{ritual.icon}</div>
                                    <h4 className="font-bold text-xl text-brand-dark mb-2 font-display">{ritual.name}</h4>
                                    <p className="text-brand-text-muted">{ritual.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* Curriculum */}
                <Section id="curriculum" className="bg-brand-base relative">
                    <div className="absolute inset-0 opacity-30 bg-[url('/img/pattern-lotus.png')] bg-repeat" />

                    <div className="relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
                                <BookOpen className="w-4 h-4" /> Yoga Alliance Approved
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                                Comprehensive Curriculum
                            </h2>
                            <p className="text-brand-text-muted text-lg">Meeting Yoga Alliance USA Standards</p>
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
                                                    <span className="text-brand-primary mt-1.5 text-xs">●</span>
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

                {/* Detailed Inclusions */}
                <Section className="bg-white">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                            Everything Included
                        </h2>
                        <p className="text-brand-text-muted text-xl">Complete package for your transformation</p>
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
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                                Investment in Your Future
                            </h2>
                            <p className="text-brand-text-muted text-xl">Choose your accommodation preference</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Shared Room */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-white text-brand-dark p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-amber-500 text-white text-sm px-6 py-2 rounded-bl-2xl font-bold uppercase tracking-widest">
                                    Most Popular
                                </div>
                                <h3 className="text-2xl font-bold mb-2 font-display">Shared Room</h3>
                                <div className="text-5xl font-bold text-brand-primary mb-6">
                                    $1800 <span className="text-lg text-gray-500 font-medium">USD</span>
                                </div>

                                <div className="h-px bg-gray-100 my-8" />

                                <ul className="space-y-4 text-gray-600 mb-10">
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500" /> Twin Sharing AC Room
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500" /> Attached Bathroom
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500" /> 3 Meals Daily
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500" /> Full Course Access
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500" /> RYT-200 Certification
                                    </li>
                                </ul>

                                <Link
                                    href="/contact?course=200hr&room=shared"
                                    className="block w-full bg-brand-primary hover:bg-brand-primary-dark text-white text-center py-4 rounded-xl transition-colors font-bold text-lg shadow-lg hover:shadow-xl"
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
                                <div className="text-5xl font-bold text-brand-primary mb-6">
                                    $2000 <span className="text-lg text-gray-400 font-medium">USD</span>
                                </div>

                                <div className="h-px bg-gray-200 my-8" />

                                <ul className="space-y-4 text-gray-600 mb-10">
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500" /> Private AC Room
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500" /> Attached Bathroom
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500" /> 3 Meals Daily
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500" /> Full Course Access
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-green-500" /> RYT-200 Certification
                                    </li>
                                </ul>

                                <Link
                                    href="/contact?course=200hr&room=private"
                                    className="block w-full bg-gray-900 hover:bg-black text-white text-center py-4 rounded-xl transition-colors font-bold text-lg shadow-lg"
                                >
                                    Book Private Room
                                </Link>
                            </motion.div>
                        </div>

                        {/* Early Bird */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-16 max-w-3xl mx-auto text-center"
                        >
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                                <h4 className="text-xl font-bold text-amber-400 mb-2">
                                    💰 Early Bird Offer
                                </h4>
                                <p className="text-lg text-brand-text-muted">
                                    Book 60 days in advance and <span className="text-brand-dark font-bold">save $100</span> off your tuition!
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
                <Section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                            Ready to Begin Your Teaching Journey?
                        </h2>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed">
                            Join our next batch and transform your practice into a lifelong teaching career.
                            The path of yoga awaits you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-amber-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all shadow-2xl hover:-translate-y-1"
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
