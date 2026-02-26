import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '100 Hour Yoga Teacher Training in Rishikesh, India | Beginner YTT',
    description: 'Start your yoga journey with our 100-hour Yoga Teacher Training in Rishikesh, India. 12-day beginner foundation course. Yoga Alliance registered. Apply for 2026.',
    keywords: ['100 hour yoga teacher training Rishikesh', 'beginner yoga course Rishikesh', 'short yoga TTC India', 'yoga foundation course Rishikesh', '100 hour YTT India 2026'],
    alternates: {
        canonical: 'https://www.anantadrishtiyoga.com/courses/100-hour-yoga-ttc',
    },
    openGraph: {
        title: '100 Hour Yoga Teacher Training in Rishikesh, India | Anantadrishti Yoga',
        description: '12-day beginner yoga foundation course in Rishikesh. Hatha yoga, pranayama, philosophy. Yoga Alliance registered. Accommodation included.',
        url: 'https://www.anantadrishtiyoga.com/courses/100-hour-yoga-ttc',
        siteName: 'Anantadrishti Yoga',
        images: [
            {
                url: 'https://www.anantadrishtiyoga.com/img/extern/clients.jpg',
                width: 1200,
                height: 630,
                alt: '100 Hour Yoga Teacher Training Students',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
