import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './PlzMotion';
import { useLanguage } from '../../context/LanguageContext';

const PlzFAQ = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: t.faq.question1.q,
            answer: t.faq.question1.a,
        },
        {
            question: t.faq.question2.q,
            answer: t.faq.question2.a,
        },
        {
            question: t.faq.question3.q,
            answer: t.faq.question3.a,
        },
        {
            question: t.faq.question4.q,
            answer: t.faq.question4.a,
        },
        {
            question: t.faq.question5.q,
            answer: t.faq.question5.a,
        },
        {
            question: t.faq.question6.q,
            answer: t.faq.question6.a,
        },
        {
            question: t.faq.question7.q,
            answer: t.faq.question7.a,
        },
    ];

    return (
        <section className="relative w-full py-24 font-sansation">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <StaggerContainer className="text-center mb-16">
                    <StaggerItem>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
                            {t.faq.title}
                        </h2>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-gray-400 text-lg md:text-xl font-light">
                            {t.faq.subtitle}
                            <br />
                            <a href={t.faq.subtitleLink.url} target="_blank" rel="noopener noreferrer" className="text-[#17BBCD] hover:underline">
                                {t.faq.subtitleLink.text}
                            </a>
                        </p>
                    </StaggerItem>
                </StaggerContainer>

                <StaggerContainer className="space-y-4" staggerChildren={0.05}>
                    {faqs.map((faq, index) => (
                        <StaggerItem key={index}>
                            <div
                                className="overflow-hidden transition-all duration-300 hover:bg-[#0a0f12] rounded-xl border border-white/5"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                >
                                    <span className="text-md md:text-lg font-medium text-gray-200">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-6 h-6 text-[#17BBCD] transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <div
                                    className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[1000px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light whitespace-pre-wrap">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default PlzFAQ;
