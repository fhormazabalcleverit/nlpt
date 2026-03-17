import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import DynamicSEO from '../components/DynamicSEO';
import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';

const TermsOfServicePage = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-backblack flex flex-col font-sansation">
            <DynamicSEO
                title={language === 'es' ? 'Términos del Servicio | LLMApps by CleverIT' : 'Terms of Service | LLMApps by CleverIT'}
                description="Términos y condiciones de uso de los servicios de LLMApps."
                url={window.location.href}
            />
            <PlzNavbar />

            <main className="flex-grow">
                {/* Container simulating web/plz design: font-sansation, specific background */}
                <div
                    className="h-full bg-[#040809] font-sansation pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden"
                    style={{
                        backgroundImage: "url('/plz/brand/background-hero.svg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="">
                            <div className="mb-8">
                                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#17BBCD] transition-colors font-light">
                                    <ArrowLeft className="w-4 h-4" />
                                    {language === 'es' ? 'Volver al inicio' : 'Back to home'}
                                </Link>
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-tight leading-[1.1] mb-8 border-b border-gray-800 pb-6">
                                {language === 'es' ? 'Términos del Servicio' : 'Terms of Service'}
                            </h1>

                            <div className="space-y-8 text-gray-400 font-light text-lg">
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-normal text-white">1. Aceptación de los Términos</h2>
                                    <p className="pl-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus.
                                    </p>
                                    <div className="pl-6 space-y-4 pt-2">
                                        <div>
                                            <h3 className="text-xl font-normal text-[#17BBCD]">1.1 Modificaciones a los Términos</h3>
                                            <p className="mt-2 pl-4 border-l-2 border-[#19687A]">
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Pellentesque habitant morbi tristique senectus.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-normal text-[#B81769]">1.2 Elegibilidad</h3>
                                            <p className="mt-2 pl-4 border-l-2 border-[#B81769]/50">
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Proin feugiat, magna pharetra aliquet sodales.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-6 mt-6 border-t border-gray-800">
                                    <h2 className="text-2xl font-normal text-white">2. Uso de la Plataforma</h2>
                                    <p className="pl-4">
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nullam non elit tellus.
                                    </p>
                                    <p className="pl-4">
                                        Aenean volutpat enim massa, in semper lectus auctor eu. Curabitur vel accumsan ligula.
                                    </p>
                                </div>

                                <div className="space-y-4 pt-6 mt-6 border-t border-gray-800">
                                    <h2 className="text-2xl font-normal text-white">3. Creación de Cuenta</h2>
                                    <p className="pl-4">
                                        Phasellus sed elementum arcu. Praesent ac auctor elit. Sed quis felis in magna rhoncus elementum id eget neque.
                                    </p>
                                    <ul className="list-disc pl-10 space-y-2">
                                        <li>Integer condimentum imperdiet justo, laoreet tempus nunc.</li>
                                        <li>Vestibulum id rhoncus ante. Suspendisse vel elementum nulla.</li>
                                        <li>Curabitur efficitur ligula eu tristique lacinia.</li>
                                    </ul>
                                </div>

                                <div className="space-y-4 pt-6 mt-6 border-t border-gray-800">
                                    <h2 className="text-2xl font-normal text-white">4. Restricciones de Uso</h2>
                                    <p className="pl-4">
                                        Maecenas pharetra, lorem et pulvinar venenatis, mi arcu scelerisque tellus, a ullamcorper metus mi non dolor. Aliquam nec metus et turpis hendrerit sagittis eu vitae elit.
                                    </p>
                                </div>

                                <div className="space-y-4 pt-6 mt-6 border-t border-gray-800">
                                    <h2 className="text-2xl font-normal text-white">5. Propiedad Intelectual</h2>
                                    <p className="pl-4">
                                        Nunc auctor erat in nibh semper tristique. Suspendisse eget elit vitae purus laoreet auctor id eget enim.
                                    </p>
                                    <div className="pl-6 space-y-4 pt-2">
                                        <div>
                                            <h3 className="text-xl font-normal text-[#17BBCD]">5.1 Derechos de Usuario</h3>
                                            <p className="mt-2 pl-4 border-l-2 border-[#19687A]">
                                                Cras vel nunc in mi euismod placerat nec eu diam. Donec id scelerisque erat, vel ultrices nulla.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-6 mt-6 border-t border-gray-800">
                                    <h2 className="text-2xl font-normal text-white">6. Enlaces de Terceros</h2>
                                    <p className="pl-4">
                                        Quisque sodales scelerisque turpis non consectetur. Aliquam varius lectus aliquet sapien dapibus consequat. Morbi quis leo quis mi ullamcorper mollis.
                                    </p>
                                </div>

                                <div className="space-y-4 pt-6 mt-6 border-t border-gray-800">
                                    <h2 className="text-2xl font-normal text-white">7. Exclusión y Limitación de Responsabilidad</h2>
                                    <p className="pl-4">
                                        Donec vitae urna turpis. Sed non nisi in urna eleifend cursus sed sit amet dui. Nulla facilisi. Aenean a ipsum ut erat mollis condimentum.
                                    </p>
                                </div>

                                <div className="space-y-4 pt-6 mt-6 border-t border-gray-800">
                                    <h2 className="text-2xl font-normal text-white">8. Resolución de Disputas</h2>
                                    <p className="pl-4">
                                        Vestibulum non turpis non arcu vulputate hendrerit sit amet id nisi. Etiam fermentum est non nibh euismod sagittis.
                                    </p>
                                </div>

                                <div className="space-y-4 pt-6 mt-6 border-t border-gray-800">
                                    <h2 className="text-2xl font-normal text-white">9. Información de Contacto</h2>
                                    <p className="pl-4">
                                        Proin vitae urna ex. Fusce imperdiet dui sit amet urna vestibulum imperdiet. Para dudas, comunícate con soporte en info@llmapps.com.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PlzFooter />
        </div>
    );
};

export default TermsOfServicePage;
