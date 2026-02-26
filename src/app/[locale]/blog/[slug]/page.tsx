"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { Calendar, User, ArrowLeft, Share2, Tag } from "lucide-react"

// Mock data - needs to match the slug from the URL
const blogPosts = {
    "benefits-of-hatha-yoga": {
        title: "The Timeless Benefits of Hatha Yoga",
        content: `
            <p>Hatha Yoga is a preparatory stage of physical purification that the body practices for higher meditation. It is not just about physical exercise; it is about balancing the solar (Ha) and lunar (Tha) energies within us.</p>
            <h3>Physical Health</h3>
            <p>Regular practice of Hatha Yoga improves flexibility, strength, and balance. It helps in detoxifying the body and improving the functioning of internal organs.</p>
            <h3>Mental Clarity</h3>
            <p>Through various pranayamas and asanas, the mind becomes calm and focused. It reduces stress and anxiety, paving the way for mental clarity and emotional stability.</p>
            <h3>Spiritual Growth</h3>
            <p>Ultimately, Hatha Yoga prepares the practitioner for Raja Yoga. By purifying the body and disciplining the mind, one becomes ready for deeper states of meditation and self-realization.</p>
        `,
        author: "Yogrishi Keshav",
        date: "October 15, 2023",
        category: "Yoga Practice",
        image: "/img/extern/outdoor-yoga-1.jpg"
    },
    "understanding-pranayama": {
        title: "The Science of Breath: Understanding Pranayama",
        content: `
            <p>Prana means life force, and Ayama means to extend or control. Pranayama is the practice of controlling the breath, which is the bridge between the body and the mind.</p>
            <h3>The Vital Connection</h3>
            <p>The breath is the only physiological function that is both voluntary and involuntary. By consciously regulating the breath, we can influence the autonomic nervous system and calm the mind.</p>
            <h3>Techniques for Daily Life</h3>
            <p>Simple techniques like Nadi Shodhana (Alternate Nostril Breathing) and Bhramari (Humming Bee Breath) can be practiced daily to reduce stress and improve focus.</p>
        `,
        author: "Ananta Drishti Team",
        date: "September 28, 2023",
        category: "Pranayama",
        image: "/img/extern/outdoor-yoga-2.jpg"
    },

    // Add other posts here...
    "default": {
        title: "Yoga Philosophy in Daily Life",
        content: "<p>Content coming soon...</p>",
        author: "Ananta Drishti Team",
        date: "September 10, 2023",
        category: "Philosophy",
        image: "/img/extern/outdoor-yoga-3.jpg"
    }
}

export default function BlogPostPage() {
    const params = useParams()
    const slug = params.slug as string
    // @ts-ignore
    const post = blogPosts[slug] || blogPosts["default"]

    return (
        <main className="min-h-screen bg-brand-base">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-base via-brand-dark/50 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-4"
                        >
                            <span className="inline-block bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight drop-shadow-lg">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-6 text-white/90 text-sm font-medium">
                                <span className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    {post.author}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {post.date}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Section className="bg-brand-base pt-12 pb-24">
                <article className="container mx-auto px-6 max-w-3xl">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-brand-primary font-bold mb-8 hover:-translate-x-1 transition-transform"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="p-8 md:p-12 prose prose-lg prose-stone max-w-none prose-headings:font-display prose-headings:text-brand-dark prose-a:text-brand-primary prose-img:rounded-xl">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </Card>
                    </motion.div>

                    <div className="mt-12 flex justify-between items-center border-t border-stone-200 pt-8">
                        <div>
                            <p className="text-sm text-brand-text-muted mb-2">Share this article</p>
                            <div className="flex gap-4">
                                <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-brand-primary transition-all">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                {/* Add social share buttons here */}
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-brand-text-muted mb-2">Categories</p>
                            <div className="flex gap-2">
                                <span className="inline-flex items-center gap-1 text-sm bg-stone-100 px-3 py-1 rounded-full text-brand-text-muted">
                                    <Tag className="w-3 h-3" /> {post.category}
                                </span>
                            </div>
                        </div>
                    </div>
                </article>
            </Section>
        </main>
    )
}
