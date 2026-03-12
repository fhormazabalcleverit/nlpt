const PlzBentoGrid = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-sansation">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">

                {/* Agente AI Hub - Spans 2 columns on large screens */}
                <div className="lg:col-span-2 border border-white/5 bg-[#0a0f12] rounded-3xl p-8 flex flex-col hover:border-white/10 transition-colors">
                    <div className="mb-8">
                        <h3 className="text-2xl font-medium text-white mb-3">Agente AI Hub</h3>
                        <p className="text-gray-400 font-light leading-relaxed max-w-xl">
                            La interfaz de usuario de Beam, de fácil navegación, permite realizar tareas sin problemas en cuestión de segundos.
                        </p>
                    </div>
                    {/* Image Placeholder */}
                    <div className="flex-grow w-full rounded-2xl bg-gradient-to-br from-blue-900/40 to-black border border-white/5 flex items-center justify-center min-h-[250px] relative overflow-hidden">
                        <span className="text-gray-600 font-light text-sm">Espacio para imagen Hub</span>
                    </div>
                </div>

                {/* Automatización Agenética - Spans 2 rows on large screens */}
                <div className="lg:col-span-1 lg:row-span-2 border border-white/5 bg-[#0a0f12] rounded-3xl p-8 flex flex-col hover:border-white/10 transition-colors">
                    <div className="mb-8">
                        <h3 className="text-2xl font-medium text-white mb-3">Automatización Agenética</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            De principio a fin, Beam permite automatizar completamente los procesos, por compleja que sea la tarea.
                        </p>
                    </div>
                    {/* Image Placeholder */}
                    <div className="flex-grow w-full rounded-2xl bg-gradient-to-b from-blue-900/30 to-black border border-white/5 flex items-center justify-center min-h-[400px] relative overflow-hidden">
                        <span className="text-gray-600 font-light text-sm">Espacio para imagen Automatización</span>
                    </div>
                </div>

                {/* Integraciones */}
                <div className="lg:col-span-1 border border-white/5 bg-[#0a0f12] rounded-3xl p-8 flex flex-col hover:border-white/10 transition-colors">
                    <div className="mb-8">
                        <h3 className="text-2xl font-medium text-white mb-3">Integraciones</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Nuestra amplia selección de integraciones permite a nuestros agentes trabajar con las mismas herramientas que usted.
                        </p>
                    </div>
                    {/* Image Placeholder */}
                    <div className="flex-grow w-full rounded-2xl bg-gradient-to-tr from-purple-900/30 to-black border border-white/5 flex items-center justify-center min-h-[250px] relative overflow-hidden">
                        <span className="text-gray-600 font-light text-sm">Espacio para imagen Integraciones</span>
                    </div>
                </div>

                {/* Herramientas de IA */}
                <div className="lg:col-span-1 border border-white/5 bg-[#0a0f12] rounded-3xl p-8 flex flex-col hover:border-white/10 transition-colors">
                    <div className="mb-8">
                        <h3 className="text-2xl font-medium text-white mb-3">Herramientas de IA</h3>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Utilice nuestras herramientas de IA preexistentes o cree fácilmente las suyas propias para adaptarlas a sus necesidades exactas.
                        </p>
                    </div>
                    {/* Image Placeholder */}
                    <div className="flex-grow w-full rounded-2xl bg-gradient-to-br from-blue-900/20 to-black border border-white/5 flex items-center justify-center min-h-[250px] relative overflow-hidden">
                        <span className="text-gray-600 font-light text-sm">Espacio para imagen Herramientas</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PlzBentoGrid;
