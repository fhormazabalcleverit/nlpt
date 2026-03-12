import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const casesData = [
    {
        id: 'mining',
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
    {
        id: 'retail',
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
    {
        id: 'performance',
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
];

const PlzCasesList = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-[#040809] pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sansation w-full">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 mt-16 mb-20 text-center">
                <span className="text-gray-400 text-sm tracking-widest uppercase">
                    Casos aplicados
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white max-w-4xl leading-tight">
                    Aplicación real del agente en distintas industrias, rubros y negocios.
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mt-4">
                    Diseñado para la escalabilidad y seguridad identificando los datos y ayudando a la toma de decisiones.
                </p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {casesData.map((data) => (
                    <div
                        key={data.id}
                        className="w-full relative rounded-[2rem] overflow-hidden bg-[#11161A] aspect-square md:aspect-[16/7] border border-white/10 hover:border-[#19687A] transition-all duration-300 shadow-2xl cursor-pointer"
                        onClick={() => {
                            if (data.link) {
                                navigate(data.link);
                            }
                        }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                            style={{ backgroundImage: `url('${data.image}')` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#040809] via-[#040809]/80 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040809] via-transparent to-transparent opacity-80"></div>

                        <div className="relative z-10 w-full h-full p-8 md:p-16 flex flex-col justify-end">
                            <div className="max-w-2xl">
                                <h3 className="text-2xl md:text-3xl text-white font-medium mb-4 tracking-tight">
                                    {data.title}
                                </h3>
                                <p className="text-md md:text-lg text-gray-300 font-light mb-8 leading-relaxed">
                                    {data.desc}
                                </p>

                                {/* Tags/Badges Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-xl">
                                    {data.tags.map((tag, idx) => (
                                        <div key={idx} className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[18px]">{tag.icon}</div>
                                            <span className="text-sm font-light text-gray-300">{tag.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <button className="flex items-center gap-2 px-6 py-3 text-[#17BBCD] hover:text-[#19687A] border border-[#17BBCD] hover:border-[#19687A] rounded-xl text-white text-sm font-medium transition-all">
                                    {data.btn}
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PlzCasesList;
