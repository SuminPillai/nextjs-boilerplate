import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book a Yoga Class in Rishikesh, India | Drop-In & Daily Classes',
    description: 'Book your yoga class at Anantadrishti Yoga in Rishikesh, India. Daily Hatha, pranayama, meditation, and philosophy sessions. Drop-in classes available.',
    keywords: ['book yoga class Rishikesh', 'drop in yoga class Rishikesh', 'daily yoga classes Rishikesh India', 'Hatha yoga class Rishikesh', 'pranayama class Rishikesh'],
    alternates: { canonical: '/book-class' },
};

export default function BookClassLayout({ children }: { children: React.ReactNode }) {
    return children;
}
