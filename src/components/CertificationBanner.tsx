import { Award, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const CertificationBanner = () => {
  const { t } = useLanguage();
  const { ref: bannerRef, isVisible: bannerVisible } = useScrollAnimation();

  return (
    <div ref={bannerRef} className={`mb-20 max-w-5xl w-full fade-in-up ${bannerVisible ? 'animate' : ''}`}>
      <div className=" bg-gradient-to-r  from-sky-500/10 via-sky-600/10 to-blue-500/20 border border-sky-500/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(139,92,246,0.15)_0%,_transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(236,72,153,0.15)_0%,_transparent_50%)] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sky-400 text-sm font-medium">
                  {t.faq.certBadge}
                </p>
                <h3 className="text-xl md:text-xl font-semibold text-white">
                  {t.faq.certTitle}
                </h3>
              </div>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              {t.faq.certDescription} <span className="text-sky-400 font-bold">{t.faq.certName}</span>.
            </p>

            <p className="text-sky-200 text-md leading-relaxed mb-4 font-light">
              {t.faq.certFooter}
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">{t.faq.certFeature1}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-3">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-white text-sm font-medium">{t.faq.certFeature2}</span>
              </div>
            </div>
          </div>
          
          {/* Right Visual Element */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}AppModernizationwithAI.png`}
                alt="AI Certification"
                className="w-60 h-82 rounded-3xl object-cover transform rotate-0 hover:rotate-2 transition-all duration-300 hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationBanner;