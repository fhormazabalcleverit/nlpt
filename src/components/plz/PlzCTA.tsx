import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './PlzMotion';

const PlzCTA = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse movement values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Higher responsiveness with lower mass and optimal damping for "liquid" movement
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1, restDelta: 0.001 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    // Parallax sub-elements (optional, but adds depth)
    const rotateX = useTransform(y, [-100, 100], [15, -15]);
    const rotateY = useTransform(x, [-100, 100], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();

        // Calculate center-relative mouse position
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Intensity of the magnet effect (attraction)
        // We use a larger range for more fluid movement
        const moveX = (e.clientX - centerX) * 0.2;
        const moveY = (e.clientY - centerY) * 0.2;

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
                    backgroundImage: "url('/plz/brand/background-cta.svg')",
                    x: useTransform(x, (v) => v * 0.2),
                    y: useTransform(y, (v) => v * 0.2),
                    scale: 1.6
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
                                Evoluciona tu negocio <br className="hidden lg:block" />con Pulzen AI
                            </h2>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light">
                                Transforma datos en ventaja competitiva y lleva tu operación al siguiente nivel con inteligencia artificial aplicada.
                            </p>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="group relative px-8 py-4 text-base font-medium text-white overflow-hidden rounded-xl transition-all">
                                    <div className="absolute inset-0 bg-[#19687A] transition-all group-hover:bg-[#17BBCD]"></div>
                                    <span className="relative z-10">Solicitar demo personalizada</span>
                                </button>
                                <Link to="/web/plz-contact" className="px-8 py-4 text-center text-base font-medium text-[#19687A] hover:text-[#17BBCD] border border-[#19687A]/30 hover:border-[#17BBCD] rounded-xl transition-all bg-white/5">
                                    Hablar con un especialista
                                </Link>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>

                    {/* Magnet Element: Isotipo Column */}
                    <div className="flex items-center justify-center h-full">
                        <motion.div
                            style={{ x, y, rotateX, rotateY }}
                            whileHover={{ scale: 1.05 }}
                            className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center"
                        >
                            {/* Glow behind the icon */}
                            <div className="absolute inset-0 bg-[#17BBCD]/20 blur-[80px] rounded-full"></div>

                            <img
                                src="/plz/brand/isotipo.svg"
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
