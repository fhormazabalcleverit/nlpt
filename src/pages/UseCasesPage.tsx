import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Pickaxe, BarChart3, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const UseCasesPage = () => {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation();

  const useCases = [
    {
      id: 'production-insight',
      icon: Factory,
      title: t.useCases.case1.title,
      excerpt: t.useCases.case1.excerpt,
      category: t.useCases.case1.category,
      readTime: '5 min',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'mining',
      icon: Pickaxe,
      title: t.useCases.case2.title,
      excerpt: t.useCases.case2.excerpt,
      category: t.useCases.case2.category,
      readTime: '6 min',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      id: 'development-metrics',
      icon: BarChart3,
      title: t.useCases.case3.title,
      excerpt: t.useCases.case3.excerpt,
      category: t.useCases.case3.category,
      readTime: '4 min',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="bg-backblack py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {t.useCases.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto mb-6">
            {t.useCases.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.useCases.subtitle}
          </p>
        </div>

        {/* Use Cases Grid */}
        <div ref={casesRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 fade-in-up-delay ${casesVisible ? 'animate' : ''}`}>
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div key={index} className="relative pt-12">
                {/* Icon positioned outside and above the card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 translate-y-2">
                  <div className={`w-24 h-24 bg-gradient-to-r ${useCase.gradient} rounded-full flex items-center justify-center border-4 border-gray-900/50`}>
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Card */}
                <Link
                  to={`/use-cases/${useCase.id}`}
                  className="block group bg-gray-900/50 border border-gray-700 rounded-3xl hover:border-pink-500/50 transition-all duration-300 hover:bg-gray-800/50 hover:scale-105 relative"
                  style={{
                    backgroundImage: 'url(/card.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Content */}
                  <div className="p-8 pt-20">
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-pink-400 font-medium">{useCase.category}</span>
                      <span className="text-sm text-gray-500">{useCase.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-pink-400 transition-colors duration-300">
                      {useCase.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {useCase.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center space-x-2 text-pink-400 font-medium group-hover:space-x-4 transition-all duration-300">
                      <span>{t.useCases.readMore}</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-pink-500/20 via-purple-600/10 to-pink-500/20 border border-pink-500/50 rounded-3xl p-12 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.useCases.ctaTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.useCases.ctaSubtitle}
            </p>
            <Link
              to="/quote"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
            >
              {t.useCases.ctaButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesPage;
