import { useState, useEffect } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './PlzMotion';

const platformFeatures: any[] = [
    {
        id: 'gestion',
        shortTitle: 'Gestión Centralizada',
        title: 'Gestión y Despliegue de Agentes',
        desc: `Reto: Despliegue fragmentado de agentes y herramientas en distintos entornos.

LLMAPPS puede:
Ofrecer un Hub centralizado para la administración de toda la flota de agentes IA.`,
        bullets: [
            {
                title: 'Capacidades clave incluyen:',
                subItems: [
                    'Crear y configurar nuevos agentes desde cero en minutos.',
                    'Asignar roles y permisos a cada agente según el departamento.'
                ]
            },
            'Monitorear la versión y las actualizaciones de cada modelo instalado.',
            'Integración continua con repositorios y flujos CI/CD existentes.'
        ],
        highlightText: '👉 Valor: Simplifica el ciclo de vida, reduce costos de mantenimiento y acelera el time-to-market.',
        image: '/mining_operations.png' // using placeholder images from existing ones
    },
    {
        id: 'control',
        shortTitle: 'Control y Supervisión',
        title: 'Telemetría y Control Continuo',
        desc: `Reto: Falta de visibilidad sobre cómo y dónde están operando los agentes.

LLMAPPS puede:
Proveer dashboards en tiempo real con métricas de rendimiento y uso de agentes.`,
        bullets: [
            {
                title: 'Supervisión de métricas como:',
                subItems: [
                    'Tasa de éxito de tareas ejecutadas de forma autónoma.',
                    'Consumo de tokens y costos asociados por agente o proceso.'
                ]
            },
            'Alertas automáticas en caso de desviaciones o errores de ejecución.'
        ],
        highlightText: '👉 Valor: Garantiza fiabilidad operacional y optimización de recursos computacionales.',
        image: '/performance_analytics.png'
    },
    {
        id: 'seguridad',
        shortTitle: 'Seguridad y Auditoría',
        title: 'Seguridad, Gobernanza y Auditoría',
        desc: `Reto: Riesgos de seguridad por acceso no autorizado y falta de trazabilidad.

LLMAPPS puede:
Implementar políticas de acceso granulares (RBAC) y un registro de auditoría inmutable.`,
        bullets: [
            {
                title: 'Funcionalidades de seguridad:',
                subItems: [
                    'Garantizar que los agentes solo accedan a datos permitidos.',
                    'Registrar cada interacción o decisión tomada por la IA.'
                ]
            }
        ],
        highlightText: '👉 Valor: Asegura cumplimiento normativo y confianza total en procesos automatizados.',
        image: '/retail_analytics.png'
    }
];

const PlzPlatformFeatures = () => {
    const [activeSection, setActiveSection] = useState(platformFeatures[0].id);

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

        platformFeatures.forEach((feat) => {
            const el = document.getElementById(feat.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative w-full py-24 font-sansation text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Left Sidebar Menu (Sticky) */}
                    <FadeIn className="hidden lg:flex w-full lg:w-1/4 flex-col gap-6 sticky top-32 self-start">
                        {platformFeatures.map((feat) => {
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
                        {platformFeatures.map((feat) => (
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

export default PlzPlatformFeatures;
