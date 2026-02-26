import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Satsang in Rishikesh | Spiritual Gathering & Discourse',
    description: 'Join weekly Satsang at Anantadrishti Yoga in Rishikesh, India. Spiritual discourse, community wisdom, truth, and meditation in the Himalayan foothills.',
    keywords: ['Satsang Rishikesh', 'spiritual gathering India', 'yoga discourse Rishikesh', 'meditation community Rishikesh', 'spiritual retreat Rishikesh'],
    alternates: { canonical: '/satsang' },
};

export default function SatsangLayout({ children }: { children: React.ReactNode }) {
    return children;
}
