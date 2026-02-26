"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const retreats = [
    {
        id: "one-day",
        title: "One Day Yoga Retreat",
        tagline: "Experience Yoga in Nature",
        duration: "1 Night • 4 Sessions",
        price: "$150 USD",
        description: "Discover the real ideology of yoga through an immersive day-and-night experience in nature. Perfect for those wanting a taste of authentic yoga practice in Rishikesh.",
        image: "/images/yoga-hall-2.webp",
        color: "blue",
        features: [
            { title: "Morning Pranayama", desc: "Start with energizing breath work" },
            { title: "Hatha Yoga Practice", desc: "Traditional asana practice with alignment focus" },
            { title: "Waterfall Philosophy", desc: "Study yoga philosophy in a scenic natural cave" },
            { title: "Nature Meditation", desc: "Guided meditation in peaceful surroundings" },
        ],
    },
    {
        id: "pranayama-3day",
        title: "3-Day Pranayama Retreat",
        tagline: "Master Your Breath",
        duration: "4 Nights • 12 Sessions",
        price: "$300 USD",
        description: "An intensive immersion into the ancient science of breath control. Learn advanced pranayama techniques, mudras, and meditation practices that transform your energy system.",
        image: "/images/advanced-pranayama-2.webp",
        color: "purple",
        features: [
            { title: "6 Pranayama Sessions", desc: "Intensive breath work including chakra & nadi pranayama" },
            { title: "3 Philosophy Classes", desc: "Understanding the science behind pranayama" },
            { title: "3 Meditation Sessions", desc: "Deepening awareness through stillness" },
            { title: "10 Sattvic Meals", desc: "Nourishing organic food to support your practice" },
        ],
    },
    {
        id: "7day-yoga",
        title: "7-Day Yoga Retreat",
        tagline: "Complete Yoga Experience",
        duration: "8 Nights • 28 Sessions",
        price: "$600 USD",
        description: "A comprehensive week of yoga including asanas, pranayama, philosophy, meditation, and cultural experiences. Perfect for those seeking deep transformation in a week.",
        image: "/images/retreats.webp",
        color: "teal",
        features: [
            { title: "7 Asana Classes", desc: "Daily Hatha Yoga practice with proper alignment" },
            { title: "7 Pranayama Sessions", desc: "Advanced breathing techniques daily" },
            { title: "7 Philosophy & Meditation Classes", desc: "Deep study and contemplative practices" },
            { title: "2 Nature Hikings & Temple Visit", desc: "Waterfall excursion & Kunjapuri temple sunrise" },
        ],
    },
];

const colorClasses = {
    blue: { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200" },
    purple: { bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-200" },
    teal: { bg: "bg-teal-100", text: "text-teal-800", border: "border-teal-200" },
};

export default function YogaRetreatsPage() {
    return (
        <main className="min-h-screen bg-brand-base">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-gradient-to-b from-amber-50 to-brand-base">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="text-6xl" aria-hidden="true">🕉️</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-brand-dark mb-6 font-display"
                    >
                        Yoga Retreats in Rishikesh
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed mb-4"
                    >
                        Experience profound transformation in the sacred valley of the Himalayas
                    </motion.p>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full mb-6" />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-base md:text-lg text-brand-text-muted max-w-2xl mx-auto"
                    >
                        Disconnect from the pressures of daily life and reconnect with your true self through authentic yoga practices in Rishikesh, the World Capital of Yoga.
                    </motion.p>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-display">
                            Why Choose Our Retreats?
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-brand-text-muted">
                            Immerse yourself in traditional yoga teachings with experienced instructors in a serene, natural environment.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: "🏔️", title: "Sacred Location", desc: "Nestled in the Himalayas by the holy Ganges River" },
                            { icon: "🧘", title: "Authentic Teachings", desc: "Learn from traditionally trained Hatha Yoga teachers" },
                            { icon: "🌿", title: "Natural Setting", desc: "Practice in serene surroundings with fresh mountain air" },
                            { icon: "❤️", title: "Holistic Approach", desc: "Integration of asanas, pranayama, meditation, philosophy" },
                        ].map((item, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
                            >
                                <div className="text-5xl mb-4 text-center" aria-hidden="true">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-brand-dark mb-2 text-center">{item.title}</h3>
                                <p className="text-brand-text-muted text-center">{item.desc}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Retreat Programs */}
            <section className="py-16 md:py-24 bg-white/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-display">
                            Our Retreat Programs
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-brand-text-muted">
                            Choose the program that resonates with your current journey.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {retreats.map((retreat, index) => {
                            const colors = colorClasses[retreat.color as keyof typeof colorClasses];
                            return (
                                <motion.div
                                    key={retreat.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="max-w-6xl mx-auto"
                                >
                                    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
                                        <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                            <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                                <div className={`inline-block ${colors.bg} ${colors.text} px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit`}>
                                                    {retreat.tagline}
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{retreat.title}</h3>
                                                <p className="text-xl text-brand-primary font-semibold mb-2">
                                                    {retreat.duration} • {retreat.price}
                                                </p>
                                                <p className="text-brand-text-muted mb-6 leading-relaxed">
                                                    {retreat.description}
                                                </p>

                                                <div className="space-y-3 mb-8">
                                                    {retreat.features.map((feature, i) => (
                                                        <div key={i} className="flex items-start gap-3">
                                                            <span className="text-brand-primary text-xl mt-1">✓</span>
                                                            <div>
                                                                <p className="font-semibold text-brand-dark">{feature.title}</p>
                                                                <p className="text-sm text-brand-text-muted">{feature.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="flex flex-col sm:flex-row gap-4">
                                                    <Link
                                                        href="/contact"
                                                        className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg text-center"
                                                    >
                                                        Book Now
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className={`relative h-64 lg:h-auto min-h-[400px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                                <Image
                                                    src={retreat.image}
                                                    alt={retreat.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-display">
                            What&apos;s Included
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-brand-text-muted">
                            Everything you need for a transformative retreat experience.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "🏠", title: "Accommodation", desc: "Comfortable rooms in our peaceful ashram setting" },
                            { icon: "🥗", title: "Organic Meals", desc: "Three sattvic vegetarian meals daily from our organic farm" },
                            { icon: "🧘‍♂️", title: "Daily Classes", desc: "Asana, pranayama, meditation, and philosophy sessions" },
                            { icon: "💆", title: "Ayurveda Consultation", desc: "Traditional wellness assessments and treatments" },
                            { icon: "📖", title: "Study Materials", desc: "Comprehensive manual and resources for your practice" },
                            { icon: "🎭", title: "Cultural Activities", desc: "Kirtan, Ganga Aarti, and local temple visits" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                                    <div>
                                        <h3 className="font-semibold text-brand-dark mb-1">{item.title}</h3>
                                        <p className="text-sm text-brand-text-muted">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-amber-500 to-orange-500">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                        Ready to Begin Your Journey?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Contact us today to reserve your spot for an unforgettable yoga retreat experience.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-brand-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-amber-50 transition-all shadow-lg"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </main>
    );
}
