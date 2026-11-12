import React, { useState } from 'react';
import { ThemeLanguageProvider, useThemeLanguage } from './context/ThemeLanguageContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CoreFeaturesTab } from './components/CoreFeaturesTab.tsx';
import { PricingMatrix } from './components/PricingMatrix.tsx';
import { TestimonialCarousel } from './components/TestimonialCarousel.tsx';
import { ResponsiveSimulator } from './components/ResponsiveSimulator.tsx';
import { InstantZaloModal } from './components/InstantZaloModal.tsx';
import { Footer } from './components/Footer.tsx';

function MainContent() {
  const { theme } = useThemeLanguage();
  const [isZaloModalOpen, setIsZaloModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | undefined>(undefined);

  const handleOpenZaloModal = (tierName?: string) => {
    setSelectedTier(tierName);
    setIsZaloModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 selection:bg-indigo-500 selection:text-white ${
      theme === 'dark' ? 'bg-[#08090C] text-slate-100' : 'bg-[#F8FAFC] text-slate-900'
    }`}>
      {/* Sticky High-Tech Navbar */}
      <Navbar onOpenZaloModal={() => handleOpenZaloModal()} />

      <main>
        {/* Dynamic Neon Hero with Live Product Preview */}
        <Hero onOpenZaloModal={() => handleOpenZaloModal()} />

        {/* 100% Exact Replica of User's Uploaded Image: Core Features & 3 Tabs & Gift Banner */}
        <CoreFeaturesTab
          onOpenZaloModal={() => handleOpenZaloModal()}
          onScrollToPricing={() => scrollToSection('pricing-matrix')}
          onScrollToTestimonials={() => scrollToSection('testimonials')}
          onScrollToResponsive={() => scrollToSection('responsive-simulator')}
        />

        {/* Feature 1 Deep Dive: Interactive Pricing Matrix with Best Seller Highlight */}
        <PricingMatrix
          onSelectTier={(tierName) => handleOpenZaloModal(tierName)}
        />

        {/* Feature 2 Deep Dive: Sliding Customer Testimonial Carousel */}
        <TestimonialCarousel />

        {/* Feature 4 Deep Dive: Interactive Responsive Mobile Engine Simulator */}
        <ResponsiveSimulator />
      </main>

      {/* Footer */}
      <Footer onOpenZaloModal={() => handleOpenZaloModal()} />

      {/* Feature 3 Deep Dive: 3-Second Real-Time Zalo Webhook Lead Modal */}
      <InstantZaloModal
        isOpen={isZaloModalOpen}
        onClose={() => setIsZaloModalOpen(false)}
        selectedTier={selectedTier}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeLanguageProvider>
      <MainContent />
    </ThemeLanguageProvider>
  );
}

export default App;
