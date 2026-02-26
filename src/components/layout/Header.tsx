"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { cn } from "@/lib/utils";
import { useDictionary } from "@/components/providers/DictionaryProvider";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronDown, GraduationCap, Palmtree, Heart, Flame, Wind, BookOpen, Users, Phone, Home, Info, Newspaper, Instagram, Facebook, MessageCircle, Calendar } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [offeringsOpen, setOfferingsOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    // Mobile accordion state
    const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
    const [mobileTeachingsOpen, setMobileTeachingsOpen] = useState(false);
    const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const pathname = usePathname();
    const menuRef = useRef<HTMLDivElement>(null);
    const dict = useDictionary();

    // Swipe to close
    const x = useMotionValue(0);
    const menuOpacity = useTransform(x, [0, 200], [1, 0]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            setScrollProgress(progress);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x > 100 || info.velocity.x > 500) {
            setMobileMenuOpen(false);
        }
    };

    const navLinkClass = (isActive: boolean) =>
        cn(
            "font-medium min-h-[44px] flex items-center transition-all duration-300 relative group cursor-pointer text-sm tracking-wide",
            isScrolled || pathname !== "/"
                ? isActive
                    ? "text-brand-primary"
                    : "text-brand-text-muted hover:text-brand-primary"
                : isActive
                    ? "text-brand-accent drop-shadow-md"
                    : "text-white/90 hover:text-white hover:drop-shadow-md"
        );

    const dropdownClass =
        "absolute left-0 top-full mt-4 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 p-2 transform origin-top-left z-50 text-left overflow-hidden ring-1 ring-black/5";

    const mobileMenuItemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.03, duration: 0.2 }
        })
    };

    const isActivePath = (path: string) => pathname === path;

    const MobileNavLink = ({ href, icon: Icon, children, delay = 0 }: { href: string; icon?: React.ElementType; children: React.ReactNode; delay?: number }) => (
        <motion.div
            custom={delay}
            variants={mobileMenuItemVariants}
            initial="hidden"
            animate="visible"
        >
            <Link
                href={href}
                className={cn(
                    "flex items-center gap-3 py-3 px-4 rounded-xl transition-all active:scale-98 relative overflow-hidden",
                    isActivePath(href)
                        ? "bg-gradient-to-r from-amber-100/50 to-orange-50/50 text-brand-primary font-semibold border-l-4 border-brand-primary"
                        : "text-brand-dark hover:bg-amber-50/30"
                )}
                onClick={() => setMobileMenuOpen(false)}
            >
                {Icon && (
                    <motion.div
                        whileTap={{ scale: 1.2, rotate: 10 }}
                        className={cn(
                            "w-8 h-8 rounded-lg flex items-center justify-center relative z-10",
                            isActivePath(href) ? "bg-brand-primary text-white shadow-lg" : "bg-white text-brand-primary shadow-sm"
                        )}
                    >
                        <Icon className="w-4 h-4" />
                    </motion.div>
                )}
                <span className="font-medium relative z-10">{children}</span>
                {isActivePath(href) && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-white/50 z-0"
                    />
                )}
            </Link>
        </motion.div>
    );

    const MobileAccordion = ({ title, icon: Icon, isOpen, onToggle, children, delay = 0 }: {
        title: string;
        icon: React.ElementType;
        isOpen: boolean;
        onToggle: () => void;
        children: React.ReactNode;
        delay?: number;
    }) => (
        <motion.div
            custom={delay}
            variants={mobileMenuItemVariants}
            initial="hidden"
            animate="visible"
            className="border-b border-gray-100/50 last:border-0"
        >
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full py-4 px-4 text-left group transition-colors hover:bg-amber-50/30 rounded-xl my-1"
            >
                <span className="flex items-center gap-3">
                    <motion.span
                        whileTap={{ scale: 1.1 }}
                        animate={{ rotate: isOpen ? 5 : 0 }}
                        className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-amber-100/50 group-hover:shadow-md transition-shadow"
                    >
                        <Icon className="w-5 h-5 text-brand-primary" />
                    </motion.span>
                    <span className="font-semibold text-brand-dark text-lg font-serif">{title}</span>
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
                    className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                        isOpen ? "bg-brand-primary text-white shadow-md shadow-brand-primary/30" : "bg-gray-50 text-gray-400"
                    )}
                >
                    <ChevronDown className="w-4 h-4" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 pl-4 space-y-1">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );

    return (
        <>
            <motion.div
                id="scroll-progress"
                className="fixed top-0 left-0 h-0.5 z-[60] bg-gradient-to-r from-brand-primary via-amber-300 to-brand-primary"
                style={{ width: `${scrollProgress}%`, boxShadow: '0 0 10px rgba(217, 119, 6, 0.5)' }}
            ></motion.div>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-lg shadow-soft py-2 border-b border-white/20"
                        : "bg-transparent py-6"
                )}
            >
                <nav className="container mx-auto px-6 flex justify-between items-center" aria-label="Main navigation">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group relative z-50">
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src="/img/logo.webp"
                                alt="Anantadrishtiyoga Logo"
                                width={48}
                                height={48}
                                className="h-12 w-12 transition-transform duration-500 group-hover:rotate-12 relative z-10 drop-shadow-lg"
                            />
                        </div>
                        <span
                            className={cn(
                                "text-xl font-bold tracking-tight transition-colors duration-300 font-display",
                                isScrolled || pathname !== "/" ? "text-brand-dark" : "text-white drop-shadow-md"
                            )}
                        >
                            Ananta<span className="text-brand-primary">drishti</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center space-x-1">
                        <li>
                            <Link href="/" className={cn("px-4 py-2 rounded-full hover:bg-white/10 transition-all", navLinkClass(pathname === "/"))}>
                                {dict.common.home}
                            </Link>
                        </li>

                        {/* Offerings Dropdown */}
                        <li
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setOfferingsOpen(true)}
                            onMouseLeave={() => setOfferingsOpen(false)}
                        >
                            <button className={cn("px-4 py-2 rounded-full hover:bg-white/10 transition-all flex items-center gap-1", navLinkClass(false))}>
                                {dict.common.offerings} <ChevronDown className="w-3 h-3 opacity-70 group-hover:translate-y-0.5 transition-transform" />
                            </button>
                            <AnimatePresence>
                                {offeringsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className={dropdownClass}
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-accent transform -translate-y-full" />
                                        <Link href="/" className="block px-4 py-3 text-sm text-gray-800 hover:bg-amber-50 hover:text-brand-primary rounded-lg mb-1 transition-colors font-medium">
                                            {dict.header.overview}
                                        </Link>
                                        <div className="h-px bg-gray-100 my-1 mx-2"></div>
                                        <span className="block px-4 py-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                            {dict.courses.teacherTraining}
                                        </span>
                                        <Link href="/courses/100-hour-yoga-ttc" className="group flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-brand-primary rounded-lg mb-1 transition-colors">
                                            <span>{dict.courses["100hr"]}</span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        </Link>
                                        <Link href="/courses/200-hour-yoga-ttc" className="group flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-brand-primary rounded-lg mb-1 transition-colors">
                                            <span>{dict.courses["200hr"]}</span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        </Link>
                                        <Link href="/courses/300-hour-yoga-ttc" className="group flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-brand-primary rounded-lg mb-1 transition-colors">
                                            <span>{dict.courses["300hr"]}</span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        </Link>
                                        <div className="h-px bg-gray-100 my-1 mx-2"></div>
                                        <span className="block px-4 py-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                            {dict.common.retreats}
                                        </span>
                                        <Link href="/yoga-retreats" className="group flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-brand-primary rounded-lg transition-colors">
                                            <span>{dict.header.viewAllRetreats}</span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>

                        <li>
                            <Link href="/devotion" className={cn("px-4 py-2 rounded-full hover:bg-white/10 transition-all", navLinkClass(pathname === "/devotion"))}>
                                {dict.common.devotion}
                            </Link>
                        </li>
                        <li>
                            <Link href="/rituals" className={cn("px-4 py-2 rounded-full hover:bg-white/10 transition-all", navLinkClass(pathname === "/rituals"))}>
                                {dict.common.rituals}
                            </Link>
                        </li>

                        {/* More Dropdown */}
                        <li
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => setMoreOpen(true)}
                            onMouseLeave={() => setMoreOpen(false)}
                        >
                            <button className={cn("px-4 py-2 rounded-full hover:bg-white/10 transition-all flex items-center gap-1", navLinkClass(false))}>
                                {dict.common.more} <ChevronDown className="w-3 h-3 opacity-70 group-hover:translate-y-0.5 transition-transform" />
                            </button>
                            <AnimatePresence>
                                {moreOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className={cn(dropdownClass, "w-56")}
                                    >
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent to-teal-400 transform -translate-y-full" />
                                        <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-brand-primary rounded-lg mb-1 transition-colors">
                                            {dict.common.about}
                                        </Link>
                                        <Link href="/pranayama" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-brand-primary rounded-lg mb-1 transition-colors">
                                            {dict.common.pranayama}
                                        </Link>
                                        <Link href="/yoga-philosophy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-brand-primary rounded-lg mb-1 transition-colors">
                                            {dict.common.philosophy}
                                        </Link>
                                        <Link href="/satsang" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-brand-primary rounded-lg mb-1 transition-colors">
                                            {dict.common.satsang}
                                        </Link>
                                        <div className="h-px bg-gray-100 my-1 mx-2"></div>
                                        <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-brand-primary rounded-lg mb-1 transition-colors">
                                            {dict.header.journal}
                                        </Link>
                                        <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-brand-primary rounded-lg transition-colors">
                                            {dict.common.contact}
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>

                        {/* Book Class Button */}
                        <li className="pl-4">
                            <Button
                                asChild
                                className="bg-gradient-to-r from-brand-primary to-amber-600 text-white px-8 py-2.5 rounded-full hover:shadow-[0_0_20px_-5px_rgba(217,119,6,0.5)] transition-all duration-300 font-semibold min-h-[44px] inline-flex items-center justify-center border border-white/20"
                            >
                                <Link href="/book-class">{dict.common.bookNow}</Link>
                            </Button>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className={cn(
                            "lg:hidden p-2 rounded-full transition-all duration-300 z-50 backdrop-blur-sm",
                            mobileMenuOpen
                                ? "bg-white text-brand-dark shadow-lg ring-1 ring-black/5"
                                : isScrolled || pathname !== "/"
                                    ? "text-brand-dark hover:bg-gray-100"
                                    : "text-white bg-white/10 hover:bg-white/20 border border-white/20"
                        )}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </nav>
            </header>

            {/* Enhanced Mobile Menu Panel - Moved outside Header and increased z-index */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop with blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[90] lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Panel with Glassmorphism & Swipe */}
                        <motion.div
                            ref={menuRef}
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            style={{ x, opacity: menuOpacity }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={{ left: 0, right: 0.5 }}
                            onDragEnd={handleDragEnd}
                            className="fixed top-0 right-0 bottom-0 w-full md:w-[400px] bg-[#FFFDF5] z-[100] shadow-2xl flex flex-col overflow-hidden border-l border-white/50 lg:hidden"
                        >
                            {/* Decorative Header with Gradient */}
                            <div className="relative overflow-hidden shrink-0 h-48">
                                <div className="absolute inset-0 bg-brand-dark">
                                    <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-10 mix-blend-overlay"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent"></div>
                                </div>

                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-20 backdrop-blur-sm"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full z-10">
                                    <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-2">{dict.header.welcomeTo}</span>
                                    <h2 className="text-3xl font-bold font-display text-white mb-1">Anantadrishti</h2>
                                    <p className="text-white/60 text-sm font-medium">{dict.header.yogaShala}</p>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto px-6 py-8 scrollbar-thin scrollbar-thumb-amber-200">
                                <div className="space-y-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Link href="/" className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center gap-3 hover:shadow-md transition-all border border-gray-100 group" onClick={() => setMobileMenuOpen(false)}>
                                            <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                                <Home className="w-5 h-5" />
                                            </div>
                                            <span className="font-semibold text-brand-dark text-sm">{dict.common.home}</span>
                                        </Link>
                                        <Link href="/contact" className="bg-white p-4 rounded-2xl flex flex-col items-center justify-center gap-3 hover:shadow-md transition-all border border-gray-100 group" onClick={() => setMobileMenuOpen(false)}>
                                            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <span className="font-semibold text-brand-dark text-sm">{dict.common.contact}</span>
                                        </Link>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest px-2 pb-2">{dict.header.explore}</h3>
                                        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                                            <MobileAccordion
                                                title={dict.courses.teacherTraining}
                                                icon={GraduationCap}
                                                isOpen={mobileOfferingsOpen}
                                                onToggle={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}
                                                delay={0.1}
                                            >
                                                <div className="pr-4 space-y-1 bg-gray-50/50 py-2">
                                                    <MobileNavLink href="/courses/100-hour-yoga-ttc" delay={0.2}>{dict.courses["100hr"]}</MobileNavLink>
                                                    <MobileNavLink href="/courses/200-hour-yoga-ttc" delay={0.3}>{dict.courses["200hr"]}</MobileNavLink>
                                                    <MobileNavLink href="/courses/300-hour-yoga-ttc" delay={0.4}>{dict.courses["300hr"]}</MobileNavLink>
                                                </div>
                                            </MobileAccordion>

                                            <MobileAccordion
                                                title={dict.common.retreats}
                                                icon={Palmtree}
                                                isOpen={mobileTeachingsOpen}
                                                onToggle={() => setMobileTeachingsOpen(!mobileTeachingsOpen)}
                                                delay={0.2}
                                            >
                                                <div className="pr-4 space-y-1 bg-gray-50/50 py-2">
                                                    <MobileNavLink href="/yoga-retreats" delay={0.1}>{dict.header.viewAllRetreats}</MobileNavLink>
                                                    <MobileNavLink href="/retreats/3-day-pranayama-retreat" delay={0.2}>3-Day Pranayama</MobileNavLink>
                                                </div>
                                            </MobileAccordion>

                                            <MobileAccordion
                                                title={dict.common.more}
                                                icon={BookOpen}
                                                isOpen={mobileMoreOpen}
                                                onToggle={() => setMobileMoreOpen(!mobileMoreOpen)}
                                                delay={0.3}
                                            >
                                                <div className="pr-4 space-y-1 bg-gray-50/50 py-2">
                                                    <MobileNavLink href="/devotion" icon={Heart} delay={0.1}>{dict.common.devotion}</MobileNavLink>
                                                    <MobileNavLink href="/rituals" icon={Flame} delay={0.2}>{dict.common.rituals}</MobileNavLink>
                                                    <MobileNavLink href="/yoga-philosophy" icon={BookOpen} delay={0.3}>{dict.common.philosophy}</MobileNavLink>
                                                </div>
                                            </MobileAccordion>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="shrink-0 p-6 bg-white border-t border-gray-100 pb-10">
                                <Button
                                    asChild
                                    className="w-full bg-brand-dark text-white py-6 rounded-2xl font-bold text-lg shadow-xl shadow-brand-dark/10 hover:bg-brand-primary transition-all mb-8"
                                >
                                    <Link href="/book-class" onClick={() => setMobileMenuOpen(false)}>
                                        {dict.header.bookYourJourney}
                                    </Link>
                                </Button>

                                <div className="flex justify-center gap-8">
                                    <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white transition-all">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a href="mailto:info@anantadrishti.com" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-all">
                                        <MessageCircle className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
