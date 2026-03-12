// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import DynamicSEO from './components/DynamicSEO';
import Hero from './components/Hero';
import Process from './components/Process';
import NewProcess from './components/NewProcess';
import Integrations from './components/Integrations';
import Benefits from './components/Benefits';
import MastraHighlight from './components/MastraHighlight';
// import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PricingPage from './pages/PricingPage';
import QuotePage from './pages/QuotePage';
import TeamPage from './pages/TeamPage';
import UseCasesPage from './pages/UseCasesPage';
import UseCaseDetailPage from './pages/UseCaseDetailPage';
import WebPlzPage from './pages/WebPlzPage';
import WebPlzPerformancePage from './pages/WebPlzPerformancePage';
import WebPlzMiningPage from './pages/WebPlzMiningPage';
import WebPlzRetailPage from './pages/WebPlzRetailPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import WebPlzPlatformPage from './pages/WebPlzPlatformPage';
import WebPlzAboutPage from './pages/WebPlzAboutPage';
import WebPlzCasesPage from './pages/WebPlzCasesPage';
import WebPlzContactPage from './pages/WebPlzContactPage';
import WebPlzQuotePage from './pages/WebPlzQuotePage';

const HomePage = () => (
  <>
    <DynamicSEO
      title="LLMApps by CleverIT | Generative AI and Business Automation Solutions"
      description="Transformamos tu negocio con LLM Apps que potencian la productividad y automatización. Carga, memoriza y conversa con tus datos de manera inteligente."
      image="/meta/thumbnail.jpg"
      keywords="IA, Inteligencia Artificial, LLM, ChatGPT, Automatización, CleverIT, Apps IA, Machine Learning, Productividad, Datos, Inicio"
      url={window.location.href}
    />
    <Hero />
    <NewProcess />
    <Integrations />
    <Benefits />
    <MastraHighlight />
    <Process />
    {/*<Testimonials />*/}
    <FAQ />
  </>
);

const MainLayout = () => (
  <div className="min-h-screen bg-backblack">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/plans" element={<PricingPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/use-cases/:id" element={<UseCaseDetailPage />} />
          </Route>
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/web/plz" element={<WebPlzPage />} />
          <Route path="/web/plz-performance" element={<WebPlzPerformancePage />} />
          <Route path="/web/plz-mining" element={<WebPlzMiningPage />} />
          <Route path="/web/plz-retail" element={<WebPlzRetailPage />} />
          <Route path="/web/plz-platform" element={<WebPlzPlatformPage />} />
          <Route path="/web/plz-about" element={<WebPlzAboutPage />} />
          <Route path="/web/plz-cases" element={<WebPlzCasesPage />} />
          <Route path="/web/plz-contact" element={<WebPlzContactPage />} />
          <Route path="/web/plz-quote" element={<WebPlzQuotePage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;