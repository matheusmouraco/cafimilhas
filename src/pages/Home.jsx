import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import AboutSection from '../components/about/AboutSection';
import ServicesSection from '../components/services/ServicesSection';
import ContactSection from '../components/contact/ContactSection';
import Footer from '../components/footer/Footer';
import WhatsAppButton from '../components/whatsapp/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}