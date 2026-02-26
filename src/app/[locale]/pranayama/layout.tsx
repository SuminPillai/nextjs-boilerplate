import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pranayama Course in Rishikesh | Breathwork Training India',
    description: 'Learn pranayama and breathwork in Rishikesh with experienced teachers. Nadi Shodhana, Kapalabhati, Bhastrika & advanced kumbhaka. Certification available.',
    keywords: ['pranayama course Rishikesh', 'breathwork training India', 'yogic breathing course Rishikesh', 'pranayama certification India', 'pranayama and meditation course Rishikesh'],
    alternates: { canonical: '/pranayama' },
};

export default function PranayamaLayout({ children }: { children: React.ReactNode }) {
    return children;
}
