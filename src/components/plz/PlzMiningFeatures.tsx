import { useState, useEffect } from 'react';

import { FadeIn, StaggerContainer, StaggerItem } from './PlzMotion';

const miningFeatures: any[] = [
    {
        id: 'supervision',
        shortTitle: 'Supervisión Inteligente',
        title: 'Agente Minero Inteligente para Supervisión y Telemetría',
        desc: `Reto: Falta de visibilidad centralizada sobre equipos, conectividad y riesgos.

LLMAPPS puede:
Integrarse a fuentes como PI System, SCADA, SAP PM, sensores y logs de robots teleoperados.`,
        bullets: [
            {
                title: 'Ofrecer consultas conversacionales del tipo:',
                subItems: [
                    '"Muéstrame los equipos telecomandados inactivos en la galería Norte 3"',
                    '"¿Qué pala tiene mayor probabilidad de falla esta semana?"'
                ]
            },
            'Hacer alertas proactivas por lenguaje natural (Teams, WhatsApp o panel web).',
            'Complementar los sistemas actuales sin reemplazarlos.'
        ],
        highlightText: '👉 Valor: Reduce tiempo de diagnóstico, mejora decisiones operativas sin necesidad de dashboards complejos.',
        image: '/mining_operations.png'
    },
    {
        id: 'mantenimiento',
        shortTitle: 'RAG Mantenimiento',
        title: 'RAG Predictivo de Mantenimiento',
        desc: `Reto: Las palas mueren en zonas peligrosas sin aviso ni repuestos a tiempo.

LLMAPPS puede:
Crear un modelo RAG (Retrieval-Augmented Generation) que lea reportes de mantenimiento históricos y manuales de fabricante.`,
        bullets: [
            {
                title: 'Permitir consultas como:',
                subItems: [
                    '"¿Qué componentes críticos fallan más en palas Caterpillar 2022?"',
                    '"¿Cuál es la probabilidad de falla del radiador en la pala 14 según registros?"'
                ]
            },
            'Integrar un modelo de scoring de riesgo técnico y sugerir órdenes preventivas en SAP PM o similar.'
        ],
        highlightText: '👉 Valor: Minimiza fallas imprevistas, evita exposición de cuadrillas de mantenimiento.',
        image: '/performance_analytics.png'
    },
    {
        id: 'conectividad',
        shortTitle: 'Control Conectividad',
        title: 'Control Cognitivo de Conectividad y Terreno',
        desc: `Reto: Baja conectividad en túneles dinámicos (LTE temporal / mesh Wi-Fi).

LLMAPPS puede:
Integrarse con sistemas de telemetría de red (Wi-Fi Mesh / LTE privado) para entender en qué frentes hay conexión débil.`,
        bullets: [
            {
                title: 'Permitir consultas del tipo:',
                subItems: [
                    '"¿En qué sectores la red mesh tiene pérdida de paquetes >10%?"',
                    '"¿Cuántas palas están fuera de cobertura?"'
                ]
            },
            'Reentrenar modelos con topología dinámica (avances de 1,7 m diarios).'
        ],
        highlightText: '👉 Valor: Anticipa interrupciones operacionales y mejora la continuidad de teleoperación.',
        image: '/retail_analytics.png'
    },
    {
        id: 'gemelo',
        shortTitle: 'Gemelo Cognitivo',
        title: 'Gemelo Cognitivo de Operaciones',
        desc: `Reto: Hay información dispersa entre RFI, Excel, reportes y sensores.

LLMAPPS puede:
Unificar todos los datos bajo una capa semántica accesible por lenguaje natural.`,
        bullets: [
            {
                title: 'Generar "escenarios hipotéticos":',
                subItems: [
                    '"Simula qué pasa si automatizo el carril de explosivos."',
                    '"¿Qué impacto tendría teleoperar los Boltec en productividad y riesgo?"'
                ]
            }
        ],
        highlightText: '👉 Valor: Soporte a la toma de decisiones estratégicas en innovación y seguridad.',
        image: '/mining_operations.png'
    },
    {
        id: 'entrenamiento',
        shortTitle: 'Entrenamiento Técnico',
        title: 'Asistente de Entrenamiento Técnico',
        desc: `Reto: Falta de operadores capacitados para teleoperación.

LLMAPPS puede:
Incluir un módulo de capacitación basado en IA, con prompts guiados tipo copiloto técnico.`,
        bullets: [
            {
                title: 'Consultas y simulaciones:',
                subItems: [
                    '"Explícame cómo calibrar el Voltec para fortificación en galería inclinada."',
                    '"Simula un fallo hidráulico y cómo reaccionar."'
                ]
            },
            'Reentrenar al personal con base en manuales internos y videos.'
        ],
        highlightText: '👉 Valor: Democratiza el conocimiento técnico y reduce curva de aprendizaje.',
        image: '/performance_analytics.png'
    }
];

const PlzMiningFeatures = () => {
    const [activeSection, setActiveSection] = useState(miningFeatures[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -60% 0px' }
        );

        miningFeatures.forEach((feat) => {
            const el = document.getElementById(feat.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative w-full bg-[#040809] py-24 font-sansation text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Left Sidebar Menu (Sticky) */}
                    <FadeIn className="hidden lg:flex w-full lg:w-1/4 flex-col gap-6 sticky top-32 self-start">
                        {miningFeatures.map((feat) => {
                            const isActive = activeSection === feat.id;
                            return (
                                <a
                                    key={`nav-${feat.id}`}
                                    href={`#${feat.id}`}
                                    onClick={() => setActiveSection(feat.id)}
                                    className="flex items-center gap-4 text-left group transition-all duration-300"
                                >
                                    <div className="w-6 flex justify-center items-center">
                                        {isActive ? (
                                            <div className="w-6 h-[2px] bg-[#d946ef]"></div>
                                        ) : (
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#d946ef] transition-colors"></div>
                                        )}
                                    </div>

                                    <span className={`text-lg font-light transition-colors ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
                                        {feat.shortTitle}
                                    </span>
                                </a>
                            );
                        })}
                    </FadeIn>

                    {/* Right Content Area (Blog Style) */}
                    <div className="w-full lg:w-3/4 flex flex-col gap-32">
                        {miningFeatures.map((feat) => (
                            <FadeIn id={feat.id} key={feat.id} className="scroll-mt-32" y={20}>
                                <StaggerContainer>
                                    <StaggerItem>
                                        <h2 className="text-xl md:text-3xl font-medium tracking-tight mb-6 leading-tight">
                                            {feat.title}
                                        </h2>
                                    </StaggerItem>
                                    <StaggerItem>
                                        <p className="text-lg text-gray-400 font-light leading-relaxed mb-6 max-w-3xl whitespace-pre-line">
                                            {feat.desc}
                                        </p>
                                    </StaggerItem>

                                    {/* Advanced Bullets */}
                                    {feat.bullets && feat.bullets.length > 0 && (
                                        <StaggerContainer className="flex flex-col gap-5 mb-8" staggerChildren={0.05}>
                                            {feat.bullets.map((bullet: any, i: number) => {
                                                if (typeof bullet === 'string') {
                                                    return (
                                                        <StaggerItem key={`bullet-${i}`}>
                                                            <div className="flex items-start gap-4">
                                                                <div className="w-2 h-2 rounded-full bg-[#17BBCD] mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(23,187,205,0.8)]"></div>
                                                                <span className="text-gray-200 text-lg">{bullet}</span>
                                                            </div>
                                                        </StaggerItem>
                                                    );
                                                }
                                                return (
                                                    <StaggerItem key={`bullet-${i}`}>
                                                        <div className="flex flex-col gap-3">
                                                            <div className="flex items-start gap-4">
                                                                <div className="w-2 h-2 rounded-full bg-[#17BBCD] mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(23,187,205,0.8)]"></div>
                                                                <span className="text-gray-200 text-lg">{bullet.title}</span>
                                                            </div>
                                                            <ul className="list-disc list-outside ml-10 text-gray-400 font-light flex flex-col gap-2 text-md">
                                                                {bullet.subItems.map((sub: string, j: number) => (
                                                                    <li key={`sub-${j}`}>{sub}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </StaggerItem>
                                                );
                                            })}
                                        </StaggerContainer>
                                    )}

                                    {/* Highlight Text */}
                                    {feat.highlightText && (
                                        <StaggerItem>
                                            <div className="text-[#4ade80] font-light text-lg mb-12 leading-relaxed">
                                                {feat.highlightText}
                                            </div>
                                        </StaggerItem>
                                    )}
                                    
                                    {/* Graphic Container */}
                                    <StaggerItem>
                                        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-[#11161A] border border-white/5 shadow-2xl flex items-center justify-center">
                                            {/* Soft Glow */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/20 rounded-full blur-[80px]"></div>

                                            {/* Image representing the feature */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-lighten"
                                                style={{ backgroundImage: `url(${feat.image})` }}
                                            ></div>

                                            {/* Placeholder gradient if image is not enough */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#040809] to-transparent opacity-80"></div>
                                        </div>
                                    </StaggerItem>
                                </StaggerContainer>
                            </FadeIn>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PlzMiningFeatures;
