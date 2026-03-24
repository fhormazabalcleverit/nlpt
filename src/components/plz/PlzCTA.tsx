import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './PlzMotion';
import { useLanguage } from '../../context/LanguageContext';

const PlzCTA = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse movement values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Higher responsiveness with lower mass and optimal damping for "liquid" movement
    const springConfig = { damping: 10, stiffness: 50, mass: 0.01, restDelta: 0.001 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    // Parallax sub-elements (optional, but adds depth)
    const rotateX = useTransform(y, [-100, 100], [1, -1]);
    const rotateY = useTransform(x, [-100, 100], [-1, 1]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Calculate center-relative mouse position
        const centerX = rect.left + rect.width / 1;
        const centerY = rect.top + rect.height / 1;

        // Intensity of the magnet effect (attraction)
        // We use a larger range for more fluid movement
        const moveX = (e.clientX - centerX) * 0.05;
        const moveY = (e.clientY - centerY) * 0.05;

        mouseX.set(moveX);
        mouseY.set(moveY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full py-32 font-sansation overflow-hidden bg-[#040809]"
        >
            {/* Background Graphic with its own subtle movement */}
            <motion.div
                className="absolute inset-0  bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('${import.meta.env.BASE_URL}plz/brand/background-cta.svg')`,
                    x: useTransform(x, (v) => v * 0.2),
                    y: useTransform(y, (v) => v * 0.2),
                    scale: 1.2
                }}
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040809] via-[#040809] to-transparent md:w-3/4"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[400px]">

                    {/* Text Section */}
                    <StaggerContainer className="max-w-xl">
                        <StaggerItem>
                            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white tracking-tight leading-[1.15] mb-6">
                                {t.plzCTA.title}
                            </h2>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light">
                                {t.plzCTA.description}
                            </p>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact" state={{ reasonIndex: 0 }} className="group relative px-8 py-4 text-center text-base font-medium text-white overflow-hidden rounded-xl transition-all">
                                    <div className="absolute inset-0 bg-[#19687A] transition-all group-hover:bg-[#17BBCD]"></div>
                                    <span className="relative z-10">{t.plzCTA.primaryBtn}</span>
                                </Link>
                                <Link to="/contact" className="px-8 py-4 text-center text-base font-medium text-[#19687A] hover:text-[#17BBCD] border border-[#19687A]/30 hover:border-[#17BBCD] rounded-xl transition-all bg-white/5">
                                    {t.plzCTA.secondaryBtn}
                                </Link>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>

                    {/* Magnet Element: Isotipo Column */}
                    <div className="flex items-center justify-center h-full">
                        <motion.div
                            style={{ x, y, rotateX, rotateY }}
                            whileHover={{ scale: 1.05 }}
                            className="relative w-28 h-28 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center"
                        >
                            {/* Glow behind the icon */}
                            <div className="absolute inset-0 bg-[#17BBCD]/20 blur-[80px] rounded-full"></div>

                            {/* White Pulse Animation */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute inset-0 border border-white/20 rounded-full"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{
                                        scale: [0.6, 6],
                                        opacity: [0, 0.5, 0]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        delay: i * 2.9,
                                        ease: "easeOut",
                                        times: [0, 0.2, 1]
                                    }}
                                />
                            ))}

                            <img
                                src={`${import.meta.env.BASE_URL}plz/brand/isotipo.svg`}
                                alt="Pulzen Isotipo"
                                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_20px_rgba(23,187,205,0.1)] select-none pointer-events-none"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PlzCTA;
