import React from 'react';
import { Zap, BarChart3, Shield, Settings, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Benefits = () => {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: Zap,
      title: t.benefits.benefit1.title,
      description: t.benefits.benefit1.description
    },
    {
      icon: BarChart3,
      title: t.benefits.benefit2.title,
      description: t.benefits.benefit2.description
    },
    {
      icon: Shield,
      title: t.benefits.benefit3.title,
      description: t.benefits.benefit3.description
    },
    {
      icon: Settings,
      title: t.benefits.benefit4.title,
      description: t.benefits.benefit4.description
    },
    {
      icon: TrendingUp,
      title: t.benefits.benefit5.title,
      description: t.benefits.benefit5.description
    }
  ];

  return (
    <section className="bg-backblack py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {t.benefits.badge}
          </div>
           {/*
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Todas tus soluciones de IA en una plataforma
          </h2>
          */}
        </div>

        {/* Benefits Grid */}
        <div ref={gridRef} className="flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {benefits.slice(0, 3).map((benefit, index) => {
              const IconComponent = benefit.icon;
              const delayClasses = [
                'fade-in-up',
                'fade-in-up-delay',
                'fade-in-up-delay-2'
              ];
              return (
                <div
                  key={index}
                  className={`group text-center duration-300  ${delayClasses[index]} ${gridVisible ? 'animate' : ''}`}
                >
                  <div className="w-16 h-16 transition-all bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600  duration-300">
                    <IconComponent className="w-8 h-8 text-gray-300 group-hover:text-white duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-pink-500">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {benefits.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {benefits.slice(3).map((benefit, index) => {
                const IconComponent = benefit.icon;
                const delayClasses = [
                  'fade-in-up-delay-3',
                  'fade-in-up-delay-4'
                ];
                return (
                  <div
                    key={index + 3}
                    className={`group text-center duration-300  ${delayClasses[index]} ${gridVisible ? 'animate' : ''}`}
                  >
                    <div className="w-16 h-16 transition-all bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600  duration-300">
                      <IconComponent className="w-8 h-8 text-gray-300 group-hover:text-white duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-pink-500">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Benefits;