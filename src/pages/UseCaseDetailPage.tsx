// import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, ShoppingBag, Pickaxe } from 'lucide-react';
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
      icon: ShoppingBag,
      gradient: 'from-blue-500 to-cyan-500',
      image: '/articles/Retail.png',
      demoUrl: 'https://retail-llmapp.cleveritgroup.ai'
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
      image: '/articles/Mining.png',
      demoUrl: 'https://mining-llmapp.cleveritgroup.ai'
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
      icon: null,
      iconSvg: '/faviconPulzen LLMApp.svg',
      gradient: 'from-purple-500 to-pink-500',
      image: '/articles/Technology.png',
      demoUrl: 'https://pulzen-llmapp.cleveritgroup.ai'
    }
  };

  const useCase = useCaseContent[id as keyof typeof useCaseContent];

  if (!useCase) {
    return (
      <div className="bg-backblack min-h-screen flex items-center justify-center">
        <SEO 
          title="Caso de Uso No Encontrado"
          description="El caso de uso solicitado no fue encontrado. Explora otros casos de uso de IA."
          dynamic={true}
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t.useCases.notFound}</h1>
          <Link to="/v2/use-cases" className="text-pink-400 hover:text-pink-300 transition-colors">
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
        description={useCase.content.substring(0, 160) + '...'}
        keywords={`${useCase.category}, caso de uso, IA, ${useCase.title}, automatización, CleverIT`}
        type="article"
        ogImage={useCase.image}
        ogUrl={window.location.href}
        dynamic={true}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/v2/use-cases"
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


          <div className="flex items-center gap-6 mb-6">
            {/* Icon Circle */}
            <div className={`w-20 h-20 bg-gradient-to-r ${useCase.gradient} rounded-full flex items-center justify-center border-4 border-gray-900/50 flex-shrink-0`}>
              {(useCase as any).iconSvg ? (
                <img src={(useCase as any).iconSvg} alt={useCase.title} className="w-10 h-10" />
              ) : (
                useCase.icon && <useCase.icon className="w-10 h-10 text-white" />
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {useCase.title}
            </h1>
          </div>

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

          {/* Challenge - Not used in any case now */}
          {false && (
            <div
              ref={challengeAnim.ref}
              className={`mb-12 px-16 fade-in-up ${challengeAnim.isVisible ? 'animate' : ''}`}
            >
              <h2 className="text-xl font-semibold text-white mb-6">{t.useCases.challengeTitle}</h2>
              <div className="">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {useCase.challenge}
                </p>
              </div>
            </div>
          )}

          {/* Solution - Not used anymore, replaced by detailed applications */}
          {false && (
            <div
              ref={solutionAnim.ref}
              className={`mb-12 px-16 fade-in-up ${solutionAnim.isVisible ? 'animate' : ''}`}
            >
              <h2 className="text-xl font-semibold text-white mb-6">{t.useCases.solutionTitle}</h2>
              <div className="">
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  {useCase.solution}
                </p>

                {/* Standard Features List for other cases */}
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
          )}

          {/* Retail Case - Special Applications Section */}
          {id === 'production-insight' && (t.useCases.case1 as any).applications && (
            <div
              ref={solutionAnim.ref}
              className={`mb-12 px-16 fade-in-up ${solutionAnim.isVisible ? 'animate' : ''}`}
            >
              <div className="space-y-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {(t.useCases.case1 as any).applications.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  {(t.useCases.case1 as any).applications.subtitle}
                </p>

                {/* Applications */}
                <div className="space-y-8">
                  {[
                    (t.useCases.case1 as any).applications.app1,
                    (t.useCases.case1 as any).applications.app2,
                    (t.useCases.case1 as any).applications.app3,
                    (t.useCases.case1 as any).applications.app4,
                    (t.useCases.case1 as any).applications.app5
                  ].map((app: any, index: number) => (
                    <div key={index} className="bg-gray-500/10 border border-gray-500/30 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">{app.title}</h3>
                      
                      <div className="mb-4">
                        <p className="text-gray-400 font-semibold mb-6" dangerouslySetInnerHTML={{ __html: app.challenge }} />
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-400 font-semibold mb-3" dangerouslySetInnerHTML={{ __html: app.capabilities }} />
                        <ul className="space-y-3 ml-4">
                          {app.features.map((feature: any, featureIndex: number) => (
                            <li key={featureIndex} className="space-y-2">
                              {/* Main bullet */}
                              <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300">{typeof feature === 'string' ? feature : feature.main}</span>
                              </div>
                              
                              {/* Sub bullets if they exist */}
                              {feature.sub && feature.sub.length > 0 && (
                                <ul className="space-y-1 ml-6">
                                  {feature.sub.map((subFeature: string, subIndex: number) => (
                                    <li key={subIndex} className="flex items-start space-x-2">
                                      <div className="w-1 h-1 bg-blue-300 rounded-full mt-2.5 flex-shrink-0"></div>
                                      <span className="text-gray-400 text-sm">{subFeature}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-green-300 font-light" dangerouslySetInnerHTML={{ __html: app.value }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mining Case - Special Applications Section */}
          {id === 'mining' && (t.useCases.case2 as any).applications && (
            <div
              ref={solutionAnim.ref}
              className={`mb-12 px-16 fade-in-up ${solutionAnim.isVisible ? 'animate' : ''}`}
            >
              <div className="space-y-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {(t.useCases.case2 as any).applications.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  {(t.useCases.case2 as any).applications.subtitle}
                </p>

                {/* Applications */}
                <div className="space-y-8">
                  {[
                    (t.useCases.case2 as any).applications.app1,
                    (t.useCases.case2 as any).applications.app2,
                    (t.useCases.case2 as any).applications.app3,
                    (t.useCases.case2 as any).applications.app4,
                    (t.useCases.case2 as any).applications.app5
                  ].map((app: any, index: number) => (
                    <div key={index} className="bg-gray-500/10 border border-gray-500/30 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">{app.title}</h3>
                      
                      <div className="mb-4">
                        <p className="text-gray-400 font-semibold mb-6" dangerouslySetInnerHTML={{ __html: app.challenge }} />
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-400 font-semibold mb-3" dangerouslySetInnerHTML={{ __html: app.capabilities }} />
                        <ul className="space-y-3 ml-4">
                          {app.features.map((feature: any, featureIndex: number) => (
                            <li key={featureIndex} className="space-y-2">
                              {/* Main bullet */}
                              <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300">{typeof feature === 'string' ? feature : feature.main}</span>
                              </div>
                              
                              {/* Sub bullets if they exist */}
                              {feature.sub && feature.sub.length > 0 && (
                                <ul className="space-y-1 ml-6">
                                  {feature.sub.map((subFeature: string, subIndex: number) => (
                                    <li key={subIndex} className="flex items-start space-x-2">
                                      <div className="w-1 h-1 bg-orange-300 rounded-full mt-2.5 flex-shrink-0"></div>
                                      <span className="text-gray-400 text-sm">{subFeature}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-green-300 font-light" dangerouslySetInnerHTML={{ __html: app.value }} />
                    </div>
                  ))}
                </div>

                {/* Video Section for Mining */}
                {(t.useCases.case2 as any).videoSection && (
                  <div className="pt-12">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {(t.useCases.case2 as any).videoSection.title}
                    </h3>
                      
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-900 mb-6">
                      <video
                        controls
                        className="absolute inset-0 w-full h-full"
                        preload="metadata"
                      >
                        <source src={(t.useCases.case2 as any).videoSection.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-md mb-6 text-center">
                      {(t.useCases.case2 as any).videoSection.subtitle}
                    </p>
                  
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Development Metrics Case - Special Applications Section */}
          {id === 'development-metrics' && (t.useCases.case3 as any).applications && (
            <div
              ref={solutionAnim.ref}
              className={`mb-12 px-16 fade-in-up ${solutionAnim.isVisible ? 'animate' : ''}`}
            >
              <div className="space-y-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {(t.useCases.case3 as any).applications.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  {(t.useCases.case3 as any).applications.subtitle}
                </p>

                {/* Applications */}
                <div className="space-y-8">
                  {[
                    (t.useCases.case3 as any).applications.app1,
                    (t.useCases.case3 as any).applications.app2,
                    (t.useCases.case3 as any).applications.app3,
                    (t.useCases.case3 as any).applications.app4,
                    (t.useCases.case3 as any).applications.app5
                  ].map((app: any, index: number) => (
                    <div key={index} className="bg-gray-500/10 border border-gray-500/30 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">{app.title}</h3>
                      
                      <div className="mb-4">
                        <p className="text-gray-400 font-semibold mb-6" dangerouslySetInnerHTML={{ __html: app.challenge }} />
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-400 font-semibold mb-3" dangerouslySetInnerHTML={{ __html: app.capabilities }} />
                        <ul className="space-y-3 ml-4">
                          {app.features.map((feature: any, featureIndex: number) => (
                            <li key={featureIndex} className="space-y-2">
                              {/* Main bullet */}
                              <div className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-300">{typeof feature === 'string' ? feature : feature.main}</span>
                              </div>
                              
                              {/* Sub bullets if they exist */}
                              {feature.sub && feature.sub.length > 0 && (
                                <ul className="space-y-1 ml-6">
                                  {feature.sub.map((subFeature: string, subIndex: number) => (
                                    <li key={subIndex} className="flex items-start space-x-2">
                                      <div className="w-1 h-1 bg-purple-300 rounded-full mt-2.5 flex-shrink-0"></div>
                                      <span className="text-gray-400 text-sm">{subFeature}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <p className="text-green-300 font-light" dangerouslySetInnerHTML={{ __html: app.value }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results - Not used anymore */}
          {false && (
            <div
              ref={resultsAnim.ref}
              className={`mb-12 px-16 fade-in-up ${resultsAnim.isVisible ? 'animate' : ''}`}
            >
              <h2 className="text-xl font-semibold text-white mb-6">{t.useCases.resultsTitle}</h2>
              <div className="">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {useCase.results}
                </p>
              </div>
            </div>
          )}

          {/* Try Demo Button - Centered */}
          {useCase.demoUrl && (
            <div className="text-center mb-16">
              <a
                href={useCase.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center space-x-2 bg-gradient-to-r ${useCase.gradient} hover:opacity-90 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                <span>{t.useCases.tryDemo}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          )}
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
            to="/v2/quote"
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
