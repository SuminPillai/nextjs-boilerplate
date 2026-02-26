"use client";

import { useState, FormEvent } from 'react';
import { Card } from '@/components/ui/Card';
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');
        setWhatsappUrl(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            subject: formData.get('subject') as string,
            message: formData.get('message') as string,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setWhatsappUrl(result.whatsappUrl || null);
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error('Form error:', err);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card variant="default" className="bg-white/90 backdrop-blur-sm p-10 md:p-12 shadow-2xl border border-white/50 rounded-[2.5rem] relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <h2 className="text-3xl font-display font-bold text-brand-dark mb-4 relative z-10">Send Us a Message</h2>
            <p className="text-brand-text-muted mb-10 text-lg font-light relative z-10">Fill out the form below and we will get back to you shortly.</p>

            {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl mb-8 animate-fade-in-up">
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 shrink-0 text-green-600" />
                        <div>
                            <strong className="block font-bold text-lg">Message Sent!</strong>
                            <p className="mt-1">Thank you! We have received your message and will get back to you shortly.</p>
                        </div>
                    </div>
                    {whatsappUrl && (
                        <div className="mt-4 pt-4 border-t border-green-200">
                            <p className="text-sm text-green-700 mb-2">Want to chat directly?</p>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                Chat on WhatsApp
                            </a>
                        </div>
                    )}
                </div>
            )}

            {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-2xl mb-8 flex items-start gap-4 animate-fade-in-up">
                    <AlertCircle className="w-6 h-6 shrink-0 text-red-600" />
                    <div>
                        <strong className="block font-bold text-lg">Something went wrong.</strong>
                        <p className="mt-1">Please try again or contact us directly via WhatsApp.</p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                        <label htmlFor="name" className="block text-xs font-bold text-brand-text-muted uppercase tracking-widest mb-2 group-focus-within:text-brand-primary transition-colors">Full Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none bg-stone-50/50 focus:bg-white text-brand-dark placeholder:text-gray-300"
                            placeholder="Enter your full name"
                            disabled={loading}
                        />
                    </div>

                    <div className="group">
                        <label htmlFor="email" className="block text-xs font-bold text-brand-text-muted uppercase tracking-widest mb-2 group-focus-within:text-brand-primary transition-colors">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none bg-stone-50/50 focus:bg-white text-brand-dark placeholder:text-gray-300"
                            placeholder="your.email@example.com"
                            disabled={loading}
                        />
                    </div>
                </div>

                <div className="group">
                    <label htmlFor="phone" className="block text-xs font-bold text-brand-text-muted uppercase tracking-widest mb-2 group-focus-within:text-brand-primary transition-colors">Phone Number (Optional)</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none bg-stone-50/50 focus:bg-white text-brand-dark placeholder:text-gray-300"
                        placeholder="+91 12345 67890"
                        disabled={loading}
                    />
                </div>

                <div className="group">
                    <label htmlFor="subject" className="block text-xs font-bold text-brand-text-muted uppercase tracking-widest mb-2 group-focus-within:text-brand-primary transition-colors">Subject *</label>
                    <div className="relative">
                        <select
                            id="subject"
                            name="subject"
                            required
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none bg-stone-50/50 focus:bg-white appearance-none text-brand-dark cursor-pointer"
                            disabled={loading}
                        >
                            <option value="">Select a subject...</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Class Information">Class Information</option>
                            <option value="Retreat Booking">Retreat Booking</option>
                            <option value="Teacher Training">Teacher Training</option>
                            <option value="Schedule & Availability">Schedule & Availability</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">▼</div>
                    </div>
                </div>

                <div className="group">
                    <label htmlFor="message" className="block text-xs font-bold text-brand-text-muted uppercase tracking-widest mb-2 group-focus-within:text-brand-primary transition-colors">Message *</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 transition-all outline-none bg-stone-50/50 focus:bg-white text-brand-dark placeholder:text-gray-300 resize-none"
                        placeholder="Tell us about your inquiry..."
                        disabled={loading}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-brand-dark text-white font-bold py-5 rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 flex items-center justify-center gap-3 group/btn"
                    disabled={loading}
                >
                    {loading ? (
                        'Processing...'
                    ) : (
                        <>Send Message <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" /></>
                    )}
                </button>

                <p className="text-xs text-center text-stone-400 mt-6">
                    * Required fields. We respect your privacy.
                </p>
            </form>
        </Card>
    );
}
