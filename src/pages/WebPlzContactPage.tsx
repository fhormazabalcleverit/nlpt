import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';

const WebPlzContactPage = () => {
    return (
        <div className="min-h-screen bg-[#040809] font-sansation flex flex-col">
            <PlzNavbar />

            <main className="flex-grow flex flex-col pt-32 pb-20 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-[#19687A]/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        to="/web/plz"
                        className="inline-flex items-center gap-2 px-0 py-2 text-sm font-medium text-gray-400 bg-transparent hover:text-white transition-all mb-10 group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Volver a Pulzen AI
                    </Link>

                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex px-4 py-1.5 border border-[#19687A]/30 bg-[#19687A]/10 rounded-full text-xs text-[#17BBCD] font-medium tracking-wide mb-6">
                            Contacto
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                            Habla con nuestro equipo
                        </h1>
                        <p className="text-lg text-gray-400 font-light leading-relaxed">
                            Descubre cómo Pulzen AI puede transformar tu negocio. Llena el formulario y un especialista se contactará contigo.
                        </p>
                    </div>

                    {/* Form Container */}
                    <div className="bg-[#0A0F11] border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-[#11161A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-colors"
                                        placeholder="Ej. Juan Pérez"
                                        required
                                    />
                                </div>
                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-[#11161A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-colors"
                                        placeholder="Ej. juan@empresa.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Company */}
                                <div className="space-y-2">
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full bg-[#11161A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-colors"
                                        placeholder="Nombre de tu empresa"
                                        required
                                    />
                                </div>
                                {/* Phone */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                                        Teléfono (Opcional)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-[#11161A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-colors"
                                        placeholder="+56 9 1234 5678"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                    ¿Cómo podemos ayudarte?
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-[#11161A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-colors resize-none"
                                    placeholder="Cuéntanos un poco sobre tus necesidades y objetivos..."
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="button"
                                    className="w-full px-8 py-4 bg-[#19687A] hover:bg-[#17BBCD] text-white rounded-xl text-base font-medium transition-colors shadow-lg shadow-[#17BBCD]/10 disabled:opacity-50"
                                >
                                    Enviar mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <PlzFooter />
        </div>
    );
};

export default WebPlzContactPage;
