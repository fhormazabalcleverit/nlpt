import { useState, useEffect } from 'react';
import { CheckCircle2, MoreVertical } from 'lucide-react';

const integrations = [
    {
        id: 'sharepoint',
        title: 'SharePoint',
        desc: 'Conecta documentos, listas y bibliotecas de SharePoint para análisis y consultas inteligentes.',
        popupText: 'Extrayendo actas de reunión y documentos de proyectos desde SharePoint.'
    },
    {
        id: 'db',
        title: 'Bases de datos',
        desc: 'Integración con todo tipo de bases de datos SQL, NoSQL, BigQuery y sistemas de almacenamiento empresarial.',
        popupText: 'Consultando registros históricos en base de datos PostgreSQL.'
    },
    {
        id: 'files',
        title: 'Archivos',
        desc: 'Procesa archivos PDF, Word, Excel y otros formatos para extraer información relevante.',
        popupText: 'Procesando y clasificando 50 facturas en formato PDF.'
    },
    {
        id: 'api',
        title: 'APIs',
        desc: 'Conecta con APIs REST y servicios web para obtener datos en tiempo real.',
        popupText: 'Obteniendo cotizaciones en tiempo real mediante API REST.'
    },
    {
        id: 'mcp',
        title: 'MCP',
        desc: 'Model Context Protocol para integración avanzada con sistemas externos y flujos personalizados.',
        popupText: 'Sincronizando contexto de agente mediante conexión MCP.'
    }
];

const PlzIntegrations = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-cycle through integrations every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % integrations.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const activeItem = integrations[activeIndex];

    return (
        <section className="relative w-full bg-[#040809] py-24 font-sansation light">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Headers */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="px-4 py-1.5 border border-white/10 rounded-full text-xs text-gray-400 mb-6 inline-block tracking-widest uppercase bg-white/5">
                        Integraciones
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight max-w-4xl mb-6">
                        Ponga los datos a su servicio
                    </h2>
                    <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
                        Este agente de IA extrae datos de múltiples fuentes, los estandariza y limpia, apoyando la toma de decisiones con una intervención manual mínima.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-cente h-[520px]">


                    {/* Right Column: Aurora Graphic Display & Indicators */}
                    <div className="flex flex-col gap-6 w-full">
                        <div className="w-full relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/11] flex items-center justify-center p-6 shadow-2xl">

                            {/* Dynamic Gradient Background (Aurora effect) */}
                            <div className="absolute inset-0 bg-[#560F9D]/40"></div>
                            <div
                                className="absolute inset-0 opacity-60 transition-all duration-1000 ease-in-out transition-all duration-1000 ease-in-out"
                                style={{
                                    background: `radial-gradient(circle at ${50 + (activeIndex % 2) * 20}% ${40 + (activeIndex % 3) * 10}%, #2C8AA0 0%, transparent 60%),
                                                radial-gradient(circle at ${30 + (activeIndex % 3) * 20}% ${70 - (activeIndex % 2) * 20}%, #17BBCD 0%, transparent 50%),
                                                radial-gradient(circle at ${80 - (activeIndex % 2) * 30}% ${20 + (activeIndex % 3) * 15}%, #560F9D 0%, transparent 40%)`
                                }}
                            ></div>

                            {/* Stars/Dust overlay */}
                            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ddd, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0))', backgroundSize: '200px 200px' }}></div>

                            {/* Floating Notification Card */}
                            <div className="relative z-10 bg-[#11161a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full max-w-sm shadow-2xl transform transition-all duration-500 hover:scale-105">
                                <p className="text-sm font-light text-white mb-6 leading-relaxed">
                                    {activeItem.popupText}
                                </p>
                                <div className="flex items-center justify-between text-xs font-medium">
                                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span>Completado</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-500">
                                        <span>ID-0E48</span>
                                        <MoreVertical className="w-4 h-4 cursor-pointer hover:text-gray-300" />
                                    </div>
                                </div>
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
                    </div>


                    {/* Left Column: Accordion List */}
                    <div className="flex flex-col w-full">
                        {/* <div className="text-2xl font-medium text-white mb-6 border-b border-white/10 pb-4">
                            Integraciones
                        </div> */}
                        {integrations.map((item, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <div
                                    key={item.id}
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
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default PlzIntegrations;
