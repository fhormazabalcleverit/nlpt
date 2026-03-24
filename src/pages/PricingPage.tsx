// import React from 'react';
import Pricing from '../components/Pricing';
import FAQ from '../components/plz/PlzFAQ';
import SEO from '../components/DynamicSEO';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-backblack">
      <SEO
        title="Planes y Precios"
        description="Elige el plan perfecto para tu negocio. Desde startups hasta grandes corporaciones, tenemos la solución de IA que se adapta a tus necesidades y presupuesto."
      />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default PricingPage;