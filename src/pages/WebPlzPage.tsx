import PlzNavbar from '../components/plz/PlzNavbar';
import PlzHero from '../components/plz/PlzHero';
import PlzGraphic from '../components/plz/PlzGraphic';
import PlzIntegrations from '../components/plz/PlzIntegrations';
import PlzCases from '../components/plz/PlzCases';
import PlzFAQ from '../components/plz/PlzFAQ';
import PlzCTA from '../components/plz/PlzCTA';
import PlzFooter from '../components/plz/PlzFooter';

const WebPlzPage = () => {
    return (
        <div className="min-h-screen bg-backblack flex flex-col font-sansation">
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
