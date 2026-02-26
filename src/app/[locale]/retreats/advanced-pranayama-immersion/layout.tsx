
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Advanced Pranayama Course in Rishikesh | 3-7 Day Intensive',
    description: 'Master kumbhaka, bandhas, chakra breathing, and nadi pranayama in Rishikesh. 3, 5, or 7-day advanced pranayama intensive with experienced teachers. Enroll now.',
    keywords: ['advanced pranayama course Rishikesh', 'pranayama teacher training India', 'breathwork intensive Rishikesh', 'kumbhaka training India', 'pranayama certification Rishikesh', 'pranayama retreat India 2026'],
    openGraph: {
        title: 'Advanced Pranayama Course in Rishikesh | Anantadrishti Yoga',
        description: 'Master classical pranayama, bandhas, and kumbhaka in this intensive immersion in Rishikesh. 3, 5, or 7-day courses. Certification included.',
        images: ['/img/pranayama-hero.webp'],
        url: 'https://www.anantadrishtiyoga.com/retreats/advanced-pranayama-immersion',
        type: 'website',
    },
    alternates: { canonical: '/retreats/advanced-pranayama-immersion' },
};

export default function AdvancedPranayamaImmersionLayout({ children }: { children: React.ReactNode }) {
    return children;
}
