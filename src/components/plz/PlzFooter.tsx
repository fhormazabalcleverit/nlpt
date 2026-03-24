import { Linkedin, Instagram, Youtube } from 'lucide-react';

const TiktokIcon = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className}
    >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.14 2.1-.2 4.2-.32 6.3-.1 1.72-.41 3.48-1.44 4.88-1.57 2.16-4.19 3.25-6.84 2.97-2.49-.23-4.73-1.84-5.71-4.14-1.12-2.58-.6-5.83 1.28-7.85 1.5-1.63 3.86-2.31 6-1.74V13.1c-1.39-.46-3.05-.18-4.04.9-.84.92-1.02 2.37-.58 3.51.52 1.34 1.94 2.21 3.37 2.13 1.57-.1 2.92-1.35 3.12-2.91.13-2.54.12-5.07.12-7.61V0z" />
    </svg>
);
import { Link } from 'react-router-dom';
import { FadeIn } from './PlzMotion';
import { useLanguage } from '../../context/LanguageContext';

const PlzFooter = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-[#040809] border-t border-white/5 font-sansation py-12">
            <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">

                    {/* Logo & Description */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Link to="/" className="text-white font-bold text-xl tracking-tight flex items-center gap-1">
                            <img src={`${import.meta.env.BASE_URL}plz/brand/cleveritai-logotipo.svg`} alt="CleverIT AI Logo" className="h-8 w-auto" />
                        </Link>
                        <p className="text-gray-400 text-sm font-light text-center md:text-left max-w-sm leading-relaxed">
                            {t.plzFooter.description}
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href={t.plzFooter.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 bg-[#0a0f12] border border-white/5" title="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={t.plzFooter.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 bg-[#0a0f12] border border-white/5" title="Instagram">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href={t.plzFooter.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 bg-[#0a0f12] border border-white/5" title="YouTube">
                            <Youtube className="w-5 h-5" />
                        </a>
                        <a href={t.plzFooter.tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 bg-[#0a0f12] border border-white/5" title="TikTok">
                            <TiktokIcon className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Links */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-gray-500">
                    <p>&copy; {new Date().getFullYear()} CleverIT AI. {t.plzFooter.rights}</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-gray-300 transition-colors">{t.plzFooter.privacy}</Link>
                        <Link to="/terms" className="hover:text-gray-300 transition-colors">{t.plzFooter.terms}</Link>
                        <a href="#" className="hover:text-gray-300 transition-colors">{t.plzFooter.cookies}</a>
                    </div>
                </div>
            </FadeIn>
        </footer>
    );
};

export default PlzFooter;
