import Image from "next/image";
import Link from "next/link";
import { Wind, Heart, Lock, Zap, Brain, Activity } from "lucide-react";
import { CourseSchema } from "@/components/seo/JsonLd";

const curriculum = [
    {
        icon: Wind,
        title: "Intense Breath Techniques",
        description:
            "Advanced breathing practices with deep observation of their effects on psychological and emotional states.",
    },
    {
        icon: Heart,
        title: "Mudras & Bija Mantras",
        description:
            "Study hand gestures and seed sounds. Learn to incorporate them with pranayama for enhanced energy work.",
    },
    {
        icon: Lock,
        title: "Bandhas & Kumbhaka",
        description:
            "Master energy locks and breath retention. Analyze their influence on the nervous system and energy body.",
    },
    {
        icon: Zap,
        title: "Chakra Pranayama",
        description:
            "Specialized breathing for each chakra. Understand connectivity with your existence at subtle levels.",
    },
    {
        icon: Activity,
        title: "Nadi Pranayama",
        description:
            "Study channel breathing and its influence on body organs. Learn about subtle energy channels.",
    },
    {
        icon: Brain,
        title: "Neurology & Awareness",
        description:
            "Observe the influence of practice on the mind, body, and neurology. Develop meditative inner awareness.",
    },
];

const dates = [
    { group: "3-Day", options: ["March 13-16", "April 13-16", "May 13-16", "June 13-16"] },
    {
        group: "5-7 Day",
        options: [
            "March 16-24",
            "March 24 - April 3",
            "April 16-24",
            "April 24 - May 3",
            "May 16-24",
            "May 24 - June 3",
            "June 16-24",
            "June 24 - July 3",
        ],
    },
];

export default function AdvancedPranayamaImmersionPage() {
    return (
        <>
            {/* Structured Data */}
            <CourseSchema
                name="Advanced Pranayama Immersion"
                description="Refine the breath and explore the subtle dimensions of Prana. Join our 3, 5, or 7-Day Advanced Pranayama Immersion in Rishikesh."
                url="https://www.anantadrishtiyoga.com/retreats/advanced-pranayama-immersion"
                instances={[
                    {
                        name: "Advanced Pranayama Immersion",
                        startDate: "2026-03-13",
                        endDate: "2026-07-03",
                        price: "300",
                        priceCurrency: "USD",
                        location: "Anantadrishti Yoga, Rishikesh"
                    }
                ]}
            />

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/img/pranayama-hero.webp"
                        alt="Advanced pranayama breathing immersion at Anantadrishti Yoga overlooking the Himalayas in Rishikesh"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                        quality={80}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative container mx-auto px-6 text-center text-white z-10 pt-20">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-brand-primary/90 text-sm font-bold tracking-wider mb-4 uppercase">
                        Immersive Program
                    </span>
                    <h1 className="text-3xl md:text-6xl font-bold font-serif mb-6 leading-tight">
                        Advanced Pranayama Immersion
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-amber-50 max-w-3xl mx-auto italic">
                        Refine the breath. Explore the subtle dimensions of Prana.
                    </p>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="py-20 mandala-bg">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8 font-serif">
                            The Purpose of Pranayama
                        </h2>
                        <div className="space-y-6 text-brand-text-muted leading-relaxed text-lg">
                            <p>
                                According to <strong>Ashtanga Yoga</strong>, the highest purpose of
                                Pranayama is <strong>controlling or balancing the mind</strong>. That
                                balanced mind becomes the platform for deeper understanding of the
                                ideology of Yoga.
                            </p>
                            <p>
                                In <strong>Hatha Yoga</strong>, Pranayama is about balancing different
                                pranas (energies) and chakras (energy centers). By awakening Kundalini
                                energy, one can reach deeper understandings of oneself.
                            </p>
                            <div className="bg-white/60 p-6 rounded-xl border border-brand-primary/20 mt-8 shadow-sm">
                                <p className="italic font-medium text-brand-dark">
                                    &ldquo;This immersion integrates breath, mantra, mudra, and awareness
                                    to observe their influence on mind, body, neurology, and energetic
                                    systems.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-serif">
                            Immersion Curriculum
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-brand-text-muted">
                            A deep dive into advanced techniques
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {curriculum.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="bg-brand-base p-8 rounded-xl shadow-lg border border-transparent hover:border-brand-primary/30 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
                                        <Icon className="w-7 h-7 text-brand-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-dark mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-brand-text-muted">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Available Dates */}
            <section className="py-20 mandala-bg">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-serif">
                            Available Dates
                        </h2>
                        <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">
                            Choose a 3-Day, 5-Day, or 7-Day immersion that fits your schedule
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        {dates.map((group) => (
                            <div
                                key={group.group}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100"
                            >
                                <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary text-sm font-bold">
                                        {group.group.charAt(0)}
                                    </span>
                                    {group.group} Programs
                                </h3>
                                <ul className="space-y-3">
                                    {group.options.map((date) => (
                                        <li
                                            key={date}
                                            className="flex items-center gap-3 text-brand-text-muted"
                                        >
                                            <span className="w-2 h-2 bg-brand-primary rounded-full shrink-0" />
                                            {date}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrate Your Practice */}
            <section className="py-20 bg-amber-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-serif">
                            Integrate Your Practice
                        </h2>
                        <p className="text-brand-text-muted max-w-2xl mx-auto">
                            Pranayama is one limb of the yoga tree. Enhance your immersion by
                            exploring these complementary practices.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <Link
                            href="/satsang"
                            className="group bg-white p-8 rounded-xl hover:shadow-lg transition-all border border-amber-100 hover:border-brand-primary"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span role="img" aria-label="Satsang">&#x1F56F;&#xFE0F;</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-brand-primary">Satsang</h3>
                            <p className="text-sm text-brand-text-muted">
                                Join our community gatherings for wisdom, truth, and spiritual
                                discussion.
                            </p>
                        </Link>
                        <Link
                            href="/rituals"
                            className="group bg-white p-8 rounded-xl hover:shadow-lg transition-all border border-amber-100 hover:border-brand-primary"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span role="img" aria-label="Fire ritual">&#x1F525;</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-brand-primary">
                                Havan & Rituals
                            </h3>
                            <p className="text-sm text-brand-text-muted">
                                Experience the purifying power of the ancient Fire Ceremony and Vedic
                                rituals.
                            </p>
                        </Link>
                        <Link
                            href="/devotion"
                            className="group bg-white p-8 rounded-xl hover:shadow-lg transition-all border border-amber-100 hover:border-brand-primary"
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                <span role="img" aria-label="Devotion">&#x1F33A;</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-brand-primary">
                                Bhakti & Devotion
                            </h3>
                            <p className="text-sm text-brand-text-muted">
                                Open your heart through the path of devotion, chanting, and surrender.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Glimpse of Immersion */}
            <section className="py-20 bg-brand-base">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-serif">
                            Glimpse of the Immersion
                        </h2>
                        <p className="text-brand-text-muted max-w-2xl mx-auto">
                            Where silence meets breath.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/img/extern/advanced pranayama.jpg"
                                alt="Advanced Pranayama Practice"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/img/extern/meditation.jpg"
                                alt="Deep Meditation"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg group">
                            <Image
                                src="/img/extern/yogahall.jpg"
                                alt="Our Yoga Hall"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="bg-brand-base p-10 rounded-2xl shadow-xl border border-amber-100">
                            <h2 className="text-3xl font-bold text-brand-dark mb-4 font-serif">
                                Begin Your Immersion
                            </h2>
                            <p className="text-brand-text-muted mb-8 text-lg">
                                Ready to deepen your pranayama practice? Reach out to us to reserve
                                your spot in the next immersion.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://wa.me/918979095535?text=Hari%20Om!%20I%20am%20interested%20in%20the%20Advanced%20Pranayama%20Immersion."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-8 rounded-xl shadow-md transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Book via WhatsApp
                                </a>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-primary-dark text-white font-bold py-3 px-8 rounded-xl shadow-md transition-colors"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
