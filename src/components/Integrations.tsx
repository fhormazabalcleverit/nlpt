import React from 'react';
import { Database, FileText, Plug, Box, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const Integrations = () => {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  const integrations = [
    { icon: Globe, name: 'SharePoint', color: 'from-blue-500 to-cyan-500' },
    { icon: Database, name: t.integrations.databases, color: 'from-green-500 to-emerald-500' },
    { icon: FileText, name: t.integrations.files, color: 'from-purple-500 to-pink-500' },
    { icon: Plug, name: 'APIs', color: 'from-orange-500 to-yellow-500' },
    { icon: Box, name: 'MCP', color: 'from-pink-500 to-rose-500' }
  ];

  return (
    <section className="bg-backblack py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className={`fade-in-up ${sectionVisible ? 'animate' : ''}`}>
          {/* Integration Icons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-gray-900/30 border border-gray-800 rounded-2xl hover:border-pink-500/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${integration.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-400 font-medium text-center">{integration.name}</span>
                </div>
              );
            })}
          </div>

          {/* Description */}
          <div className="bg-gradient-to-r from-gray-900/50 via-gray-800/30 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              {t.integrations.description1}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.integrations.description2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
