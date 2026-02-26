"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapPin, Phone, Mail, ArrowRight, Instagram, Facebook, Youtube } from "lucide-react";

export default function Location() {
    return (
        <Section id="location" className="bg-brand-base py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 translate-x-1/2" />

            <div className="text-center mb-16 relative z-10">
                <ScrollReveal>
                    <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-800 border border-teal-100 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                        Visit Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 font-display">
                        Find Your Sanctuary
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-brand-text-muted font-light">
                        Located in the serene Tapovan area of Rishikesh, surrounded by the healing energy of the Himalayas and the Ganges.
                    </p>
                </ScrollReveal>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 bg-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl shadow-brand-dark/5 mx-auto max-w-7xl relative z-10">
                {/* Map */}
                <div className="lg:col-span-3 h-[400px] lg:h-auto rounded-3xl overflow-hidden relative shadow-inner border border-gray-100 group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.303964253303!2d78.3090605753457!3d30.130953474879267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390916ee1b142921%3A0xe626acc80894e6c1!2sAnantadrishti%20yoga%20school!5e0!3m2!1sen!2sus!4v1705828453472!5m2!1sen!2sus"
                        className="absolute inset-0 w-full h-full border-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Anantadrishti Yoga School Location"
                    ></iframe>

                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50 text-xs font-bold text-brand-dark pointer-events-none">
                        📍 Upper Tapovan, Rishikesh
                    </div>
                </div>

                {/* Contact Info */}
                <div className="lg:col-span-2 flex flex-col justify-center p-4 lg:p-6 space-y-10">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-brand-dark font-display">Get in Touch</h3>
                        <p className="text-brand-text-muted font-light">We'd love to hear from you. Reach out for bookings, questions, or just to say Namaste.</p>
                    </div>

                    <ul className="space-y-8">
                        <li className="flex gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-brand-primary flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                                <MapPin className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-brand-text-muted uppercase tracking-wider mb-1">Address</span>
                                <p className="text-brand-dark leading-relaxed font-medium">
                                    Ananta Drishti Yoga Shala,<br />
                                    Upper Tapovan, Rishikesh,<br />
                                    Uttarakhand 249192, India
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                <Phone className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-brand-text-muted uppercase tracking-wider mb-1">Phone / WhatsApp</span>
                                <p className="text-brand-dark font-medium">
                                    <a href="https://wa.me/918979095535" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors flex items-center gap-1">
                                        +91 89790 95535 <ArrowRight className="w-3 h-3 -rotate-45" />
                                    </a>
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                <Mail className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-brand-text-muted uppercase tracking-wider mb-1">Email</span>
                                <p className="text-brand-dark font-medium">
                                    <a href="mailto:om@anantadrishtiyoga.com" className="hover:text-brand-primary transition-colors flex items-center gap-1">
                                        om@anantadrishtiyoga.com <ArrowRight className="w-3 h-3 -rotate-45" />
                                    </a>
                                </p>
                            </div>
                        </li>
                    </ul>

                    <div className="pt-6 border-t border-gray-100">
                        <div className="flex gap-4 justify-center md:justify-start mb-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-brand-primary hover:text-white transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all duration-300">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                        <Button asChild className="w-full text-lg py-7 rounded-2xl shadow-lg hover:shadow-xl bg-gradient-to-r from-brand-primary to-brand-primary-dark border-none transition-all hover:scale-[1.02]">
                            <Link href="/contact">
                                Book Your Stay <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
