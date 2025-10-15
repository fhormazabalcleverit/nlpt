import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Process = () => {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const steps = [
    {
      number: "01",
      emogi: "🔒",
      title: t.process.step1.title,
      description: t.process.step1.description
    },
    {
      number: "02",
      emogi: "📊",
      title: t.process.step2.title,
      description: t.process.step2.description
    },
    {
      
      number: "03",
      emogi: "🔄",
      title: t.process.step3.title,
      description: t.process.step3.description
    },
    {
      number: "04",
      emogi: "⚡",
      title: t.process.step4.title,
      description: t.process.step4.description
    },
    {
      number: "05",
      emogi: "🧠",
      title: t.process.step5.title,
      description: t.process.step5.description
    }
  ];

  return (
    <section className="bg-backblack py-20 relative overflow-hidden">
      {/* Background SVG */}
      <div className="absolute max-w-7xl mx-auto   inset-0 bg-no-repeat bg-center opacity-100 bg-[length:100%_auto] md:bg-cover" style={{ backgroundImage: 'url(/mastra.svg)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className={`mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
           {/*
          <div className="text-gray-400 text-sm font-medium tracking-wider mb-8">
            NUESTRO PROCESO
          </div>
          */}
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {t.process.badge}
          </div>
          <div className="max-w-7xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t.process.title} <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">{t.process.titleHighlight}</span> {t.process.titleEnd}
            </h2>
          </div>
        </div>

        {/* Process Steps */}
        <div ref={cardsRef} className={`flex flex-col gap-4 fade-in-up-delay ${cardsVisible ? 'animate' : ''}`}>
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            {steps.slice(0, 3).map((step, index) => (
              <div
                key={index}
                className="group relative bg-black/10 backdrop-blur-lg border-0 border-backblack hover:border-pink-500/50 rounded-2xl p-6 lg:p-6 transition-all duration-500 ease-in-out cursor-pointer flex-1 lg:hover:flex-[1] min-h-[100px] lg:min-h-[100px] flex flex-col hover:bg-backblack/80 bg-gradient-to-r from-blue-500/10 via-sky-600/3 to-purple-500/10"
              >
                <h3 className="text-2lg lg:text-3xl font-semibold text-white mb-1 lg:mb-2 leading-tight flex-shrink-0">
                  {step.emogi}
                </h3>
                <h3 className="text-lg lg:text-lg font-semibold text-white mb-1 lg:mb-2 leading-tight flex-shrink-0">
                  {step.title}
                </h3>
                <div className="flex-1 flex items-end">
                  <p className="text-gray-400 leading-relaxed text-bold text-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-200 pt-4">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {steps.length > 3 && (
            <div className="flex flex-col lg:flex-row gap-4 items-stretch">
              {steps.slice(3).map((step, index) => (
                <div
                  key={index + 3}
                  className="group relative bg-black/10 backdrop-blur-lg border-0 border-backblack hover:border-pink-500/50 rounded-2xl p-6 lg:p-6 transition-all duration-500 ease-in-out cursor-pointer flex-1 lg:hover:flex-[1] min-h-[100px] lg:min-h-[100px] flex flex-col hover:bg-backblack/80 bg-gradient-to-r from-blue-500/10 via-sky-600/3 to-purple-500/10"
                >
                  <h3 className="text-2lg lg:text-3xl font-semibold text-white mb-1 lg:mb-2 leading-tight flex-shrink-0">
                    {step.emogi}
                  </h3>
                  <h3 className="text-lg lg:text-lg font-semibold text-white mb-1 lg:mb-2 leading-tight flex-shrink-0">
                    {step.title}
                  </h3>
                  <div className="flex-1 flex items-end">
                    <p className="text-gray-400 leading-relaxed text-bold text-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-200 pt-4">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Process;