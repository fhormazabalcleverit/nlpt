import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ChatInterface from './ChatInterface';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-backblack min-h-screen flex items-center relative overflow-hidden -top-16">
      {/* Background SVG */}
      <div className="absolute inset-0 bg-no-repeat bg-center bg-[length:150%_auto] md:bg-cover"
        style={{ backgroundImage: 'url(/background01.svg)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-40 md:mt-0">
        <div className="text-center max-w-4xl mx-auto mt-40">
          {/* Rating Section */}
          <div className="flex items-center justify-center space-x-2 mb-8 animate-fade-in">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-purple-500 fill-current" />
              <span className="text-white font-medium ml-2">{t.hero.badge}</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 leading-tight animate-slide-up max-w-5xl mx-auto">
            {t.hero.title}{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
            {' '}{t.hero.titleEnd}
          </h1>

          {/* Description */}
          <p className="text-sm md:text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto animate-slide-up-delay">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/cotizar" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
              {t.hero.ctaPrimary}
            </Link>
            <a href="https://interfaz-de-agente-i-7lya.bolt.host" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-600 hover:border-pink-500 text-white hover:text-pink-400 font-medium px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 bg-transparent hover:bg-pink-500/10">
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Chat Interface */}
          <div className="animate-slide-up-delay-3">
            <ChatInterface />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;