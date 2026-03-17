import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './PlzMotion';

const faqs = [
    {
        question: '¿Qué valor aporta la implementación de LLM Apps a mi organización?',
        answer: 'LLMApp es una plataforma que te permite crear y gestionar múltiples agentes de IA especializados, cada uno con su propia base de datos, ejemplos de entrenamiento y configuración específica.\n\nEsto permite a las organizaciones tener distintos agentes enfocados en diferentes áreas de negocio (ventas, soporte, operaciones, etc.), transformando la información dispersa en asistentes conversacionales inteligentes que mejoran:\n\n• La productividad\n• La toma de decisiones\n• La experiencia de los usuarios internos',
    },
    {
        question: '¿Qué integraciones soporta la plataforma y cómo mejoran las respuestas?',
        answer: 'La plataforma LLMApp se integra con:\n\n• SharePoint (documentos empresariales)\n• Bases de datos (SQL Server, MySQL, PostgreSQL, MongoDB, BigQuery, etc.)\n• Archivos (PDF, Excel, Word, imágenes)\n• APIs REST y GraphQL\n• MCP (Model Context Protocol)\n\nImportante: Los agentes son entrenados con ejemplos de negocio personalizados que enseñan cómo y cuándo usar cada fuente, logrando respuestas mucho más precisas y relevantes.',
    },
    {
        question: '¿Cuánto dura la implementación de la plataforma LLMApp?',
        answer: 'El proyecto de implementación de LLMApp está diseñado para ser ágil y completo, asegurando que tu organización pueda comenzar a aprovechar los beneficios de la IA en el menor tiempo posible.\n\nLa duración del setup base es de 3 semanas: 1 semana para configuración de plataforma e infraestructura, 2 semanas para creación y ajustes del primer agente. Cada agente adicional requiere aproximadamente 2 semanas más.',
    },
    {
        question: '¿Qué incluye el setup inicial?',
        answer: 'El setup inicial de LLMApp incluye todo lo necesario para poner en marcha tu plataforma de agentes de IA:\n\nSetup de plataforma multi-agente, conexión con datos del cliente, creación y configuración de agente, generación de esquema de base de datos por agente, definición de ejemplos de entrenamiento, interfaz de chat Mastra, gestión de agentes, pruebas funcionales y despliegue en Azure.\n\nAdemás incluye:\n• Creación de alertas\n• Dashboards personalizados\n• Reportes automatizados',
    },
    {
        question: '¿Cuáles son los costos de implementación y uso mensual?',
        answer: 'Implementación (pago único):\n• Setup inicial: USD 4,200 (incluye plataforma + infraestructura + 1 agente)\n• Cada agente adicional: USD 2,000\n\nUso Mensual (recurrente):\nEscalonado por usuarios:\n• 0-100 usuarios: USD 10/usuario\n• 100-500 usuarios: USD 7/usuario\n• 500-1000 usuarios: USD 5/usuario\n• 3000+ usuarios: USD 3/usuario\n\nSoporte mensual:\n• Soporte Básico: USD 2,500 (incluido en toda implementación)\n• Soporte Medio: USD 4,000\n• Soporte Pro: USD 5,000',
    },
    {
        question: '¿Qué incluye el Soporte Básico de USD 2,500 mensuales?',
        answer: 'El Soporte Básico incluye TODO lo necesario para operar:\n\n• Infraestructura Azure completa (Container Registry, Container Apps, Azure Foundry, PostgreSQL)\n• Gestión completa CSP de Azure\n• Mantención operativa de la plataforma\n• Monitoreo mensual (estado, logs, detección de fallas)\n• Atención de incidentes con SLA\n• Parches y actualizaciones mensuales\n• Revisión mensual del sistema\n\nEs un costo fijo predecible que incluye TODO.',
    },
    {
        question: '¿Qué diferencias hay entre Soporte Medio y Pro?',
        answer: 'Soporte Medio (USD 4,000/mes):\nSoporte Básico + 20 horas mensuales para mejoras, monitoreo quincenal, optimización de prompts y agentes, ajustes funcionales.\n\nSoporte Pro (USD 5,000/mes):\nSoporte Medio + 30 horas adicionales (50 hrs totales), fine-tuning de modelos, ampliación de datasets, observabilidad avanzada con dashboards, alertas personalizadas y reportes analíticos.',
    },
];

const PlzFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative w-full py-24 font-sansation">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <StaggerContainer className="text-center mb-16">
                    <StaggerItem>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
                            Respuestas a preguntas comunes
                        </h2>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-gray-400 text-lg md:text-xl font-light">
                            Preguntas principales sobre LLM Apps. Para consultas detalladas.
                            <br />
                            <a href="https://phoenix.cleveritgroup.ai/" target="_blank" rel="noopener noreferrer" className="text-[#17BBCD] hover:underline">Habla con nuestro agente AI</a>
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
