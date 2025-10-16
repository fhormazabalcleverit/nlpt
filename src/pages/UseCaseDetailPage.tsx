import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Factory, Pickaxe, BarChart3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

const UseCaseDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const headerAnim = useScrollAnimation();
  const imageAnim = useScrollAnimation();
  const introAnim = useScrollAnimation();
  const challengeAnim = useScrollAnimation();
  const solutionAnim = useScrollAnimation();
  const resultsAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  const useCaseContent = {
    'production-insight': {
      title: t.useCases.case1.title,
      category: t.useCases.case1.category,
      readTime: '5 min',
      date: 'Enero 2025',
      content: t.useCases.case1.fullContent,
      challenge: t.useCases.case1.challenge,
      solution: t.useCases.case1.solution,
      results: t.useCases.case1.results,
      features: t.useCases.case1.features,
      icon: Factory,
      gradient: 'from-blue-500 to-cyan-500',
      image: '/articles/Manufacturing.png'
    },
    'mining': {
      title: t.useCases.case2.title,
      category: t.useCases.case2.category,
      readTime: '6 min',
      date: 'Enero 2025',
      content: t.useCases.case2.fullContent,
      challenge: t.useCases.case2.challenge,
      solution: t.useCases.case2.solution,
      results: t.useCases.case2.results,
      features: t.useCases.case2.features,
      icon: Pickaxe,
      gradient: 'from-orange-500 to-yellow-500',
      image: '/articles/Mining.png'
    },
    'development-metrics': {
      title: t.useCases.case3.title,
      category: t.useCases.case3.category,
      readTime: '4 min',
      date: 'Enero 2025',
      content: t.useCases.case3.fullContent,
      challenge: t.useCases.case3.challenge,
      solution: t.useCases.case3.solution,
      results: t.useCases.case3.results,
      features: t.useCases.case3.features,
      icon: BarChart3,
      gradient: 'from-purple-500 to-pink-500',
      image: '/articles/Technology.png'
    }
  };

  const useCase = useCaseContent[id as keyof typeof useCaseContent];

  if (!useCase) {
    return (
      <div className="bg-backblack min-h-screen flex items-center justify-center">
        <SEO 
          title="Caso de Uso No Encontrado"
          description="El caso de uso solicitado no fue encontrado. Explora otros casos de uso de IA."
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t.useCases.notFound}</h1>
          <Link to="/use-cases" className="text-pink-400 hover:text-pink-300 transition-colors">
            {t.useCases.backToUseCases}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-backblack py-20 min-h-screen">
      <SEO 
        title={useCase.title}
        description={useCase.excerpt}
        keywords={`${useCase.category}, caso de uso, IA, ${useCase.title}, automatización, CleverIT`}
        type="article"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/use-cases"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t.useCases.backToUseCases}</span>
        </Link>

        {/* Header */}
        <div
          ref={headerAnim.ref}
          className={`mb-12 fade-in-up ${headerAnim.isVisible ? 'animate' : ''}`}
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center space-x-2 bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium">
              <Tag className="w-4 h-4" />
              <span>{useCase.category}</span>
            </span>
            <span className="flex items-center space-x-2 text-gray-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{useCase.date}</span>
            </span>
            <span className="flex items-center space-x-2 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>{useCase.readTime}</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* Icon Circle */}
            <div className={`w-20 h-20 bg-gradient-to-r ${useCase.gradient} rounded-full flex items-center justify-center border-4 border-gray-900/50 flex-shrink-0`}>
              <useCase.icon className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {useCase.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none mb-36">
          {/* Category Image */}
          <div
            ref={imageAnim.ref}
            className={`mb-8 fade-in-up ${imageAnim.isVisible ? 'animate' : ''}`}
          >
            <img
              src={useCase.image}
              alt={useCase.category}
              className="w-full h-auto rounded-2xl border border-gray-700"
            />
          </div>

          {/* Introduction */}
          <div
            ref={introAnim.ref}
            className={`mb-16 fade-in-up ${introAnim.isVisible ? 'animate' : ''}`}
          >
            <p className="text-gray-300 leading-relaxed text-xl">
              {useCase.content}
            </p>
          </div>

          {/* Challenge */}
          <div
            ref={challengeAnim.ref}
            className={`mb-12 px-16 fade-in-up ${challengeAnim.isVisible ? 'animate' : ''}`}
          >
            <h2 className="text-xl font-semibold text-white mb-6">{t.useCases.challengeTitle}</h2>
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/50 rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                {useCase.challenge}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div
            ref={solutionAnim.ref}
            className={`mb-12 px-16 fade-in-up ${solutionAnim.isVisible ? 'animate' : ''}`}
          >
            <h2 className="text-xl font-semibold text-white mb-6">{t.useCases.solutionTitle}</h2>
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/50 rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                {useCase.solution}
              </p>

              {/* Features List */}
              <h3 className="text-lg font-semibold text-white mb-4">{t.useCases.featuresTitle}</h3>
              <ul className="space-y-3">
                {useCase.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Results */}
          <div
            ref={resultsAnim.ref}
            className={`mb-12 px-16 fade-in-up ${resultsAnim.isVisible ? 'animate' : ''}`}
          >
            <h2 className="text-xl font-semibold text-white mb-6">{t.useCases.resultsTitle}</h2>
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed text-lg">
                {useCase.results}
              </p>
            </div>
          </div>
        </article>

        {/* CTA */}
        <div
          ref={ctaAnim.ref}
          className={`mt-16 bg-gradient-to-r from-pink-500/20 via-purple-600/10 to-pink-500/20 border border-pink-500/50 rounded-3xl p-8 md:p-12 text-center fade-in-up ${ctaAnim.isVisible ? 'animate' : ''}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t.useCases.detailCtaTitle}
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.useCases.detailCtaSubtitle}
          </p>
          <Link
            to="/quote"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            {t.useCases.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UseCaseDetailPage;
