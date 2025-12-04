import React from 'react';
import { Database, FileText, Plug, Box, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Integrations = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  const integrations = [
    {
      icon: Globe,
      title: t.integrations.sharepoint.name,
      description: t.integrations.sharepoint.description
    },
    {
      icon: Database,
      title: t.integrations.database.name,
      description: t.integrations.database.description
    },
    {
      icon: FileText,
      title: t.integrations.file.name,
      description: t.integrations.file.description
    },
    {
      icon: Plug,
      title: t.integrations.api.name,
      description: t.integrations.api.description
    },
    {
      icon: Box,
      title: t.integrations.mcp.name,
      description: t.integrations.mcp.description
    }
  ];

  return (
    <section className="bg-backblack py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
          <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Integraciones
          </h2>  
        </div>

        <div ref={sectionRef} className={`fade-in-up ${sectionVisible ? 'animate' : ''}`}>
          {/* Integration Cards */}
          <div className="flex flex-col gap-4 mb-12">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch">
              {integrations.slice(0, 3).map((integration, index) => {
                const IconComponent = integration.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-black/10 backdrop-blur-lg border-0 border-backblack hover:border-pink-500/50 rounded-2xl p-6 lg:p-6 transition-all duration-500 ease-in-out cursor-pointer flex-1 lg:hover:flex-[1] min-h-[100px] lg:min-h-[100px] flex flex-col hover:bg-backblack/80 bg-gradient-to-r from-blue-500/10 via-sky-600/3 to-purple-500/10"
                  >
                    <h3 className="text-2lg lg:text-3xl font-semibold text-white mb-1 lg:mb-2 leading-tight flex-shrink-0">
                      <IconComponent className="w-8 h-8 lg:w-10 lg:h-10" />
                    </h3>
                    <h3 className="text-lg lg:text-lg font-semibold text-white mb-4 leading-tight flex-shrink-0">
                      {integration.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-bold text-sm opacity-100 transition-opacity duration-500 delay-200">
                      {integration.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {integrations.length > 3 && (
              <div className="flex flex-col lg:flex-row gap-4 items-stretch">
                {integrations.slice(3).map((integration, index) => {
                  const IconComponent = integration.icon;
                  return (
                    <div
                      key={index + 3}
                      className="group relative bg-black/10 backdrop-blur-lg border-0 border-backblack hover:border-pink-500/50 rounded-2xl p-6 lg:p-6 transition-all duration-500 ease-in-out cursor-pointer flex-1 lg:hover:flex-[1] min-h-[100px] lg:min-h-[100px] flex flex-col hover:bg-backblack/80 bg-gradient-to-r from-blue-500/10 via-sky-600/3 to-purple-500/10"
                    >
                      <h3 className="text-2lg lg:text-3xl font-semibold text-white mb-1 lg:mb-2 leading-tight flex-shrink-0">
                        <IconComponent className="w-8 h-8 lg:w-10 lg:h-10" />
                      </h3>
                      <h3 className="text-lg lg:text-lg font-semibold text-white mb-4 leading-tight flex-shrink-0">
                        {integration.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-bold text-sm opacity-100 transition-opacity duration-500 delay-200">
                        {integration.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Description Section */}
          <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-600/30 to-pink-500/10 border border-blue-500/0 rounded-3xl p-8 md:p-12 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,_rgba(59,130,246,0.15)_0%,_transparent_0%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,_rgba(147,51,234,0.15)_0%,_transparent_0%)] pointer-events-none"></div>
            
            <div className="relative z-10 text-center">
              <p className="text-xl md:text-xl text-white leading-relaxed max-w-5xl mx-auto">
                {t.integrations.description1}
              </p>

              <p className="text-xl md:text-lg text-gray-400 leading-relaxed max-w-5xl mx-auto mt-4">
                {t.integrations.description2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
