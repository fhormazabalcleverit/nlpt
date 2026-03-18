import { useState, useEffect, useRef } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './PlzMotion';
import { useLanguage } from '../../context/LanguageContext';

const PlzGraphic = () => {
    const { t } = useLanguage();
    const [offset, setOffset] = useState(0);
    const [activeCard, setActiveCard] = useState(0);

    const benefits = t.plzGraphic.benefits;

    useEffect(() => {
        let animationFrameId: number;
        let start = Date.now();

        const animate = () => {
            const now = Date.now();
            const elapsed = (now - start) / 1000;
            setOffset((12000 + 1200 - ((elapsed * 50) % 1200)) % 1200);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const carouselRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const timer = setInterval(() => {
            if (carouselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
                if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
                    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    const card = carouselRef.current.children[0] as HTMLElement;
                    if (card) {
                        const cardWidth = card.clientWidth;
                        carouselRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
                    }
                }
            }
        }, 4000);
        return () => clearInterval(timer);
    }, []);

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
                <StaggerContainer className="text-center mb-16 flex flex-col items-center">
                    <StaggerItem>
                        <div className="px-4 py-1.5 border border-white/10 rounded-full text-xs text-gray-400 mb-8 inline-block tracking-widest uppercase">
                            {t.plzGraphic.badge}
                        </div>
                    </StaggerItem>
                    <StaggerItem>
                        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight max-w-3xl mb-6">
                            {t.plzGraphic.title}
                        </h2>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                            {t.plzGraphic.description}
                        </p>
                    </StaggerItem>
                </StaggerContainer>

                {/* Graphic Container */}
                <FadeIn delay={0.2} blur={true}>
                    <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#000000] border border-white/5 rounded-3xl overflow-hidden mb-6 p-6 md:p-12 flex flex-col justify-between">
                        {/* Chart Line with dots */}
                        <div className="absolute inset-0 z-0 pointer-events-none flex items-end ml-10 mb-10">
                            <svg viewBox="0 0 1000 400" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#000000" />
                                        <stop offset="25%" stopColor="#B81769" />
                                        <stop offset="75%" stopColor="#B81769" />
                                        <stop offset="100%" stopColor="#200011" />
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
                                {benefits.map((_: any, i: number) => {
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
                                                stroke="#B81769"
                                                strokeWidth="6"
                                            />
                                            <circle
                                                cx={renderX}
                                                cy={cy}
                                                r="12"
                                                fill="transparent"
                                                stroke="#560F9D"
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
                            <h3 className="text-2xl md:text-3xl text-white mb-2 tracking-tight">{t.plzGraphic.evolutionTitle}</h3>
                            <h3 className="text-2xl md:text-3xl text-gray-300 font-light mb-8 tracking-tight">{t.plzGraphic.evolutionSubtitle}</h3>
                            {/* <button className="px-5 py-2 text-sm font-medium text-[#19687A] hover:text-[#17BBCD] border border-[#19687A] hover:border-[#17BBCD] rounded-xl transition-all  pointer-events-auto">
                                {t.plzGraphic.button}
                            </button> */}
                        </div>

                        {/* Animated Labels */}
                        <div className="absolute inset-0 z-10 hidden md:block pointer-events-none ml-10 mb-10">
                            {benefits.map((benefit: string, i: number) => {
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
                                                backgroundColor: highlightRatio > 0 ? `rgba(86, 15, 157, ${highlightRatio * 0.2 + 0.05})` : 'rgba(255, 255, 255, 0.05)',
                                                borderColor: highlightRatio > 0 ? `rgba(86, 15, 157, ${highlightRatio * 0.8 + 0.1})` : 'rgba(255, 255, 255, 0.1)',
                                                borderWidth: '1px',
                                                borderStyle: 'solid',
                                                color: highlightRatio > 0 ? '#ffffff' : '#d1d5db',
                                                boxShadow: highlightRatio > 0 ? `0 10px 15px -3px rgba(86, 15, 157, ${highlightRatio * 0.4})` : '0 10px 15px -3px rgba(86, 15, 157, 0.1)'
                                            }}
                                        >
                                            {benefit}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </FadeIn>

                {/* Bottom Six Columns Data representation Carousel */}
                <StaggerContainer
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
                    className="relative w-full flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scroll"
                    staggerChildren={0.05}
                >
                    {t.plzGraphic.cards.map((card: any, i: number) => (
                        <StaggerItem key={i}>
                            <div
                                className="snap-start flex-none w-[300px] md:w-[calc(50vw-48px)] lg:w-[350px] bg-[#1C2126]/40 border border-white/5 p-8 rounded-xl flex flex-col justify-start hover:bg-white/[0.02] transition-colors duration-300 h-full"
                            >
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{card.tag}</h4>
                                <h3 className="text-xl text-white font-medium mb-4 leading-snug">{card.title}</h3>
                                <p className="text-sm text-gray-400 font-light leading-relaxed">
                                    {card.desc}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Carousel Indicators */}
                <FadeIn delay={0.5}>
                    <div className="flex justify-center items-center gap-2 mt-4">
                        {[0, 1, 2, 3, 4, 5].map((idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    if (carouselRef.current) {
                                        const card = carouselRef.current.children[0] as HTMLElement;
                                        const cardWidth = card?.clientWidth || 0;
                                        carouselRef.current.scrollTo({ left: idx * (cardWidth + 24), behavior: 'smooth' });
                                    }
                                }}
                                className={`transition-all duration-300 ${activeCard === idx ? 'w-8 h-2 bg-white rounded-full' : 'w-2.5 h-2.5 bg-gray-600 rounded-full hover:bg-gray-400'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};

export default PlzGraphic;
