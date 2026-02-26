"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-brand-base py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2 font-display">Privacy Policy</h1>
                    <p className="text-brand-text-muted mb-8">Last updated: February 2026</p>

                    <div className="prose prose-lg max-w-none text-brand-text-muted">
                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">1. Introduction</h2>
                        <p>
                            Anantadrishti Yoga (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or participate in our programs.
                        </p>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">2. Information We Collect</h2>
                        <h3 className="text-lg font-semibold text-brand-dark mt-6 mb-2">Personal Information</h3>
                        <p>When you register for our courses or retreats, we may collect:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name and contact information (email, phone number)</li>
                            <li>Passport/ID information (for international students)</li>
                            <li>Health information relevant to yoga practice</li>
                            <li>Emergency contact details</li>
                            <li>Payment information</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-brand-dark mt-6 mb-2">Automatically Collected Information</h3>
                        <p>When you visit our website, we may automatically collect:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>IP address and browser type</li>
                            <li>Device information</li>
                            <li>Pages visited and time spent</li>
                            <li>Referring website</li>
                        </ul>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Process your registration and payments</li>
                            <li>Communicate with you about your program</li>
                            <li>Ensure your safety during yoga practices</li>
                            <li>Send newsletters and updates (with your consent)</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">4. Information Sharing</h2>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Service providers who assist in our operations (payment processors, email services)</li>
                            <li>Yoga Alliance (for certification purposes, with your consent)</li>
                            <li>Legal authorities when required by law</li>
                        </ul>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">6. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Withdraw consent at any time</li>
                        </ul>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">7. Cookies</h2>
                        <p>
                            We use cookies to enhance your browsing experience. You can control cookie settings through your browser. Disabling cookies may affect some website functionality.
                        </p>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">8. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="mt-4">
                            <strong>Email:</strong> info@anantadrishtiyoga.com<br />
                            <strong>Address:</strong> Anantadrishti Yoga, Laxman Jhula Road, Rishikesh, Uttarakhand 249302, India
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <Link href="/" className="text-brand-primary hover:underline">← Back to Home</Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
