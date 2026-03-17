import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Mail, MessageCircle, Phone } from 'lucide-react';
import PlzNavbar from '../components/plz/PlzNavbar';
import PlzFooter from '../components/plz/PlzFooter';
import PlzFAQ from '../components/plz/PlzFAQ';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/plz/PlzMotion';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import DynamicSEO from '../components/DynamicSEO';

const WebPlzContactPage = () => {
    const { t } = useLanguage();
    const [reason, setReason] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [industry, setIndustry] = useState<string>('');
    const [contactMethod, setContactMethod] = useState<string>('');

    const isFormValid = reason && name && email && industry && contactMethod;

    const reasons = t.plzContact.form.reasons.options;
    const reasonMessages = t.plzContact.form.reasons.messages;

    const contactMethods = [
        { id: t.plzContact.form.fields.contactMethod.options.email, icon: Mail },
        { id: t.plzContact.form.fields.contactMethod.options.whatsapp, icon: MessageCircle },
        { id: t.plzContact.form.fields.contactMethod.options.phone, icon: Phone }
    ];

    return (
        <div className="min-h-screen bg-[#040809] font-sansation flex flex-col uppercase-fade-in">
            <DynamicSEO 
                title={`${t.plzContact.title} | Pulzen AI`}
                description={t.plzContact.subtitle}
                url={window.location.href}
            />
            <PlzNavbar />

            <main className="flex-grow flex flex-col pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
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
                            <form className="space-y-8">
                                {/* Step 1: Reason Selection */}
                                <div className="space-y-4">
                                    <label htmlFor="reason" className="block text-sm font-medium text-gray-300">
                                        {t.plzContact.form.fields.reason.label}
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="reason"
                                            value={reason}
                                            onChange={(e) => setReason(e.target.value)}
                                            className="w-full appearance-none bg-[#11161A] border border-white/10 rounded-md px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#19687A] focus:ring-1 focus:ring-[#19687A] transition-all cursor-pointer"
                                            required
                                        >
                                            <option value="" disabled>{t.plzContact.form.fields.reason.placeholder}</option>
                                            {reasons.map((opt: string) => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
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
                                                    type="button"
                                                    disabled={!isFormValid}
                                                    className={`w-full px-8 py-5 rounded-md text-lg font-medium transition-all shadow-xl active:scale-[0.98] ${isFormValid
                                                        ? 'bg-[#19687A] hover:bg-[#17BBCD] text-white shadow-[#17BBCD]/10 cursor-pointer'
                                                        : 'bg-white/5 text-gray-500 cursor-not-allowed opacity-50'
                                                        }`}
                                                >
                                                    {t.plzContact.form.submit}
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
                                                        {reasonMessages[reason] || t.plzContact.form.successMessage}
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

                {/* Quote CTA Banner */}
                <FadeIn delay={0.6}>
                    <div className="relative z-10 max-w-7xl mx-auto w-full px-2 sm:px-6 lg:px-8 mb-24">
                        <div className="relative overflow-hidden border border-white/5 bg-[#0A0F11] rounded-2xl group transition-all duration-500 hover:border-white/10">
                            {/* SVG Background Layer */}
                            <div
                                className="absolute inset-0 opacity-100 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                                style={{
                                    backgroundImage: "url('/plz/brand/background-hero.svg')",
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />

                            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-left">
                                <div className="flex-grow max-w-xl">
                                    <h2 className="text-xl md:text-2xl font-normal text-white mb-4">
                                        {t.plzContact.quoteBanner.title}
                                    </h2>
                                    <p className="text-gray-400 text-md font-light leading-relaxed">
                                        {t.plzContact.quoteBanner.subtitle}
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <a
                                        href="https://phoenix.cleveritgroup.ai/chat/XfbwQq3kX8tVV8C1?offering=llmapps"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-8 py-4 bg-transparent border border-[#19687A] text-[#17BBCD] group-hover:bg-[#19687A] group-hover:text-white rounded-md text-lg font-medium transition-all shadow-xl hover:shadow-[#17BBCD]/10 active:scale-[0.98] whitespace-nowrap"
                                    >
                                        {t.plzContact.quoteBanner.cta}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

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
