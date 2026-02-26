"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SatsangPage() {
    return (
        <main className="min-h-screen bg-brand-base">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-b from-yellow-50 to-brand-base overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="text-6xl" aria-hidden="true">🙏</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-brand-dark mb-6 font-display"
                    >
                        Satsang in Rishikesh
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed mb-4 font-serif italic"
                    >
                        Spiritual Gathering in the Company of Truth
                    </motion.p>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full" />
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
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 font-display">What is Satsang?</h2>
                            <div className="prose prose-lg text-brand-text-muted leading-relaxed space-y-4">
                                <p>
                                    Satsang literally means &quot;being in the company of truth&quot; (sat = truth, sang = company). It is a gathering of seekers who come together for spiritual discourse, meditation, and the sharing of wisdom.
                                </p>
                                <blockquote className="italic text-yellow-600 border-l-4 border-yellow-400 pl-4 my-6">
                                    &quot;सत्सङ्गत्वे निस्सङ्गत्वं निस्सङ्गत्वे निर्मोहत्वम्&quot;
                                    <br />
                                    Good company leads to detachment, detachment leads to freedom from delusion.
                                    <br />
                                    <span className="text-sm">— Bhaja Govindam</span>
                                </blockquote>
                                <p>
                                    In the presence of truth-seekers and wise teachers, our own understanding deepens. Satsang creates a sacred space for questioning, contemplation, and spiritual growth.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-yellow-100 rounded-2xl transform -rotate-1" />
                            <Image
                                src="/img/optimized/herosection.webp"
                                alt="Satsang spiritual gathering and discourse at Anantadrishti Yoga in Rishikesh"
                                width={600}
                                height={400}
                                className="relative rounded-xl shadow-lg w-full h-auto object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Satsang Elements */}
            <section className="py-16 md:py-24 bg-yellow-50/50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display">Elements of Satsang</h2>
                        <p className="text-brand-text-muted mt-2">What happens during a gathering</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: "🕉️", title: "Opening Chant", desc: "Invocation mantras to create sacred space" },
                            { icon: "📖", title: "Scriptural Reading", desc: "Passages from sacred texts for reflection" },
                            { icon: "💬", title: "Discourse", desc: "Teacher's commentary and practical wisdom" },
                            { icon: "❓", title: "Q&A", desc: "Open discussion and clarification" },
                            { icon: "🧘", title: "Meditation", desc: "Guided or silent contemplation" },
                            { icon: "🎵", title: "Bhajan", desc: "Devotional singing to close" },
                            { icon: "🍵", title: "Chai & Community", desc: "Informal sharing afterwards" },
                            { icon: "🙏", title: "Closing Prayer", desc: "Gratitude and blessings" },
                        ].map((element, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white p-5 rounded-xl shadow-lg text-center"
                            >
                                <div className="text-3xl mb-3">{element.icon}</div>
                                <h3 className="font-bold text-brand-dark mb-1">{element.title}</h3>
                                <p className="text-brand-text-muted text-sm">{element.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Daily Schedule */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display">Evening Satsang Schedule</h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-yellow-500 text-white p-6 text-center">
                            <p className="text-2xl font-bold">Daily at 8:00 PM</p>
                            <p className="opacity-90">Open to all students and guests</p>
                        </div>
                        <div className="p-8">
                            <div className="space-y-4">
                                {[
                                    { time: "8:00 PM", activity: "Opening Mantra & Pranayama" },
                                    { time: "8:15 PM", activity: "Scriptural Reading & Discussion" },
                                    { time: "8:45 PM", activity: "Meditation or Trataka" },
                                    { time: "9:00 PM", activity: "Closing Bhajan & Prayer" },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                        <div className="min-w-[80px] text-yellow-600 font-bold">{item.time}</div>
                                        <div className="text-brand-dark">{item.activity}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 md:py-24 bg-brand-base">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display">Benefits of Satsang</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { icon: "🌟", text: "Clears doubts and misconceptions" },
                            { icon: "🤝", text: "Creates spiritual community (sangha)" },
                            { icon: "📚", text: "Deepens understanding of scriptures" },
                            { icon: "🔥", text: "Inspires and motivates practice" },
                            { icon: "💭", text: "Provides space for questions" },
                            { icon: "🙏", text: "Strengthens devotion and faith" },
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

            {/* CTA */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-yellow-500 to-orange-500">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">Join the Sangha</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Experience the power of spiritual community and collective wisdom.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-yellow-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-50 transition-all shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
