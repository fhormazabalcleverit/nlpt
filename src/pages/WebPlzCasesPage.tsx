import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';
import PlzCasesList from '../components/plz/PlzCasesList';
import PlzCTA from '../components/plz/PlzCTA';

const WebPlzCasesPage = () => {
    return (
        <div className="min-h-screen bg-[#040809] flex flex-col font-sansation">
            <PlzNavbar />
            <main className="flex-grow pt-16 relative">
                {/* Background wrapper for blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 -left-[10%] w-[1000px] h-[1000px] bg-blue-900/30 rounded-full blur-[250px]"></div>
                    <div className="absolute top-[10%] -right-[15%] w-[800px] h-[800px] bg-blue-900/40 rounded-full blur-[200px]"></div>
                    <div className="absolute top-[40%] left-[20%] w-[900px] h-[900px] bg-purple-900/20 rounded-full blur-[250px]"></div>
                    <div className="absolute top-[60%] right-[10%] w-[700px] h-[700px] bg-[#19687A]/15 rounded-full blur-[220px]"></div>
                </div>

                <div className="relative z-10">
                    <PlzCasesList />
                    <PlzCTA />
                </div>
            </main>
            <PlzFooter />
        </div>
    );
};

export default WebPlzCasesPage;
