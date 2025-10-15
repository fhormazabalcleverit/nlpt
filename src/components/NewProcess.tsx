import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const NewProcess = () => {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const steps = [
    {
      number: "01",
      title: t.newProcess.step1.title,
      description: t.newProcess.step1.description,
      elements: [
        { type: "file", name: "documento.pdf", size: "2.4 MB", icon: "📄" },
        { type: "database", name: "Base de datos", records: "1,250 registros", icon: "🗄️" },
        { type: "api", name: "API REST", status: "Conectada", icon: "🔗" }
      ]
    },
    {
      number: "02",
      title: t.newProcess.step2.title,
      description: t.newProcess.step2.description,
      elements: [
        { type: "brain", name: "Análisis IA", progress: 85, icon: "🧠" },
        { type: "structure", name: "Estructuración", status: "Procesando", icon: "⚙️" },
        { type: "security", name: "Encriptación", level: "AES-256", icon: "🔒" }
      ]
    },
    {
      number: "03",
      title: t.newProcess.step3.title,
      description: t.newProcess.step3.description,
      elements: [
        { type: "chat", message: "¿Cuáles son las ventas del Q4?", response: "Las ventas del Q4 fueron $2.3M...", icon: "💬" },
        { type: "insight", title: "Insight clave", value: "Incremento del 23%", icon: "💡" },
        { type: "chart", title: "Tendencia", trend: "↗️ Positiva", icon: "📊" }
      ]
    }
  ];

  return (
    <section className="bg-backblack pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {t.newProcess.badge}
          </div>
          <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-white leading-tight max-w-4xl mx-auto">
            {t.newProcess.title}
          </h2>  
          {/*
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Un proceso simple de 3 pasos para potenciar tu negocio con inteligencia artificial
          </p>
            */}
        </div>
      
        {/* Process Cards */}
        <div ref={cardsRef} className={`grid grid-cols-1 lg:grid-cols-3 gap-8 fade-in-up-delay ${cardsVisible ? 'animate' : ''}`}>
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              {/* Card */}
              <div
                className="group relative border border-gray-800 hover:border-pink-500/50 rounded-2xl p-0 transition-all duration-500 ease-in-out min-h-[200px] flex items-center justify-center mb-6"
                style={{
                  backgroundImage: 'url(/card.svg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {index === 1 ? (
                  /* Animated Loader for center card */
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative">
                      <div className="w-16 h-16 border-4 border-gray-600 border-t-pink-500 rounded-full animate-spin"></div>
                      <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                    </div>
                    {/* Logo below spinner */}
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </div>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-white text-xl font-semibold">LLMApp</span>
                        <span className="text-gray-400 text-sm font-normal">by CleverIT</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* SVG Images for first and third cards */
                  <img
                    src={`/step${index + 1}.svg`}
                    alt={`Step ${index + 1}`}
                    className="max-w-sm w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                )}
              </div>
              
              {/* Title and Description below each card */}
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default NewProcess;