import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Mail, MessageCircle, Phone, CheckCircle, AlertCircle, X, Zap, LifeBuoy, Handshake, Newspaper } from 'lucide-react';

import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';
import PlzFAQ from '../components/plz/PlzFAQ';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/plz/PlzMotion';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import DynamicSEO from '../components/DynamicSEO';

const WebPlzContactPage = () => {
    const { t } = useLanguage();
    const location = useLocation();

    // Auto-select reason if passed via state
    const options = t.plzContact.form.reasons.options;
    const defaultReason = typeof location.state?.reasonIndex === 'number'
        ? options[location.state.reasonIndex]
        : '';

    const [reason, setReason] = useState<string>(defaultReason);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [industry, setIndustry] = useState<string>('');
    const [contactMethod, setContactMethod] = useState<string>('');
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

    // Scroll to top when component mounts
    useEffect(() => {
        const timeout = setTimeout(() => {
            const originalStyle = window.getComputedStyle(document.documentElement).scrollBehavior;
            document.documentElement.style.scrollBehavior = 'auto';
            window.scrollTo(0, 0);
            document.documentElement.style.scrollBehavior = originalStyle;
        }, 100);
        return () => clearTimeout(timeout);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Build the email HTML content
            const emailHtml = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #19687A; margin-bottom: 20px;">Nuevo Contacto WebPlz</h2>
                    <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
                        <p style="margin: 10px 0;"><strong>Motivo:</strong> ${reason}</p>
                        <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 10px 0;"><strong>Rubro:</strong> ${industry}</p>
                        <p style="margin: 10px 0;"><strong>Método de Contacto Preferido:</strong> ${contactMethod}</p>
                    </div>
                    <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">Este mensaje fue enviado desde llmapps.cleveritgroup.com (Formulario de Contacto)</p>
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
                        subject: `Nuevo Lead (Contacto) - de ${name}`,
                        html: emailHtml,
                    }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error("Server error response:", errorData);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log("Form submitted successfully!");

            // Success
            setNotification({
                type: "success",
                message: t.plzContact.form.defaultSuccess || "¡Formulario enviado con éxito!",
            });

            // Reset only inputs, keep reason to show success message if needed 
            // OR keep inputs and show success UI
            setName('');
            setEmail('');
            setIndustry('');
            setContactMethod('');
            
            // Note: If we want the form to persist the success message, 
            // we might want to NOT reset reason immediately or handle UI differently.
            // For now, let's keep the reason so the message from line 371 stays visible.
            // setReason(''); 
        } catch (error) {
            console.error("Error sending email:", error);
            setNotification({
                type: "error",
                message: "Error al enviar el formulario. Por favor intente nuevamente.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = reason && name && email && industry && contactMethod;

    const reasons = t.plzContact.form.reasons.options;
    const reasonMessages = t.plzContact.form.reasons.messages;

    const contactMethods = [
        { id: t.plzContact.form.fields.contactMethod.options.email, icon: Mail },
        { id: t.plzContact.form.fields.contactMethod.options.whatsapp, icon: MessageCircle },
        { id: t.plzContact.form.fields.contactMethod.options.phone, icon: Phone }
    ];

    const reasonIcons = [Zap, LifeBuoy, Handshake, Newspaper];

    return (
        <div className="min-h-screen bg-[#040809] font-sansation flex flex-col uppercase-fade-in">
            <DynamicSEO
                title={`${t.plzContact.title} | CleverIT AI`}
                description={t.plzContact.subtitle}
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
                {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 bg-[#19687A]/10 rounded-full blur-[120px] pointer-events-none"></div> */}

                {/* SVG Background Decoration */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-100 flex justify-center items-start">
                    <img
                        src={`${import.meta.env.BASE_URL}plz/contact/bg-contact.png`}
                        alt=""
                        className="w-[1200px] min-w-[1200px] h-auto object-contain"
                    />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <FadeIn delay={0.1}>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-0 py-2 text-sm font-medium text-gray-400 bg-transparent hover:text-white transition-all mb-10 group"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            {t.plzContact.backBtn}
                        </Link>
                    </FadeIn>

                    {/* Header */}
                    <StaggerContainer className="text-left mb-16">
                        <StaggerItem>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] mb-8 text-white">
                                {t.plzContact.title}
                            </h1>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed max-w-2xl text-balance">
                                {t.plzContact.subtitle}
                            </p>
                        </StaggerItem>
                    </StaggerContainer>

                    {/* Form Container */}
                    <FadeIn delay={0.4}>
                        <div className="bg-[#0A0F11] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative mb-24 transition-all">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Step 1: Reason Selection */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-gray-300 mb-6">
                                        {t.plzContact.form.fields.reason.label}
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {reasons.slice(0, 4).map((opt: string, index: number) => {
                                            const Icon = reasonIcons[index];
                                            return (
                                                <button
                                                    key={opt}
                                                    type="button"
                                                    onClick={() => setReason(opt)}
                                                    className={`flex flex-col items-center justify-center text-center gap-3 px-4 py-8 rounded-2xl border transition-all duration-300 group ${reason === opt
                                                        ? 'bg-[#19687A]/20 border-[#19687A] text-[#17BBCD] shadow-[0_0_30px_rgba(25,104,122,0.2)]'
                                                        : 'bg-[#11161A]/40 border-white/10 text-gray-400 hover:border-white/20 hover:bg-[#11161A]/60'
                                                        }`}
                                                >
                                                    {Icon && <Icon className={`w-8 h-8 transition-colors ${reason === opt ? 'text-[#17BBCD]' : 'text-gray-500 group-hover:text-gray-300'}`} />}
                                                    <span className={`text-xs font-medium uppercase tracking-wider transition-colors`}>{opt}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Step 2: Dynamic Fields */}
                                <AnimatePresence>
                                    {reason && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, y: 20 }}
                                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                                            exit={{ opacity: 0, height: 0, y: 20 }}
                                            transition={{ duration: 0.5, ease: "circOut" }}
                                            className="space-y-8 overflow-hidden pt-4"
                                        >
                                            {/* Full Name - Full Width */}
                                            <div className="space-y-3">
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                                    {t.plzContact.form.fields.name.label} <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full bg-[#11161A] border border-white/10 rounded-md px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-all"
                                                    placeholder={t.plzContact.form.fields.name.placeholder}
                                                    required
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                {/* Email */}
                                                <div className="space-y-3">
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                                        {t.plzContact.form.fields.email.label} <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="w-full bg-[#11161A] border border-white/10 rounded-md px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-all"
                                                        placeholder={t.plzContact.form.fields.email.placeholder}
                                                        required
                                                    />
                                                </div>
                                                {/* Industry */}
                                                <div className="space-y-3">
                                                    <label htmlFor="industry" className="block text-sm font-medium text-gray-300">
                                                        {t.plzContact.form.fields.industry.label} <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="industry"
                                                        value={industry}
                                                        onChange={(e) => setIndustry(e.target.value)}
                                                        className="w-full bg-[#11161A] border border-white/10 rounded-md px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-all"
                                                        placeholder={t.plzContact.form.fields.industry.placeholder}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Contact Preference - Full Width */}
                                            <div className="space-y-3">
                                                <label className="block text-sm font-medium text-gray-300">
                                                    {t.plzContact.form.fields.contactMethod.label} <span className="text-red-500">*</span>
                                                </label>
                                                <div className="grid grid-cols-3 gap-4">
                                                    {contactMethods.map((method) => (
                                                        <button
                                                            key={method.id}
                                                            type="button"
                                                            onClick={() => setContactMethod(method.id)}
                                                            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-md border transition-all duration-300 ${contactMethod === method.id
                                                                ? 'bg-[#19687A]/20 border-[#19687A] text-[#17BBCD] shadow-[0_0_20px_rgba(25,104,122,0.2)]'
                                                                : 'bg-[#11161A] border-white/10 text-gray-400 hover:border-white/20'
                                                                }`}
                                                        >
                                                            <method.icon className={`w-6 h-6 transition-colors ${contactMethod === method.id ? 'text-[#17BBCD]' : 'text-gray-400'}`} />
                                                            <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-center">{method.id}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <div className="pt-6">
                                                <button
                                                    type="submit"
                                                    disabled={!isFormValid || isSubmitting}
                                                    className={`w-full px-8 py-5 rounded-md text-lg font-medium transition-all shadow-xl active:scale-[0.98] ${isFormValid && !isSubmitting
                                                        ? 'bg-[#19687A] hover:bg-[#17BBCD] text-white shadow-[#17BBCD]/10 cursor-pointer'
                                                        : 'bg-white/5 text-gray-500 cursor-not-allowed opacity-50'
                                                        }`}
                                                >
                                                    {isSubmitting ? 'Enviando...' : t.plzContact.form.submit}
                                                </button>
                                                {/* phases  */}
                                                 <AnimatePresence mode="wait">
                                                     <motion.p
                                                         key={reason}
                                                         initial={{ opacity: 0, y: 10 }}
                                                         animate={{ opacity: 1, y: 0 }}
                                                         exit={{ opacity: 0, y: -10 }}
                                                         transition={{ duration: 0.3 }}
                                                         className="mt-6 text-center text-md text-gray-400 font-light max-w-lg mx-auto leading-relaxed"
                                                     >
                                                         {reasonMessages[reason] || t.plzContact.form.defaultSuccess}
                                                     </motion.p>
                                                 </AnimatePresence>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </FadeIn>
                </div>



                {/* FAQ Section */}
                <FadeIn delay={0.8}>
                    <div className="max-w-7xl mx-auto w-full border-t border-white/5 pt-20">
                        <PlzFAQ />
                    </div>
                </FadeIn>
            </main>

            <PlzFooter />
        </div>
    );
};

export default WebPlzContactPage;
