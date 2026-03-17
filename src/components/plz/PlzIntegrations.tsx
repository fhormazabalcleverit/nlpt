import { useState, useEffect } from 'react';
import { MoreVertical, ThumbsUp, ThumbsDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './PlzMotion';
import { useLanguage } from '../../context/LanguageContext';

const PlzIntegrations = () => {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);

    const integrations = [
        {
            id: 'sharepoint',
            title: t.plzIntegrations.items.sharepoint.title,
            desc: t.plzIntegrations.items.sharepoint.desc,
            popupText: t.plzIntegrations.items.sharepoint.popupText
        },
        {
            id: 'db',
            title: t.plzIntegrations.items.db.title,
            desc: t.plzIntegrations.items.db.desc,
            popupText: t.plzIntegrations.items.db.popupText
        },
        {
            id: 'files',
            title: t.plzIntegrations.items.files.title,
            desc: t.plzIntegrations.items.files.desc,
            popupText: t.plzIntegrations.items.files.popupText
        },
        {
            id: 'api',
            title: t.plzIntegrations.items.api.title,
            desc: t.plzIntegrations.items.api.desc,
            popupText: t.plzIntegrations.items.api.popupText
        },
        {
            id: 'mcp',
            title: t.plzIntegrations.items.mcp.title,
            desc: t.plzIntegrations.items.mcp.desc,
            popupText: t.plzIntegrations.items.mcp.popupText
        }
    ];

    // Auto-cycle through integrations every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            // Start "Procesado" state 800ms before switching index
            const timer = setTimeout(() => {
                setIsProcessing(true);
            }, 1200);

            // Switch index at 3000ms
            setTimeout(() => {
                setActiveIndex((current: number) => (current + 1) % integrations.length);
                setIsProcessing(false);
            }, 3000);

            return () => clearTimeout(timer);
        }, 3000);

        return () => clearInterval(interval);
    }, [integrations.length]);


    return (
        <section className="relative w-full bg-[#040809] py-24 font-sansation light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Headers */}
                <StaggerContainer className="text-center mb-16 flex flex-col items-center">
                    <StaggerItem>
                        <div className="px-4 py-1.5 border border-white/10 rounded-full text-xs text-gray-400 mb-6 inline-block tracking-widest uppercase bg-white/5">
                            {t.plzIntegrations.badge}
                        </div>
                    </StaggerItem>
                    <StaggerItem>
                        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight max-w-4xl mb-6">
                            {t.plzIntegrations.title}
                        </h2>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
                            {t.plzIntegrations.description}
                        </p>
                    </StaggerItem>
                </StaggerContainer>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-cente lg:h-[520px]">

                    {/* Right Column: Aurora Graphic Display & Indicators */}
                    <FadeIn delay={0.2} className="flex flex-col gap-6 w-full order-1 lg:order-2">
                        <div className="w-full relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/11] flex items-center justify-center p-6 shadow-2xl">

                            {/* Dynamic Gradient Background (Aurora effect) with Cross-fade */}
                            <div className="absolute inset-0 bg-[#560F9D]/40"></div>
                            <AnimatePresence>
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.6 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 2, ease: "linear" }}
                                    className="absolute inset-0"
                                    style={{
                                        background: `radial-gradient(circle at ${50 + (activeIndex % 2) * 20}% ${40 + (activeIndex % 3) * 10}%, #2C8AA0 0%, transparent 60%),
                                                    radial-gradient(circle at ${30 + (activeIndex % 3) * 20}% ${70 - (activeIndex % 2) * 20}%, #17BBCD 0%, transparent 50%),
                                                    radial-gradient(circle at ${80 - (activeIndex % 2) * 30}% ${20 + (activeIndex % 3) * 15}%, #560F9D 0%, transparent 40%)`
                                    }}
                                />
                            </AnimatePresence>

                            {/* Stars/Dust overlay */}
                            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ddd, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0))', backgroundSize: '200px 200px' }}></div>

                            {/* Floating Notification Card Stack */}
                            <div className="relative z-10 w-full max-w-sm h-48 flex items-center justify-center">
                                <AnimatePresence mode='popLayout'>
                                    {[2, 1, 0].map((offset) => {
                                        const index = (activeIndex + offset) % integrations.length;
                                        const item = integrations[index];
                                        const isFront = offset === 0;

                                        return (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                                animate={{
                                                    opacity: isFront ? 1 : 1 - offset * 0.4,
                                                    y: -offset * 20,
                                                    scale: 1 - offset * 0.05,
                                                    zIndex: 10 - offset,
                                                    filter: isFront ? 'blur(0px)' : `blur(${offset * 2}px)`
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: 100, // Falling effect
                                                    scale: 0.9,
                                                    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 260,
                                                    damping: 20
                                                }}
                                                className="absolute w-full bg-[#11161a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
                                            >
                                                <p className="text-sm font-light text-white mb-6 leading-relaxed">
                                                    {item.popupText}
                                                </p>
                                                <div className="flex items-center justify-between text-xs font-medium">
                                                    <motion.div 
                                                        animate={{
                                                            color: isFront && isProcessing ? '#34d399' : '#fbbf24', // emerald-400 : amber-400
                                                            backgroundColor: isFront && isProcessing ? 'rgba(52, 211, 153, 0.1)' : 'rgba(251, 191, 36, 0.1)',
                                                            borderColor: isFront && isProcessing ? 'rgba(52, 211, 153, 0.2)' : 'rgba(251, 191, 36, 0.2)',
                                                        }}
                                                        transition={{ duration: 0.8 }}
                                                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium"
                                                    >
                                                        <AnimatePresence mode="wait">
                                                            {isFront && isProcessing ? (
                                                                <motion.div
                                                                    key="check"
                                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                                    animate={{ opacity: 1, scale: 1 }}
                                                                    exit={{ opacity: 0, scale: 0.5 }}
                                                                >
                                                                    <Check className="w-3 h-3" />
                                                                </motion.div>
                                                            ) : (
                                                                <motion.div
                                                                    key="pending"
                                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                                    animate={{ opacity: 1, scale: 1 }}
                                                                    exit={{ opacity: 0, scale: 0.5 }}
                                                                    className="w-4 h-4 rounded border border-amber-400/40 flex items-center justify-center bg-transparent"
                                                                />
                                                            )}
                                                        </AnimatePresence>
                                                        <motion.span
                                                            key={isFront && isProcessing ? 'proc' : 'pend'}
                                                            initial={{ opacity: 0, x: -5 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.1 }}
                                                        >
                                                            {isFront && isProcessing ? t.plzIntegrations.statusProcessed : t.plzIntegrations.statusPending}
                                                        </motion.span>
                                                    </motion.div>

                                                    {index % 3 === 0 ? (
                                                        <div className="flex items-center gap-3 text-gray-400">
                                                            <ThumbsUp className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                                                            <ThumbsDown className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                                                            <div className="w-px h-3 bg-white/10 mx-1"></div>
                                                            <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded text-gray-500">ID-{item.id.toUpperCase().slice(0, 4)}</span>
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center gap-3 text-gray-500">
                                                            <span>ID-0E48</span>
                                                            <MoreVertical className="w-4 h-4 cursor-pointer hover:text-gray-300" />
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </div>

                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex justify-center items-center gap-2">
                            {integrations.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`transition-all duration-300 ${activeIndex === idx ? 'w-8 h-2 bg-white rounded-full' : 'w-2.5 h-2.5 bg-gray-600 rounded-full hover:bg-gray-400'}`}
                                    aria-label={`Go to integration slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </FadeIn>

                    {/* Left Column: Accordion List */}
                    <StaggerContainer className="flex flex-col w-full order-2 lg:order-1" staggerChildren={0.1}>
                        {integrations.map((item, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <StaggerItem key={item.id}>
                                    <div
                                        className={`border-b border-white/10 cursor-pointer overflow-hidden transition-all duration-500`}
                                        onClick={() => setActiveIndex(idx)}
                                    >
                                        <div className="py-6 flex flex-col justify-center">
                                            <h3 className={`text-xl font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                                                {item.title}
                                            </h3>
                                            <div
                                                className={`transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
                                            >
                                                <p className="text-gray-400 font-light leading-relaxed pr-4">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>

                </div>

            </div>
        </section>
    );
};

export default PlzIntegrations;
