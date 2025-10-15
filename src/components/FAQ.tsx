import React, { useState } from 'react';
import { Plus, Minus, Award, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: bannerRef, isVisible: bannerVisible } = useScrollAnimation();
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation();

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
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-backblack py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AI Certification Banner */}
        <div ref={bannerRef} className={`mb-20 fade-in-up ${bannerVisible ? 'animate' : ''}`}>
          <div className="relative bg-gradient-to-r from-sky-500/20 via-sky-600/10 to-blue-500/20 border border-sky-500/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(139,92,246,0.15)_0%,_transparent_50%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(236,72,153,0.15)_0%,_transparent_50%)] pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
              {/* Left Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sky-400 text-sm font-medium">
                      {t.faq.certBadge}
                    </p>
                    <h3 className="text-xl md:text-xl font-semibold text-white">
                      {t.faq.certTitle}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  {t.faq.certDescription} <span className="text-sky-400 font-bold">{t.faq.certName}</span>.
                </p>

              <p className="text-sky-200 text-md leading-relaxed mb-4 font-light">
                {t.faq.certFooter}
              </p>
              
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm font-medium">{t.faq.certFeature1}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm font-medium">{t.faq.certFeature2}</span>
                  </div>
           
                </div>
              </div>
              
              {/* Right Visual Element */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src="./AppModernizationwithAI.png"
                    alt="AI Certification"
                    className="w-60 h-82 rounded-3xl object-cover transform rotate-0 hover:rotate-2 transition-all duration-300 hover:shadow-2xl"
                  />
                  {/* Right Visual Element 
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {t.faq.badge}
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {t.faq.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.faq.subtitle}
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
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-gray-900 pt-6">
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
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