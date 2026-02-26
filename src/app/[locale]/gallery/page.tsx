"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Section } from "@/components/ui/Section"
import { Camera, Instagram } from "lucide-react"
import Link from "next/link"

const galleryImages = [
    { src: "/img/optimized/IMG-20260125-WA0033.webp", alt: "Morning Yoga by the Ganges", span: "md:col-span-1 md:row-span-2" },
    { src: "/img/optimized/pranayama.webp", alt: "Pranayama Session", span: "md:col-span-1 md:row-span-1" },
    { src: "/img/optimized/meditation.webp", alt: "Meditation in Nature", span: "md:col-span-1 md:row-span-1" },
    { src: "/img/optimized/IMG-20260125-WA0040.webp", alt: "Student Group", span: "md:col-span-2 md:row-span-2" },
    { src: "/img/optimized/advanced pranayama.webp", alt: "Advanced Asana", span: "md:col-span-1 md:row-span-1" },
    { src: "/img/optimized/ceremony.webp", alt: "Evening Aarti", span: "md:col-span-1 md:row-span-1" },

    { src: "/img/optimized/IMG-20260125-WA0038.webp", alt: "Philosophy Class", span: "md:col-span-2 md:row-span-1" },
    { src: "/img/optimized/yogahall2.webp", alt: "Outdoor Yoga", span: "md:col-span-1 md:row-span-1" },
    { src: "/img/optimized/IMG-20260125-WA0034.webp", alt: "Havan Ceremony", span: "md:col-span-1 md:row-span-1" },
]

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-brand-base">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-5 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-brand-primary/20">
                            Moments in Time
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight text-brand-dark">
                            Life at <span className="text-brand-primary">Anantadrishti</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-text-muted mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                            Glimpses of spiritual awakening, community, and the serene beauty of Rishikesh.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <Section className="bg-white" pattern="lotus">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-flow-dense auto-rows-[300px]">
                        {galleryImages.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${img.span}`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white font-bold text-lg">{img.alt}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Instagram Feed / CTA */}
            <Section className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
                    >
                        <Instagram className="w-16 h-16 mx-auto mb-6 text-white" />
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Follow Our Journey</h2>
                        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                            Join our daily stories and updates on Instagram. Be part of our growing global community.
                        </p>
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            @anantadrishtiyoga
                        </Link>
                    </motion.div>
                </div>
            </Section>
        </main>
    )
}
