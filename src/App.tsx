import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { ServicesSection } from './components/ServicesSection';
import { PhilosophySection } from './components/PhilosophySection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { EstimateCalculator } from './components/EstimateCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EC] text-[#20211F]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Portfolio Showcase (Central Feature) */}
        <Portfolio />

        {/* 3. Services Offerings (01 - 06) */}
        <ServicesSection />

        {/* 4. Design Philosophy Split Layout */}
        <PhilosophySection />

        {/* 5. Why Work With Us */}
        <WhyUsSection />

        {/* 6. 4-Step Process */}
        <ProcessSection />

        {/* 7. Interactive Project Scope Builder */}
        <EstimateCalculator />

        {/* 8. Contact & Studio Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Bar for Mobile */}
      <FloatingActions />
    </div>
  );
}

export default App;
