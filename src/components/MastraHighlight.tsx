import React from 'react';
import { Code, Shield, Activity, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const MastraHighlight = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section className="bg-backblack py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Open Source Badge */}
        <div className="mt-8 mb-4">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 border border-gray-600 rounded-full px-4 py-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm font-medium">{t.mastraHighlight.badge}</span>
          </div>
        </div>


        <div ref={sectionRef} className={`fade-in-up ${sectionVisible ? 'animate' : ''}`}>
          <div className="relative bg-gradient-to-r from-blue-500/20 via-purple-600/10 to-pink-500/20 border border-blue-500/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,_rgba(59,130,246,0.15)_0%,_transparent_0%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,_rgba(147,51,234,0.15)_0%,_transparent_0%)] pointer-events-none"></div>
            
            <div className="relative z-10 text-center">
              
              {/* Main Content */}
              <div className="mb-8">
   
                
                
                <p className="text-xl md:text-xl text-white leading-relaxed max-w-5xl mx-auto">
                  {t.mastraHighlight.description1} <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t.mastraHighlight.company}</span> {t.mastraHighlight.description2}{' '}
                  <span className="font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">{t.mastraHighlight.mastra}</span>{t.mastraHighlight.description3}
                </p>


                  <p className="text-xl md:text-lg text-gray-400 leading-relaxed max-w-5xl mx-auto mt-4">
                  {t.mastraHighlight.description4}{' '}
                  <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t.mastraHighlight.highlight}</span>{t.mastraHighlight.description5}
                </p>
                
              </div>

              {/* Feature Icons */}
              <div className="flex flex-wrap items-center justify-center gap-8 mt-6 text-sm">
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                  <Code className="w-6 h-6 text-blue-400" />
                  <span className="text-white font-medium">{t.mastraHighlight.feature1}</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                  <Shield className="w-6 h-6 text-green-400" />
                  <span className="text-white font-medium">{t.mastraHighlight.feature2}</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                  <Activity className="w-6 h-6 text-purple-400" />
                  <span className="text-white font-medium">{t.mastraHighlight.feature3}</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                  <TrendingUp className="w-6 h-6 text-pink-400" />
                  <span className="text-white font-medium">{t.mastraHighlight.feature4}</span>
                </div>
              </div>

        
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MastraHighlight;