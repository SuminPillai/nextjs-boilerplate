import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Bhakti Yoga in Rishikesh | Kirtan, Chanting & Devotion',
    description: 'Experience Bhakti Yoga at Anantadrishti Yoga in Rishikesh, India. Kirtan, mantra chanting, and devotional practices in an authentic Himalayan ashram setting.',
    keywords: ['Bhakti yoga Rishikesh', 'kirtan Rishikesh India', 'devotional yoga practice', 'chanting yoga ashram Rishikesh', 'path of devotion yoga'],
    alternates: { canonical: '/devotion' },
};

export default function DevotionLayout({ children }: { children: React.ReactNode }) {
    return children;
}
