import React from 'react';
import { FadeIn } from './PlzMotion';

interface PlzTechStackCardProps {
    isArchitect: boolean;
    language: string;
}

const PlzTechStackCard: React.FC<PlzTechStackCardProps> = ({ isArchitect, language }) => {
    const accentColor = isArchitect ? '#9333ea' : '#19687A';

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
                <FadeIn>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center p-1.5" style={{ borderColor: accentColor }}>
                            <div className="w-full h-full rounded-full" style={{ backgroundColor: accentColor }} />
                        </div>
                        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mt-1">
                            Tech Stack
                        </h2>
                    </div>
                </FadeIn>
            </div>
            
            <div className="lg:col-span-8">
                <FadeIn delay={0.2}>
                    <div className="bg-[#050505]/80 backdrop-blur-3xl border border-white/10 rounded-[1.5rem] p-8 lg:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group w-full">
                        {/* Inner Glow */}
                        <div className={`absolute -top-24 -right-24 w-64 h-64 bg-${isArchitect ? 'purple-600' : '[#19687A]'}/10 blur-[80px] rounded-full transition-transform group-hover:scale-125 duration-700`} />

                        <div className="flex flex-wrap items-center gap-6 md:gap-12 mb-10">
                            <div className="flex items-center">
                                <img src={`${import.meta.env.BASE_URL}plz/profiles/github.svg`} alt="GitHub Copilot" className="h-6 md:h-8 object-contain" />
                            </div>
                            <div className="hidden md:block w-[1px] h-12 bg-white/10" />
                            <div className="flex items-center">
                                <img src={`${import.meta.env.BASE_URL}plz/profiles/claude.svg`} alt="Claude AI" className="h-6 md:h-8 object-contain" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                                {isArchitect
                                    ? (language === 'es' 
                                        ? 'Capacidad de análisis de sistemas complejos acelerada por IA, permitiendo la revisión de arquitecturas y la toma de decisiones estratégicas en tiempo récord.' 
                                        : 'AI-accelerated complex system analysis capability, enabling architectural review and strategic decision-making in record time.')
                                    : (language === 'es' 
                                        ? 'Ciclos de desarrollo hiper-acelerados. Copilot asistiendo directamente en el IDE y Claude actuando como el compañero perfecto para el debugging profundo, refactorización y escritura de código complejo.' 
                                        : 'Hyper-accelerated development cycles. Copilot assisting directly in the IDE and Claude acting as the perfect companion for deep debugging, refactoring, and writing complex code.')
                                }
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default PlzTechStackCard;
