"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { FAQSchema } from "@/components/seo/JsonLd";

const faqs = [
    {
        question: "What is included in the 200-Hour Yoga Teacher Training?",
        answer: "Our 200-hour YTT includes comprehensive training in Hatha and Ashtanga yoga, pranayama, meditation, yoga philosophy, anatomy, teaching methodology, and practicum. You'll also receive accommodation, three sattvic meals daily, course materials, and a Yoga Alliance certificate upon completion."
    },
    {
        question: "Do I need prior yoga experience to join the Teacher Training?",
        answer: "While some yoga experience is helpful, it's not mandatory. Our program is designed for dedicated students at all levels. We recommend at least 6 months of regular practice before joining. Our teachers will guide you through every step of your journey."
    },
    {
        question: "What is the accommodation like at Anantadrishti Yoga?",
        answer: "We offer comfortable private and shared rooms with attached bathrooms, hot water, Wi-Fi, and stunning views of the Himalayas. Our ashram-style accommodation provides a peaceful environment for your spiritual practice and personal growth."
    },
    {
        question: "Is the certification internationally recognized?",
        answer: "Yes! Upon successful completion, you'll receive a Yoga Alliance certified certificate (RYS 200, RYS 300). This allows you to register as a Registered Yoga Teacher (RYT) and teach yoga anywhere in the world."
    },
    {
        question: "What makes Rishikesh special for yoga training?",
        answer: "Rishikesh is known as the 'Yoga Capital of the World' and the 'Gateway to the Himalayas.' The sacred Ganges River, pristine mountain air, and centuries of spiritual heritage create the perfect environment for deep yoga practice and transformation."
    },
    {
        question: "What is your refund and cancellation policy?",
        answer: "We offer full refunds for cancellations made 30 days or more before the start date. Cancellations within 30 days receive 50% refund. Transfers to future courses are available at no extra charge with 14 days notice."
    }
];

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`border-b border-brand-dark/5 last:border-0 transition-colors duration-300 ${isOpen ? 'bg-amber-50/30' : 'bg-transparent'}`}
        >
            <button
                onClick={onToggle}
                className="w-full py-6 px-6 flex items-center justify-between text-left group"
                aria-expanded={isOpen}
            >
                <span className={`font-bold text-lg transition-colors pr-4 ${isOpen ? 'text-brand-primary' : 'text-brand-dark group-hover:text-brand-primary'}`}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-sm ${isOpen ? "bg-brand-primary text-white shadow-md" : "bg-white text-brand-dark/40 group-hover:bg-amber-100 group-hover:text-brand-primary"
                        }`}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 pt-0">
                            <p className="text-brand-text-muted leading-relaxed font-light text-base border-l-2 border-brand-primary/20 pl-4">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section className="bg-white py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-base/20 to-transparent pointer-events-none" />
            <div className="absolute -left-20 top-40 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
            <div className="absolute -right-20 bottom-40 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

            {/* FAQ Schema for SEO */}
            <FAQSchema faqs={faqs} />

            <div className="max-w-4xl mx-auto relative z-10 px-4">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-amber-100">
                            <HelpCircle className="w-4 h-4" />
                            Help Center
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-dark font-display mb-4">
                            Common Questions
                        </h2>
                        <p className="text-brand-text-muted max-w-xl mx-auto font-light text-lg">
                            Everything you need to know about our transformative teacher training programs and retreats.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="bg-white rounded-3xl shadow-xl shadow-brand-dark/5 border border-brand-dark/5 overflow-hidden backdrop-blur-sm">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                            index={index}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-100">
                        <p className="text-brand-dark font-medium text-lg">
                            Still have questions? We're here to help.
                        </p>
                        <a
                            href="https://wa.me/918979095535"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full font-bold shadow-lg hover:bg-green-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5 fill-current" />
                            Chat with us on WhatsApp
                        </a>
                        <p className="text-xs text-green-700/60 font-medium">Normally replies within an hour</p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
