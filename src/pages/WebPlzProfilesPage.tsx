import { useState } from 'react';
import { Link } from 'react-router-dom';
import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';
import { useLanguage } from '../context/LanguageContext';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/plz/PlzMotion';
import DynamicSEO from '../components/DynamicSEO';
import { Shield, Code, Zap, Lightbulb, Cpu, Layers, ArrowUpRight } from 'lucide-react';

const HoverBadge = ({ color, x, y, active }: { color: string, x: number, y: number, active: boolean }) => {
    return (
        <div
            className={`pointer-events-none absolute z-50 transition-all duration-300 ease-out ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
            style={{
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)'
            }}
        >
            <div className="relative w-28 h-28 rounded-full flex items-center justify-center shadow-2xl overflow-visible" style={{ backgroundColor: color }}>
                <ArrowUpRight className="text-white w-8 h-8" />
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]">
                    <defs>
                        <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                    </defs>
                    <text className="text-[7px] uppercase tracking-[0.2em] fill-white font-light">
                        <textPath xlinkHref="#circlePath" startOffset="0%">
                            Conoce los detalles • Conoce los detalles •
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
};

const WebPlzProfilesPage = () => {
    const { t, language } = useLanguage();
    const data = t.plzExperts;

    const [archHover, setArchHover] = useState({ x: 0, y: 0, active: false });
    const [devHover, setDevHover] = useState({ x: 0, y: 0, active: false });

    if (!data) return null;

    const titleHighlight = language === 'es' ? 'la fuerza del developer.' : "The developer's strength.";
    const titleParts = data.hero.title.split(titleHighlight);

    return (
        <div className="min-h-screen bg-[#040809] text-white selection:bg-[#19687A]/30 font-sansation">
            <DynamicSEO
                title={data.hero.seoTitle}
                description={data.hero.seoSubtitle}
            />
            <PlzNavbar />

            {/* Background Glows */}
            <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
                <div
                    className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] blur-[180px] opacity-10 rounded-full bg-purple-600/20"
                />
                <div
                    className="absolute top-[20%] -right-[15%] w-[60%] h-[60%] blur-[200px] opacity-10 rounded-full bg-[#19687A]/20"
                />
                <div
                    className="absolute -bottom-[15%] left-[20%] w-[45%] h-[45%] blur-[160px] opacity-15 rounded-full bg-purple-600/10"
                />
                <div
                    className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] blur-[140px] opacity-10 rounded-full bg-[#17BBCD]/10"
                />
            </div>

            <main className="overflow-hidden relative">
                {/* Hero Section */}
                <section
                    className="relative w-full bg-[#040809] pt-32 pb-20 lg:pt-52 lg:pb-32 font-sansation overflow-hidden"
                    style={{
                        backgroundImage: "url('/plz/brand/background-hero.svg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <FadeIn>
                                <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-light text-white tracking-tight leading-[1.1] mb-6">
                                    {titleParts[0]}
                                    <br className="hidden md:block" />
                                    <span className="text-[#B81769]">{titleHighlight}</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                                    {data.hero.subtitle}
                                </p>
                                <button
                                    onClick={() => document.getElementById('profiles')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group relative px-6 py-3 bg-[#19687A] rounded-xl font-medium transition-all hover:bg-[#17BBCD] active:scale-95 shadow-lg shadow-[#19687A]/20"
                                >
                                    {data.hero.cta}
                                    <Zap className="inline-block ml-2 w-4 h-4 group-hover:animate-pulse" />
                                </button>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Profiles Section */}
                <section id="profiles" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <StaggerContainer>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Architect Profile */}
                            <StaggerItem>
                                <div
                                    className="group relative pt-48 h-full"
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        setArchHover({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
                                    }}
                                    onMouseLeave={() => setArchHover(prev => ({ ...prev, active: false }))}
                                >
                                    <HoverBadge color="#9333ea" x={archHover.x} y={archHover.y} active={archHover.active} />

                                    {/* Floating Expert Image */}
                                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full h-[600px] -z-20 pointer-events-none group-hover:-translate-y-6 transition-transform duration-700 ease-out">
                                        <img
                                            src="/plz/profiles/01.png"
                                            alt={data.architect.name}
                                            className="w-full h-full object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
                                        />
                                    </div>

                                    <Link to="/clever-ai-architect" className="block h-full cursor-pointer">
                                        <div className="relative h-full bg-black/[0.7] border border-white/10 rounded-[2rem] p-8 lg:p-10 pt-20 backdrop-blur-xl transition-all group-hover:bg-black/[0.9] group-hover:border-white/20 shadow-2xl">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[60px] rounded-full group-hover:bg-purple-600/20 transition-all pointer-events-none" />

                                            <div className="mb-8 relative mt-4">
                                                <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                    <Shield className="text-white w-8 h-8" />
                                                </div>
                                                <h3 className="text-4xl font-light mb-2">{data.architect.name}</h3>
                                                <p className="text-purple-400 font-medium mb-4 uppercase tracking-widest text-[14px]">{data.architect.tagline}</p>
                                                <p className="text-gray-400 text-lg font-light leading-relaxed">
                                                    {data.architect.summary}
                                                </p>
                                            </div>

                                            <div className="space-y-6 relative">
                                                <div>
                                                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                                        <Layers className="w-4 h-4" />
                                                        Responsabilidades
                                                    </h4>
                                                    <ul className="grid grid-cols-1 gap-3">
                                                        {data.architect.responsibilities.map((item: string, idx: number) => (
                                                            <li key={idx} className="flex items-start gap-2 text-gray-400 text-lg font-light">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(147,51,234,0.8)]" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="pt-6 border-t border-white/5">
                                                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                                        Tech Stack
                                                    </h4>
                                                    <div className="bg-purple-600/5 p-6 rounded-2xl border border-purple-600/10 transition-all group-hover:bg-purple-600/10">
                                                        <div className="flex flex-wrap items-center gap-6 mb-4">
                                                            <img src="/plz/profiles/github.svg" alt="GitHub Copilot" className="h-5 md:h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                                                            <div className="w-[1px] h-4 bg-white/10 hidden sm:block" />
                                                            <img src="/plz/profiles/claude.svg" alt="Claude AI" className="h-5 md:h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                                                        </div>
                                                        <p className="text-gray-400 text-sm font-light leading-relaxed italic">
                                                            {data.architect.techStack.match(/\(([^)]+)\)/)?.[1] || data.architect.techStack}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </StaggerItem>

                            {/* Developer Profile */}
                            <StaggerItem>
                                <div
                                    className="group relative pt-48 h-full"
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        setDevHover({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
                                    }}
                                    onMouseLeave={() => setDevHover(prev => ({ ...prev, active: false }))}
                                >
                                    <HoverBadge color="#19687A" x={devHover.x} y={devHover.y} active={devHover.active} />

                                    {/* Floating Expert Image */}
                                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full h-[600px] -z-20 pointer-events-none group-hover:-translate-y-6 transition-transform duration-700 ease-out">
                                        <img
                                            src="/plz/profiles/02.png"
                                            alt={data.developer.name}
                                            className="w-full h-full object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
                                        />
                                    </div>

                                    <Link to="/clever-ai-developer" className="block h-full cursor-pointer">
                                        <div className="relative h-full bg-black/[0.7] border border-white/10 rounded-[2rem] p-8 lg:p-10 pt-20 backdrop-blur-xl transition-all group-hover:bg-black/[0.9] group-hover:border-white/20 shadow-2xl">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#19687A]/10 blur-[60px] rounded-full group-hover:bg-[#19687A]/20 transition-all pointer-events-none" />

                                            <div className="mb-8 relative mt-4">
                                                <div className="w-14 h-14 bg-[#19687A]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                    <Code className="text-white w-8 h-8" />
                                                </div>
                                                <h3 className="text-4xl font-light mb-2">{data.developer.name}</h3>
                                                <p className="text-[#3ba6be] font-medium mb-4 uppercase tracking-widest text-[14px]">{data.developer.tagline}</p>
                                                <p className="text-gray-400 text-lg font-light leading-relaxed">
                                                    {data.developer.summary}
                                                </p>
                                            </div>

                                            <div className="space-y-6 relative">
                                                <div>
                                                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                                        <Lightbulb className="w-4 h-4" />
                                                        Responsabilidades
                                                    </h4>
                                                    <ul className="grid grid-cols-1 gap-3">
                                                        {data.developer.responsibilities.map((item: string, idx: number) => (
                                                            <li key={idx} className="flex items-start gap-2 text-gray-400 text-lg font-light">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[#19687A] mt-2.5 shrink-0 shadow-[0_0_8px_rgba(25,104,122,0.8)]" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="pt-6 border-t border-white/5">
                                                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                                        Tech Stack
                                                    </h4>
                                                    <div className="bg-[#19687A]/5 p-6 rounded-2xl border border-[#19687A]/10 transition-all group-hover:bg-[#19687A]/10">
                                                        <div className="flex flex-wrap items-center gap-6 mb-4">
                                                            <img src="/plz/profiles/github.svg" alt="GitHub Copilot" className="h-5 md:h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                                                            <div className="w-[1px] h-4 bg-white/10 hidden sm:block" />
                                                            <img src="/plz/profiles/claude.svg" alt="Claude AI" className="h-5 md:h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                                                        </div>
                                                        <p className="text-gray-400 text-sm font-light leading-relaxed italic">
                                                            {data.developer.techStack.match(/\(([^)]+)\)/)?.[1] || data.developer.techStack}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>
                </section>

                {/* Workflow Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="relative overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-3xl p-8 lg:p-16 backdrop-blur-md">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-50" />
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#19687A] to-transparent opacity-30 blur-sm" />

                            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                                <div className="lg:w-1/2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-[#19687A] uppercase tracking-[0.2em] mb-6">
                                        <Cpu className="w-3 h-3" />
                                        Metodología
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-light mb-6 tracking-tight leading-tight">
                                        {data.workflow.title}
                                    </h2>
                                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                                        {data.workflow.description}
                                    </p>
                                </div>
                                <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                                    <div className="group bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 p-8 rounded-2xl text-center flex flex-col items-center gap-3 transition-all duration-500 hover:-translate-y-1">
                                        <div className="text-4xl font-bold text-purple-400 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all">-40%</div>
                                        <div className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em]">Time to Market</div>
                                    </div>
                                    <div className="group bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 p-8 rounded-2xl text-center flex flex-col items-center gap-3 transition-all duration-500 hover:-translate-y-1">
                                        <div className="text-4xl font-bold text-[#19687A] group-hover:drop-shadow-[0_0_15px_rgba(25,104,122,0.5)] transition-all">10x</div>
                                        <div className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em]">Productividad</div>
                                    </div>
                                    <div className="bg-gradient-to-r from-[#19687A]/10 to-purple-600/10 border border-white/10 p-8 rounded-2xl text-center flex flex-col items-center gap-2 col-span-2">
                                        <div className="text-2xl font-bold text-white tracking-[0.3em] uppercase">Zero Compromise</div>
                                        <div className="text-xs text-gray-500 font-medium tracking-wide">Calidad de Código y Escalabilidad garantizada por expertos y herramientas de élite</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Use Cases Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
                                {language === 'es' ? 'En qué podemos ayudarte hoy' : 'How we can help you today'}
                            </h2>
                            <p className="text-gray-400 font-light max-w-2xl mx-auto">
                                {language === 'es' ? 'Escenarios reales para potenciar tu infraestructura con IA de élite.' : 'Real-world scenarios to power up your infrastructure with elite AI.'}
                            </p>
                        </FadeIn>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Layers className="w-8 h-8 text-purple-400" />,
                                title: language === 'es' ? 'Integración RAG' : 'RAG Integration',
                                desc: language === 'es' ? 'Conectamos tu IA con tus datos privados de forma segura.' : 'We securely connect your AI with your private data.'
                            },
                            {
                                icon: <Cpu className="w-8 h-8 text-[#19687A]" />,
                                title: language === 'es' ? 'Agentes Autónomos' : 'Autonomous Agents',
                                desc: language === 'es' ? 'Creamos flujos que deciden y ejecutan tareas por ti.' : 'We create workflows that decide and execute tasks for you.'
                            },
                            {
                                icon: <Zap className="w-8 h-8 text-yellow-400" />,
                                title: language === 'es' ? 'Optimización de Costos' : 'Cost Optimization',
                                desc: language === 'es' ? 'Arquitecturas eficientes para controlar el consumo de tokens.' : 'Efficient architectures to control token consumption.'
                            }
                        ].map((item, idx) => (
                            <StaggerItem key={idx}>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 group text-center h-full">
                                    <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-medium mb-4 text-white">{item.title}</h3>
                                    <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Final CTA Section */}
                <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 mb-20">
                    <FadeIn>
                        <div className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[2rem] p-12 lg:p-20 text-center relative overflow-hidden group">
                            {/* Animated Background Element */}
                            <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full group-hover:bg-purple-600/20 transition-all duration-700" />
                            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#19687A]/10 blur-[100px] rounded-full group-hover:bg-[#19687A]/20 transition-all duration-700" />

                            <div className="relative z-10 max-w-3xl mx-auto">
                                <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-8">
                                    {language === 'es' ? '¿Listo para desplegar el futuro?' : 'Ready to deploy the future?'}
                                </h2>
                                <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">
                                    {language === 'es' ? 'Agenda una sesión estratégica con nuestros expertos y descubre cómo la IA puede transformar tu arquitectura hoy mismo.' : 'Schedule a strategic session with our experts and discover how AI can transform your architecture today.'}
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <Link
                                        to="/contact"
                                        state={{ reasonIndex: 2 }}
                                        className="px-8 py-4 bg-[#3cdb7c] text-white rounded-xl font-bold transition-all hover:bg-[#2fb164] active:scale-95 shadow-xl shadow-[#3cdb7c]/20 min-w-[250px]"
                                    >
                                        {language === 'es' ? 'Comenzar una Alianza' : 'Start a Partnership'}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </section>
            </main>

            <PlzFooter />
        </div>
    );
};

export default WebPlzProfilesPage;
