import { useState, useEffect, useRef } from 'react';

const benefits = [
    "Mejora continua",
    "Automatización",
    "Reducción tiempos",
    "Identificación de riesgos",
    "Optimización de costos",
    "Insights accionables",
];

const PlzGraphic = () => {
    const [offset, setOffset] = useState(0);

    const [activeCard, setActiveCard] = useState(0);

    useEffect(() => {
        let animationFrameId: number;
        let start = Date.now();

        const animate = () => {
            const now = Date.now();
            const elapsed = (now - start) / 1000;
            // 50px per second, but going backwards
            // Add 12000 to ensure we don't go into negative numbers modulo logic issues,
            // then subtract the exact elapsed movement, and modulo it correctly.
            setOffset((12000 + 1200 - ((elapsed * 50) % 1200)) % 1200);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Carousel logic
    const carouselRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const timer = setInterval(() => {
            if (carouselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

                // If we reached the end (with a small 10px buffer due to fractional pixels)
                if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
                    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Scroll by the width of one card + its gap (24px)
                    const card = carouselRef.current.children[0] as HTMLElement;
                    if (card) {
                        const cardWidth = card.clientWidth;
                        carouselRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
                    }
                }
            }
        }, 4000); // 4 seconds
        return () => clearInterval(timer);
    }, []);

    // Function to calculate Y based on X exactly for our curve
    // Continuously slopes upwards across the entire width
    const getCurveY = (x: number) => {
        const normalized = Math.max(0, (x + 150) / 1250);
        return 390 - 350 * Math.pow(normalized, 1.8);
    };

    const pathData = `M ${Array.from({ length: 50 }, (_, i) => {
        const x = (i / 49) * 1000;
        return `${x},${getCurveY(x)}`;
    }).join(" L ")}`;

    return (
        <section className="relative w-full bg-[#040809] py-24 font-sansation">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Headers */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="px-4 py-1.5 border border-white/10 rounded-full text-xs text-gray-400 mb-8 inline-block tracking-widest uppercase">
                        Ventajas de tu IA
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight max-w-3xl mb-6">
                        Escala tu operación con un agente inteligente y adaptativo
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                        Sea cual sea tu industria, Pulzen AI se integra y evoluciona contigo.
                    </p>
                </div>

                {/* Graphic Container */}
                <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#000000] border border-white/5 rounded-3xl overflow-hidden mb-6 p-6 md:p-12 flex flex-col justify-between">
                    {/* Chart Line with dots */}
                    <div className="absolute inset-0 z-0 pointer-events-none flex items-end ml-10 mb-10">
                        <svg viewBox="0 0 1000 400" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#2552b4ff" />
                                    <stop offset="50%" stopColor="#2552b4ff" />
                                    <stop offset="100%" stopColor="#2552b4ff" />
                                </linearGradient>
                                <linearGradient id="bgLineGrad" x1="0" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="60%" stopColor="rgba(255, 255, 255, 0.9)" />
                                    <stop offset="70%" stopColor="rgba(255, 255, 255, 0.7)" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>

                            {/* Animated Background Vertical Lines */}
                            {Array.from({ length: 12 }).map((_, i) => {
                                const lineX = (i * 100 + offset) % 1200;
                                const renderLineX = lineX - 100;

                                return (
                                    <line
                                        key={`bg-line-${i}`}
                                        x1={renderLineX} y1="0" x2={renderLineX} y2="400"
                                        stroke="url(#bgLineGrad)"
                                        strokeWidth="1"
                                        opacity="0.3"
                                        strokeDasharray="4 4"
                                    />
                                );
                            })}

                            <path d={pathData} fill="none" stroke="url(#lineGrad)" strokeWidth="6" strokeLinecap="round" />

                            {/* Animated Points on the curve */}
                            {benefits.map((_, i) => {
                                const x = (i * 200 + offset) % 1200;
                                const renderX = x - 100; // -100 to 1100
                                const cy = getCurveY(renderX);

                                let opacity = 1;
                                if (renderX < 100) opacity = Math.max(0, renderX / 100);
                                if (renderX > 800) opacity = Math.max(0, (1000 - renderX) / 200);

                                const distanceToCenter = Math.abs(renderX - 500);
                                const highlightRatio = Math.max(0, 1 - distanceToCenter / 150);

                                return (
                                    <g key={`dot-${i}`} opacity={opacity}>
                                        <circle
                                            cx={renderX}
                                            cy={cy}
                                            r="12"
                                            fill="#040809"
                                            stroke="#7da2f1ff"
                                            strokeWidth="6"
                                        />
                                        <circle
                                            cx={renderX}
                                            cy={cy}
                                            r="12"
                                            fill="transparent"
                                            stroke="#ffffff"
                                            strokeWidth="6"
                                            opacity={highlightRatio}
                                        />
                                    </g>
                                );
                            })}
                        </svg>
                    </div>

                    {/* Content inside graphic */}
                    <div className="relative z-10 w-full md:w-1/2 flex-none translate-y-2 md:translate-y-10 pointer-events-none">
                        <h3 className="text-2xl md:text-3xl text-white mb-2 tracking-tight">Evolución operacional</h3>
                        <h3 className="text-2xl md:text-3xl text-gray-300 font-light mb-8 tracking-tight">para la escalabilidad de cada servicio.</h3>
                        <button className="px-5 py-2 text-sm font-medium text-white bg-transparent border border-white/20 rounded-lg transition-colors pointer-events-auto hover:bg-white/5">
                            Conocer más
                        </button>
                    </div>

                    {/* Animated Labels */}
                    <div className="absolute inset-0 z-10 hidden md:block pointer-events-none ml-10 mb-10">
                        {benefits.map((benefit, i) => {
                            const x = (i * 200 + offset) % 1200;
                            const renderX = x - 100;
                            const cy = getCurveY(renderX);

                            let opacity = 1;
                            if (renderX < 100) opacity = Math.max(0, renderX / 100);
                            if (renderX > 800) opacity = Math.max(0, (1000 - renderX) / 200);

                            if (opacity <= 0.02) return null;

                            const distanceToCenter = Math.abs(renderX - 500);
                            const highlightRatio = Math.max(0, 1 - distanceToCenter / 150);

                            const leftPercent = (renderX / 1000) * 100;
                            const topPercent = (cy / 400) * 100;

                            return (
                                <div
                                    key={`label-${i}`}
                                    className="absolute transform -translate-x-1/2 -translate-y-full pb-4 md:pb-6 transition-none pointer-events-none"
                                    style={{
                                        left: `${leftPercent}%`,
                                        top: `${topPercent}%`,
                                        opacity: opacity
                                    }}
                                >
                                    <div
                                        className="px-4 py-2 backdrop-blur-md rounded-full text-xs md:text-sm shadow-xl whitespace-nowrap whitespace-pre"
                                        style={{
                                            backgroundColor: highlightRatio > 0 ? `rgba(37, 82, 180, ${highlightRatio * 0.2 + 0.05})` : 'rgba(255, 255, 255, 0.05)',
                                            borderColor: highlightRatio > 0 ? `rgba(37, 82, 180, ${highlightRatio * 0.8 + 0.1})` : 'rgba(255, 255, 255, 0.1)',
                                            borderWidth: '1px',
                                            borderStyle: 'solid',
                                            color: highlightRatio > 0 ? '#ffffff' : '#d1d5db',
                                            boxShadow: highlightRatio > 0 ? `0 10px 15px -3px rgba(37, 82, 180, ${highlightRatio * 0.4})` : '0 10px 15px -3px rgba(59, 130, 246, 0.1)'
                                        }}
                                    >
                                        {benefit}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Six Columns Data representation Carousel */}
                <div className="relative w-full">
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .hide-scroll::-webkit-scrollbar { display: none; }
                        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
                    `}} />
                    <div
                        ref={carouselRef}
                        onScroll={() => {
                            if (carouselRef.current) {
                                const cardWidth = carouselRef.current.children[0]?.clientWidth || 0;
                                if (cardWidth > 0) {
                                    const index = Math.round(carouselRef.current.scrollLeft / (cardWidth + 24));
                                    setActiveCard(Math.min(index, 5));
                                }
                            }
                        }}
                        className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scroll"
                    >
                        {[
                            {
                                tag: 'Evolución',
                                title: 'Mejora continua basada en datos',
                                desc: 'Tu capacidad aumenta iterativamente a partir del autoaprendizaje sobre el uso y resultados previos.'
                            },
                            {
                                tag: 'Eficiencia',
                                title: 'Automatización de análisis complejos',
                                desc: 'Procesa grandes volúmenes de información simultáneamente para resolver problemas profundos sin fatiga operativa.'
                            },
                            {
                                tag: 'Velocidad',
                                title: 'Reducción de tiempos de decisión',
                                desc: 'Optimiza el flujo de información y entrega respuestas críticas listas para acelerar la acción.'
                            },
                            {
                                tag: 'Seguridad',
                                title: 'Identificación temprana de riesgos',
                                desc: 'Detecta anomalías y patrones inusuales mucho antes de que se conviertan en incidentes para tu negocio.'
                            },
                            {
                                tag: 'Rentabilidad',
                                title: 'Optimización de recursos y costos',
                                desc: 'Maximiza el rendimiento de tus activos operacionales y disminuye el gasto innecesario.'
                            },
                            {
                                tag: 'Evaluar Retorno',
                                title: 'Insights accionables en tiempo real',
                                desc: 'Identificación temprana de oportunidades y patrones para tomar decisiones ágiles, sin retrasar a tus equipos.'
                            }
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="snap-start flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] bg-[#1C2126]/40 border border-white/5 p-8 rounded-xl flex flex-col justify-start hover:bg-white/[0.02] transition-colors duration-300"
                            >
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{card.tag}</h4>
                                <h3 className="text-xl text-white font-medium mb-4 leading-snug">{card.title}</h3>
                                <p className="text-sm text-gray-400 font-light leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center items-center gap-2 mt-4">
                        {[0, 1, 2, 3].map((idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    if (carouselRef.current) {
                                        const cardWidth = carouselRef.current.children[0]?.clientWidth || 0;
                                        carouselRef.current.scrollTo({ left: idx * (cardWidth + 24), behavior: 'smooth' });
                                    }
                                }}
                                className={`transition-all duration-300 ${activeCard === idx ? 'w-8 h-2 bg-white rounded-full' : 'w-2.5 h-2.5 bg-gray-600 rounded-full hover:bg-gray-400'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PlzGraphic;
