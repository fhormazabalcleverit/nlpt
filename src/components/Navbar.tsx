import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-gradient-to-r from-black/10 via-gray-900/70 to-black/10 backdrop-blur-md border-b border-gray-700/50 shadow-lg'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
            <img src={`${import.meta.env.BASE_URL}logotipo.svg`} alt="LLMApp by CleverIT" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/team" className="text-gray-300 hover:text-white transition-colors duration-200">
              {t.navbar.team}
            </Link>
            <Link to="/use-cases" className="text-gray-300 hover:text-white transition-colors duration-200">
              {t.navbar.useCases}
            </Link>
            <Link to="/quote" className="text-gray-300 hover:text-white transition-colors duration-200">
              {t.navbar.contact}
            </Link>
            <a 
              href="https://phoenix.cleveritgroup.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative p-0.5 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 bg-[length:400%_100%] animate-gradient-slow rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-900 ease-out group"
            >
              {/* Estrellas animadas */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-2 -left-2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out group-hover:animate-pulse"></div>
                <div className="absolute -top-3 right-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-700 ease-in-out delay-100 group-hover:animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-600 ease-in-out delay-200 group-hover:animate-pulse"></div>
                <div className="absolute -bottom-3 left-1 w-0.5 h-0.5 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out delay-300 group-hover:animate-pulse"></div>
                <div className="absolute top-1 -right-4 w-1 h-1 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-650 ease-in-out delay-150 group-hover:animate-pulse"></div>
                <div className="absolute bottom-0 -left-3 w-0.5 h-0.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-550 ease-in-out delay-250 group-hover:animate-pulse"></div>
              </div>
              <span className="block bg-backblack/80 text-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-pink-500 hover:text-white transition-all duration-900 ease-out font-medium px-4 py-2 rounded-full">
                {t.navbar.quoteWithAI}
              </span>
            </a>
          </div>

          {/* Right side - Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-full transition-colors duration-200 font-medium"
            >
              <Globe className="w-5 h-5" />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden border-t transition-all duration-300 ${
            isScrolled
              ? 'bg-backblack/90 backdrop-blur-md border-gray-700/50'
              : 'bg-backblack/95 backdrop-blur-sm border-gray-800'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/team" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200" onClick={() => setIsOpen(false)}>
                {t.navbar.team}
              </Link>
              <Link to="/use-cases" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200" onClick={() => setIsOpen(false)}>
                {t.navbar.useCases}
              </Link>
              <Link to="/quote" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200" onClick={() => setIsOpen(false)}>
                {t.navbar.contact}
              </Link>
              <a 
                href="https://phoenix.cleveritgroup.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-block p-0.5 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 bg-[length:400%_100%] animate-gradient-slow rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-500 ease-out mx-3 my-1 group"
                onClick={() => setIsOpen(false)}
              >
                {/* Estrellas animadas */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-2 -left-2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out group-hover:animate-pulse"></div>
                  <div className="absolute -top-3 right-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-700 ease-in-out delay-100 group-hover:animate-pulse"></div>
                  <div className="absolute -bottom-2 -right-2 w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-600 ease-in-out delay-200 group-hover:animate-pulse"></div>
                  <div className="absolute -bottom-3 left-1 w-0.5 h-0.5 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out delay-300 group-hover:animate-pulse"></div>
                  <div className="absolute top-1 -right-4 w-1 h-1 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-650 ease-in-out delay-150 group-hover:animate-pulse"></div>
                  <div className="absolute bottom-0 -left-3 w-0.5 h-0.5 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-550 ease-in-out delay-250 group-hover:animate-pulse"></div>
                </div>
                <span className="block bg-black/ text-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-600 hover:to-pink-500 hover:text-white transition-all duration-500 ease-out font-medium px-4 py-2 rounded-full">
                  {t.navbar.quoteWithAI}
                </span>
              </a>
              <div className="flex items-center justify-between px-3 py-2 border-t border-gray-700 mt-4 pt-4">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-full transition-colors duration-200 font-medium"
                >
                  <Globe className="w-5 h-5" />
                  <span>{language === 'es' ? 'EN' : 'ES'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;