import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';
import PlzAboutHero from '../components/plz/PlzAboutHero';
import PlzAboutTeam from '../components/plz/PlzAboutTeam';
import PlzFAQ from '../components/plz/PlzFAQ';
import PlzCTA from '../components/plz/PlzCTA';

const WebPlzAboutPage = () => {
    return (
        <div className="min-h-screen bg-[#040809] flex flex-col font-sansation">
            <PlzNavbar />
            <main className="flex-grow pt-16">
                <PlzAboutHero />
                <PlzAboutTeam />
                <PlzFAQ />
                <PlzCTA />
            </main>
            <PlzFooter />
        </div>
    );
};

export default WebPlzAboutPage;
