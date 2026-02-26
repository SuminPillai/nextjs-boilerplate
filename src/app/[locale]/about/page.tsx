import type { Metadata } from 'next';
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import VisionPhilosophy from "@/components/about/VisionPhilosophy";
import AboutOfferings from "@/components/about/AboutOfferings";
import ApproachIntention from "@/components/about/ApproachIntention";

export const metadata: Metadata = {
    title: 'About Anantadrishti | Best Yoga School in Rishikesh, India',
    description: 'Discover the vision, philosophy, and teaching lineage of Anantadrishti Yoga School in Rishikesh. Rooted in Vedanta, Hatha, and Ashtanga yoga traditions since day one.',
    keywords: ['best yoga school Rishikesh', 'yoga ashram Rishikesh India', 'Anantadrishti Yoga', 'yoga school Tapovan Rishikesh', 'traditional yoga school India'],
    alternates: { canonical: '/about' },
};

export default function AboutPage() {
    return (
        <main className="pt-20">
            <AboutHero />
            <AboutIntro />
            <VisionPhilosophy />
            <AboutOfferings />
            <ApproachIntention />
        </main>
    );
}
