import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';
import PlzRetailFeatures from '../components/plz/PlzRetailFeatures';
import DynamicSEO from '../components/DynamicSEO';

const WebPlzRetailPage = () => {
    const { t } = useLanguage();
    const data = t.plzIndustry.retail;

    return (
        <div className="min-h-screen bg-[#040809] font-sansation flex flex-col">
            <DynamicSEO 
                title={`${data.title} | CleverIT AI`}
                description={data.description}
            />
            <PlzNavbar />

            <main className="flex-grow flex flex-col pt-32 pb-20">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mb-20 text-left">
                    {/* Back Button */}
                    <div className="flex items-center gap-2">
                        <Link
                            to="/cases"
                            className="inline-flex items-center gap-2 px-0 py-2 text-sm font-medium text-gray-400 bg-transparent hover:text-white transition-all mb-12 group"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            {t.plzCases?.backBtn || 'Volver a Casos aplicados'}
                        </Link>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-8">
                        {data.title}
                    </h1>

                    {/* Description Text */}
                    <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
                        {data.description}
                    </p>

                    {/* Hero Full Width Graphic */}
                    {data.imageUrl && (
                        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-[#11161A] border border-white/5 shadow-2xl flex items-center justify-center mt-12 mb-8">
                            {/* Soft Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

                            {/* Image representing the feature */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-lighten"
                                style={{ backgroundImage: `url('${data.imageUrl}')` }}
                            ></div>

                            {/* Placeholder gradient to add depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040809] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                        </div>
                    )}

                    {/* Description Text */}
                    <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                        {data.description2}
                    </p>
                </div>

                {/* Features Section */}
                <PlzRetailFeatures />

                {/* Final CTA Section */}
                <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-32 mb-10 text-center flex flex-col items-center animate-fade-in-up">
                    <div className="inline-flex px-4 py-1.5 border border-white/10 rounded-full text-xs text-gray-400 mb-8 tracking-wide">
                        {data.ctaHero}
                    </div>

                    <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8 leading-tight">
                        {data.ctaTitle}
                    </h2>

                    <p className="text-lg text-gray-400 font-light leading-relaxed mb-12 max-w-3xl">
                        {data.ctaDescription}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                        <a
                            href="https://retail-llmapp.cleveritgroup.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#19687A] hover:bg-[#17BBCD] text-white rounded-xl text-sm font-medium transition-colors"
                        >
                            {data.ctaDemo}
                            <ExternalLink className="w-4 h-4" />
                        </a>
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#19687A] hover:border-[#17BBCD] text-[#19687A] hover:text-[#17BBCD] rounded-xl text-sm font-medium transition-colors"
                        >
                            {data.ctaContact}
                        </Link>
                    </div>
                </div>
            </main>

            <PlzFooter />
        </div>
    );
};

export default WebPlzRetailPage;
