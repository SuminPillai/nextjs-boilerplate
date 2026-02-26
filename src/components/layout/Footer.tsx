"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Phone } from "lucide-react";
import { useDictionary } from "@/components/providers/DictionaryProvider";

export default function Footer() {
    const dict = useDictionary();
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gradient-to-b from-[#2c241b] to-[#1a1510] text-stone-300 pt-20 pb-10" role="contentinfo">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300">
                                <Image
                                    src="/img/logo.webp"
                                    alt="Anantadrishtiyoga Logo"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <span className="font-serif font-bold text-xl tracking-tight">Anantadrishtiyoga</span>
                        </Link>
                        <p className="text-stone-400 leading-relaxed text-sm">
                            {dict.footer.description}
                        </p>
                        <div className="flex items-center gap-4">
                            <a aria-label="Facebook" href="https://www.facebook.com/anantadrishtiyoga" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-800 rounded-full hover:bg-brand-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a aria-label="Instagram" href="https://www.instagram.com/anantadrishtiyoga" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-800 rounded-full hover:bg-brand-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a aria-label="WhatsApp" href="https://wa.me/918979095535" target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-800 rounded-full hover:bg-brand-primary transition-colors">
                                <Phone className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Teacher Training */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 border-b border-stone-700 pb-2 inline-block text-stone-200">{dict.footer.teacherTraining}</h4>
                        <ul className="space-y-3 text-stone-300">
                            <li><Link href="/courses/100-hour-yoga-ttc" className="hover:text-brand-primary transition-colors">{dict.courses["100hr"]}</Link></li>
                            <li><Link href="/courses/200-hour-yoga-ttc" className="hover:text-brand-primary transition-colors">{dict.courses["200hr"]}</Link></li>
                            <li><Link href="/courses/300-hour-yoga-ttc" className="hover:text-brand-primary transition-colors">{dict.courses["300hr"]}</Link></li>
                            <li className="pt-2 text-stone-500 text-sm">{dict.footer.comingSoon}</li>
                        </ul>
                    </div>

                    {/* Programs & Retreats */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 border-b border-stone-700 pb-2 inline-block text-stone-200">{dict.footer.programs}</h4>
                        <ul className="space-y-3 text-stone-300">
                            <li><Link href="/yoga-retreats" className="hover:text-brand-primary transition-colors">{dict.footer.yogaRetreats}</Link></li>
                            <li><Link href="/pranayama" className="hover:text-brand-primary transition-colors">{dict.footer.pranayamaCourse}</Link></li>
                            <li><Link href="/devotion" className="hover:text-brand-primary transition-colors">{dict.footer.devotionBhakti}</Link></li>
                            <li><Link href="/rituals" className="hover:text-brand-primary transition-colors">{dict.footer.vedicRituals}</Link></li>
                            <li><Link href="/yoga-philosophy" className="hover:text-brand-primary transition-colors">{dict.footer.yogaPhilosophy}</Link></li>
                            <li><Link href="/satsang" className="hover:text-brand-primary transition-colors">{dict.common.satsang}</Link></li>
                        </ul>
                    </div>

                    {/* Company & Policy */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 border-b border-stone-700 pb-2 inline-block text-stone-200">{dict.footer.company}</h4>
                        <ul className="space-y-3 text-stone-300">
                            <li><Link href="/about" className="hover:text-brand-primary transition-colors">{dict.common.about}</Link></li>
                            <li><Link href="/blog" className="hover:text-brand-primary transition-colors">{dict.footer.blogArticles}</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-primary transition-colors">{dict.common.contactUs}</Link></li>
                            <li className="h-px bg-stone-800 my-2"></li>
                            <li><Link href="/terms" className="hover:text-brand-primary transition-colors text-sm">{dict.footer.terms}</Link></li>
                            <li><Link href="/privacy" className="hover:text-brand-primary transition-colors text-sm">{dict.footer.privacy}</Link></li>
                            <li><Link href="/refund" className="hover:text-brand-primary transition-colors text-sm">{dict.footer.refund}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
                    <div className="flex gap-4 text-xl opacity-50 select-none">
                        <span>🕉</span> <span>🪷</span> <span>☮</span> <span>☯</span> <span>♡</span> <span>🔯</span>
                    </div>
                    <p>© {currentYear} Anantadrishtiyoga. {dict.footer.copyright}</p>
                    <p>
                        {dict.footer.poweredBy} <a className="hover:text-brand-primary transition-colors" href="https://alphaquantixanalytics.com/" rel="noopener noreferrer" target="_blank">Alpha Quantix Analytics</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
