import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';
import PlzCasesList from '../components/plz/PlzCasesList';
import PlzCTA from '../components/plz/PlzCTA';

const WebPlzCasesPage = () => {
    return (
        <div className="min-h-screen bg-[#040809] flex flex-col font-sansation">
            <PlzNavbar />
            <main className="flex-grow pt-16">
                <PlzCasesList />
                <PlzCTA />
            </main>
            <PlzFooter />
        </div>
    );
};

export default WebPlzCasesPage;
