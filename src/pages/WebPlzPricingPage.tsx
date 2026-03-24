// import { Link } from 'react-router-dom';
import { Check, ArrowRight, Terminal, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';
import PlzPricingFAQ from '../components/plz/PlzPricingFAQ';
import DynamicSEO from '../components/DynamicSEO';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/plz/PlzMotion';
import Pricing from '../components/Pricing'; // Import old pricing

const WebPlzPricingPage = () => {
    const { t } = useLanguage();
    const data = t.plzPricing;

    const icons = [Terminal, Users];

    return (
        <div className="min-h-screen bg-[#040809] font-sansation flex flex-col uppercase-fade-in">
            <DynamicSEO
                title={`${data.title} | CleverIT AI`}
                description={data.subtitle}
                url={window.location.href}
            />
            <PlzNavbar />

            <main className="flex-grow pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    {/* Colored Gradient Circles (Blobs) similar to Platform */}
                    <div className="absolute -top-[15%] -left-[10%] w-[1200px] h-[1200px] bg-blue-900/40 rounded-full blur-[230px]"></div>
                    <div className="absolute -top-[10%] -right-[20%] w-[1000px] h-[1000px] bg-blue-900/70 rounded-full blur-[300px]"></div>

                    {/* New blobs for pricing context */}
                    <div className="absolute top-[300px] left-[30%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[250px]"></div>
                    <div className="absolute top-[400px] left-[60%] w-[700px] h-[700px] bg-[#19687A]/30 rounded-full blur-[220px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    {/* Header */}
                    <StaggerContainer className="flex flex-col items-center text-center mb-12 lg:mb-12">
                        {/* Badge */}
                        <StaggerItem>
                            <div className="mb-8 inline-flex items-center px-5 py-1.5 rounded-full border border-gray-700 bg-black/40 backdrop-blur-sm text-sm font-light text-gray-300 shadow-sm">
                                {data.badge}
                            </div>
                        </StaggerItem>

                        {/* Title */}
                        <StaggerItem>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.2] mb-8 text-white max-w-4xl whitespace-pre-line">
                                {data.title}
                            </h1>
                        </StaggerItem>

                        {/* Description */}
                        <StaggerItem>
                            <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed max-w-3xl text-balance mb-12">
                                {data.subtitle}
                            </p>
                        </StaggerItem>
                    </StaggerContainer>

                    {/* Pricing Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32 w-full">
                        {data.plans.map((plan: { name: string, price: string, period: string, description: string, features: string[], cta: string, setupLabel?: string, setupValue?: string }, index: number) => {
                            const Icon = icons[index];
                            const isDark = index === 1; // Second plan

                            return (
                                <FadeIn key={plan.name} delay={0.4 + index * 0.1}>
                                    <div
                                        className={`rounded-[2rem] p-8 md:p-12 h-full flex flex-col transition-all duration-500 shadow-2xl relative overflow-hidden group hover:scale-[1.02] border border-white/5 ${isDark
                                            ? 'bg-[#0A0F11] text-white'
                                            : 'bg-[#11161A]/40 text-white'
                                            }`}
                                    >
                                        {/* Card Header */}
                                        <div className="flex items-center gap-4 mb-10">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${isDark ? 'bg-[#19687A]/20' : 'bg-[#7C74EE]/10'
                                                }`}>
                                                <Icon className={`w-7 h-7 transition-colors ${isDark ? 'text-[#17BBCD]' : 'text-[#7C74EE] group-hover:text-white'}`} />
                                            </div>
                                            <h3 className="text-2xl font-semibold tracking-tight">
                                                {plan.name}
                                            </h3>
                                        </div>

                                        {/* Price */}
                                        <div className="mb-2 flex items-baseline gap-2">
                                            <span className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
                                                {plan.price}
                                            </span>
                                            <span className="text-xs lg:text-sm font-medium text-gray-400">
                                                {plan.period}
                                            </span>
                                        </div>

                                        {/* Setup / Onboarding */}
                                        {plan.setupValue && (
                                            <div className="mb-6 flex items-center gap-2">
                                                <span className="text-sm font-medium text-[#17BBCD]">{plan.setupLabel || 'Setup'}</span>
                                                <span className="text-sm font-light text-gray-300">{plan.setupValue}</span>
                                            </div>
                                        )}

                                        {/* Description */}
                                        <p className="text-sm mb-10 font-light leading-relaxed text-gray-400">
                                            {plan.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-5 mb-12 flex-grow">
                                            {plan.features.map((feature: string) => (
                                                <div key={feature} className="flex items-start gap-3">
                                                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${isDark ? 'text-[#17BBCD]' : 'text-gray-500 group-hover:text-[#17BBCD]'
                                                        }`} />
                                                    <span className="text-sm font-normal leading-tight text-gray-300">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <button className={`w-full py-5 rounded-xl text-lg font-medium flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl ${isDark
                                            ? 'bg-[#19687A] text-white hover:bg-[#17BBCD] shadow-[#17BBCD]/10'
                                            : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                                            }`}>
                                            {plan.cta}
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>

                    {/* OLD PRICING SECTION */}
                    <div className="w-full mb-32">
                        <Pricing />
                    </div>

                    {/* Comparison Table */}
                    <FadeIn delay={0.6} className="w-full max-w-4xl mx-auto mb-32">
                        <div className="px-4 w-full">
                            <div className="overflow-x-auto scrollbar-hide">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="py-6 text-xs font-bold text-gray-500 uppercase tracking-[0.2em] w-1/4">
                                                {data.comparison.headers[0]}
                                            </th>
                                            <th className="py-6 text-xs font-bold text-[#7C74EE] uppercase tracking-[0.2em] w-[37.5%]">
                                                {data.comparison.headers[1]}
                                            </th>
                                            <th className="py-6 text-xs font-bold text-[#17BBCD] uppercase tracking-[0.2em] w-[37.5%]">
                                                {data.comparison.headers[2]}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {data.comparison.rows.map((row: { dimension: string, dev: string, everyone: string }, i: number) => (
                                            <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                                                <td className="py-6 pr-6 text-md font-light text-gray-400 group-hover:text-gray-300 transition-colors">
                                                    {row.dimension}
                                                </td>
                                                <td className="py-6 pr-6 text-md font-light group-hover:text-[#7C74EE]/80 text-white transition-colors">
                                                    {row.dev}
                                                </td>
                                                <td className="py-6 pr-6 text-md font-light group-hover:text-[#17BBCD]/80 text-white transition-colors">
                                                    {row.everyone}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Target Profiles Section */}
                    {/* ... (rest of target profiles) ... */}
                    <div className="max-w-6xl mx-auto w-full px-4 mb-32">
                        <FadeIn delay={0.1}>
                            <h2 className="text-3xl md:text-4xl font-light text-white mb-16 text-center tracking-tight">
                                {data.targetsTitle}
                            </h2>
                        </FadeIn>
                        <div className="space-y-12">
                            {data.targets.map((target: { title: string, items: string[] }, index: number) => {
                                const isReversed = index % 2 !== 0;
                                const imagePath = index === 0
                                    ? `${import.meta.env.BASE_URL}pricing_devs.png`
                                    : `${import.meta.env.BASE_URL}pricing_everyone.png`;

                                return (
                                    <FadeIn key={target.title} delay={0.2 + index * 0.1}>
                                        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12  rounded-[2rem] bg-[#11161A]/40 border border-white/5 shadow-2xl overflow-hidden group hover:bg-[#11161A]/60 transition-all duration-700`}>
                                            {/* Content */}
                                            <div className="flex-1 space-y-8 p-12">
                                                <h3 className="text-xl lg:text-2xl font-normal text-white leading-tight">
                                                    {target.title}
                                                </h3>
                                                <ul className="space-y-4">
                                                    {target.items.map((item: string, i: number) => (
                                                        <li key={i} className="flex items-center gap-4 text-gray-400 font-light group-hover:text-gray-300 transition-colors">
                                                            <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${index === 0 ? 'bg-[#7C74EE]' : 'bg-[#17BBCD]'}`} />
                                                            <span className="text-ms lg:text-md">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/* Image wrapper */}
                                            <div className="flex-1 w-full aspect-video lg:aspect-[4/3] overflow-hidden border border-white/10 relative shadow-2xl">
                                                <img
                                                    src={imagePath}
                                                    alt={target.title}
                                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#040809]/80 to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                                            </div>
                                        </div>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <PlzPricingFAQ />
            </main>

            <PlzFooter />
        </div>
    );
};

export default WebPlzPricingPage;
