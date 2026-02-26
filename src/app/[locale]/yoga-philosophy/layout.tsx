import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Yoga Philosophy in Rishikesh | Vedanta, Yoga Sutras & Bhagavad Gita',
    description: 'Study yoga philosophy at Anantadrishti Yoga in Rishikesh, India. Advaita Vedanta, Patanjali\'s Yoga Sutras, Bhagavad Gita, and the Eight Limbs of Yoga.',
    keywords: ['yoga philosophy Rishikesh', 'Vedanta study India', 'Yoga Sutras course Rishikesh', 'Bhagavad Gita classes India', 'eight limbs of yoga Rishikesh'],
    alternates: { canonical: '/yoga-philosophy' },
};

export default function YogaPhilosophyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
