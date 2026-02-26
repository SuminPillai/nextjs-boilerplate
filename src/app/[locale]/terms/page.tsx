"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-brand-base py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2 font-display">Terms & Conditions</h1>
                    <p className="text-brand-text-muted mb-8">Last updated: February 2026</p>

                    <div className="prose prose-lg max-w-none text-brand-text-muted">
                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By registering for any program at Anantadrishti Yoga, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not register for our programs.
                        </p>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">2. Registration & Payment</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>A non-refundable deposit is required to secure your spot in any program.</li>
                            <li>Full payment is due 30 days before the program start date.</li>
                            <li>Payments can be made via bank transfer, PayPal, or credit card.</li>
                            <li>All prices are in USD unless otherwise specified.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">3. Health & Safety</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You must disclose any health conditions, injuries, or limitations before starting the program.</li>
                            <li>You are responsible for informing your instructor of any discomfort during practice.</li>
                            <li>Participation in all activities is at your own risk.</li>
                            <li>We recommend purchasing travel and health insurance.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">4. Code of Conduct</h2>
                        <p>All participants are expected to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Respect fellow students, teachers, and staff</li>
                            <li>Maintain a drug and alcohol-free environment on campus</li>
                            <li>Follow the ashram rules and schedule</li>
                            <li>Practice non-violence in thought, word, and action</li>
                            <li>Maintain a vegetarian diet during the program</li>
                        </ul>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">5. Certification Requirements</h2>
                        <p>For Teacher Training Courses:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Minimum 90% attendance is required for certification</li>
                            <li>Successful completion of all practical and written assessments</li>
                            <li>Active participation in all activities</li>
                            <li>Adherence to the code of conduct</li>
                        </ul>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">6. Photography & Media</h2>
                        <p>
                            By participating in our programs, you grant Anantadrishti Yoga permission to use photographs and videos taken during the program for promotional purposes, unless you notify us in writing of your objection.
                        </p>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">7. Liability Waiver</h2>
                        <p>
                            Anantadrishti Yoga, its teachers, and staff shall not be held liable for any injury, loss, or damage of personal property during the program. Participants assume full responsibility for their own health and safety.
                        </p>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">8. Force Majeure</h2>
                        <p>
                            We are not liable for failure to perform obligations due to circumstances beyond our control, including natural disasters, war, pandemic, or government restrictions.
                        </p>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">9. Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Rishikesh, Uttarakhand.
                        </p>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">10. Contact</h2>
                        <p>
                            For questions about these Terms & Conditions, please contact:<br />
                            <strong>Email:</strong> info@anantadrishtiyoga.com
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200 flex gap-4">
                        <Link href="/" className="text-brand-primary hover:underline">← Back to Home</Link>
                        <Link href="/refund" className="text-brand-primary hover:underline">Refund Policy →</Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
