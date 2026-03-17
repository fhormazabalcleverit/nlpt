import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { StaggerContainer, StaggerItem } from './PlzMotion';

const PlzHero = () => {
    const { t } = useLanguage();
    const [index, setIndex] = useState(0);
    const phrases = t.plzPhrases || [];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current + 1) % phrases.length);
        }, 1500); // changes every 1.5 seconds
        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <section
            className="relative w-full bg-[#040809] pt-32 pb-20 lg:pt-80 lg:pb-32 font-sansation overflow-hidden"
            style={{
                backgroundImage: "url('/plz/brand/background-hero.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                    <StaggerContainer>
                        <StaggerItem>
                            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-light text-white tracking-tight leading-[1.1] mb-6">
                                {t.plzHero.title}
                                <br className="hidden md:block" />
                                {t.plzHero.title2}
                                <br className="hidden md:block" />
                                <span
                                    key={index}
                                    className="inline-block animate-fade-in-up text-[#B81769]"
                                >
                                    {phrases[index]}
                                </span>
                            </h1>
                        </StaggerItem>

                        <StaggerItem>
                            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed font-light">
                                {t.plzHero.description}
                            </p>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" className="px-6 py-3 text-center text-base font-medium text-white bg-[#19687A] hover:bg-[#17BBCD] rounded-xl transition-all shadow-lg shadow-blue-900/20">
                                    {t.plzHero.ctaPrimary}
                                </Link>
                                <a href="https://phoenix.cleveritgroup.ai/?offering=llmapps" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-center text-base font-medium text-[#19687A] hover:text-[#17BBCD] border border-[#19687A] hover:border-[#17BBCD] rounded-xl transition-all">
                                    {t.plzHero.ctaSecondary}
                                </a>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
};

export default PlzHero;
