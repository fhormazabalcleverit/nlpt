import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';
import DynamicSEO from '../components/DynamicSEO';
import PlzBentoGrid from '../components/plz/PlzBentoGrid';
import PlzPlatformFeatures from '../components/plz/PlzPlatformFeatures';

const WebPlzPlatformPage = () => {
    return (
        <div className="min-h-screen bg-[#040809] flex flex-col font-sansation text-white">
            <DynamicSEO
                title="Plataforma | Pulzen AI"
                description="Una plataforma de agentes de IA para la automatización de procesos agénticos"
                url={window.location.href}
            />
            <PlzNavbar />

            <main className="flex-grow pt-32 pb-20 lg:pt-40 lg:pb-32 relative">

                {/* Background wrapper to prevent overflow without breaking sticky children */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    {/* Colored Gradient Circles (Blobs) from Home */}
                    <div className="absolute -top-[15%] -left-[10%] w-[1200px] h-[1200px] bg-blue-900/40 rounded-full blur-[230px]"></div>
                    <div className="absolute -top-[10%] -right-[20%] w-[1000px] h-[1000px] bg-blue-900/70 rounded-full blur-[300px]"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

                    {/* Badge */}
                    <div className="mb-8 inline-flex items-center px-5 py-1.5 rounded-full border border-gray-700 bg-black/40 backdrop-blur-sm text-sm font-light text-gray-300 shadow-sm">
                        Plataforma Pulzen
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.2] mb-8">
                        Una plataforma de agentes<br className="hidden sm:block" />
                        de IA para la automatización<br className="hidden sm:block" />
                        de procesos agénticos
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed max-w-3xl mb-12">
                        Una única solución empresarial para crear y gestionar su equipo de agentes
                        de IA. Nuestra plataforma de agentes ofrece una amplia gama de
                        herramientas diseñadas para facilitar la transición de su organización a un
                        futuro basado en la IA.
                    </p>

                    {/* Button */}
                    <button className="px-5 py-2 text-sm font-medium text-white bg-[#19687A] hover:bg-[#17BBCD] rounded-xl transition-all shadow-lg shadow-blue-900/20 mb-24">
                        Empezar hoy
                    </button>

                    {/* 16:9 Thumbnail Placeholder */}
                    <div className="w-full max-w-5xl aspect-video bg-[#0a0f12] border border-white/10 rounded-2xl flex flex-col items-center justify-center overflow-hidden shadow-2xl relative">
                        {/* Placeholder text and icon */}
                        <div className="text-gray-600 flex flex-col items-center gap-4">
                            <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-light text-xl tracking-wide">Espacio para imagen (16:9)</span>
                        </div>
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
