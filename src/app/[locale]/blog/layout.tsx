import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Yoga Blog | Pranayama, Philosophy & Rishikesh Guides',
    description: 'Read articles on yoga philosophy, pranayama techniques, Ayurveda, and Rishikesh travel guides from Anantadrishti Yoga. Expert insights for your yoga journey.',
    keywords: ['yoga blog', 'pranayama tips', 'yoga philosophy articles', 'Rishikesh yoga guide', 'Ayurveda tips India', 'yoga teacher training blog'],
    alternates: { canonical: '/blog' },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
