"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"

// Mock data for blog posts - in a real app this would come from a CMS or MDX files
const blogPosts = [
    {
        slug: "benefits-of-hatha-yoga",
        title: "The Timeless Benefits of Hatha Yoga",
        excerpt: "Discover how the ancient practice of Hatha Yoga can transform your body, mind, and spirit in the modern world.",
        author: "Yogrishi Keshav",
        date: "October 15, 2023",
        category: "Yoga Practice",
        image: "/img/extern/outdoor-yoga-1.jpg"
    },
    {
        slug: "understanding-pranayama",
        title: "The Science of Breath: Understanding Pranayama",
        excerpt: "Explore the vital connection between breath and life force energy, and how to harness it for better health.",
        author: "Ananta Drishti Team",
        date: "September 28, 2023",
        category: "Pranayama",
        image: "/img/extern/outdoor-yoga-2.jpg"
    },
    {
        slug: "yoga-philosophy-daily-life",
        title: "Bringing Yoga Philosophy into Daily Life",
        excerpt: "How to apply the Yamas and Niyamas off the mat to live a more balanced and ethical life.",
        author: "Yogrishi Keshav",
        date: "September 10, 2023",
        category: "Philosophy",
        image: "/img/extern/outdoor-yoga-3.jpg"
    },
    {
        slug: "meditation-for-beginners",
        title: "A Beginner's Guide to Meditation",
        excerpt: "Simple techniques to start your meditation journey and find inner peace amidst the chaos.",
        author: "Ananta Drishti Team",
        date: "August 22, 2023",
        category: "Meditation",
        image: "/img/extern/outdoor-yoga-4.jpg"
    },
    {
        slug: "ayurvedic-diet-tips",
        title: "Ayurvedic Diet Tips for a Healthy Life",
        excerpt: "Learn the basics of Ayurveda and how to eat according to your dosha for optimal well-being.",
        author: "Dr. Sharma",
        date: "August 05, 2023",
        category: "Ayurveda",
        image: "/img/extern/outdoor-yoga-5.jpg"
    },
    {
        slug: "power-of-mantras",
        title: "The Healing Power of Mantras",
        excerpt: "Understand scientific and spiritual aspects of chanting and how sound vibration affects consciousness.",
        author: "Yogrishi Keshav",
        date: "July 18, 2023",
        category: "Mantras",
        image: "/img/extern/outdoor-yoga-6.jpg"
    },
]

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-brand-base">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 bg-brand-base text-brand-dark overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/img/extern/hero-bg.jpg"
                        alt="Anantadrishti Yoga journal and blog articles on yoga philosophy and practice"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-20"
                        priority
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-base/80 via-brand-base/50 to-brand-base" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-brand-primary/10 text-brand-primary-light text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-brand-primary/20">
                            Wisdom Journal
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
                            Insights & <span className="text-brand-primary">Inspiration</span>
                        </h1>
                        <p className="text-xl text-brand-text-muted font-light leading-relaxed">
                            Explore articles on yoga, meditation, philosophy, and holistic living from our experienced teachers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <Section className="bg-white" pattern="lotus">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, i) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link href={`/blog/${post.slug}`} className="group block h-full">
                                    <Card variant="default" className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-transparent hover:border-brand-primary/20">
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-grow flex flex-col">
                                            <div className="flex items-center gap-4 text-xs text-brand-text-muted mb-3 font-medium">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <User className="w-3.5 h-3.5" />
                                                    {post.author}
                                                </span>
                                            </div>

                                            <h2 className="text-xl font-bold text-brand-dark mb-3 font-display group-hover:text-brand-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h2>

                                            <p className="text-brand-text-muted mb-6 flex-grow line-clamp-3 leading-relaxed text-sm">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center text-brand-primary font-bold text-sm mt-auto group-hover:translate-x-2 transition-transform">
                                                Read Article <ArrowRight className="w-4 h-4 ml-2" />
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Newsletter CTA */}
            <Section className="bg-brand-base text-brand-dark border-t border-brand-primary/10">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Stay Connected</h2>
                        <p className="text-xl text-brand-text-muted mb-8 max-w-2xl mx-auto">
                            Join our community to receive the latest updates, yoga tips, and spiritual insights directly to your inbox.
                        </p>

                        <form className="max-w-md mx-auto flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-6 py-4 rounded-full bg-white border border-gray-200 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary shadow-inner"
                            />
                            <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-primary/25">
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-brand-text-muted mt-4">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </motion.div>
                </div>
            </Section>
        </main>
    )
}
