import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions – Anantadrishti Yoga',
    description: 'Review the terms and conditions for yoga teacher training and retreat programs at Anantadrishti Yoga School in Rishikesh, India.',
    alternates: { canonical: '/terms' },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
