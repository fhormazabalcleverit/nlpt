import { Link } from 'react-router-dom';
import { StaggerContainer, StaggerItem } from './PlzMotion';

const PlzCTA = () => {
    return (
        <section className="relative w-full py-32 font-sansation overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/plz/brand/background-cta.svg')" }}>
            {/* Dark gradient overlay to ensure text readability against the new background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040809] via-[#040809]/60 to-transparent md:w-3/4"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

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
                                <button className="px-6 py-3 text-base font-medium text-white bg-[#19687A] hover:bg-[#17BBCD] rounded-xl transition-all shadow-lg shadow-[#17BBCD]/10">
                                    Solicitar demo personalizada
                                </button>
                                <Link to="/web/plz-contact" className="px-6 py-3 text-center text-base font-medium text-[#19687A] hover:text-[#17BBCD] border border-[#19687A] hover:border-[#17BBCD] rounded-xl transition-all">
                                    Hablar con un especialista
                                </Link>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>

                    {/* Empty Right Column for the background graphics to shine through */}
                    <div className="hidden md:block">
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlzCTA;
