import React from 'react';
import QuoteForm from '../components/QuoteForm';
import SEO from '../components/SEO';

const QuotePage = () => {
  return (
    <div className="min-h-screen bg-backblack">
      <SEO 
        title="Estemos en Contacto"
        description="Cotiza tu proyecto de IA con CleverIT. Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la solución perfecta de IA para tu negocio."
        keywords="cotización, contacto, proyecto IA, presupuesto, CleverIT, consultoría IA, LLM Apps"
      />
      <QuoteForm />
    </div>
  );
};

export default QuotePage;