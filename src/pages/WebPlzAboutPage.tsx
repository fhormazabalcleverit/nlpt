import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';
import PlzAboutHero from '../components/plz/PlzAboutHero';
import PlzAboutTeam from '../components/plz/PlzAboutTeam';
import PlzFAQ from '../components/plz/PlzFAQ';
import PlzCTA from '../components/plz/PlzCTA';
import { FadeIn } from '../components/plz/PlzMotion';
import DynamicSEO from '../components/DynamicSEO';
import { useLanguage } from '../context/LanguageContext';

const WebPlzAboutPage = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-[#040809] flex flex-col font-sansation">
            <DynamicSEO 
                title={`${t.plzNavbar.about} | CleverIT AI`}
                description={t.plzAbout.subtitle}
                url={window.location.href}
            />
            <PlzNavbar />
            <main className="flex-grow pt-32 pb-20 lg:pt-40 lg:pb-32 relative">
                {/* Background wrapper for blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 -left-[10%] w-[1000px] h-[1000px] bg-blue-900/30 rounded-full blur-[250px]"></div>
                    <div className="absolute top-[10%] -right-[15%] w-[800px] h-[800px] bg-blue-900/40 rounded-full blur-[200px]"></div>
                    <div className="absolute top-[40%] left-[20%] w-[900px] h-[900px] bg-purple-900/20 rounded-full blur-[250px]"></div>
                    <div className="absolute top-[60%] right-[10%] w-[700px] h-[700px] bg-[#19687A]/15 rounded-full blur-[220px]"></div>
                </div>

                <div className="relative z-10">
                    <FadeIn>
                        <PlzAboutHero />
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <PlzAboutTeam />
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <PlzFAQ />
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <PlzCTA />
                    </FadeIn>
                </div>
            </main>
            <PlzFooter />
        </div>
    );
};

export default WebPlzAboutPage;
