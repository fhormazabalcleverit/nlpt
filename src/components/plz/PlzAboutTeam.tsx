const teamMembers = [
    {
        name: 'Jonas Diezun',
        role: 'Co-Fundador & CEO',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
        name: 'Aqib Ansari',
        role: 'Co-Fundador y CTO',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    },
    {
        name: 'Burak Özapşar',
        role: 'Co-Fundador y Arquitecto Jefe de Sistemas',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
    }
];

const PlzAboutTeam = () => {
    return (
        <section className="bg-[#040809] py-20 px-4 sm:px-6 lg:px-8 font-sansation text-center max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-4 mt-8">
                <span className="text-gray-400 text-sm tracking-widest uppercase">
                    Equipo de Pulzen AI
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-white max-w-4xl leading-tight">
                    Transformando empresas de ser curiosas sobre IA a nativas en IA
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mt-4">
                    Construimos agentes de IA auto-aprendices y el sistema operativo
                    organizacional donde la inteligencia se multiplica a través del descubrimiento
                    autónomo, transformando las empresas de curiosas sobre la IA a nativas de IA.
                </p>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="bg-[#0c0c0c] rounded-3xl overflow-hidden border border-white/5 group hover:border-white/10 transition-colors">
                        <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border-b border-white/5 relative">
                            <img src={member.image} alt={member.name} className="object-cover object-top w-full h-full transform group-hover:scale-105 transition-transform duration-500 origin-bottom" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-medium text-white mb-2">{member.name}</h3>
                            <p className="text-gray-400 text-sm mb-6 h-10">{member.role}</p>
                            <a href="#" className="inline-flex items-center text-white font-medium hover:text-gray-300 transition-colors">
                                Aprender más <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PlzAboutTeam;
