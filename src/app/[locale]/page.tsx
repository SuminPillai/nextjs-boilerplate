import { Hero } from "@/components/home/Hero";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import Methodology from "@/components/home/Methodology";
import RitualsPreview from "@/components/home/RitualsPreview";
import DailyClasses from "@/components/home/DailyClasses";
import Philosophy from "@/components/home/Philosophy";
import Offerings from "@/components/home/Offerings";
import Partners from "@/components/home/Partners";
import Testimonials from "@/components/home/Testimonials";
import VideoTestimonials from "@/components/home/VideoTestimonials";
import FAQ from "@/components/home/FAQ";

import Gallery from "@/components/home/Gallery";
import BreathingPortal from "@/components/home/BreathingPortal";
import Meditation from "@/components/home/Meditation";
import Location from "@/components/home/Location";
import Experience from "@/components/home/Experience";
import { HomePageSchema } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      {/* Structured Data for SEO */}
      <HomePageSchema />

      {/* Hero Section */}
      <Hero />

      {/* Trust & Stats - Early social proof */}
      <Stats />

      {/* About Us */}
      <About />

      {/* Our Approach */}
      <Methodology />

      {/* Rituals Preview */}
      <RitualsPreview />

      {/* Daily Classes */}
      <DailyClasses />

      {/* Philosophy */}
      <Philosophy />

      {/* Course/Retreat Offerings */}
      <Offerings />

      {/* The Anantadrishti Experience */}
      <Experience />

      {/* Certifications */}
      <Partners />

      {/* Social Proof */}
      <Testimonials />

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* FAQ - SEO & Featured Snippets */}
      <FAQ />

      {/* Visual Proof */}
      <Gallery />

      {/* Interactive Breathing Portal */}
      <BreathingPortal />

      {/* Meditation CTA */}
      <Meditation />

      {/* Location/Contact */}
      <Location />
    </>
  );
}
