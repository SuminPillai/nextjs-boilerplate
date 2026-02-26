import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy – Anantadrishti Yoga',
    description: 'Read the privacy policy for Anantadrishti Yoga School in Rishikesh, India. Learn how we collect, use, and protect your personal information.',
    alternates: { canonical: '/privacy' },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
