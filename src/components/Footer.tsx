import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-backblack py-16 relative overflow-hidden pt-40">
      {/* Background SVG */}
      <div className="absolute inset-0 max-w-7xl mx-auto bg-no-repeat bg-bottom bg-[length:100%_auto] md:bg-cover" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}footer.svg)` }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={`${import.meta.env.BASE_URL}logotipo.svg`} alt="LLMApp by CleverIT" className="h-8" />
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
            <a href="mailto:info@llmaps.com" target="_blank">
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg w-fit mt-6">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">info@llmaps.com</span>
              </div>
            </a>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-6">{language === 'es' ? 'MAPA DE SITIO' : 'SITEMAP'}</h3>
            <div className="space-y-4">
              <Link to="/team" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200">
                {t.navbar.team}
              </Link>
              <Link to="/use-cases" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200">
                {t.navbar.useCases}
              </Link>
              <Link to="/quote" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200">
                {t.navbar.contact}
              </Link>
            </div>
          </div>

          {/* Language & Social Column */}
          <div>
            {/*
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-6">{language === 'es' ? 'IDIOMA Y REDES' : 'LANGUAGE & SOCIAL'}</h3>
            <div className="mb-6">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 text-gray-300 hover:text-white px-4 py-2 rounded-full transition-all duration-200 font-medium w-full justify-center"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'es' ? 'English' : 'Español'}</span>
              </button>
            </div>
            */}
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-6">SOCIAL</h3>
            <div className="space-y-4">
              <a href="#" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200">
                Facebook
              </a>
              <a href="#" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200">
                Twitter
              </a>
              <a href="#" className="block text-gray-300 hover:text-pink-400 transition-colors duration-200">
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-1 text-gray-400 text-sm order-2 md:order-1 mt-12 md:mt-0">
              <span>{language === 'es' ? 'Creado por' : 'Created by'}</span>
              <div className="flex items-center space-x-1">

                <a href="https://www.cleveritgroup.com/es" target="_blank" className="text-gray-300 hover:text-pink-400 transition-colors duration-200 underline">

                  <img src="https://cdn.prod.website-files.com/5ff9f08ad0f45f13b2c0e743/641caf0bae4bded796d89833_logo-cleverit-blanco.png" className="w-20" alt="Cleverit" />

                </a>
                <span>2025 LLMApps.</span>
              </div>
              <span className="block sm:inline">{t.footer.rights}</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 order-1 md:order-2 mb-6 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-sm underline">
                {t.footer.terms}
              </a>
              <Link to="/privacy" className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-sm underline">
                {t.footer.privacy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;