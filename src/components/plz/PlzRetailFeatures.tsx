import { useState, useEffect } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './PlzMotion';

const retailFeatures: any[] = [
    {
        id: 'inventario',
        shortTitle: 'Análisis e Inventario',
        title: 'Asistente de Análisis de Ventas e Inventario',
        desc: `Gerentes retail necesitan analizar inventario por tienda, rastrear ventas por categoría de producto, y detectar quiebres de stock antes que afecten ventas sin consultar múltiples sistemas.

LLMAPPS integra datos de stores, products, inventory, y sales_transactions. Permite consultas en lenguaje natural sobre stock levels por tienda/producto, análisis de ventas por categoría, y alertas proactivas de reabastecimiento.`,
        bullets: [
            {
                title: 'Análisis de inventario multi-tienda:',
                subItems: [
                    '"¿Qué productos tienen menos de 50 unidades en la tienda Downtown?"',
                    '"¿Cuál es el nivel de stock de Electronics en todas las tiendas?"',
                    '"Muestra productos con quantity crítico por store_id"'
                ]
            },
            {
                title: 'Análisis de ventas y performance:',
                subItems: [
                    '"¿Cuáles fueron los top 10 productos más vendidos este mes?"',
                    '"¿Qué categoría generó más total_amount en la última semana?"',
                    '"Compara ventas entre tiendas propias (Owned) vs rentadas (Rented)"'
                ]
            },
            'Alertas automáticas de reabastecimiento basadas en velocity de ventas y stock actual.',
            'Reportes ejecutivos con profitability por producto (sale_price vs cost_price).'
        ],
        highlightText: 'Reduce quiebres de stock 30%, mejora rotación de inventario y optimiza decisiones de compra con visibilidad en tiempo real de inventory levels por store.',
        image: '/retail_analytics.png'
    },
    {
        id: 'recomendaciones',
        shortTitle: 'Recomendaciones',
        title: 'Motor de Recomendaciones Personalizadas',
        desc: `Equipos de ventas carecen de insights sobre patrones de compra por segmento de cliente (age, gender) and productos complementarios que podrían aumentar ticket promedio.

LLMAPPS analiza sales_transactions, sales_details, customers, y products para identificar patrones de compra, productos frecuentemente comprados juntos, y preferencias por demografía.`,
        bullets: [
            {
                title: 'Análisis de patrones de compra por segmento:',
                subItems: [
                    '"¿Qué productos compran más las mujeres de 25-35 años?"',
                    '"¿Qué categorías prefieren clientes que usan Credit Card vs Cash?"',
                    '"Identifica productos complementarios comprados en la misma transacción"'
                ]
            },
            {
                title: 'Recomendaciones contextuales basadas en sales_details history:',
                subItems: [
                    '"Clientes que compraron producto_id X también compraron Y en 60% de casos"',
                    '"Sugiere productos para aumentar total_amount promedio de transacciones"',
                    '"Recomienda productos con high in_store_priority para promociones"'
                ]
            },
            'Segmentación de clientes por first_name, age, gender y purchase behavior.',
            'Optimización de cross-selling basado en transaction_time patterns (In-Person vs Digital).'
        ],
        highlightText: 'Incrementa conversión 25%, aumenta ticket promedio (total_amount) 15% y mejora customer satisfaction mediante recomendaciones data-driven.',
        image: '/mining_operations.png'
    },
    {
        id: 'pricing',
        shortTitle: 'Optimización de Precios',
        title: 'Optimización Dinámica de Precios y Márgenes',
        desc: `Equipos de pricing necesitan maximizar márgenes analizando sale_price_per_unit vs cost_price, evaluar impacto de discount_coupon_amount, y ajustar base_sale_price sin erosionar rentabilidad.

LLMAPPS analiza profitability comparando sale_price_per_unit (sales_details) con cost_price (products), rastrea efectividad de discount_coupon_amount, y simula escenarios de pricing por categoría.`,
        bullets: [
            {
                title: 'Análisis de profitability por producto y categoría:',
                subItems: [
                    '"¿Cuál es el margen promedio (sale_price - cost_price) por categoría?"',
                    '"¿Qué productos tienen margen menor al 20%?"',
                    '"Compara profitability entre tiendas Owned vs Rented considerando property_cost"'
                ]
            },
            {
                title: 'Evaluación de impacto de descuentos:',
                subItems: [
                    '"¿Cómo afectan los discount_coupon_amount al margen neto?"',
                    '"¿Qué productos se venden mejor con/sin descuentos?"',
                    '"Simula impacto de reducir base_sale_price 10% en Electronics"'
                ]
            },
            'Sugerencias de ajuste de precio basadas en inventory quantity y sales velocity.',
            'Análisis de value_added_tax impact en pricing competitivo.'
        ],
        highlightText: 'Maximiza márgenes, reduce inventario obsoleto mediante pricing inteligente y mejora competitividad sin erosionar profitability.',
        image: '/performance_analytics.png'
    },
    {
        id: 'performance',
        shortTitle: 'Performance Tiendas',
        title: 'Análisis de Performance de Tiendas y Workers',
        desc: `Store managers necesitan evaluar performance de workers por ventas generadas, identificar top performers, y optimizar worker_shifts para maximizar revenue en horarios peak.

LLMAPPS vincula sales_transactions con workers y worker_shifts para analizar sales por empleado, identificar patterns de high-performance, y optimizar scheduling considerando worker_vacations.`,
        bullets: [
            {
                title: 'Análisis de worker performance:',
                subItems: [
                    '"¿Qué workers generan mayor total_amount promedio por transacción?"',
                    '"¿Cuál es el performance de Cashiers vs Store Managers en ventas?"',
                    '"Identifica workers con más transacciones Completed vs POS_Failure"'
                ]
            },
            {
                title: 'Optimización de scheduling:',
                subItems: [
                    '"¿Qué shift_start_time genera más ventas?"',
                    '"¿Cómo afectan worker_vacations a las ventas de la tienda?"',
                    '"Sugiere workers para horarios peak basado en historical performance"'
                ]
            },
            'Análisis de store performance por ownership_type y property_cost ROI.',
            'Identificación de patterns de payment_method (Credit Card, Debit Card, Cash) por worker.'
        ],
        highlightText: 'Optimiza scheduling para maximizar revenue, identifica training needs para workers de bajo performance, y mejora store ROI.',
        image: '/retail_analytics.png'
    },
    {
        id: 'customer_intelligence',
        shortTitle: 'Customer Intelligence',
        title: 'Customer Intelligence y Análisis de Transacciones',
        desc: `Business analysts necesitan entender customer lifetime value, detectar patterns de transaction failures (POS_Failure), y analizar preferencias de sale_type (In-Person vs Digital).

LLMAPPS analiza customers con sales_transactions para calcular CLV, detectar transaction status patterns, identificar loyal customers, y comparar comportamiento In-Person vs Digital.`,
        bullets: [
            {
                title: 'Análisis de Customer Lifetime Value:',
                subItems: [
                    '"¿Quiénes son los top 20 clientes por total_amount acumulado?"',
                    '"¿Cuál es el CLV promedio por age group y gender?"',
                    '"Identifica clientes con high purchase frequency pero bajo total_amount"'
                ]
            },
            {
                title: 'Análisis de transaction reliability:',
                subItems: [
                    '"¿Qué porcentaje de transacciones son POS_Failure por store_id?"',
                    '"¿Qué payment_method tiene mayor tasa de Completed transactions?"',
                    '"Compara success rate entre In-Person y Digital sales"'
                ]
            },
            'Segmentación de clientes por sale_type preference y payment_method.',
            'Identificación de customers inactivos desde date_created para re-engagement campaigns.'
        ],
        highlightText: 'Mejora customer retention, reduce POS_Failure rates, y aumenta lifetime value mediante segmentación data-driven.',
        image: '/performance_analytics.png'
    }
];

const PlzRetailFeatures = () => {
    const [activeSection, setActiveSection] = useState(retailFeatures[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-20% 0px -60% 0px' }
        );

        retailFeatures.forEach((feat) => {
            const el = document.getElementById(feat.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative w-full bg-[#040809] py-24 font-sansation text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Left Sidebar Menu (Sticky) */}
                    <FadeIn className="hidden lg:flex w-full lg:w-1/4 flex-col gap-6 sticky top-32 self-start">
                        {retailFeatures.map((feat) => {
                            const isActive = activeSection === feat.id;
                            return (
                                <a
                                    key={`nav-${feat.id}`}
                                    href={`#${feat.id}`}
                                    onClick={() => setActiveSection(feat.id)}
                                    className="flex items-center gap-4 text-left group transition-all duration-300"
                                >
                                    <div className="w-6 flex justify-center items-center">
                                        {isActive ? (
                                            <div className="w-6 h-[2px] bg-[#d946ef]"></div>
                                        ) : (
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#d946ef] transition-colors"></div>
                                        )}
                                    </div>

                                    <span className={`text-lg font-light transition-colors ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
                                        {feat.shortTitle}
                                    </span>
                                </a>
                            );
                        })}
                    </FadeIn>

                    {/* Right Content Area (Blog Style) */}
                    <div className="w-full lg:w-3/4 flex flex-col gap-32">
                        {retailFeatures.map((feat) => (
                            <FadeIn id={feat.id} key={feat.id} className="scroll-mt-32" y={20}>
                                <StaggerContainer>
                                    <StaggerItem>
                                        <h2 className="text-xl md:text-3xl font-medium tracking-tight mb-6 leading-tight">
                                            {feat.title}
                                        </h2>
                                    </StaggerItem>
                                    <StaggerItem>
                                        <p className="text-lg text-gray-400 font-light leading-relaxed mb-6 max-w-3xl whitespace-pre-line">
                                            {feat.desc}
                                        </p>
                                    </StaggerItem>

                                    {/* Advanced Bullets */}
                                    {feat.bullets && feat.bullets.length > 0 && (
                                        <StaggerContainer className="flex flex-col gap-5 mb-8" staggerChildren={0.05}>
                                            {feat.bullets.map((bullet: any, i: number) => {
                                                if (typeof bullet === 'string') {
                                                    return (
                                                        <StaggerItem key={`bullet-${i}`}>
                                                            <div className="flex items-start gap-4">
                                                                <div className="w-2 h-2 rounded-full bg-[#17BBCD] mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(23,187,205,0.8)]"></div>
                                                                <span className="text-gray-200 text-lg">{bullet}</span>
                                                            </div>
                                                        </StaggerItem>
                                                    );
                                                }
                                                return (
                                                    <StaggerItem key={`bullet-${i}`}>
                                                        <div className="flex flex-col gap-3">
                                                            <div className="flex items-start gap-4">
                                                                <div className="w-2 h-2 rounded-full bg-[#17BBCD] mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(23,187,205,0.8)]"></div>
                                                                <span className="text-gray-200 text-lg">{bullet.title}</span>
                                                            </div>
                                                            <ul className="list-disc list-outside ml-10 text-gray-400 font-light flex flex-col gap-2 text-md">
                                                                {bullet.subItems.map((sub: string, j: number) => (
                                                                    <li key={`sub-${j}`}>{sub}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </StaggerItem>
                                                );
                                            })}
                                        </StaggerContainer>
                                    )}

                                    {/* Highlight Text */}
                                    {feat.highlightText && (
                                        <StaggerItem>
                                            <div className="text-[#4ade80] font-light text-lg mb-12 leading-relaxed">
                                                {feat.highlightText}
                                            </div>
                                        </StaggerItem>
                                    )}
                                    
                                    {/* Graphic Container */}
                                    <StaggerItem>
                                        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-[#11161A] border border-white/5 shadow-2xl flex items-center justify-center">
                                            {/* Soft Glow */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/20 rounded-full blur-[80px]"></div>

                                            {/* Image representing the feature */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-lighten"
                                                style={{ backgroundImage: `url(${feat.image})` }}
                                            ></div>

                                            {/* Placeholder gradient if image is not enough */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#040809] to-transparent opacity-80"></div>
                                        </div>
                                    </StaggerItem>
                                </StaggerContainer>
                            </FadeIn>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PlzRetailFeatures;
