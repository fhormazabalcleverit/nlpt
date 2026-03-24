import React from 'react';

interface PDFProps {
    data: any;
    isArchitect: boolean;
    accentColor: string;
    expertImg: string;
    language: string;
}

const PlzExpertPDF: React.FC<PDFProps> = ({ data, isArchitect, accentColor, expertImg, language }) => {

    // Scenarios data matching the UI
    const scenarios = isArchitect ? [
        {
            tag: language === 'es' ? 'MODERNIZACIÓN' : 'MODERNIZATION',
            title: language === 'es' ? 'Modernización de Ecosistemas Legacy' : 'Legacy Ecosystem Modernization',
            desc: language === 'es' ? 'Transformamos infraestructuras tradicionales en sistemas inteligentes, asegurando que la transición a la IA sea fluida, segura y sin fricciones técnicas.' : 'We transform traditional infrastructures into intelligent systems, ensuring a smooth, secure, and technical friction-less transition to AI.'
        },
        {
            tag: language === 'es' ? 'ESTRATEGIA' : 'STRATEGY',
            title: language === 'es' ? 'Diseño de Roadmap desde Cero' : 'Roadmap Design from Scratch',
            desc: language === 'es' ? 'Definimos la hoja de ruta técnica y ética para empresas que inician su viaje en IA, seleccionando el stack preciso para garantizar escalabilidad a largo plazo.' : 'We define the technical and ethical roadmap for companies starting their AI journey, selecting the precise stack to ensure long-term scalability.'
        },
        {
            tag: language === 'es' ? 'COMPLEJIDAD' : 'COMPLEXITY',
            title: language === 'es' ? 'Arquitecturas de Alta Complejidad' : 'High Complexity Architectures',
            desc: language === 'es' ? 'Resolvemos el rompecabezas de ecosistemas tecnológicos masivos, integrando agentes autónomos y LLMs en flujos de datos complejos y críticos.' : 'We solve the puzzle of massive technological ecosystems, integrating autonomous agents and LLMs into complex and critical data flows.'
        }
    ] : [
        {
            tag: language === 'es' ? 'VELOCIDAD' : 'SPEED',
            title: language === 'es' ? 'Lanzamiento Hiper-Acelerado de MVPs' : 'Hyper-Accelerated MVP Launch',
            desc: language === 'es' ? 'Convertimos conceptos en productos mínimos viables funcionales en semanas, no meses, utilizando ciclos de desarrollo potenciados por IA.' : 'We turn concepts into functional minimum viable products in weeks, not months, using AI-powered development cycles.'
        },
        {
            tag: language === 'es' ? 'ADAPTABILIDAD' : 'ADAPTABILITY',
            title: language === 'es' ? 'Inyección de Inteligencia en Plataformas Actuales' : 'Intelligence Injection in Current Platforms',
            desc: language === 'es' ? 'Evolucionamos tus herramientas existentes integrando funcionalidades "smart" (chatbots, predicción, análisis) sin reconstruir todo el sistema.' : 'We evolve your existing tools by integrating "smart" features (chatbots, prediction, analysis) without rebuilding the entire system.'
        },
        {
            tag: language === 'es' ? 'EFICIENCIA' : 'EFFICIENCY',
            title: language === 'es' ? 'Automatización de Flujos Internos' : 'Internal Workflow Automation',
            desc: language === 'es' ? 'Eliminamos cuellos de botella mediante la construcción de agentes que ejecutan tareas repetitivas, optimizando el tiempo y los recursos de tu equipo.' : 'We eliminate bottlenecks by building agents that execute repetitive tasks, optimizing your team\'s time and resources.'
        }
    ];

    return (
        <div id="pdf-content" className="p-16 bg-white text-gray-900 font-sans w-[1000px] min-h-[1400px] flex flex-col">
            {/* Header / Hero */}
            <div className="flex justify-between items-start mb-20">
                <div className="flex-1">
                    <div className="inline-flex  items-center px-2 py-2 rounded-full border border-gray-100 bg-gray-50 text-[10px] font-semibold uppercase tracking-[0.2em] pb-4 mb-8" style={{ color: accentColor }}>
                        {data.tagline}
                    </div>
                    <h1 className="text-6xl font-bold leading-tight mb-8 text-black">
                        {data.title}
                    </h1>
                    <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
                        {isArchitect ? "Especialista en el diseño de infraestructuras inteligentes y escalabilidad empresarial." : "Motor de ejecución ágil para soluciones de IA, RAG y agentes autónomos."}
                    </p>
                </div>
                <div className="w-64 h-64 relative flex-shrink-0">
                    <div className="absolute inset-0 rounded-[2rem] opacity-[0.05]" style={{ backgroundColor: accentColor }}></div>
                    <img src={expertImg} alt={data.title} className="w-full h-full object-contain relative z-10" />
                </div>
            </div>

            {/* Profile Section */}
            <div className="grid grid-cols-12 gap-12 py-12 border-t border-gray-100">
                <div className="col-span-4">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center p-1.5  mt-4" style={{ borderColor: accentColor }}>
                            <div className="w-full h-full rounded-full" style={{ backgroundColor: accentColor }} />
                        </div>
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mt-1">
                            {data.profile.title}
                        </h2>
                    </div>
                </div>
                <div className="col-span-8">
                    <p className="text-lg text-gray-800 font-light leading-relaxed">
                        {data.profile.desc}
                    </p>
                </div>
            </div>

            {/* Key Responsibilities Section */}
            <div className="grid grid-cols-12 gap-12 py-12 border-t border-gray-100">
                <div className="col-span-4">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center p-1.5  mt-4" style={{ borderColor: accentColor }}>
                            <div className="w-full h-full rounded-full" style={{ backgroundColor: accentColor }} />
                        </div>
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mt-1">
                            {language === 'es' ? 'Responsabilidades' : 'Responsibilities'}
                        </h2>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="grid grid-cols-2 gap-8">
                        {data.responsibilities.items.map((item: any, i: number) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-[1.5rem] border border-gray-100 h-full">
                                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                                <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tech Stack Section */}
            <div className="grid grid-cols-12 gap-12 py-12 border-t border-gray-100">
                <div className="col-span-4">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center p-1.5 mt-4" style={{ borderColor: accentColor }}>
                            <div className="w-full h-full rounded-full" style={{ backgroundColor: accentColor }} />
                        </div>
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">
                            {data.techStack.title}
                        </h2>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
                        <div className="flex items-center gap-12 mb-8">
                            <img
                                src={`${import.meta.env.BASE_URL}plz/profiles/github-black.svg`}
                                alt="GitHub"
                                className="h-8"
                                style={{ filter: 'grayscale(1) brightness(0)' }}
                            />
                            <div className="w-[1px] h-10 bg-gray-200" />
                            <img
                                src={`${import.meta.env.BASE_URL}plz/profiles/claude-black.svg`}
                                alt="Claude"
                                className="h-8"
                                style={{ filter: 'grayscale(1) brightness(0)' }}
                            />
                        </div>
                        <p className="text-xl text-gray-600 font-light leading-relaxed">
                            {data.techStack.content}
                        </p>
                    </div>
                </div>
            </div>

            {/* Impact Scenarios Section */}
            <div className="grid grid-cols-12 gap-12 py-12 border-t border-gray-100">
                <div className="col-span-4">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center p-1.5  mt-4" style={{ borderColor: accentColor }}>
                            <div className="w-full h-full rounded-full" style={{ backgroundColor: accentColor }} />
                        </div>
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mt-1">
                            {language === 'es' ? 'Escenarios de Impacto' : 'Impact Scenarios'}
                        </h2>
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="space-y-8">
                        {scenarios.map((item: any, i: number) => (
                            <div key={i} className="p-8 border border-gray-100 rounded-[1.5rem] bg-gray-50/50">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 block">
                                    {item.tag}
                                </span>
                                <h3 className="text-2xl font-light text-gray-900 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 font-light leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer / Branding */}
            <div className="mt-auto pt-12 border-t border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <img
                        src={`${import.meta.env.BASE_URL}plz/brand/cleveritai-logotipo-black.svg`}
                        alt="CleverIT AI"
                        className="h-6"
                        style={{ filter: 'grayscale(1) brightness(0)' }}
                    />
                    <div className="w-[1px] h-6 bg-gray-200" />
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-300">
                        EXPERT DOSSIER • 2026
                    </span>
                </div>
                <div className="text-xs text-gray-400 font-light">
                    www.cleverit.ai
                </div>
            </div>
        </div>
    );
};

export default PlzExpertPDF;
