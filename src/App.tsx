import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import Hero from './components/Hero';
import Process from './components/Process';
import NewProcess from './components/NewProcess';
import Benefits from './components/Benefits';
import MastraHighlight from './components/MastraHighlight';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PricingPage from './pages/PricingPage';
import QuotePage from './pages/QuotePage';
import TeamPage from './pages/TeamPage';
import UseCasesPage from './pages/UseCasesPage';
import UseCaseDetailPage from './pages/UseCaseDetailPage';

const HomePage = () => (
  <>
    <SEO 
      title="Inicio"
      description="Transformamos tu negocio con LLM Apps que potencian la productividad y automatización. Carga, memoriza y conversa con tus datos de manera inteligente."
      keywords="IA, Inteligencia Artificial, LLM, ChatGPT, Automatización, CleverIT, Apps IA, Machine Learning, Productividad, Datos, Inicio"
    />
    <Hero />
    <NewProcess />
    <Benefits />
    <MastraHighlight />
    <Process />
    <Testimonials />
    <FAQ />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-backblack">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/plans" element={<PricingPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/use-cases/:id" element={<UseCaseDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;