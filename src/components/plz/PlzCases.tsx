import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from './PlzMotion';

const cases = [
    { id: 'mining', title: 'Minería' },
    { id: 'retail', title: 'Retail' },
    { id: 'performance', title: 'Performance' },
];

const tabData: Record<string, { image: string, title: string, desc: string, btn: string, link?: string, tags: { icon: string, text: string }[] }> = {
    mining: {
        image: '/mining_operations.png',
        title: 'Minería Autónoma',
        desc: 'Detecta condiciones inseguras y automatiza procesos en tiempo real con agentes que operan en sistemas de faena reduciendo tiempos de inactividad.',
        btn: 'Conocer el caso',
        tags: [
            { icon: '🚜', text: 'Optimización de Rutas AI Agent' },
            { icon: '⚠️', text: 'Monitor de Seguridad AI Agent' },
            { icon: '⚙️', text: 'Mando de Equipos Predictivo' },
            { icon: '📊', text: 'Análisis de Mineral AI Agent' },
        ],
        link: '/web/plz-mining'
    },
    retail: {
        image: '/retail_analytics.png',
        title: 'Retail Intelligence Suite',
        desc: 'Previene quiebres de stock y personaliza comunicaciones. Agentes que interpretan la demanda omnicanal para optimizar inventarios y aumentar conversiones.',
        btn: 'Conocer el caso',
        tags: [
            { icon: '📦', text: 'Control de Inventario AI Agent' },
            { icon: '🎯', text: 'Generador de Promociones AI' },
            { icon: '🛒', text: 'Soporte E-Commerce AI Agent' },
            { icon: '📉', text: 'Predicción de Demanda AI' },
        ],
        link: '/web/plz-retail'
    },
    performance: {
        image: '/performance_analytics.png',
        title: 'Rendimiento Corporativo',
        desc: 'Consolida silos de datos financieros en un dashboard de control. Obtén insights predictivos y agentes que generan reportes de salud financiera diariamente.',
        btn: 'Conocer el caso',
        tags: [
            { icon: '📈', text: 'Analista Financiero AI Agent' },
            { icon: '📋', text: 'Generador de Reportes AI' },
            { icon: '🛡️', text: 'Detección de Fraude AI Agent' },
            { icon: '💡', text: 'Recomendador de Inversión' },
        ],
        link: '/web/plz-performance'
    }
};

const PlzCases = () => {
    const [activeTab, setActiveTab] = useState('mining');
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveTab((current) => {
                const currentIndex = cases.findIndex(c => c.id === current);
                const nextIndex = (currentIndex + 1) % cases.length;
                return cases[nextIndex].id;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [isHovered]);

    const currentData = tabData[activeTab];

    return (
        <section className="relative w-full bg-[#040809] py-24 font-sansation">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Headers */}
                <StaggerContainer className="text-center mb-12 flex flex-col items-center">
                    <StaggerItem>
                        <div className="px-4 py-1.5 border border-white/10 rounded-full text-xs text-gray-400 mb-6 inline-block tracking-widest uppercase bg-white/5">
                            Casos aplicados
                        </div>
                    </StaggerItem>
                    <StaggerItem>
                        <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight max-w-4xl mb-6">
                            Aplicación real del agente en distintas industrias, rubros y negocios.
                        </h2>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed">
                            Diseñado para la escalabilidad y seguridad<br className="hidden md:block" />
                            identificando los datos y ayudando a la toma de decisiones.
                        </p>
                    </StaggerItem>
                </StaggerContainer>

                {/* Tabs */}
                <FadeIn delay={0.4}>
                    <div className="flex justify-center mb-12 relative">
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes fillProgress {
                                0% { width: 0%; }
                                100% { width: 100%; }
                            }
                        `}} />
                        <div className="flex p-2 overflow-x-auto w-full md:w-auto gap-2">
                            {cases.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative overflow-hidden px-6 md:px-12 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${activeTab === tab.id
                                        ? 'bg-[#19687A] text-white shadow-lg shadow-[#19687A]/20'
                                        : 'text-gray-400 hover:text-white bg-transparent'
                                        }`}
                                >
                                    <span className="relative z-10">{tab.title}</span>
                                    {activeTab === tab.id && (
                                        /* Progress border that fills left to right */
                                        <div
                                            className="absolute bottom-0 left-0 h-[3px] bg-white/70"
                                            style={{
                                                animation: 'fillProgress 4s linear',
                                                animationPlayState: isHovered ? 'paused' : 'running'
                                            }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* Content Card */}
                <FadeIn delay={0.6}>
                    <div
                        className="w-full group relative rounded-[2rem] overflow-hidden bg-[#0a0f12] aspect-square md:aspect-[16/7] border border-white/10 hover:border-[#19687A]/50 transition-all duration-500 shadow-2xl cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => {
                            if (currentData.link) {
                                navigate(currentData.link);
                            }
                        }}
                    >

                        {/* Preload images logic */}
                        <div className="hidden">
                            {Object.values(tabData).map(t => <img key={t.image} src={t.image} alt="" />)}
                        </div>

                        {/* Background Image / Overlay with Hover Transition */}
                        {Object.entries(tabData).map(([key, data]) => (
                            <div
                                key={key}
                                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out transform origin-right 
                                    ${activeTab === key ? 'opacity-100 scale-130 group-hover:scale-75 md:group-hover:scale-100 group-hover:translate-x-12 md:group-hover:translate-x-32 group-hover:opacity-60' : 'opacity-0 scale-130 pointer-events-none'}`}
                                style={{ backgroundImage: `url('${data.image}')` }}
                            ></div>
                        ))}

                        {/* Heavy dark gradient overlay to make text readable on the left */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#040809] via-[#040809]/80 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040809] via-transparent to-transparent opacity-80"></div>

                        {/* Content inside the card */}
                        <div className="relative z-10 w-full h-full p-8 md:p-16 flex flex-col justify-end">
                            <div className="max-w-2xl transform transition-transform duration-500 group-hover:-translate-y-2" key={`content-${activeTab}`}>
                                <h3 className="text-2xl md:text-3xl text-white font-medium mb-4 tracking-tight">
                                    {currentData.title}
                                </h3>
                                <p className="text-md md:text-lg text-gray-300 font-light mb-8 leading-relaxed">
                                    {currentData.desc}
                                </p>

                                {/* Tags/Badges Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-xl">
                                    {currentData.tags.map((tag, idx) => (
                                        <div key={idx} className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 group-hover:border-[#19687A]/30 transition-colors">
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[18px]">{tag.icon}</div>
                                            <span className="text-sm font-light text-gray-300">{tag.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={() => {
                                        if (currentData.link) {
                                            navigate(currentData.link);
                                        }
                                    }}
                                    className="flex items-center gap-2 px-6 py-3 text-[#17BBCD] hover:text-[#19687A] border border-[#17BBCD] hover:border-[#19687A] rounded-xl text-white text-sm font-medium transition-all"
                                >
                                    {currentData.btn}
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};

export default PlzCases;
