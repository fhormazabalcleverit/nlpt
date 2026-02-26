import { useState, useEffect } from 'react';

const phrases = [
    "tu negocio.",
    "tus servicios.",
    "tu rubro.",
    "tu emprendimiento.",
    "lo que tú necesites."
];

const PlzHero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((current) => (current + 1) % phrases.length);
        }, 3000); // changes every 3 seconds
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative w-full bg-[#040809] pt-32 pb-20 lg:pt-80 lg:pb-32 font-sansation overflow-hidden">
            {/* Subtle blue gradient on the left side similar to screenshot */}
            <div className="absolute -top-1/4 -left-64 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-light text-white tracking-tight leading-[1.1] mb-6">
                        Pulzen AI — Inteligencia que
                        <br className="hidden md:block" />
                        escala el rendimiento de
                        <br className="hidden md:block" />
                        <span
                            key={index}
                            className="inline-block animate-fade-in-up text-[#0e52e0]"
                        >
                            {phrases[index]}
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed font-light">
                        LLM capaz de medir, optimizar y automatizar operaciones en cualquier industria: talento TI, logística, manufactura, servicios, lo que tu negocio necesite.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-6 py-3 text-base font-medium text-white bg-[#0e52e0] hover:bg-[#1d4ed8] rounded-xl transition-all shadow-lg shadow-blue-900/20">
                            Comience con su proceso
                        </button>
                        <button className="px-6 py-3 text-base font-medium text-gray-200 bg-[#0a0f12] border border-gray-800 hover:border-gray-600 hover:bg-white/5 rounded-xl transition-all">
                            Vea la demostración de 2 minutos
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlzHero;
