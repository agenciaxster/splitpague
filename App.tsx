import React from 'react';
import FinancialTicker from './components/FinancialTicker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DashboardPreview from './components/DashboardPreview';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-accent selection:text-white">
      <FinancialTicker />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <DashboardPreview />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;