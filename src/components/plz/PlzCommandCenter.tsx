import { Terminal, Zap } from 'lucide-react';
import { FadeIn } from './PlzMotion';
import { useLanguage } from '../../context/LanguageContext';

const PlzCommandCenter = () => {
    const { t, language } = useLanguage();
    const data = t.plzCommandCenter;
    const baseUrl = import.meta.env.BASE_URL || '/';

    if (!data) return null;

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden font-sansation rounded-3xl">
            {/* Background SVG */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <img
                    src={`${baseUrl}plz/brand/background-cta.svg`}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
                <FadeIn>
                    <img
                        src={`${baseUrl}plz/brand/logotipoplz.svg`}
                        alt="Pulzen Logo"
                        className="h-10 mb-8 opacity-80 mx-auto block"
                    />
                    {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-[#17BBCD] uppercase tracking-[0.2em] mb-6">
                        <Terminal className="w-3 h-3" />
                        Dashboard
                    </div> */}
                    <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
                        {data.title}
                    </h2>
                    <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                        {data.subtitle}
                    </p>
                    <a
                        href="https://pulzen.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-4 bg-[#19687A] rounded-xl font-bold text-white transition-all hover:bg-[#17BBCD] active:scale-95 shadow-xl shadow-[#19687A]/20 inline-flex items-center gap-3 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        {language === 'es' ? 'Conoce a Pulze AI' : 'Discover Pulze AI'}
                        <Zap className="w-5 h-5 fill" />
                    </a>
                </FadeIn>
            </div>
        </section>
    );
};

export default PlzCommandCenter;
