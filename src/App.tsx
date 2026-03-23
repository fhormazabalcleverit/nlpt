import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
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
import WebPlzPricingPage from './pages/WebPlzPricingPage';
import WebPlzProfilesPage from './pages/WebPlzProfilesPage';
import WebPlzExpertDetailPage from './pages/WebPlzExpertDetailPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Main Version (WebPlz) */}
          <Route path="/" element={<WebPlzProfilesPage />} />
          <Route path="/performance" element={<WebPlzPerformancePage />} />
          <Route path="/mining" element={<WebPlzMiningPage />} />
          <Route path="/retail" element={<WebPlzRetailPage />} />
          <Route path="/platform" element={<WebPlzPlatformPage />} />
          <Route path="/about" element={<WebPlzAboutPage />} />
          <Route path="/profiles" element={<WebPlzProfilesPage />} />
          <Route path="/profiles/:slug" element={<WebPlzExpertDetailPage />} />
          <Route path="/clever-ai-architect" element={<WebPlzExpertDetailPage />} />
          <Route path="/clever-ai-developer" element={<WebPlzExpertDetailPage />} />
          <Route path="/cases" element={<WebPlzCasesPage />} />
          <Route path="/pricing" element={<WebPlzPricingPage />} />
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