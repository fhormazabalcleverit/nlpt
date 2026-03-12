import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';

const WebPlzQuotePage = () => {
    const [selectedUsers, setSelectedUsers] = useState<string>('');
    const [agentsCount, setAgentsCount] = useState<number>(1);
    const [selectedSupport, setSelectedSupport] = useState<string>('Básico');

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
                            Cotización
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                            Quiero cotizar
                        </h1>
                        <p className="text-lg text-gray-400 font-light leading-relaxed">
                            Da el siguiente paso hacia la automatización. Completa tus datos y un especialista preparará una propuesta a medida.
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
                                        Empresa u organización
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
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full bg-[#11161A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-colors"
                                        placeholder="+56 9 1234 5678"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Users */}
                            <div className="space-y-3">
                                <label className="block text-sm font-medium text-gray-300">
                                    Cantidad de usuarios
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {['0-100', '100-500', '500-1000', '3000+'].map((opt) => (
                                        <button
                                            key={opt}
                                            type="button"
                                            onClick={() => setSelectedUsers(opt)}
                                            className={`py-3 px-4 rounded-xl text-sm font-medium transition-all border ${selectedUsers === opt
                                                ? 'bg-[#19687A]/20 border-[#17BBCD] text-[#17BBCD]'
                                                : 'bg-[#11161A] border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Agents Slider */}
                            <div className="space-y-4 pt-4">
                                <div className="flex justify-between items-center text-sm font-medium">
                                    <label className="text-gray-300">Cantidad de agentes</label>
                                    <span className="text-white text-lg">{agentsCount}</span>
                                </div>
                                <div>
                                    <style dangerouslySetInnerHTML={{
                                        __html: `
                                        .agent-slider::-webkit-slider-thumb {
                                            -webkit-appearance: none;
                                            appearance: none;
                                            width: 20px;
                                            height: 20px;
                                            border-radius: 50%;
                                            background: #B81769;
                                            cursor: pointer;
                                            box-shadow: 0 0 10px rgba(184, 23, 105, 0.5);
                                        }
                                        .agent-slider::-moz-range-thumb {
                                            width: 20px;
                                            height: 20px;
                                            border-radius: 50%;
                                            background: #B81769;
                                            cursor: pointer;
                                            border: none;
                                            box-shadow: 0 0 10px rgba(184, 23, 105, 0.5);
                                        }
                                    `}} />
                                    <div className="relative flex items-center h-8">
                                        {/* Fondo completo (gris) */}
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1.5 bg-[#374151] rounded-full pointer-events-none"></div>
                                        {/* Progreso (rosado) */}
                                        <div
                                            className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 bg-[#B81769] rounded-full pointer-events-none"
                                            style={{ width: `${((agentsCount - 1) / 9) * 100}%` }}
                                        ></div>
                                        {/* Input range */}
                                        <input
                                            type="range"
                                            min="1"
                                            max="10"
                                            value={agentsCount}
                                            onChange={(e) => setAgentsCount(Number(e.target.value))}
                                            className="w-full h-full appearance-none cursor-pointer relative z-10 bg-transparent agent-slider outline-none"
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>1</span>
                                        <span>10</span>
                                    </div>
                                </div>
                            </div>

                            {/* Support Level */}
                            <div className="space-y-4 pt-4">
                                <label className="block text-sm font-medium text-gray-300">
                                    Nivel de Soporte
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { id: 'Básico', price: '$2,500/mes', desc: 'Infraestructura incluida' },
                                        { id: 'Medio', price: '$4,000/mes', desc: '+ 20 hrs mensuales' },
                                        { id: 'Pro', price: '$5,000/mes', desc: '+ 30 hrs mensuales' }
                                    ].map((plan) => (
                                        <button
                                            key={plan.id}
                                            type="button"
                                            onClick={() => setSelectedSupport(plan.id)}
                                            className={`p-5 rounded-2xl text-left flex flex-col transition-all duration-300 ${selectedSupport === plan.id
                                                ? 'bg-[#11161A] border-2 border-[#B81769] shadow-[0_0_15px_rgba(184,23,105,0.2)]'
                                                : 'bg-[#11161A] border-2 border-transparent hover:border-white/10'
                                                }`}
                                        >
                                            <span className="text-white font-medium mb-1">{plan.id}</span>
                                            <span className="text-[#B81769] text-sm font-medium mb-1">{plan.price}</span>
                                            <span className="text-gray-500 text-xs font-light">{plan.desc}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="button"
                                    className="w-full px-8 py-4 bg-[#19687A] hover:bg-[#17BBCD] text-white rounded-xl text-base font-medium transition-colors shadow-lg shadow-[#17BBCD]/10 disabled:opacity-50"
                                >
                                    Comenzar
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

export default WebPlzQuotePage;
