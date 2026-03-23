import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';
import DynamicSEO from '../components/DynamicSEO';
import PlzBentoGrid from '../components/plz/PlzBentoGrid';
import PlzPlatformFeatures from '../components/plz/PlzPlatformFeatures';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/plz/PlzMotion';
import { useLanguage } from '../context/LanguageContext';

const WebPlzPlatformPage = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

    return (
        <div className="min-h-screen bg-[#040809] flex flex-col font-sansation text-white">
            <DynamicSEO
                title={`${t.plzNavbar.platform} | CleverIT AI`}
                description={t.plzPlatform.description}
                url={window.location.href}
            />
            <PlzNavbar />

            <main className="flex-grow pt-32 pb-20 lg:pt-40 lg:pb-32 relative">

                {/* Background wrapper to prevent overflow without breaking sticky children */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    {/* Colored Gradient Circles (Blobs) from Home */}
                    <div className="absolute -top-[15%] -left-[10%] w-[1200px] h-[1200px] bg-blue-900/40 rounded-full blur-[230px]"></div>
                    <div className="absolute -top-[10%] -right-[20%] w-[1000px] h-[1000px] bg-blue-900/70 rounded-full blur-[300px]"></div>

                    {/* New blobs behind the platform image */}
                    <div className="absolute top-[500px] left-[30%] w-[800px] h-[800px] bg-purple-900/30 rounded-full blur-[250px]"></div>
                    <div className="absolute top-[500px] left-[80%] w-[700px] h-[700px] bg-[#19687A]/20 rounded-full blur-[220px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

                    <StaggerContainer className="flex flex-col items-center">
                        {/* Badge */}
                        <StaggerItem>
                            <div className="mb-8 inline-flex items-center px-5 py-1.5 rounded-full border border-gray-700 bg-black/40 backdrop-blur-sm text-sm font-light text-gray-300 shadow-sm">
                                {t.plzPlatform.badge}
                            </div>
                        </StaggerItem>

                        {/* Title */}
                        <StaggerItem>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.2] mb-8 whitespace-pre-line">
                                {t.plzPlatform.title}
                            </h1>
                        </StaggerItem>

                        {/* Description */}
                        <StaggerItem>
                            <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed max-w-3xl mb-12">
                                {t.plzPlatform.description}
                            </p>
                        </StaggerItem>

                        {/* Button */}
                        <StaggerItem>
                            <button className="px-5 py-2 text-sm font-medium text-white bg-[#19687A] hover:bg-[#17BBCD] rounded-xl transition-all shadow-lg shadow-blue-900/20 mb-24">
                                {t.plzPlatform.cta}
                            </button>
                        </StaggerItem>
                    </StaggerContainer>

                    {/* Platform UI Image with Scroll Animation */}
                    <div ref={containerRef} className="w-full max-w-7xl mb-12">
                        <FadeIn delay={0.4} y={60}>
                            <motion.div
                                style={{ scale, opacity }}
                                className="rounded-2xl overflow-hidden shadow-3xl shadow-blue-900/20 relative"
                            >
                                <img
                                    src="/plz/platform/platform-ui.png"
                                    alt="Platform UI Overview"
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                        </FadeIn>
                    </div>

                </div>

                {/* Bento Grid Features */}
                <PlzBentoGrid />

                {/* Detailed Features List */}
                <PlzPlatformFeatures />
            </main>

            <PlzFooter />
        </div>
    );
};

export default WebPlzPlatformPage;
