import { StaggerContainer, StaggerItem } from './PlzMotion';
import { useLanguage } from '../../context/LanguageContext';
import PlzChatSimulation from './PlzChatSimulation';

const PlzBentoGrid = () => {
    const { t } = useLanguage();

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-sansation">
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">

                {/* Agente AI Hub - Spans 2 columns on large screens */}
                <StaggerItem className="lg:col-span-2">
                    <div className="h-full border border-white/5 bg-[#0a0f12] rounded-3xl p-8 flex flex-col hover:border-white/10 transition-colors group !h-[580px]">
                        <div className="mb-8">
                            <h3 className="text-2xl font-medium text-white mb-3">{t.plzPlatform.bento.hub.title}</h3>
                            <p className="text-gray-400 font-light leading-relaxed max-w-xl">
                                {t.plzPlatform.bento.hub.desc}
                            </p>
                        </div>
                        {/* Image Background */}
                        <div className="lg:h-auto flex-grow w-full rounded-2xl bg-gradient-to-br from-blue-900/10 to-black border border-white/5 flex items-center justify-center lg:min-h-[250px] relative overflow-hidden">
                            <img
                                src="/plz/platform/agente.png"
                                alt="Agent Orchestration"
                                className="absolute  inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-500 transform group-hover:scale-[1.1]"
                            />
                        </div>
                    </div>
                </StaggerItem>

                {/* Automatización Agenética - Spans 2 rows on large screens */}
                <StaggerItem className="lg:col-span-1 lg:row-span-2">
                    <div className="h-full border border-white/5 bg-[#0a0f12] rounded-3xl p-8 flex flex-col hover:border-white/10 transition-colors">
                        <div className="mb-8">
                            <h3 className="text-2xl font-medium text-white mb-3">{t.plzPlatform.bento.automation.title}</h3>
                            <p className="text-gray-400 font-light leading-relaxed">
                                {t.plzPlatform.bento.automation.desc}
                            </p>
                        </div>
                        {/* Chat Simulation Component */}
                        <div className="flex-grow w-full rounded-2xl bg-[#0d1117] border border-white/5 min-h-[500px] relative overflow-hidden shadow-inner">
                            <PlzChatSimulation />
                        </div>
                    </div>
                </StaggerItem>

                {/* Integraciones */}
                <StaggerItem className="lg:col-span-1">
                    <div className="h-full border border-white/5 bg-[#0a0f12] rounded-3xl p-8 flex flex-col hover:border-white/10 transition-colors group">
                        <div className="mb-8">
                            <h3 className="text-2xl font-medium text-white mb-3">{t.plzPlatform.bento.integrations.title}</h3>
                            <p className="text-gray-400 font-light leading-relaxed">
                                {t.plzPlatform.bento.integrations.desc}
                            </p>
                        </div>
                        {/* Image Background */}
                        <div className="h-[230px] lg:h-auto flex-grow w-full rounded-2xl bg-gradient-to-tr from-purple-900/10 to-black border border-white/5 flex items-center justify-center lg:min-h-[250px] relative overflow-hidden">
                            <img
                                src="/plz/platform/datadriven.png"
                                alt="Data-Driven Decisions"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-500"
                            />
                        </div>
                    </div>
                </StaggerItem>

                {/* Herramientas de IA */}
                <StaggerItem className="lg:col-span-1">
                    <div className="h-full border border-white/5 bg-[#0a0f12] rounded-3xl p-8 flex flex-col hover:border-white/10 transition-colors group">
                        <div className="mb-8">
                            <h3 className="text-2xl font-medium text-white mb-3">{t.plzPlatform.bento.tools.title}</h3>
                            <p className="text-gray-400 font-light leading-relaxed">
                                {t.plzPlatform.bento.tools.desc}
                            </p>
                        </div>
                        {/* Image Background */}
                        <div className="h-[230px] lg:h-auto flex-grow w-full rounded-2xl bg-gradient-to-br from-blue-900/10 to-black border border-white/5 flex items-center justify-center lg:min-h-[250px] relative overflow-hidden">
                            <img
                                src="/plz/platform/mastra.png"
                                alt="Mastra Framework"
                                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 "
                            />
                        </div>
                    </div>
                </StaggerItem>

            </StaggerContainer>
        </section>
    );
};

export default PlzBentoGrid;
