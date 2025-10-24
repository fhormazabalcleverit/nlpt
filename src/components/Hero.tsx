import { Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ChatInterface from './ChatInterface';
import Aurora from './Aurora';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-backblack min-h-screen flex items-center relative overflow-hidden -top-16">
      {/* Background SVG */}
      <div className="absolute inset-0 bg-no-repeat bg-center bg-[length:150%_auto] md:bg-cover"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}background01.svg)` }}></div>
      
      {/* Aurora Effect */}
      <div className="absolute top-0 left-0 right-0 h-full opacity-40">
        <Aurora 
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          speed={0.6}
          blend={0.5}
          amplitude={1.2}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-0">
        <div className="text-center max-w-4xl mx-auto flex flex-col justify-center min-h-[80vh] md:min-h-screen py-8">
          {/* Rating Section */}
          <div className="flex items-center justify-center space-x-2 mb-6 md:mb-8 animate-fade-in">
            <div className="flex items-center">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-purple-500 fill-current" />
              <span className="text-white font-medium ml-2 text-sm md:text-base">{t.hero.badge}</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 md:mb-8 animate-slide-up max-w-5xl mx-auto px-2">
            {t.hero.title}{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
            {' '}{t.hero.titleEnd}
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl text-gray-400 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto animate-slide-up-delay px-4">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
            <Link to="/quote" className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 text-center">
              {t.hero.ctaPrimary}
            </Link>
            <a href="https://phoenix.cleveritgroup.ai/" target="_blank" rel="noopener noreferrer" className="relative w-full sm:w-auto border-2 border-gray-600 hover:border-pink-500 text-white hover:text-pink-400 font-medium px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 bg-transparent hover:bg-pink-500/10 text-center flex items-center justify-center gap-2 group">
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

          {/* Chat Interface */}
          <div className="animate-slide-up-delay-3 relative">
            <div className="px-2 md:px-0">
              <ChatInterface />
            </div>
            
            {/* Screen SVG - overlapping below ChatInterface */}
            <div className="relative -mt-8 md:-mt-36 z-0 hidden md:block">
              <img 
                src={`${import.meta.env.BASE_URL}screen.svg`} 
                alt="Screen mockup" 
                className="mx-auto w-full max-w-5xl h-auto opacity-90"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;