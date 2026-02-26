"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ScrollReveal, StaggerContainer, StaggerItem, staggerItemVariants } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Palmtree, Check, ArrowRight, Sparkles } from "lucide-react";

export default function Offerings() {
    return (
        <Section id="offerings" className="bg-gradient-to-br from-brand-base via-white to-brand-base py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center mb-16 relative z-10">
                <ScrollReveal>
                    <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary-dark rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-brand-primary/20">
                        Your Spiritual Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 drop-shadow-sm font-display leading-tight">
                        Teacher Training & <br /><span className="text-brand-primary italic font-serif">Sacred Retreats</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-brand-text-muted font-light leading-relaxed">
                        Whether you seek certification or deep rejuvenation, our programs are designed to transform and elevate your practice.
                    </p>
                </ScrollReveal>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 px-4 relative z-10">
                {/* Column 1: Teacher Training */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-10 pb-4 border-b border-brand-dark/10">
                        <div className="p-4 bg-amber-100 rounded-2xl text-brand-primary border border-amber-200/50 shadow-sm">
                            <GraduationCap className="w-8 h-8" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-brand-dark font-display">Teacher Training</h3>
                            <p className="text-sm text-brand-text-muted">Ignite your path as a guide</p>
                        </div>
                    </div>

                    <StaggerContainer staggerDelay={0.15}>
                        {/* 200 Hour Flagship */}
                        <StaggerItem variants={staggerItemVariants}>
                            <div className="mb-8 group">
                                <Card className="relative p-8 border border-amber-100 bg-gradient-to-br from-white to-amber-50/50 hover:shadow-xl transition-all duration-500 overflow-hidden rounded-[2rem]">
                                    <div className="absolute top-0 right-0 bg-brand-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow-sm z-10">
                                        Most Popular
                                    </div>

                                    <h4 className="text-3xl font-bold text-brand-dark mb-3 font-display group-hover:text-brand-primary transition-colors">200 Hour TTC</h4>
                                    <p className="text-brand-text-muted mb-6 leading-relaxed font-light">
                                        The gold standard for aspiring teachers. A comprehensive immersion into Hatha Yoga, Anatomy, and Philosophy.
                                    </p>

                                    <ul className="text-sm text-brand-text-muted space-y-3 mb-8">
                                        <li className="flex items-center gap-3"><span className="p-1 bg-green-100 rounded-full text-green-600"><Check className="w-3 h-3" strokeWidth={3} /></span> Yoga Alliance Certified</li>
                                        <li className="flex items-center gap-3"><span className="p-1 bg-green-100 rounded-full text-green-600"><Check className="w-3 h-3" strokeWidth={3} /></span> 24 Days Residential</li>
                                    </ul>

                                    <Link href="/courses/200-hour-yoga-ttc" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-primary-dark transition-all group/btn bg-white px-6 py-3 rounded-full shadow-sm border border-brand-primary/20 hover:border-brand-primary hover:shadow-md">
                                        View Syllabus <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>

                                    {/* Decorative Overlay */}
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                                </Card>
                            </div>
                        </StaggerItem>

                        {/* Grid for other TTCs */}
                        <StaggerItem variants={staggerItemVariants}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <Link href="/courses/100-hour-yoga-ttc" className="group h-full">
                                    <Card variant="outline" className="p-6 h-full hover:bg-white hover:border-brand-primary/50 hover:shadow-lg transition-all cursor-pointer rounded-3xl bg-white/50 backdrop-blur-sm border-brand-dark/5 flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-lg font-bold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">100 Hour Foundation</h4>
                                            <p className="text-xs text-brand-text-muted font-light mb-4">12 Days | Immersion</p>
                                        </div>
                                        <div className="flex items-center text-xs font-bold text-brand-text-muted group-hover:text-brand-primary transition-colors">
                                            Details <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Card>
                                </Link>
                                <Link href="/courses/300-hour-yoga-ttc" className="group h-full">
                                    <Card variant="outline" className="p-6 h-full hover:bg-white hover:border-brand-primary/50 hover:shadow-lg transition-all cursor-pointer rounded-3xl bg-white/50 backdrop-blur-sm border-brand-dark/5 flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-lg font-bold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">300 Hour Advanced</h4>
                                            <p className="text-xs text-brand-text-muted font-light mb-4">28 Days | Master Level</p>
                                        </div>
                                        <div className="flex items-center text-xs font-bold text-brand-text-muted group-hover:text-brand-primary transition-colors">
                                            Details <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Card>
                                </Link>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </ScrollReveal>

                {/* Column 2: Retreats */}
                <ScrollReveal delay={0.2}>
                    <div className="flex items-center gap-4 mb-10 pb-4 border-b border-brand-dark/10">
                        <div className="p-4 bg-teal-50 rounded-2xl text-teal-600 border border-teal-100/50 shadow-sm">
                            <Palmtree className="w-8 h-8" strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-brand-dark font-display">Restorative Retreats</h3>
                            <p className="text-sm text-brand-text-muted">Heal in the lap of Himalayas</p>
                        </div>
                    </div>

                    <StaggerContainer staggerDelay={0.15}>
                        {/* 7 Day Retreat Flagship */}
                        <StaggerItem variants={staggerItemVariants}>
                            <div className="mb-8 group">
                                <Card className="relative p-8 border border-teal-100 bg-gradient-to-br from-white to-teal-50/50 hover:shadow-xl transition-all duration-500 overflow-hidden rounded-[2rem]">
                                    <div className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow-sm z-10">
                                        Best Seller
                                    </div>

                                    <h4 className="text-3xl font-bold text-brand-dark mb-3 font-display group-hover:text-teal-600 transition-colors">7-Day Yoga Retreat</h4>
                                    <p className="text-brand-text-muted mb-6 leading-relaxed font-light">
                                        Relax, rejuvenate, and reconnect. Daily yoga, nature excursions, and satvic meals in the pristine Himalayas.
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="bg-white/80 px-3 py-1 rounded-full text-xs font-semibold text-teal-700 shadow-sm border border-teal-100 backdrop-blur-sm">Hikes</span>
                                        <span className="bg-white/80 px-3 py-1 rounded-full text-xs font-semibold text-teal-700 shadow-sm border border-teal-100 backdrop-blur-sm">Ayurveda</span>

                                    </div>

                                    <Link href="/retreats/7-day-yoga-retreat" className="inline-flex items-center gap-2 text-teal-700 font-bold hover:text-teal-800 transition-colors group/btn bg-white px-6 py-3 rounded-full shadow-sm border border-teal-200 hover:border-teal-500 hover:shadow-md">
                                        View Itinerary <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>

                                    {/* Decorative Overlay */}
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                                </Card>
                            </div>
                        </StaggerItem>

                        {/* Grid for other Retreats */}
                        <StaggerItem variants={staggerItemVariants}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <Link href="/retreats/3-day-pranayama-retreat" className="group h-full">
                                    <Card variant="outline" className="p-6 h-full hover:bg-white hover:border-teal-500/50 hover:shadow-lg transition-all cursor-pointer rounded-3xl bg-white/50 backdrop-blur-sm border-brand-dark/5 flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-lg font-bold text-brand-dark mb-1 group-hover:text-teal-600 transition-colors">3-Day Pranayama</h4>
                                            <p className="text-xs text-brand-text-muted font-light mb-4">Breathwork Immersion</p>
                                        </div>
                                        <div className="flex items-center text-xs font-bold text-brand-text-muted group-hover:text-teal-600 transition-colors">
                                            Details <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Card>
                                </Link>
                                <Link href="/retreats/1-day-retreat" className="group h-full">
                                    <Card variant="outline" className="p-6 h-full hover:bg-white hover:border-teal-500/50 hover:shadow-lg transition-all cursor-pointer rounded-3xl bg-white/50 backdrop-blur-sm border-brand-dark/5 flex flex-col justify-between">
                                        <div>
                                            <h4 className="text-lg font-bold text-brand-dark mb-1 group-hover:text-teal-600 transition-colors">1-Day Reset</h4>
                                            <p className="text-xs text-brand-text-muted font-light mb-4">24 Hours | Nature & Yoga</p>
                                        </div>
                                        <div className="flex items-center text-xs font-bold text-brand-text-muted group-hover:text-teal-600 transition-colors">
                                            Details <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Card>
                                </Link>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </ScrollReveal>
            </div>
        </Section>
    );
}
