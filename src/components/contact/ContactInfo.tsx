"use client";

import { Card } from "@/components/ui/Card";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactInfo() {
    return (
        <div className="space-y-8">
            {/* Contact Details */}
            <Card variant="default" className="p-10 bg-white/80 backdrop-blur-md shadow-xl border border-white/50 overflow-hidden relative rounded-[2.5rem]">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <h3 className="text-2xl font-display font-bold text-brand-dark mb-8 pb-4 border-b border-gray-100/50 inline-block pr-10">
                    Contact Information
                </h3>

                <div className="space-y-8">
                    {/* Location */}
                    <div className="flex items-start gap-5 group">
                        <div className="bg-amber-50 p-4 rounded-2xl text-brand-primary shrink-0 rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-sm border border-amber-100">
                            <MapPin className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <div>
                            <span className="block text-xs font-bold text-brand-text-muted uppercase tracking-[0.15em] mb-2">Location</span>
                            <address className="not-italic text-brand-dark leading-relaxed font-medium text-lg">
                                Near Moktan Coffee shop,<br />
                                Lower Tapovan, Rishikesh,<br />
                                Uttarakhand 249192, India
                            </address>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-5 group">
                        <div className="bg-amber-50 p-4 rounded-2xl text-brand-primary shrink-0 -rotate-2 group-hover:rotate-0 transition-transform duration-300 shadow-sm border border-amber-100">
                            <Phone className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <div>
                            <span className="block text-xs font-bold text-brand-text-muted uppercase tracking-[0.15em] mb-2">Phone</span>
                            <a href="tel:+918979095535" className="text-xl font-bold text-brand-dark hover:text-brand-primary transition-colors block">
                                +91 89790 95535
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-5 group">
                        <div className="bg-amber-50 p-4 rounded-2xl text-brand-primary shrink-0 rotate-1 group-hover:rotate-0 transition-transform duration-300 shadow-sm border border-amber-100">
                            <Mail className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <div>
                            <span className="block text-xs font-bold text-brand-text-muted uppercase tracking-[0.15em] mb-2">Email</span>
                            <a href="mailto:anantadrishtiyogaschool@gmail.com" className="text-brand-dark font-medium hover:text-brand-primary transition-colors block break-all text-lg">
                                anantadrishtiyogaschool@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="pt-8 border-t border-gray-100/50 mt-8">
                        <a
                            href="https://wa.me/918979095535"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between w-full bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border border-green-200 p-4 rounded-2xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-green-500 text-white p-2 rounded-full shadow-md group-hover:scale-110 transition-transform">
                                    <MessageCircle className="w-5 h-5 fill-current" />
                                </div>
                                <div>
                                    <span className="block text-sm font-bold text-green-800">Chat on WhatsApp</span>
                                    <span className="text-xs text-green-600">Quick response promised</span>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-green-600 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </Card>

            {/* Map */}
            <Card variant="outline" className="p-2 bg-white shadow-xl rounded-[2rem] border border-gray-100 overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176.3533894761059!2d78.32199852358826!3d30.13075218765911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390917bddc220ed1%3A0xa0cc7cd61acc729a!2sAnantadrishtiyoga!5e0!3m2!1sen!2sin!4v1727602334888!5m2!1sen!2sin"
                    className="w-full h-80 rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-700"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Anantadrishtiyoga location on Google Maps"
                />
            </Card>
        </div>
    );
}
