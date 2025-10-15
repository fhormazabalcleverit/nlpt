import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, User, Building, AtSign } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const QuoteForm = () => {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    nombre: '',
    rubro: '',
    email: '',
    contactMethod: 'email'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t.quote.form.successMessage);
  };

  const contactMethods = [
    { value: 'email', label: t.quote.form.contactEmail, icon: Mail },
    { value: 'telefono', label: t.quote.form.contactPhone, icon: Phone },
    { value: 'whatsapp', label: t.quote.form.contactWhatsApp, icon: MessageCircle }
  ];

  return (
    <section className="bg-backblack py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-16 fade-in-up ${headerVisible ? 'animate' : ''}`}>
          <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {t.quote.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto mb-6">
            {t.quote.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.quote.subtitle}
          </p>
        </div>

        {/* Form */}
        <div ref={formRef} className={`fade-in-up-delay ${formVisible ? 'animate' : ''}`}>
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-white text-lg font-semibold mb-3">
                  {t.quote.form.name}
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder={t.quote.form.namePlaceholder}
                  />
                </div>
              </div>

              {/* Rubro */}
              <div>
                <label htmlFor="rubro" className="block text-white text-lg font-semibold mb-3">
                  {t.quote.form.industry}
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="rubro"
                    name="rubro"
                    value={formData.rubro}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder={t.quote.form.industryPlaceholder}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white text-lg font-semibold mb-3">
                  {t.quote.form.email}
                </label>
                <div className="relative">
                  <AtSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder={t.quote.form.emailPlaceholder}
                  />
                </div>
              </div>

              {/* Método de contacto */}
              <div>
                <label className="block text-white text-lg font-semibold mb-4">
                  {t.quote.form.contactMethod}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {contactMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <label
                        key={method.value}
                        className={`relative flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.contactMethod === method.value
                            ? 'border-pink-500 bg-pink-500/10'
                            : 'border-gray-600 bg-gray-800 hover:border-pink-500/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method.value}
                          checked={formData.contactMethod === method.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="flex flex-col items-center space-y-2">
                          <IconComponent className={`w-6 h-6 ${
                            formData.contactMethod === method.value ? 'text-pink-400' : 'text-gray-400'
                          }`} />
                          <span className={`text-sm font-medium ${
                            formData.contactMethod === method.value ? 'text-pink-400' : 'text-gray-300'
                          }`}>
                            {method.label}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 flex items-center justify-center space-x-3"
                >
                  <Send className="w-5 h-5" />
                  <span>{t.quote.form.submit}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            {t.quote.footerNote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;