import { StaggerContainer, StaggerItem } from './PlzMotion';
import { useLanguage } from '../../context/LanguageContext';

const PlzAboutHero = () => {
    const { t } = useLanguage();

    return (
        <section className="font-sansation text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="flex flex-col items-center">
                {/* Badge */}
                <StaggerItem>
                    <div className="mb-8 inline-flex items-center px-5 py-1.5 rounded-full border border-gray-700 bg-black/40 backdrop-blur-sm text-sm font-light text-gray-300 shadow-sm">
                        {t.plzAbout.hero.badge}
                    </div>
                </StaggerItem>

                {/* Title */}
                <StaggerItem>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.2] mb-8 text-white max-w-4xl">
                        {t.plzAbout.hero.title}
                    </h1>
                </StaggerItem>

                {/* Description */}
                <StaggerItem>
                    <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed max-w-3xl mb-12">
                        {t.plzAbout.hero.description}
                    </p>
                </StaggerItem>
            </StaggerContainer>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Placeholder images */}
                <div className="rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-96 relative group">
                    <img src={`${import.meta.env.BASE_URL}plz/about/01.png`} alt="Team collaborating" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-96 relative group">
                    <img src={`${import.meta.env.BASE_URL}plz/about/02.png`} alt="Networking" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-96 relative group">
                    <img src={`${import.meta.env.BASE_URL}plz/about/03.png`} alt="Presentation" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                </div>
            </div>

            {/* Reflection Section */}
            <div className="mt-28 mb-16 max-w-4xl mx-auto flex flex-col items-center px-4">
                <blockquote className="text-lg lg:text-xl font-light text-white leading-[1.2] mb-10 tracking-tight">
                    {t.plzAbout.hero.quote}
                </blockquote>

                <div className="flex flex-col items-center gap-5">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#17BBCD]/20 blur-2xl rounded-full"></div>
                        <img
                            src={`${import.meta.env.BASE_URL}plz/about/carlosgallado.png`}
                            alt="Carlos Gallardo"
                            className="w-20 h-20 rounded-full object-cover relative z-10 border border-white/10"
                        />
                    </div>
                    <div className="text-center">
                        <h4 className="text-white font-medium text-xl mb-1">Carlos Gallardo</h4>
                        <p className="text-gray-400 text-sm md:text-base max-w-xs md:max-w-md">
                            {t.team.member.position}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 border-t border-white/5 pt-12">
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-medium text-white mb-2">{t.plzAbout.hero.stats.team.value}</span>
                    <span className="text-gray-400">{t.plzAbout.hero.stats.team.label}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-medium text-white mb-2">{t.plzAbout.hero.stats.countries.value}</span>
                    <span className="text-gray-400">{t.plzAbout.hero.stats.countries.label}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-medium text-white mb-2">{t.plzAbout.hero.stats.clients.value}</span>
                    <span className="text-gray-400">{t.plzAbout.hero.stats.clients.label}</span>
                </div>
            </div>
        </section>
    );
};

export default PlzAboutHero;
