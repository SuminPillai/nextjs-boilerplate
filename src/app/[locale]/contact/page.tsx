import type { Metadata } from 'next';
import { Section } from '@/components/ui/Section';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
// import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'Contact Anantadrishti Yoga School in Rishikesh, India',
    description: 'Get in touch with Anantadrishti Yoga in Rishikesh, India. Ask about yoga teacher training, retreats, class schedules, and accommodation. WhatsApp or email us.',
    keywords: ['contact yoga school Rishikesh', 'Anantadrishti Yoga contact', 'yoga teacher training enquiry Rishikesh', 'book yoga class Rishikesh'],
    alternates: { canonical: '/contact' },
};

export default function ContactPage() {
    return (
        <main className="pt-20 pb-20">
            <ContactHero />
            <div className="container mx-auto px-6 max-w-7xl mt-16 md:mt-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
