import React from 'react';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-backblack">
      <SEO
        title="Planes y Precios"
        description="Elige el plan perfecto para tu negocio. Desde startups hasta grandes corporaciones, tenemos la solución de IA que se adapta a tus necesidades y presupuesto."
        keywords="precios, planes, tarifas, startup, professional, enterprise, IA, LLM Apps, CleverIT"
        ogImage="/meta/pricing-thumbnail.png"
        ogUrl={window.location.href}
        dynamic={true}
      />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default PricingPage;