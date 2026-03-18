import { useNavigate } from 'react-router-dom';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './PlzMotion';
import { useLanguage } from '../../context/LanguageContext';

const PlzCasesList = () => {
    const navigate = useNavigate();
    const { t } = useLanguage();

    const casesItems = t.plzCasesList.items;
    
    const casesWithIcons = [
        { id: 'mining', icons: ['🚜', '⚠️', '⚙️', '📊'], image: '/mining_operations.png', link: '/mining', demoLink: 'https://mining-llmapp.cleveritgroup.ai/' },
        { id: 'retail', icons: ['📦', '🎯', '🛒', '📉'], image: '/retail_analytics.png', link: '/retail', demoLink: 'https://retail-llmapp.cleveritgroup.ai/' },
        { id: 'performance', icons: ['📈', '📋', '🛡️', '💡'], image: '/performance_analytics.png', link: '/performance', demoLink: 'https://pulzen-llmapp.cleveritgroup.ai/' }
    ];

    const displayCases = casesWithIcons.map(c => {
        const trans = casesItems[c.id];
        return {
            ...c,
            ...trans,
            tags: trans.tags.map((text: string, i: number) => ({ icon: c.icons[i], text }))
        };
    });

    return (
        <section className="font-sansation w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="flex flex-col items-center text-center mb-20">
                {/* Badge */}
                <StaggerItem>
                    <div className="mb-8 inline-flex items-center px-5 py-1.5 rounded-full border border-gray-700 bg-black/40 backdrop-blur-sm text-sm font-light text-gray-300 shadow-sm">
                        {t.plzCasesList.badge}
                    </div>
                </StaggerItem>

                {/* Title */}
                <StaggerItem>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.2] mb-8 text-white max-w-4xl">
                        {t.plzCasesList.title}
                    </h1>
                </StaggerItem>

                {/* Description */}
                <StaggerItem>
                    <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed max-w-3xl mb-12">
                        {t.plzCasesList.description}
                    </p>
                </StaggerItem>
            </StaggerContainer>

            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {displayCases.map((data) => (
                    <div
                        key={data.id}
                        className="w-full group relative rounded-[2rem] overflow-hidden bg-[#0a0f12] aspect-square md:aspect-[16/7] border border-white/10 hover:border-[#19687A]/50 transition-all duration-500 shadow-2xl cursor-pointer"
                        onClick={() => {
                            if (data.link) {
                                navigate(data.link);
                            }
                        }}
                    >
                        {/* Background Image with Hover Transition */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out transform scale-130 group-hover:scale-75 md:group-hover:scale-100 group-hover:translate-x-12 md:group-hover:translate-x-32 group-hover:opacity-60 origin-right"
                            style={{ backgroundImage: `url('${data.image}')` }}
                        ></div>

                        {/* Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#040809] via-[#040809]/80 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040809] via-transparent to-transparent opacity-80"></div>

                        <div className="relative z-10 w-full h-full p-8 md:p-16 flex flex-col justify-end">
                            <div className="max-w-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                                <h3 className="text-2xl md:text-3xl text-white font-medium mb-4 tracking-tight">
                                    {data.title}
                                </h3>
                                <p className="text-md md:text-lg text-gray-300 font-light mb-8 leading-relaxed">
                                    {data.desc}
                                </p>

                                {/* Tags/Badges Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-xl">
                                    {data.tags.map((tag: any, idx: number) => (
                                        <div key={idx} className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 group-hover:border-[#19687A]/30 transition-colors">
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[18px]">{tag.icon}</div>
                                            <span className="text-sm font-light text-gray-300">{tag.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button 
                                        className="flex items-center justify-center gap-2 px-6 py-3 text-[#17BBCD] hover:text-[#19687A] border border-[#17BBCD] hover:border-[#19687A] rounded-xl text-sm font-medium transition-all group-hover:bg-[#19687A]/10"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (data.link) {
                                                navigate(data.link);
                                            }
                                        }}
                                    >
                                        {data.btn}
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </button>

                                    {data.demoLink && (
                                        <a
                                            href={data.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#19687A] hover:bg-[#17BBCD] rounded-xl text-white text-sm font-medium transition-all shadow-lg"
                                        >
                                            {t.plzCases.demoBtn}
                                            <ExternalLink className="w-4 h-4 ml-1" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PlzCasesList;
