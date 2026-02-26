import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Yoga Blog Article – Anantadrishti Yoga',
    description: 'Read insights on yoga philosophy, pranayama techniques, Ayurveda, and spiritual practices from the teachers at Anantadrishti Yoga, Rishikesh.',
};

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return children;
}
