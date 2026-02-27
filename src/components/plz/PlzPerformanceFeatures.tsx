import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const performanceFeatures: any[] = [
    {
        id: 'velocidad',
        shortTitle: 'Velocidad de Entrega',
        title: 'Velocidad de Entrega y Eficiencia del Flujo',
        desc: `Los equipos luchan por mantener ciclos de desarrollo rápidos mientras manejan revisiones de código, aprobaciones y despliegues sin visibilidad clara de cuellos de botella.
        
Pulzen mide métricas clave de DORA y DevExp como Deployment Frequency, Cycle Time, y Merge Frequency. Analiza Code Review Velocity, Time to Approval, PR Merge Times, y Code Review Timing para identificar delays.`,
        bullets: [
            {
                title: 'DORA Metrics',
                subItems: [
                    'Deployment Frequency',
                    'Merge Frequency',
                    'Cycle Time end-to-end'
                ]
            },
            {
                title: 'DevExp Metrics',
                subItems: [
                    'Pickup Time, Review Time, Close Time',
                    'Deploy Time, Coding Time'
                ]
            },
            {
                title: 'SPACE Framework',
                subItems: [
                    'Code Review Velocity',
                    'Time to Approval',
                    'PR Merge Times',
                    'Análisis de Approval Rate'
                ]
            }
        ],
        highlightText: '👉 Valor: Reduce tiempos de ciclo hasta 40%, identifica cuellos de botella y acelera time-to-market.',
        image: '/mining_operations.png'
    },
    {
        id: 'actividad',
        shortTitle: 'Actividad de Equipo',
        title: 'Actividad y Performance del Equipo',
        desc: `Gerentes necesitan entender productividad, identificar top performers y detectar patrones sin micromanagement.

Pulzen rastrea commits, lines of code, deploy frequency, y PR activity. Incluye Commit Score que evalúa valor e impacto mediante cambios, adiciones y eliminaciones.`,
        bullets: [
            {
                title: 'SPACE Framework',
                subItems: [
                    'Commits, Lines of Code',
                    'Deploy Frequency por usuario/equipo'
                ]
            },
            {
                title: 'Pulzen Commit Score',
                subItems: [
                    'Evaluación de valor e impacto',
                    'Commit Detail con tracking temporal (adiciones/eliminaciones)',
                    'Por usuario/equipo/repositorio'
                ]
            },
            {
                title: 'Pull Request Detail',
                subItems: [
                    'PRs abiertos/cerrados/merged',
                    'Time-to-merge'
                ]
            }
        ],
        highlightText: '👉 Valor: Identifica top performers, balancea cargas y reconoce contribuciones de alto valor con datos cuantitativos.',
        image: '/performance_analytics.png'
    },
    {
        id: 'calidad',
        shortTitle: 'Calidad y Revisiones',
        title: 'Calidad de Código y Revisiones',
        desc: `Mantener calidad mientras se mueven rápido requiere procesos de revisión efectivos y métricas accionables.

Pulzen analiza code review con SPACE Framework: Code Review Velocity, número de revisiones, approval rates, tiempo de aprobación. Incluye Workflow Detail con tracking de pipelines (estados: canceled, failed, successful) y duración.`,
        bullets: [
            {
                title: 'SPACE Framework: Code Review',
                subItems: [
                    'Code Review Velocity',
                    'Approval Rate, Time to Approval'
                ]
            },
            {
                title: 'Workflow Detail',
                subItems: [
                    'Tracking pipelines con estados/duración',
                    'Por usuario/equipo/repositorio'
                ]
            },
            {
                title: 'Análisis dual',
                subItems: [
                    'Perspectiva autor PR vs reviewer/approver',
                    'Insights sobre eficiencia y knowledge sharing'
                ]
            }
        ],
        highlightText: '👉 Valor: Mejora calidad 30%, reduce tiempos de revisión y optimiza CI/CD.',
        image: '/retail_analytics.png'
    },
    {
        id: 'copilot',
        shortTitle: 'Adopción IA y Copilot',
        title: 'Adopción de GitHub Copilot y Herramientas de IA',
        desc: `Organizaciones invierten en GitHub Copilot sin visibilidad de uso real, adopción y ROI.

Pulzen integra métricas completas de GitHub Copilot: seat usage, suggestion acceptance rate, lines accepted, chat usage, patrones de uso diario. Análisis por IDE, lenguaje, usuario y equipo.`,
        bullets: [
            {
                title: 'GitHub Copilot Metrics',
                subItems: [
                    'Seat usage',
                    '% Suggestion accepted, % Lines accepted',
                    '% Suggestion by chat'
                ]
            },
            {
                title: 'IDE per user/team',
                subItems: [
                    'Identificación de herramientas más usadas'
                ]
            },
            {
                title: 'Language per user/team',
                subItems: [
                    'Tracking lenguajes más usados'
                ]
            },
            {
                title: 'Daily usage of GitHub Copilot',
                subItems: [
                    'Visualización de patrones temporales diarios'
                ]
            }
        ],
        highlightText: '👉 Valor: Maximiza ROI de Copilot, identifica oportunidades de capacitación y asegura adopción efectiva.',
        image: '/mining_operations.png'
    },
    {
        id: 'bienestar',
        shortTitle: 'Bienestar del Equipo',
        title: 'Bienestar del Desarrollador y Detección de Riesgos',
        desc: `Burnout y desenganche son costosos pero difíciles de detectar temprano.

Pulzen detecta burnout mediante análisis de overactivity, trabajo fuera de horario, y fines de semana usando VCS y Teams. Identifica Ghost Developers comparando actividad histórica vs actual para detectar caídas significativas.`,
        bullets: [
            {
                title: 'Pulzen Burnout Developer',
                subItems: [
                    'Detección de overactivity',
                    'Trabajo fuera de horario/fines de semana'
                ]
            },
            {
                title: 'Pulzen Ghost Developer con scoring',
                subItems: [
                    '0-2 Active, 3-4 Under observation',
                    '5-6 Moderate risk, 7+ Sustained ghosting'
                ]
            },
            {
                title: 'Integración Teams',
                subItems: [
                    'Meetings, screen sharing'
                ]
            },
            {
                title: 'VCS activity tracking',
                subItems: [
                    'Early warnings para intervención (1:1s, Assignment review, Feedback)'
                ]
            }
        ],
        highlightText: '👉 Valor: Reduce rotación 25%, detecta burnout antes de crisis y apoya bienestar con data-driven warnings.',
        image: '/performance_analytics.png'
    }
];

const PlzPerformanceFeatures = () => {
    const [activeSection, setActiveSection] = useState(performanceFeatures[0].id);

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

        performanceFeatures.forEach((feat) => {
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
                    <div className="hidden lg:flex w-full lg:w-1/4 flex-col gap-6 sticky top-32 self-start">
                        {/* <h4 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">Contenido</h4> */}
                        {performanceFeatures.map((feat) => {
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
                    </div>

                    {/* Right Content Area (Blog Style) */}
                    <div className="w-full lg:w-3/4 flex flex-col gap-32">
                        {performanceFeatures.map((feat) => (
                            <div id={feat.id} key={feat.id} className="scroll-mt-32">
                                <h2 className="text-xl md:text-3xl font-medium tracking-tight mb-6 leading-tight">
                                    {feat.title}
                                </h2>
                                <p className="text-lg text-gray-400 font-light leading-relaxed mb-6 max-w-3xl whitespace-pre-line">
                                    {feat.desc}
                                </p>

                                {/* Checks (Legacy) */}
                                {feat.checks && feat.checks.length > 0 && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                                        {feat.checks.map((check: string, i: number) => (
                                            <div key={`check-${i}`} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-[#B81769]" />
                                                <span className="text-gray-300 font-light">{check}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Advanced Bullets */}
                                {feat.bullets && feat.bullets.length > 0 && (
                                    <div className="flex flex-col gap-5 mb-8">
                                        {feat.bullets.map((bullet: any, i: number) => {
                                            if (typeof bullet === 'string') {
                                                return (
                                                    <div key={`bullet-${i}`} className="flex items-start gap-4">
                                                        <div className="w-2 h-2 rounded-full bg-[#17BBCD] mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(23,187,205,0.8)]"></div>
                                                        <span className="text-gray-200 text-lg">{bullet}</span>
                                                    </div>
                                                );
                                            }
                                            return (
                                                <div key={`bullet-${i}`} className="flex flex-col gap-3">
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
                                            );
                                        })}
                                    </div>
                                )}

                                {/* Highlight Text */}
                                {feat.highlightText && (
                                    <div className="text-[#4ade80] font-light text-lg mb-12 leading-relaxed">
                                        {feat.highlightText}
                                    </div>
                                )}
                                {/* Graphic Container */}
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
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PlzPerformanceFeatures;
