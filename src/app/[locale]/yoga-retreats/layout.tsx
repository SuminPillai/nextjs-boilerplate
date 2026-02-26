import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Yoga Retreat in Rishikesh, India | 1 to 7 Day Programs',
    description: 'Book a 1, 3, or 7-day yoga and meditation retreat in Rishikesh, India. Himalayan setting, daily Hatha & pranayama, all meals included. Small groups. Reserve now.',
    keywords: ['yoga retreat Rishikesh', 'yoga retreat India', 'meditation retreat Rishikesh', 'yoga and meditation retreat India', 'Himalayan yoga retreat', 'affordable yoga retreat Rishikesh', 'wellness retreat India 2026'],
    alternates: { canonical: '/yoga-retreats' },
};

export default function YogaRetreatsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
