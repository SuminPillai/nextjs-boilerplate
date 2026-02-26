import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '200 Hour Yoga Teacher Training in Rishikesh, India | Yoga Alliance RYT 200',
    description: 'Transform your practice with our 200-hour Yoga Teacher Training in Rishikesh, India. Yoga Alliance RYT 200 certified. Meals & accommodation included. Apply now.',
    keywords: ['200 hour yoga teacher training Rishikesh', '200 hour YTT Rishikesh India', 'RYT 200 certification Rishikesh', 'best 200 hour yoga teacher training India', 'yoga teacher training Rishikesh 2026', 'Hatha Ashtanga yoga TTC'],
    alternates: {
        canonical: 'https://www.anantadrishtiyoga.com/courses/200-hour-yoga-ttc',
    },
    openGraph: {
        title: '200 Hour Yoga Teacher Training in Rishikesh, India | Anantadrishti Yoga',
        description: 'Become a certified yoga teacher with our 200-hour YTT in Rishikesh. Hatha & Ashtanga curriculum, experienced gurus, sattvic living. RYT 200 certified.',
        url: 'https://www.anantadrishtiyoga.com/courses/200-hour-yoga-ttc',
        siteName: 'Anantadrishti Yoga',
        images: [
            {
                url: 'https://www.anantadrishtiyoga.com/img/extern/herosection.jpg',
                width: 1200,
                height: 630,
                alt: '200 Hour Yoga Teacher Training Class',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
