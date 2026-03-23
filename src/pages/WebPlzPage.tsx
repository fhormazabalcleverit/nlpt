import PlzNavbar from '../components/plz/PlzNavbar';
import PlzHero from '../components/plz/PlzHero';
import PlzGraphic from '../components/plz/PlzGraphic';
import PlzIntegrations from '../components/plz/PlzIntegrations';
import PlzCases from '../components/plz/PlzCases';
import PlzFAQ from '../components/plz/PlzFAQ';
import PlzCTA from '../components/plz/PlzCTA';
import PlzFooter from '../components/plz/PlzFooter';
import DynamicSEO from '../components/DynamicSEO';
import { useLanguage } from '../context/LanguageContext';

const WebPlzPage = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-backblack flex flex-col font-sansation">
            <DynamicSEO 
                title={`${t.plzHero.title} | CleverIT AI`}
                description={t.plzHero.description}
                url={window.location.href}
            />
            <PlzNavbar />
            <main className="flex-grow">
                <PlzHero />
                <PlzGraphic />
                <PlzIntegrations />
                <PlzCases />
                <PlzFAQ />
                <PlzCTA />
            </main>
            <PlzFooter />
        </div>
    );
};

export default WebPlzPage;
