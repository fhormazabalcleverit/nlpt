import { useState } from 'react';

const PlzNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-[#040809]/80 backdrop-blur-sm fixed top-0 z-50 border-b border-white/5 font-sansation">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/web/plz" className="text-white font-bold text-xl tracking-tight flex items-center gap-1">
                            <img src="/plz/brand/logotipoplz.svg" alt="Pulzen AI Logo" className="h-8 w-auto" />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Plataforma</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Soluciones</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Recursos</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Acerca de</a>
                    </div>

                    {/* Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-5 py-2 text-sm font-medium text-white bg-transparent border border-white/20 rounded-lg hover:bg-white/10 transition-all">
                            Conectarse
                        </button>
                        <button className="px-5 py-2 text-sm font-medium text-white bg-[#2563EB] rounded-lg hover:bg-[#1D4ED8] transition-all">
                            Solicitar acceso
                        </button>
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
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Plataforma</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Soluciones</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Recursos</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Acerca de</a>
                        <div className="mt-4 flex flex-col gap-2 px-3">
                            <button className="w-full px-5 py-2 text-sm font-medium text-white bg-transparent border border-white/20 rounded-lg hover:bg-white/10 transition-all">
                                Conectarse
                            </button>
                            <button className="w-full px-5 py-2 text-sm font-medium text-white bg-[#2563EB] rounded-lg hover:bg-[#1D4ED8] transition-all">
                                Solicitar acceso
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default PlzNavbar;
