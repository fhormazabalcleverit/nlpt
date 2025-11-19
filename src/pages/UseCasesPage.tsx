import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Pickaxe, BarChart3, ArrowRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const UseCasesPage = () => {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const useCases = [
    {
      id: 'production-insight',
      icon: ShoppingBag,
      title: t.useCases.case1.title,
      excerpt: t.useCases.case1.excerpt,
      category: t.useCases.case1.category,
      readTime: '5 min',
      gradient: 'from-blue-500 to-cyan-500',
      demoUrl: 'https://retail-llmapp.cleveritgroup.ai'
    },
    {
      id: 'mining',
      icon: Pickaxe,
      title: t.useCases.case2.title,
      excerpt: t.useCases.case2.excerpt,
      category: t.useCases.case2.category,
      readTime: '6 min',
      gradient: 'from-orange-500 to-yellow-500',
      demoUrl: 'https://mining-llmapp.cleveritgroup.ai'
    },
    {
      id: 'development-metrics',
      icon: BarChart3,
      title: t.useCases.case3.title,
      excerpt: t.useCases.case3.excerpt,
      category: t.useCases.case3.category,
      readTime: '4 min',
      gradient: 'from-purple-500 to-pink-500',
      demoUrl: 'https://pulzen-llmapp.cleveritgroup.ai'
    }
  ];

  return (
    <section className="bg-backblack py-20 min-h-screen">
      <SEO 
        title="Casos de Uso"
        description="Descubre cómo diferentes industrias están transformando sus operaciones con LLM Apps y soluciones de IA personalizadas."
        keywords="casos de uso, IA industrial, manufactura, minería, desarrollo, métricas, Production Insight, Mining Intelligence"
        ogImage="/meta/use-cases-thumbnail.png"
        ogUrl={window.location.href}
        dynamic={true}
      />
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
                    backgroundImage: `url(${import.meta.env.BASE_URL}card.svg)`,
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
                    <div className="flex items-center space-x-1 text-pink-400 text-sm font-normal group-hover:space-x-2 transition-all duration-300 mb-4 opacity-70">
                      <span>{t.useCases.readMore}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Try Demo Button (only for Development Metrics) */}
                    {useCase.demoUrl && (
                      <a
                        href={useCase.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-4 py-2 rounded-full text-sm transition-all duration-300"
                      >
                        <span>{t.useCases.tryDemo}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div ref={ctaRef} className={`mt-20 text-center fade-in-up ${ctaVisible ? 'animate' : ''}`}>
          <div className="bg-gradient-to-r from-pink-500/20 via-purple-600/10 to-pink-500/20 border border-pink-500/50 rounded-3xl p-12 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.useCases.ctaTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.useCases.ctaSubtitle}
            </p>

                      {/* CTA Buttons */}
          <div className="animate-slide-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
            <Link to="/quote" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 text-center">
              {t.hero.ctaPrimary}
            </Link>
            <a href="https://phoenix.cleveritgroup.ai/?offering=llmapps" target="_blank" rel="noopener noreferrer" className="relative w-full sm:w-auto border-2 border-gray-600 hover:border-pink-500 text-white hover:text-pink-400 font-medium px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 bg-transparent hover:bg-pink-500/10 text-center flex items-center justify-center gap-2 group">
              {/* Estrellas animadas */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-2 -left-2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out group-hover:animate-pulse"></div>
                <div className="absolute -top-3 right-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-700 ease-in-out delay-100 group-hover:animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-600 ease-in-out delay-200 group-hover:animate-pulse"></div>
                <div className="absolute -bottom-3 left-1 w-0.5 h-0.5 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out delay-300 group-hover:animate-pulse"></div>
                <div className="absolute top-1 -right-4 w-1 h-1 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-650 ease-in-out delay-150 group-hover:animate-pulse"></div>
                <div className="absolute bottom-0 -left-3 w-0.5 h-0.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-550 ease-in-out delay-250 group-hover:animate-pulse"></div>
              </div>
              {t.hero.ctaSecondary}
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

            {/*
            <Link
              to="/quote"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
            >
              {t.useCases.ctaButton}
            </Link>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesPage;
