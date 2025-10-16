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
            <img src="/logotipo.svg" alt="LLMApp by CleverIT" className="h-8" />
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