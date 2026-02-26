import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.anantadrishtiyoga.com';
    const currentDate = new Date().toISOString();

    // Core pages with high priority
    const coreRoutes = [
        { path: '', priority: 1.0, changeFreq: 'weekly' as const },
        { path: '/about', priority: 0.8, changeFreq: 'monthly' as const },
        { path: '/contact', priority: 0.5, changeFreq: 'yearly' as const },
        { path: '/book-class', priority: 0.9, changeFreq: 'weekly' as const },
        { path: '/gallery', priority: 0.6, changeFreq: 'monthly' as const },
    ];

    // Teacher Training Courses - very important for SEO
    const courseRoutes = [
        { path: '/courses/100-hour-yoga-ttc', priority: 0.9, changeFreq: 'monthly' as const },
        { path: '/courses/200-hour-yoga-ttc', priority: 0.95, changeFreq: 'monthly' as const },
        { path: '/courses/300-hour-yoga-ttc', priority: 0.9, changeFreq: 'monthly' as const },
    ];

    // Retreats
    const retreatRoutes = [
        { path: '/yoga-retreats', priority: 0.85, changeFreq: 'weekly' as const },
        { path: '/retreats/1-day-retreat', priority: 0.7, changeFreq: 'monthly' as const },
        { path: '/retreats/3-day-pranayama-retreat', priority: 0.75, changeFreq: 'monthly' as const },
        { path: '/retreats/7-day-yoga-retreat', priority: 0.8, changeFreq: 'monthly' as const },
        { path: '/retreats/advanced-pranayama-immersion', priority: 0.75, changeFreq: 'monthly' as const },
    ];

    // Teachings/Philosophy pages
    const teachingRoutes = [
        { path: '/devotion', priority: 0.7, changeFreq: 'monthly' as const },
        { path: '/rituals', priority: 0.7, changeFreq: 'monthly' as const },
        { path: '/pranayama', priority: 0.75, changeFreq: 'monthly' as const },
        { path: '/yoga-philosophy', priority: 0.7, changeFreq: 'monthly' as const },
        { path: '/satsang', priority: 0.65, changeFreq: 'monthly' as const },
    ];

    // Blog section
    const blogIndex = [
        { path: '/blog', priority: 0.8, changeFreq: 'daily' as const },
    ];

    // Legal pages
    const legalRoutes = [
        { path: '/privacy', priority: 0.3, changeFreq: 'yearly' as const },
        { path: '/terms', priority: 0.3, changeFreq: 'yearly' as const },
        { path: '/refund', priority: 0.4, changeFreq: 'yearly' as const },
    ];

    // AI Documentation
    const aiRoutes = [
        { path: '/llms.txt', priority: 0.5, changeFreq: 'monthly' as const },
        { path: '/llms-full.txt', priority: 0.5, changeFreq: 'monthly' as const },
    ];

    // Combine all static routes
    const allStaticRoutes = [
        ...coreRoutes,
        ...courseRoutes,
        ...retreatRoutes,
        ...teachingRoutes,
        ...blogIndex,
        ...legalRoutes,
        ...aiRoutes,
    ].map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: currentDate,
        changeFrequency: route.changeFreq,
        priority: route.priority,
    }));

    // Dynamic blog routes
    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...allStaticRoutes, ...blogRoutes];
}
