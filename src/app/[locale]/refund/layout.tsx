import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Refund & Cancellation Policy – Anantadrishti Yoga',
    description: 'Understand our refund and cancellation policy for yoga teacher training, retreats, and courses at Anantadrishti Yoga School, Rishikesh.',
    alternates: { canonical: '/refund' },
};

export default function RefundLayout({ children }: { children: React.ReactNode }) {
    return children;
}
