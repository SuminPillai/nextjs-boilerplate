"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BookClassPage() {
    return (
        <main className="min-h-screen bg-brand-base">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-b from-green-50 to-brand-base overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="text-6xl" aria-hidden="true">📅</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-brand-dark mb-6 font-display"
                    >
                        Book a Class
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed mb-4"
                    >
                        Start your yoga journey with us
                    </motion.p>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto rounded-full" />
                </div>
            </section>

            {/* Options */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display">Choose Your Path</h2>
                        <p className="text-brand-text-muted mt-2">Select the program that suits your journey</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Drop-in Classes */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-green-500"
                        >
                            <div className="text-4xl mb-4">🧘</div>
                            <h3 className="text-2xl font-bold text-brand-dark mb-2">Drop-in Classes</h3>
                            <p className="text-brand-text-muted mb-6">
                                Join our regular classes for a single session. Perfect for travelers or those wanting to try before committing.
                            </p>
                            <div className="text-3xl font-bold text-green-600 mb-6">
                                ₹500 <span className="text-sm text-gray-500 font-normal">/ class</span>
                            </div>
                            <Link
                                href="/contact?type=dropin"
                                className="block w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-semibold"
                            >
                                Book Class
                            </Link>
                        </motion.div>

                        {/* Retreats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-xl text-center border-t-4 border-amber-500 transform md:scale-105 relative z-10"
                        >
                            <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded">Popular</div>
                            <div className="text-4xl mb-4">🏔️</div>
                            <h3 className="text-2xl font-bold text-brand-dark mb-2">Yoga Retreats</h3>
                            <p className="text-brand-text-muted mb-6">
                                Immersive retreat experiences from 1 day to 7 days. Full accommodation and meals included.
                            </p>
                            <div className="text-3xl font-bold text-amber-600 mb-6">
                                $150+ <span className="text-sm text-gray-500 font-normal">/ retreat</span>
                            </div>
                            <Link
                                href="/yoga-retreats"
                                className="block w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg hover:from-amber-600 hover:to-orange-600 transition font-semibold"
                            >
                                View Retreats
                            </Link>
                        </motion.div>

                        {/* Teacher Training */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-purple-500"
                        >
                            <div className="text-4xl mb-4">🎓</div>
                            <h3 className="text-2xl font-bold text-brand-dark mb-2">Teacher Training</h3>
                            <p className="text-brand-text-muted mb-6">
                                Comprehensive TTC programs from 100 to 300 hours. Yoga Alliance certified.
                            </p>
                            <div className="text-3xl font-bold text-purple-600 mb-6">
                                $900+ <span className="text-sm text-gray-500 font-normal">/ course</span>
                            </div>
                            <Link
                                href="/courses/200-hour-yoga-ttc"
                                className="block w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition font-semibold"
                            >
                                View Courses
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 md:py-24 bg-green-50/50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark font-display">Get in Touch</h2>
                        <p className="text-brand-text-muted mt-2">Have questions? We&apos;re here to help.</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Contact Info */}
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">📍</span>
                                        <div>
                                            <p className="font-semibold text-brand-dark">Address</p>
                                            <p className="text-brand-text-muted">Anantadrishti Yoga, Laxman Jhula Road, Rishikesh, Uttarakhand 249302, India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">📧</span>
                                        <div>
                                            <p className="font-semibold text-brand-dark">Email</p>
                                            <a href="mailto:info@anantadrishtiyoga.com" className="text-green-600 hover:underline">
                                                info@anantadrishtiyoga.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">📱</span>
                                        <div>
                                            <p className="font-semibold text-brand-dark">WhatsApp</p>
                                            <a href="https://wa.me/919876543210" className="text-green-600 hover:underline">
                                                +91 98765 43210
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h3 className="text-xl font-bold text-brand-dark mb-6">Quick Links</h3>
                                <div className="space-y-3">
                                    <Link
                                        href="/yoga-retreats"
                                        className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                                    >
                                        <span className="font-semibold text-brand-dark">🏔️ View Yoga Retreats</span>
                                    </Link>
                                    <Link
                                        href="/courses/200-hour-yoga-ttc"
                                        className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                                    >
                                        <span className="font-semibold text-brand-dark">🎓 200-Hour TTC Program</span>
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                                    >
                                        <span className="font-semibold text-brand-dark">✉️ Send Us a Message</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-green-500 to-teal-500">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">Ready to Begin?</h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss your yoga goals and find the perfect program.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-green-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition-all shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
