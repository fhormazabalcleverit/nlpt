import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import CertificationBanner from './CertificationBanner';

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

  // Function to render text with bold markdown (**text**)
  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const faqs = [
    {
      question: t.faq.question1.q,
      answer: t.faq.question1.a
    },
    {
      question: t.faq.question2.q,
      answer: t.faq.question2.a
    },
    {
      question: t.faq.question3.q,
      answer: t.faq.question3.a
    },
    {
      question: t.faq.question4.q,
      answer: t.faq.question4.a
    },
    {
      question: t.faq.question5.q,
      answer: t.faq.question5.a
    },
    {
      question: t.faq.question6.q,
      answer: t.faq.question6.a
    },
    {
      question: t.faq.question7.q,
      answer: t.faq.question7.a
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-backblack py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AI Certification Banner */}
        <CertificationBanner />

        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {t.faq.badge}
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {t.faq.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.faq.subtitle}{' '}
            <a 
              href={t.faq.subtitleLink.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 underline transition-colors"
            >
              {t.faq.subtitleLink.text}
            </a>
          </p>
        </div>

        {/* FAQ Items */}
        <div ref={faqRef} className={`space-y-4 fade-in-up-delay max-w-4xl mx-auto   ${faqVisible ? 'animate' : ''}`}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-backblack rounded-xl backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-gray-900/50"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none "
                onClick={() => toggleFAQ(index)}
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-pink-400 transition-transform duration-200" />
                  ) : (
                    <Plus className="w-6 h-6 text-pink-400 transition-transform duration-200" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-gray-900 pt-6">
                    <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                      {renderTextWithBold(faq.answer)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;