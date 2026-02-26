import { Github, Twitter, Linkedin } from 'lucide-react';

const PlzFooter = () => {
    return (
        <footer className="bg-[#040809] border-t border-white/5 font-sansation py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">

                    {/* Logo & Description */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <a href="/web/plz" className="text-white font-bold text-xl tracking-tight flex items-center gap-1">
                            <img src="/plz/brand/logotipoplz.svg" alt="Pulzen AI Logo" className="h-8 w-auto" />
                        </a>
                        <p className="text-gray-400 text-sm font-light text-center md:text-left max-w-sm leading-relaxed">
                            Inteligencia que escala el rendimiento de tu negocio. Transforma datos en ventaja competitiva y potencia tus operaciones de forma autónoma.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 bg-[#0a0f12] border border-white/5">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 bg-[#0a0f12] border border-white/5">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 bg-[#0a0f12] border border-white/5">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Links */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Pulzen AI. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-300 transition-colors">Aviso de Privacidad</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Términos del Servicio</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PlzFooter;
