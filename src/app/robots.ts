import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [{
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/dashboard/', '/thank-you/'],
        }],
        sitemap: 'https://www.anantadrishtiyoga.com/sitemap.xml',
    };
}
