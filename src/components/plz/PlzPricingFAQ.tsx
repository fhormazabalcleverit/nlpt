import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './PlzMotion';
import { useLanguage } from '../../context/LanguageContext';

const PlzPricingFAQ = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const pricingFaqs = t.plzPricing.faqs.map((faq: any) => ({
        q: faq.q,
        a: faq.a
    }));

    const allFaqs = [...pricingFaqs];

    return (
        <section className="relative w-full py-24 font-sansation">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <StaggerContainer className="text-center mb-16">
                    <StaggerItem>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
                            {t.plzPricing.faqTitle}
                        </h2>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-gray-400 text-lg md:text-xl font-light">
                            {t.plzPricing.faqSubtitle}
                        </p>
                    </StaggerItem>
                </StaggerContainer>

                <StaggerContainer className="space-y-4" staggerChildren={0.05}>
                    {allFaqs.map((faq, index) => (
                        <StaggerItem key={index}>
                            <div
                                className="overflow-hidden transition-all duration-300 hover:bg-[#11161A]/40 rounded-xl border border-white/5 bg-[#0A0F11]/40 shadow-xl"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span className="text-md md:text-lg font-medium text-gray-200">{faq.q}</span>
                                    <ChevronDown
                                        className={`w-6 h-6 text-[#17BBCD] transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <div
                                    className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[1000px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="text-gray-400 text-base md:text-lg leading-relaxed font-light whitespace-pre-wrap">
                                        <p>{faq.a.includes('**') ? faq.a : faq.a}</p>
                                        {/* Handle markdown bold in localized strings if any */}
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default PlzPricingFAQ;
