import { useState } from 'react';
import { Link } from 'react-router-dom';

const PlzNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-gradient-to-b from-[#040809] to-transparent backdrop-blur-sm fixed top-0 z-50 border-b border-white/5 font-sansation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24 relative">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/web/plz" className="text-white font-bold text-xl tracking-tight flex items-center gap-1">
                            <img src="/plz/brand/logotipoplz.svg" alt="Pulzen AI Logo" className="h-8 w-auto" />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link to="/web/plz-platform" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Plataforma</Link>
                        <Link to="/web/plz-cases" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Casos aplicados</Link>
                        <Link to="/web/plz-about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Sobre nosotros</Link>
                    </div>

                    {/* Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/web/plz-contact" className="px-5 py-2 text-center text-sm font-medium text-[#19687A] hover:text-[#17BBCD] border border-[#19687A] hover:border-[#17BBCD] rounded-xl transition-all">
                            Contacto
                        </Link>
                        <Link to="/web/plz-quote" className="px-5 py-2 text-center text-sm font-medium text-white bg-[#19687A] hover:bg-[#17BBCD] rounded-xl transition-all shadow-lg shadow-blue-900/20">
                            Quiero cotizar
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
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
                <div className="md:hidden bg-[#040809] border-b border-white/5">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/web/plz-platform" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Plataforma</Link>
                        <Link to="/web/plz-cases" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Casos aplicados</Link>
                        <Link to="/web/plz-about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Sobre nosotros</Link>
                        <div className="mt-4 flex flex-col gap-2 px-3">
                            <Link to="/web/plz-contact" className="w-full text-center block px-5 py-2 text-sm font-medium text-white bg-transparent border border-white/20 rounded-lg hover:bg-white/10 transition-all">
                                Contacto
                            </Link>
                            <Link to="/web/plz-quote" className="w-full text-center block px-5 py-2 text-sm font-medium text-white bg-[#2563EB] rounded-lg hover:bg-[#1D4ED8] transition-all">
                                Quiero cotizar
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default PlzNavbar;
