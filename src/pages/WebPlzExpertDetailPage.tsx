import { Link, useParams, useLocation } from 'react-router-dom';
import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';
import { useLanguage } from '../context/LanguageContext';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/plz/PlzMotion';
import DynamicSEO from '../components/DynamicSEO';
import { Shield, ChevronLeft, Layers, Code, Zap, Rocket } from 'lucide-react';
import PlzTechStackCard from '../components/plz/PlzTechStackCard';

const WebPlzExpertDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const location = useLocation();
    const { t, language } = useLanguage();

    // Determine which data to use based on slug or path
    const currentSlug = slug || location.pathname.split('/').pop();
    const isArchitect = currentSlug === 'clever-ai-architect';
    const data = isArchitect ? t.plzArchitectPage : t.plzDeveloperPage;

    if (!data) return null;

    const Icon = isArchitect ? Shield : Code;
    const accentColor = isArchitect ? '#9333ea' : '#19687A';
    const expertImg = isArchitect ? '/plz/profiles/01.png' : '/plz/profiles/02.png';

    return (
        <div className={`min-h-screen bg-[#040809] text-white selection:bg-${isArchitect ? 'purple' : 'cyan'}-500/30 font-sansation overflow-hidden`}>
            <DynamicSEO
                title={data.title}
                description={data.tagline}
            />
            <PlzNavbar />

            {/* Background Glows */}
            <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] blur-[150px] opacity-20 rounded-full"
                    style={{ backgroundColor: accentColor }}
                />
                <div
                    className="absolute top-[40%] -right-[15%] w-[50%] h-[50%] blur-[180px] opacity-10 rounded-full"
                    style={{ backgroundColor: accentColor }}
                />
                <div
                    className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] blur-[140px] opacity-15 rounded-full"
                    style={{ backgroundColor: accentColor }}
                />
            </div>

            <main className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Back Button */}
                <FadeIn>
                    <Link to="/profiles" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-16 group">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        {t.plzNavbar?.backBtn || "Volver"}
                    </Link>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-32">
                    {/* Left Column: Info */}
                    <div className="space-y-12">
                        <FadeIn>
                            {/* Role Icon */}
                            <div className={`w-20 h-20 bg-${isArchitect ? 'purple-600' : '[#19687A]'}/20 rounded-2xl flex items-center justify-center mb-12 border border-white/5 shadow-2xl backdrop-blur-xl`}>
                                <Icon className="w-10 h-10" style={{ color: accentColor }} />
                            </div>

                            {/* Titles */}
                            <div className="space-y-6">
                                <h1 className="text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1]">
                                    {data.title}
                                </h1>
                                <p className="text-md md:text-lg font-medium uppercase tracking-[0.2em]" style={{ color: accentColor }}>
                                    {data.tagline}
                                </p>
                                <p className="text-sm md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                                    {isArchitect ? t.plzExperts.architect.summary : t.plzExperts.developer.summary}
                                </p>
                            </div>
                        </FadeIn>

                        {/* Responsibilities list removed from here and moved to a card-based section below */}
                    </div>

                    {/* Right Column: Image & Tech Stack */}
                    <div className="relative pt-12 lg:pt-0">
                        {/* Expert Image Container */}
                        <FadeIn delay={0.4}>
                            <div className="relative w-full aspect-[4/5] lg:aspect-[4/6] -mb-32 lg:-mb-48 group">
                                {/* Ambient Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-${isArchitect ? 'purple-600' : '[#19687A]'}/20 to-transparent blur-[120px] -z-10 scale-150 transition-transform duration-700 group-hover:scale-[1.6]`} />

                                {/* Image with mask (fade bottom) */}
                                <div className="w-full h-full [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]">
                                    <img
                                        src={expertImg}
                                        alt={data.title}
                                        className="w-full h-full object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </FadeIn>

                        {/* Tech Stack will be moved to its own section below */}
                    </div>
                </div>

                {/* Profile Detailed Section */}
                <section className="py-24 border-t border-white/5">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <FadeIn>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center p-1.5" style={{ borderColor: accentColor }}>
                                        <div className="w-full h-full rounded-full" style={{ backgroundColor: accentColor }} />
                                    </div>
                                    <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mt-1">
                                        {data.profile.title}
                                    </h2>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="lg:col-span-8">
                            <FadeIn delay={0.2}>
                                <div className="space-y-8">
                                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                                        {data.profile.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Key Responsibilities Section */}
                <section className="py-24 border-t border-white/5">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <FadeIn>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center p-1.5" style={{ borderColor: accentColor }}>
                                        <div className="w-full h-full rounded-full" style={{ backgroundColor: accentColor }} />
                                    </div>
                                    <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mt-1">
                                        {language === 'es' ? 'Responsabilidades Clave:' : 'Key Responsibilities:'}
                                    </h2>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="lg:col-span-8">
                            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {(isArchitect ? [
                                    {
                                        title: language === 'es' ? 'Diseño de Soluciones' : 'Solution Design',
                                        desc: language === 'es' ? 'Creación de arquitecturas de sistemas para la integración de LLMs (Large Language Models) y agentes autónomos.' : 'Creation of system architectures for the integration of LLMs (Large Language Models) and autonomous agents.'
                                    },
                                    {
                                        title: language === 'es' ? 'Selección de Stack Tecnológico' : 'Technology Stack Selection',
                                        desc: language === 'es' ? 'Evaluación y selección de los modelos, bases de datos vectoriales y frameworks más adecuados para cada caso de uso.' : 'Evaluation and selection of the most suitable models, vector databases, and frameworks for each use case.'
                                    },
                                    {
                                        title: language === 'es' ? 'Seguridad y Gobernanza' : 'Security and Governance',
                                        desc: language === 'es' ? 'Garantizar la privacidad de los datos, el cumplimiento normativo (compliance) y la mitigación de alucinaciones en los modelos.' : 'Ensuring data privacy, regulatory compliance, and mitigation of hallucinations in models.'
                                    },
                                    {
                                        title: language === 'es' ? 'Liderazgo Técnico' : 'Technical Leadership',
                                        desc: language === 'es' ? 'Guiar a los equipos de desarrollo y definir las mejores prácticas para el ciclo de vida de la IA.' : 'Guiding development teams and defining best practices for the AI life cycle.'
                                    }
                                ] : [
                                    {
                                        title: language === 'es' ? 'Integración de Modelos' : 'Model Integration',
                                        desc: language === 'es' ? 'Conexión de aplicaciones con APIs de OpenAI, Anthropic, Gemini o modelos open-source.' : 'Connecting applications with OpenAI, Anthropic, Gemini APIs or open-source models.'
                                    },
                                    {
                                        title: language === 'es' ? 'Ingeniería de Prompts' : 'Prompt Engineering',
                                        desc: language === 'es' ? 'Refinamiento y optimización de instrucciones para maximizar la precisión y utilidad de las respuestas de la IA.' : 'Refining and optimizing instructions to maximize the accuracy and utility of AI responses.'
                                    },
                                    {
                                        title: language === 'es' ? 'Desarrollo de Agentes y RAG' : 'Agent and RAG Development',
                                        desc: language === 'es' ? 'Construcción de sistemas de Generación Aumentada por Recuperación (RAG) para conectar la IA con los datos internos de tu empresa.' : 'Building Retrieval Augmented Generation (RAG) systems to connect AI with your company\'s internal data.'
                                    },
                                    {
                                        title: language === 'es' ? 'Despliegue y Pruebas' : 'Deployment and Testing',
                                        desc: language === 'es' ? 'Puesta en producción de las soluciones, monitoreo de latencia y optimización de costos de consumo (tokens).' : 'Deploying solutions into production, monitoring latency, and optimizing consumption costs (tokens).'
                                    }
                                ]).map((card: any, i: number) => (
                                    <StaggerItem key={i}>
                                        <div className="p-6 bg-[#0A0A0B]/50 border border-white/5 rounded-[1rem] hover:border-white/10 transition-all group h-full">
                                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <Layers className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                            </div>
                                            <h4 className="text-lg md:text-xl text-white font-bold mb-3">
                                                {card.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="py-24 border-t border-white/5">
                    <PlzTechStackCard isArchitect={isArchitect} language={language} />
                </section>

                {/* Ideal For Section */}
                <section className="py-24 border-t border-white/5">
                    <div className="mb-16">
                        <FadeIn>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center p-1.5" style={{ borderColor: accentColor }}>
                                    <div className="w-full h-full rounded-full" style={{ backgroundColor: accentColor }} />
                                </div>
                                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mt-1">
                                    {isArchitect
                                        ? (language === 'es' ? 'Escenarios de Impacto Estratégico' : 'Strategic Impact Scenarios')
                                        : (language === 'es' ? 'Agilidad y Despliegue Táctico' : 'Agility and Tactical Deployment')}
                                </h2>
                            </div>
                            <p className="text-2xl md:text-3xl text-gray-400 font-light leading-relaxed max-w-3xl">
                                {isArchitect
                                    ? (language === 'es' ? 'Visionando la infraestructura del mañana.' : 'Envisioning tomorrow\'s infrastructure.')
                                    : (language === 'es' ? 'De la teoría al código en tiempo récord.' : 'From theory to code in record time.')}
                            </p>
                        </FadeIn>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {(isArchitect ? [
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
                        ]).map((card: any, i: number) => {
                            const icons = [Zap, Rocket, Shield];
                            const IconComp = icons[i];

                            return (
                                <StaggerItem key={i}>
                                    <div className="h-full bg-[#0A0A0B]/50 backdrop-blur-xl border border-white/5 rounded-[1.5rem] p-8 lg:p-10 hover:border-white/10 transition-all duration-500 group">
                                        <div className="flex items-center justify-between mb-8">
                                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                                                {card.tag}
                                            </span>
                                            <IconComp className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-2xl font-light text-white mb-6 leading-tight group-hover:translate-x-1 transition-transform">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-400 font-light leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </section>
            </main>

            <PlzFooter />
        </div>
    );
};

export default WebPlzExpertDetailPage;
