import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Anantadrishti Yoga',
        short_name: 'Anantadrishti',
        description: 'Authentic Yoga, Meditation, and Ayurveda in Rishikesh.',
        start_url: '/',
        display: 'standalone',
        background_color: '#FFFBEB',
        theme_color: '#D97706',
        icons: [
            {
                src: '/img/logo.webp',
                sizes: '192x192',
                type: 'image/webp',
            },
            {
                src: '/img/logo.webp',
                sizes: '512x512',
                type: 'image/webp',
            },
        ],
    };
}
