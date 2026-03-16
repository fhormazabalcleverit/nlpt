const PlzAboutHero = () => {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 font-sansation text-center max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-6 mt-16">
                <span className="text-gray-400 text-sm tracking-widest uppercase">
                    Sobre nosotros
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white max-w-4xl leading-tight">
                    Creando el sistema operativo para que las organizaciones se conviertan en sistemas de inteligencia autoevolutivos
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mt-4">
                    Estamos construyendo agentes de inteligencia artificial generativa para ayudar
                    a las organizaciones a automatizar tareas manuales repetitivas, aumentar la
                    productividad y permitir que los equipos se concentren en el trabajo que
                    realmente importa.
                </p>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Placeholder images */}
                <div className="rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-96 relative group">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=800" alt="Team collaborating" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-96 relative group">
                    <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=600&h=800" alt="Networking" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-96 relative group">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=800" alt="Presentation" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
                </div>
            </div>

            <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 border-t border-white/5 pt-12">
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-medium text-white mb-2">50+</span>
                    <span className="text-gray-400">Miembros del equipo</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-medium text-white mb-2">5</span>
                    <span className="text-gray-400">Países</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-5xl font-medium text-white mb-2">1</span>
                    <span className="text-gray-400">Misión</span>
                </div>
            </div>
        </section>
    );
};

export default PlzAboutHero;
