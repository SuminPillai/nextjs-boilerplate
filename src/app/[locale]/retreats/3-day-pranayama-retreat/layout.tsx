import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '3 Day Pranayama Retreat in Rishikesh | Breathwork & Stress Relief',
    description: 'Join a 3-day pranayama and breathwork retreat in Rishikesh, India. Yogic breathing, stress relief, and detox. Accommodation & meals included. Book your dates.',
    keywords: ['3 day pranayama retreat Rishikesh', 'breathwork retreat India', 'pranayama retreat Rishikesh', 'yoga breathing retreat India', 'stress relief retreat Rishikesh'],
    alternates: { canonical: '/retreats/3-day-pranayama-retreat' },
};

export default function ThreeDayPranayamaRetreatLayout({ children }: { children: React.ReactNode }) {
    return children;
}
