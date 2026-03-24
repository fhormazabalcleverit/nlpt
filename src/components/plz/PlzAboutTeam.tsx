import { Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const PlzAboutTeam = () => {
    const { t } = useLanguage();

    const team = t.plzAbout?.team;
    const members = team?.members;

    const teamMembers = [
        {
            name: 'Carlos Gallardo',
            role: members?.carlos?.role || 'Master Chief Product Officer',
            image: `${import.meta.env.BASE_URL}plz/about/carlos-gallardo.png`,
            linkedin: members?.carlos?.linkedin,
            github: members?.carlos?.github,
        },
        {
            name: 'Francisco Maldonado',
            role: members?.francisco?.role || 'Head of Engineering & Engineering IA',
            image: `${import.meta.env.BASE_URL}plz/about/francisco-maldonado.png`,
            linkedin: members?.francisco?.linkedin,
            github: members?.francisco?.github,
        },
        {
            name: 'Julio Ferreira',
            role: members?.julio?.role || 'Fullstack Development - Innovation & AI',
            image: `${import.meta.env.BASE_URL}plz/about/julio-ferrerira.png`,
            linkedin: members?.julio?.linkedin,
            github: members?.julio?.github,
        },
        {
            name: 'Jesus Rangel',
            role: members?.jesus?.role || 'Fullstack Development - Innovation & AI',
            image: `${import.meta.env.BASE_URL}plz/about/jesus-rangel.png`,
            linkedin: members?.jesus?.linkedin,
            github: members?.jesus?.github,
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 font-sansation text-center max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-4 mt-8">
                <span className="text-gray-400 text-sm tracking-widest uppercase">
                    {t.plzAbout.team.badge}
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-white max-w-4xl leading-tight">
                    {t.plzAbout.team.title}
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mt-4">
                    {t.plzAbout.team.description}
                </p>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="bg-[#0c0c0c] rounded-3xl overflow-hidden border border-white/5 group hover:border-white/10 transition-colors flex flex-col">
                        <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border-b border-white/5 relative">
                            <img src={member.image} alt={member.name} className="object-cover object-top w-full h-full transform group-hover:scale-105 transition-transform duration-500 origin-bottom" />
                        </div>
                        <div className="p-8 flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-medium text-white mb-2">{member.name}</h3>
                                <p className="text-gray-400 text-sm mb-6">{member.role}</p>
                            </div>

                            <div className="flex gap-3 mt-auto">
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#17BBCD] hover:border-[#17BBCD] hover:bg-[#17BBCD]/10 transition-all duration-300"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                )}
                                {member.github && (
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PlzAboutTeam;
