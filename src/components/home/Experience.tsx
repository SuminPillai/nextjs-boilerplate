"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Utensils, Mountain, BedDouble } from "lucide-react";

const experiences = [
    {
        title: "Sattvic Nutrition",
        description: "Nourish your body with wholesome, vegetarian meals prepared with love and fresh, local ingredients.",
        image: "/img/optimized/nutrition.webp",
        icon: Utensils,
        colSpan: "md:col-span-1",
    },
    {
        title: "Himalayan Excursions",
        description: "Explore sacred caves, waterfalls, and temples in the foothills of the Himalayas.",
        image: "/img/optimized/excursion.webp",
        icon: Mountain,
        colSpan: "md:col-span-1",
    },
    {
        title: "Comfortable Stay",
        description: "Rest and rejuvenate in our clean, peaceful, and comfortable accommodation.",
        image: "/img/optimized/accommodation.webp",
        icon: BedDouble,
        colSpan: "md:col-span-1",
    },
];

export default function Experience() {
    return (
        <Section className="bg-stone-50" pattern="lotus">
            <ScrollReveal>
                <div className="text-center mb-16 max-w-3xl mx-auto px-6">
                    <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary-dark border border-brand-primary/20 rounded-full text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
                        The Anantadrishti Experience
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark font-display mb-6">
                        A Sanctuary for the Soul
                    </h2>
                    <p className="text-lg text-brand-text-muted leading-relaxed">
                        Immerse yourself in a holistic yogic lifestyle. From the food you eat to the environment you breathe, every aspect of your stay is curated to support your spiritual journey.
                    </p>
                </div>
            </ScrollReveal>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {experiences.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={item.colSpan}
                        >
                            <Card className="h-full group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[300px]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-3 text-brand-primary-light">
                                        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold font-display text-white">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {item.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
