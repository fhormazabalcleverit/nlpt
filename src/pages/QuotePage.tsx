// import React from 'react';
import QuoteForm from '../components/QuoteForm';
import SEO from '../components/SEO';

const QuotePage = () => {
  return (
    <div className="min-h-screen bg-backblack">
      <SEO 
        title="Estemos en Contacto"
        description="Cotiza tu proyecto de IA con CleverIT. Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la solución perfecta de IA para tu negocio."
        keywords="cotización, contacto, proyecto IA, presupuesto, CleverIT, consultoría IA, LLM Apps"
        ogImage="/meta/contact-thumbnail.png"
        ogUrl={window.location.href}
        dynamic={true}
      />
      <QuoteForm />
    </div>
  );
};

export default QuotePage;