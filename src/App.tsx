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
      title="Pulzen AI by CleverIT | Generative AI and Business Automation Solutions"
      description="Transformamos tu negocio con Pulzen AI que potencia la productividad y automatización. Carga, memoriza y conversa con tus datos de manera inteligente."
      image="/meta/pulzen-cover.png?v=pulzen"
      keywords="IA, Inteligencia Artificial, Pulzen, LLM, ChatGPT, Automatización, CleverIT, Apps IA, Machine Learning, Productividad, Datos, Inicio"
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
          {/* V2 Version */}
          <Route path="/v2" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="plans" element={<PricingPage />} />
            <Route path="quote" element={<QuotePage />} />
            <Route path="use-cases" element={<UseCasesPage />} />
            <Route path="use-cases/:id" element={<UseCaseDetailPage />} />
          </Route>

          {/* V1 Version (WebPlz) */}
          <Route path="/" element={<WebPlzPage />} />
          <Route path="/performance" element={<WebPlzPerformancePage />} />
          <Route path="/mining" element={<WebPlzMiningPage />} />
          <Route path="/retail" element={<WebPlzRetailPage />} />
          <Route path="/platform" element={<WebPlzPlatformPage />} />
          <Route path="/about" element={<WebPlzAboutPage />} />
          <Route path="/cases" element={<WebPlzCasesPage />} />
          <Route path="/contact" element={<WebPlzContactPage />} />
          <Route path="/quote" element={<WebPlzQuotePage />} />

          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />

        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;