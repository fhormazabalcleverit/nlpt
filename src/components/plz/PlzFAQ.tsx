import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: '¿Pulzen reemplaza a los equipos humanos?',
        answer: 'No. Potencia su capacidad de análisis y toma de decisiones.',
    },
    {
        question: '¿Qué tipo de empresas pueden usar Pulzen?',
        answer: 'Desde organizaciones medianas hasta corporaciones con operaciones complejas.',
    },
    {
        question: '¿Requiere grandes implementaciones?',
        answer: 'No necesariamente. Puede desplegarse de forma progresiva.',
    },
    {
        question: '¿Es seguro trabajar con datos sensibles?',
        answer: 'Sí. Pulzen opera bajo estándares de seguridad y privacidad empresarial.',
    },
];

const PlzFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative w-full bg-[#040809] py-24 font-sansation">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
                        Preguntas frecuentes
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-light">
                        Resuelve tus dudas generales sobre Pulzen AI y descubre cómo adaptarlo a tus servicios.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden transition-all duration-300 hover:bg-[#0a0f12] rounded-xl"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            >
                                <span className="text-md md:text-lg font-medium text-gray-200">{faq.question}</span>
                                <ChevronDown
                                    className={`w-6 h-6 text-[#0e52e0] transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div
                                className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlzFAQ;
