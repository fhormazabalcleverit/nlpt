import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const PlzNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <nav className="w-full bg-gradient-to-b from-[#040809] to-transparent backdrop-blur-sm fixed top-0 z-50 border-b border-white/5 font-sansation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24 relative">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="text-white font-bold text-xl tracking-tight flex items-center gap-1">
                            <img src="/plz/brand/cleveritai-logotipo.svg" alt="CleverIT AI Logo" className="h-8 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden min-[1118px]:flex items-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap">
                        {/* <Link to="/platform" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">{t.plzNavbar.platform}</Link> */}
                        {/* <Link to="/cases" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">{t.plzNavbar.cases}</Link> */}
                        {/* <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">{t.plzNavbar.experts}</Link> */}
                        {/* <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">{t.plzNavbar.pricing}</Link> */}
                        {/* <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">{t.plzNavbar.about}</Link> */}
                    </div>

                    {/* Buttons + Switch */}
                    <div className="hidden min-[1118px]:flex items-center space-x-4">
                        {/* Language Switch */}
                        <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-full mr-2">
                            <button
                                onClick={() => language !== 'es' && toggleLanguage()}
                                className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${
                                    language === 'es' 
                                        ? 'bg-[#19687A] text-white shadow-lg shadow-blue-900/40' 
                                        : 'text-gray-500 hover:text-gray-300'
                                }`}
                            >
                                ES
                            </button>
                            <button
                                onClick={() => language !== 'en' && toggleLanguage()}
                                className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${
                                    language === 'en' 
                                        ? 'bg-[#19687A] text-white shadow-lg shadow-blue-900/40' 
                                        : 'text-gray-500 hover:text-gray-300'
                                }`}
                            >
                                EN
                            </button>
                        </div>

                        <Link to="/contact" className="px-5 py-2 text-center text-sm font-medium text-[#19687A] hover:text-[#17BBCD] border border-[#19687A] hover:border-[#17BBCD] rounded-xl transition-all">
                            {t.plzNavbar.contact}
                        </Link>
                        {/* <a href="https://phoenix.cleveritgroup.ai/chat/XfbwQq3kX8tVV8C1?offering=llmapps" target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-center text-sm font-medium text-white bg-[#19687A] hover:bg-[#17BBCD] rounded-xl transition-all shadow-lg shadow-blue-900/20">
                            {t.plzNavbar.quote}
                        </a> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="min-[1118px]:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="min-[1118px]:hidden bg-[#040809] border-b border-white/5">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {/* <Link to="/platform" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">{t.plzNavbar.platform}</Link>
                        <Link to="/cases" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">{t.plzNavbar.cases}</Link> */}
                        {/* <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">{t.plzNavbar.experts}</Link>
                        <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">{t.plzNavbar.pricing}</Link>
                        <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">{t.plzNavbar.about}</Link> */}
                        
                        <div className="flex items-center justify-center gap-2 py-4 border-t border-white/5 mt-4">
                            <span className="text-xs text-gray-500 font-medium">Idioma:</span>
                            <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-full">
                                <button
                                    onClick={() => language !== 'es' && toggleLanguage()}
                                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                                        language === 'es' 
                                            ? 'bg-[#19687A] text-white shadow-lg' 
                                            : 'text-gray-500'
                                    }`}
                                >
                                    ES
                                </button>
                                <button
                                    onClick={() => language !== 'en' && toggleLanguage()}
                                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                                        language === 'en' 
                                            ? 'bg-[#19687A] text-white shadow-lg' 
                                            : 'text-gray-500'
                                    }`}
                                >
                                    EN
                                </button>
                            </div>
                        </div>

                        <div className="mt-2 flex flex-col gap-2 px-3 pb-4">
                            <Link to="/contact" className="w-full text-center block px-5 py-2 text-sm font-medium text-white bg-transparent border border-white/20 rounded-lg hover:bg-white/10 transition-all">
                                {t.plzNavbar.contact}
                            </Link>
                            {/* <a href="https://phoenix.cleveritgroup.ai/chat/XfbwQq3kX8tVV8C1?offering=llmapps" target="_blank" rel="noopener noreferrer" className="w-full text-center block px-5 py-2 text-sm font-medium text-white bg-[#19687A] rounded-lg hover:bg-[#17BBCD] transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                                {t.plzNavbar.quote}
                            </a> */}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default PlzNavbar;
