import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '300 Hour Yoga Teacher Training in Rishikesh | RYT 500 Path',
    description: 'Advance to RYT 500 with our 300-hour Yoga Teacher Training in Rishikesh, India. Deep philosophy, yoga therapy, advanced asana. Yoga Alliance RYS 300 certified.',
    keywords: ['300 hour yoga teacher training Rishikesh', 'RYT 500 yoga Rishikesh', 'advanced yoga teacher training India', '300 hour YTT India', '500 hour yoga teacher training Rishikesh', 'yoga therapy training Rishikesh'],
    alternates: {
        canonical: 'https://www.anantadrishtiyoga.com/courses/300-hour-yoga-ttc',
    },
    openGraph: {
        title: '300 Hour Yoga Teacher Training in Rishikesh, India | RYT 500 Pathway',
        description: 'Master your teaching with our 300-hour advanced YTT. Yoga therapy, philosophy, advanced asanas. RYT 500 pathway. Yoga Alliance certified.',
        url: 'https://www.anantadrishtiyoga.com/courses/300-hour-yoga-ttc',
        siteName: 'Anantadrishti Yoga',
        images: [
            {
                url: 'https://www.anantadrishtiyoga.com/img/extern/clients (2).jpg',
                width: 1200,
                height: 630,
                alt: '300 Hour Advanced Yoga Teacher Training',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
