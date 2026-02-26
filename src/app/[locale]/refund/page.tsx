"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RefundPolicyPage() {
    return (
        <main className="min-h-screen bg-brand-base py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2 font-display">Refund & Cancellation Policy</h1>
                    <p className="text-brand-text-muted mb-8">Last updated: February 2026</p>

                    <div className="prose prose-lg max-w-none text-brand-text-muted">
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
                            <p className="font-semibold text-amber-800 mb-0">
                                We understand that plans change. Please read our refund policy carefully before booking.
                            </p>
                        </div>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">1. Deposit</h2>
                        <p>
                            A deposit of <strong>$300 USD</strong> (for Teacher Training) or <strong>$100 USD</strong> (for Retreats) is required to confirm your booking. This deposit is <strong>non-refundable</strong> but can be transferred to a future date (within 12 months) under certain circumstances.
                        </p>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">2. Cancellation by Student</h2>

                        <h3 className="text-lg font-semibold text-brand-dark mt-6 mb-2">Teacher Training Courses (100hr, 200hr, 300hr)</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 mt-4">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left border-b">Cancellation Timing</th>
                                        <th className="px-4 py-2 text-left border-b">Refund</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-2 border-b">60+ days before start</td>
                                        <td className="px-4 py-2 border-b">100% refund (minus deposit)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 border-b">30-59 days before start</td>
                                        <td className="px-4 py-2 border-b">50% refund (minus deposit)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 border-b">15-29 days before start</td>
                                        <td className="px-4 py-2 border-b">25% refund (minus deposit)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 border-b">Less than 15 days / No-show</td>
                                        <td className="px-4 py-2 border-b">No refund</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-lg font-semibold text-brand-dark mt-6 mb-2">Yoga Retreats (1-day, 3-day, 7-day)</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 mt-4">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left border-b">Cancellation Timing</th>
                                        <th className="px-4 py-2 text-left border-b">Refund</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-2 border-b">14+ days before start</td>
                                        <td className="px-4 py-2 border-b">100% refund (minus deposit)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 border-b">7-13 days before start</td>
                                        <td className="px-4 py-2 border-b">50% refund (minus deposit)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 border-b">Less than 7 days / No-show</td>
                                        <td className="px-4 py-2 border-b">No refund</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">3. Date Transfer</h2>
                        <p>
                            If you cannot attend your scheduled program, you may transfer your booking to a future date (within 12 months) with the following conditions:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Request must be made at least 14 days before the program start</li>
                            <li>One date transfer is permitted per booking</li>
                            <li>Original deposit remains non-refundable</li>
                            <li>Subject to availability</li>
                        </ul>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">4. Cancellation by Anantadrishti Yoga</h2>
                        <p>
                            In the rare event that we need to cancel a program:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You will receive a <strong>full refund</strong> including the deposit</li>
                            <li>Alternative: Transfer to the next available date with priority booking</li>
                            <li>We are not responsible for any travel or accommodation costs</li>
                        </ul>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">5. Early Departure</h2>
                        <p>
                            If you leave a program early for personal reasons, no refund will be provided for unused days. In case of medical emergency (with documentation), a partial credit may be considered on a case-by-case basis.
                        </p>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">6. Dismissal</h2>
                        <p>
                            If a student is dismissed due to violation of the code of conduct, no refund will be provided.
                        </p>

                        <h2 className="text-xl font-bold text-brand-dark mt-8 mb-4">7. How to Request a Refund</h2>
                        <p>
                            To request a refund or date transfer, please email us at:
                        </p>
                        <p className="mt-4">
                            <strong>Email:</strong> info@anantadrishtiyoga.com<br />
                            <strong>Subject:</strong> Refund Request - [Your Name] - [Program Date]
                        </p>
                        <p className="mt-4">
                            Refunds are processed within 14 business days via the original payment method.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200 flex gap-4">
                        <Link href="/" className="text-brand-primary hover:underline">← Back to Home</Link>
                        <Link href="/terms" className="text-brand-primary hover:underline">Terms & Conditions →</Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
