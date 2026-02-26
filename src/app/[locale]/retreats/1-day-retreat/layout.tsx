import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '1 Day Yoga Retreat in Rishikesh | Hatha, Pranayama & Waterfall Hike',
    description: 'Experience a full-day yoga retreat in Rishikesh with Hatha yoga, pranayama, waterfall hike, and meditation. Perfect for beginners and travelers. Book your spot.',
    keywords: ['1 day yoga retreat Rishikesh', 'day yoga experience Rishikesh', 'short yoga retreat India', 'yoga and waterfall hike Rishikesh', 'beginner yoga retreat India'],
    alternates: { canonical: '/retreats/1-day-retreat' },
};

export default function OneDayRetreatLayout({ children }: { children: React.ReactNode }) {
    return children;
}
