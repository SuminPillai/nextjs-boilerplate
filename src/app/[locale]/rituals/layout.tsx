import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vedic Rituals & Havan Fire Ceremony in Rishikesh, India',
    description: 'Participate in sacred Vedic rituals and daily Havan fire ceremony at Anantadrishti Yoga in Rishikesh, India. Experience Ganapati Havan and Navadurga Puja.',
    keywords: ['Havan ceremony Rishikesh', 'Vedic rituals India', 'fire ceremony yoga ashram', 'Ganapati Havan Rishikesh', 'spiritual rituals Rishikesh'],
    alternates: { canonical: '/rituals' },
};

export default function RitualsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
