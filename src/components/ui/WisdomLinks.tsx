"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Flame, Heart, Wind } from "lucide-react";

const wisdomLinks = [
    {
        title: "Pranayama",
        desc: "The Science of Breath",
        icon: <Wind className="w-6 h-6" />,
        href: "/pranayama",
        color: "text-sky-600 bg-sky-50 border-sky-100"
    },
    {
        title: "Philosophy",
        desc: "Ancient Wisdom",
        icon: <BookOpen className="w-6 h-6" />,
        href: "/yoga-philosophy",
        color: "text-indigo-600 bg-indigo-50 border-indigo-100"
    },
    {
        title: "Rituals",
        desc: "Sacred Fire",
        icon: <Flame className="w-6 h-6" />,
        href: "/rituals",
        color: "text-orange-600 bg-orange-50 border-orange-100"
    },
    {
        title: "Bhakti",
        desc: "Path of Devotion",
        icon: <Heart className="w-6 h-6" />,
        href: "/devotion",
        color: "text-rose-600 bg-rose-50 border-rose-100"
    }
];

export function WisdomLinks() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark font-display">Explore Ancient Wisdom</h2>
                    <p className="text-brand-text-muted mt-2">Deepen your understanding of the yogic sciences</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {wisdomLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            className="group"
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                                className={`h-full p-6 rounded-xl border ${link.color} transition-all hover:shadow-lg text-center`}
                            >
                                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 bg-white shadow-sm group-hover:scale-110 transition-transform`}>
                                    <div className={link.color.split(" ")[0]}>
                                        {link.icon}
                                    </div>
                                </div>
                                <h3 className="font-bold text-brand-dark mb-1">{link.title}</h3>
                                <p className="text-xs md:text-sm text-brand-text-muted">{link.desc}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
