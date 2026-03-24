import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertCircle, X } from 'lucide-react';
import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/plz/PlzMotion';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import DynamicSEO from '../components/DynamicSEO';

interface QuotePlan {
    id: string;
    price: string;
    desc: string;
}

const WebPlzQuotePage = () => {
    const { t } = useLanguage();
    
    // Form States
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [selectedUsers, setSelectedUsers] = useState<string>('');
    const [agentsCount, setAgentsCount] = useState<number>(1);
    const [selectedSupport, setSelectedSupport] = useState<string>(t.plzQuote.form.plans[0].id);

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [notification, setNotification] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);

    // Auto-dismiss notification after 5 seconds
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => setNotification(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Build the email HTML content
            const emailHtml = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #19687A; margin-bottom: 20px;">Nueva Solicitud de Cotización</h2>
                    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
                        <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 10px 0;"><strong>Empresa:</strong> ${company}</p>
                        <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${phone}</p>
                        <p style="margin: 10px 0;"><strong>Usuarios:</strong> ${selectedUsers}</p>
                        <p style="margin: 10px 0;"><strong>Agentes:</strong> ${agentsCount}</p>
                        <p style="margin: 10px 0;"><strong>Nivel de Soporte:</strong> ${selectedSupport}</p>
                    </div>
                    <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">Este mensaje fue enviado desde llmapps.cleveritgroup.com (Formulario de Cotización)</p>
                </div>
            `;

            const response = await fetch(
                "https://regis.groowcity.com/common/send-email",
                {
                    method: "POST",
                    headers: {
                        "x-api-key": "550e8400-e29b-41d4-a716-446655440000",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        from: "no-reply@ndrz.io",
                        to: "comercial@cleveritgroup.com",
                        subject: `Nueva Cotización - ${company}`,
                        html: emailHtml,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.ok ? 'OK' : 'Error'}`);
            }

            // Success
            setNotification({
                type: "success",
                message: "¡Solicitud enviada con éxito! Nos contactaremos a la brevedad.",
            });

            // Reset form
            setName('');
            setEmail('');
            setCompany('');
            setPhone('');
            setSelectedUsers('');
            setAgentsCount(1);
            setSelectedSupport(t.plzQuote.form.plans[0].id);
        } catch (error) {
            console.error("Error sending quote:", error);
            setNotification({
                type: "error",
                message: "Error al enviar la solicitud. Por favor intente nuevamente.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = name && email && company && phone && selectedUsers;

    return (
        <div className="min-h-screen bg-[#040809] font-sansation flex flex-col uppercase-fade-in">
            <DynamicSEO 
                title={`${t.plzQuote.title} | CleverIT AI`}
                description={t.plzQuote.subtitle}
                url={window.location.href}
            />
            <PlzNavbar />

            <main className="flex-grow flex flex-col pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
                {/* Notification Toast */}
                <AnimatePresence>
                    {notification && (
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center p-4"
                        >
                            <div
                                className={`relative rounded-2xl p-6 shadow-2xl max-w-md w-full backdrop-blur-md ${notification.type === "success"
                                    ? "bg-[#19687A]/90 border border-[#17BBCD]/50"
                                    : "bg-red-900/90 border border-red-500/50"
                                    }`}
                            >
                                <div className="flex items-start space-x-4">
                                    <div
                                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${notification.type === "success"
                                            ? "bg-[#17BBCD]/20"
                                            : "bg-red-500/20"
                                            }`}
                                    >
                                        {notification.type === "success" ? (
                                            <CheckCircle className="w-5 h-5 text-[#17BBCD]" />
                                        ) : (
                                            <AlertCircle className="w-5 h-5 text-red-400" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h3
                                            className={`font-semibold text-lg ${notification.type === "success"
                                                ? "text-white"
                                                : "text-red-100"
                                                }`}
                                        >
                                            {notification.type === "success" ? "¡Éxito!" : "Error"}
                                        </h3>
                                        <p
                                            className={`text-sm mt-1 ${notification.type === "success"
                                                ? "text-blue-100"
                                                : "text-red-200"
                                                }`}
                                        >
                                            {notification.message}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setNotification(null)}
                                        className="text-white/60 hover:text-white transition-colors flex-shrink-0 mt-1"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Background effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-[#19687A]/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <FadeIn delay={0.1}>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-0 py-2 text-sm font-medium text-gray-400 bg-transparent hover:text-white transition-all mb-10 group"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            {t.plzQuote.backBtn || t.plzQuote.back}
                        </Link>
                    </FadeIn>

                    {/* Header */}
                    <StaggerContainer className="text-center mb-16">
                        <StaggerItem>
                            <div className="mb-8 inline-flex items-center px-5 py-1.5 rounded-full border border-gray-700 bg-black/40 backdrop-blur-sm text-sm font-light text-gray-300 shadow-sm">
                                {t.plzQuote.badge}
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.2] mb-8 text-white">
                                {t.plzQuote.title}
                            </h1>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed max-w-3xl mx-auto text-balance">
                                {t.plzQuote.subtitle}
                            </p>
                        </StaggerItem>
                    </StaggerContainer>

                    {/* Form Container */}
                    <FadeIn delay={0.4}>
                        <div className="bg-[#0A0F11] border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                            {t.plzQuote.form.name}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-[#11161A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-colors"
                                            placeholder={t.plzQuote.form.namePlaceholder}
                                            required
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                            {t.plzQuote.form.email}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-[#11161A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-colors"
                                            placeholder={t.plzQuote.form.emailPlaceholder}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Company */}
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                                            {t.plzQuote.form.company}
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            className="w-full bg-[#11161A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-colors"
                                            placeholder={t.plzQuote.form.companyPlaceholder}
                                            required
                                        />
                                    </div>
                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                                            {t.plzQuote.form.phone}
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full bg-[#11161A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-colors"
                                            placeholder={t.plzQuote.form.phonePlaceholder}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Users */}
                                <div className="space-y-3">
                                    <label className="block text-sm font-medium text-gray-300">
                                        {t.plzQuote.form.usersLabel}
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
                                        <label className="text-gray-300">{t.plzQuote.form.agentsLabel}</label>
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
                                                background: #17BBCD;
                                                cursor: pointer;
                                                box-shadow: 0 0 10px rgba(23, 187, 205, 0.5);
                                            }
                                            .agent-slider::-moz-range-thumb {
                                                width: 20px;
                                                height: 20px;
                                                border-radius: 50%;
                                                background: #17BBCD;
                                                cursor: pointer;
                                                border: none;
                                                box-shadow: 0 0 10px rgba(23, 187, 205, 0.5);
                                            }
                                        `}} />
                                        <div className="relative flex items-center h-8">
                                            {/* Fondo completo (gris) */}
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1.5 bg-[#374151] rounded-full pointer-events-none"></div>
                                            {/* Progreso (rosado) */}
                                            <div
                                                className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 bg-[#17BBCD] rounded-full pointer-events-none"
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
                                        {t.plzQuote.form.supportLabel}
                                    </label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {t.plzQuote.form.plans.map((plan: QuotePlan) => (
                                            <button
                                                key={plan.id}
                                                type="button"
                                                onClick={() => setSelectedSupport(plan.id)}
                                                className={`p-5 rounded-2xl text-left flex flex-col transition-all duration-300 ${selectedSupport === plan.id
                                                    ? 'bg-[#11161A] border-2 border-[#17BBCD] shadow-[0_0_15px_rgba(23,187,205,0.2)]'
                                                    : 'bg-[#11161A] border-2 border-transparent hover:border-white/10'
                                                    }`}
                                            >
                                                <span className="text-white font-medium mb-1">{plan.id}</span>
                                                <span className="text-[#17BBCD] text-sm font-medium mb-1">{plan.price}</span>
                                                <span className="text-gray-500 text-xs font-light">{plan.desc}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={!isFormValid || isSubmitting}
                                        className={`w-full px-8 py-4 rounded-xl text-base font-medium transition-all shadow-lg active:scale-[0.98] ${isFormValid && !isSubmitting
                                            ? 'bg-[#19687A] hover:bg-[#17BBCD] text-white shadow-[#17BBCD]/10 cursor-pointer'
                                            : 'bg-white/5 text-gray-500 cursor-not-allowed opacity-50'
                                            }`}
                                    >
                                        {isSubmitting ? 'Enviando...' : t.plzQuote.form.submit}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </main>

            <PlzFooter />
        </div>
    );
};

export default WebPlzQuotePage;
