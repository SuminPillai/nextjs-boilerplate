import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gallery | Yoga School & Training Photos in Rishikesh',
    description: 'Browse photos from Anantadrishti Yoga School in Rishikesh, India. See our yoga shala, teacher training sessions, Havan ceremonies, and Himalayan surroundings.',
    keywords: ['yoga school Rishikesh photos', 'yoga teacher training gallery', 'Anantadrishti Yoga images', 'yoga ashram Rishikesh pictures'],
    alternates: { canonical: '/gallery' },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return children;
}
