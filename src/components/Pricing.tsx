import React from 'react';
import { Check, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: plansRef, isVisible: plansVisible } = useScrollAnimation();

  const plans = [
    {
      name: t.pricing.starter.name,
      price: t.pricing.starter.price,
      period: t.pricing.starter.period,
      description: t.pricing.starter.description,
      features: [
        t.pricing.starter.feature1,
        t.pricing.starter.feature2,
        t.pricing.starter.feature3,
        t.pricing.starter.feature4,
        t.pricing.starter.feature5,
        t.pricing.starter.feature6
      ],
      notIncluded: [
        t.pricing.starter.notIncluded1,
        t.pricing.starter.notIncluded2,
        t.pricing.starter.notIncluded3
      ],
      popular: false,
      buttonText: t.pricing.starter.cta,
      buttonStyle: "border-2 border-gray-600 hover:border-pink-500 text-white hover:text-pink-400"
    },
    {
      name: t.pricing.professional.name,
      price: t.pricing.professional.price,
      period: t.pricing.professional.period,
      description: t.pricing.professional.description,
      features: [
        t.pricing.professional.feature1,
        t.pricing.professional.feature2,
        t.pricing.professional.feature3,
        t.pricing.professional.feature4,
        t.pricing.professional.feature5,
        t.pricing.professional.feature6,
        t.pricing.professional.feature7,
        t.pricing.professional.feature8
      ],
      notIncluded: [
        t.pricing.professional.notIncluded1,
        t.pricing.professional.notIncluded2
      ],
      popular: true,
      buttonText: t.pricing.professional.cta,
      buttonStyle: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
    },
    {
      name: t.pricing.enterprise.name,
      price: t.pricing.enterprise.price,
      period: t.pricing.enterprise.period,
      description: t.pricing.enterprise.description,
      features: [
        t.pricing.enterprise.feature1,
        t.pricing.enterprise.feature2,
        t.pricing.enterprise.feature3,
        t.pricing.enterprise.feature4,
        t.pricing.enterprise.feature5,
        t.pricing.enterprise.feature6,
        t.pricing.enterprise.feature7,
        t.pricing.enterprise.feature8,
        t.pricing.enterprise.feature9,
        t.pricing.enterprise.feature10,
        t.pricing.enterprise.feature11
      ],
      notIncluded: [],
      popular: false,
      buttonText: t.pricing.enterprise.cta,
      buttonStyle: "border-2 border-gray-600 hover:border-pink-500 text-white hover:text-pink-400"
    }
  ];

  return (
    <section className="bg-backblack py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {t.pricing.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto mb-6">
            {t.pricing.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Pricing Plans */}
        <div ref={plansRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 fade-in-up-delay ${plansVisible ? 'animate' : ''}`}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 border rounded-2xl p-8 transition-all duration-300 hover:bg-gray-800/50 ${
                plan.popular
                  ? 'border-pink-500 ring-2 ring-pink-500/20'
                  : 'border-gray-700 hover:border-pink-500/50'
              }`}
              style={{
                backgroundImage: 'url(/card.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {t.pricing.popularBadge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 ml-2">{plan.period}</span>}
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full font-semibold px-6 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;