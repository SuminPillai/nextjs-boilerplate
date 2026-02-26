import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '7 Day Yoga & Meditation Retreat in Rishikesh, India | All-Inclusive',
    description: 'Experience a transformative 7-day yoga retreat in Rishikesh with daily Hatha, pranayama, meditation, Himalayan treks, and Ganga Aarti. All-inclusive. Book now.',
    keywords: ['7 day yoga retreat Rishikesh', 'week yoga retreat India', 'yoga and meditation retreat Rishikesh', 'Himalayan yoga retreat India', 'all inclusive yoga retreat Rishikesh 2026'],
    alternates: { canonical: '/retreats/7-day-yoga-retreat' },
};

export default function SevenDayRetreatLayout({ children }: { children: React.ReactNode }) {
    return children;
}
