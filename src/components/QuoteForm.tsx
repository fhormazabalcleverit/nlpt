import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  User,
  Building,
  AtSign,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

const QuoteForm = () => {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    nombre: "",
    rubro: "",
    email: "",
    contactMethod: "email",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Build the email HTML content
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ec4899; margin-bottom: 20px;">New Quote Request</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${formData.nombre}</p>
            <p style="margin: 10px 0;"><strong>Industry:</strong> ${formData.rubro}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${formData.email}</p>
            <p style="margin: 10px 0;"><strong>Preferred Contact Method:</strong> ${formData.contactMethod}</p>
          </div>
          <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">This lead was submitted from llmapps.cleveritgroup.com</p>
        </div>
      `;

      const response = await fetch(
        "https://regis.groowcity.com/common/send-email",
        {
          method: "POST",
          headers: {
            "x-api-key": "550e8400-e29b-41d4-a716-446655440000",
            origin: "https://llmapps.cleveritgroup.com",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "no-reply@ndrz.io",
            to: "comercial@cleveritgroup.com",
            subject: `New Lead - Quote Request from ${formData.nombre}`,
            html: emailHtml,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Success
      setNotification({
        type: "success",
        message: t.quote.form.successMessage,
      });

      // Reset form
      setFormData({
        nombre: "",
        rubro: "",
        email: "",
        contactMethod: "email",
      });
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

  const contactMethods = [
    { value: "email", label: t.quote.form.contactEmail, icon: Mail },
    { value: "telefono", label: t.quote.form.contactPhone, icon: Phone },
    {
      value: "whatsapp",
      label: t.quote.form.contactWhatsApp,
      icon: MessageCircle,
    },
  ];

  return (
    <section className="bg-backblack py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notification Toast */}
        {notification && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setNotification(null)}
            />

            {/* Toast Content */}
            <div
              className={`relative rounded-2xl p-8 shadow-2xl max-w-md w-full transform transition-all duration-300 animate-in fade-in zoom-in ${
                notification.type === "success"
                  ? "bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-400/50"
                  : "bg-gradient-to-br from-red-500/20 to-rose-600/20 border border-red-400/50"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    notification.type === "success"
                      ? "bg-green-500/20"
                      : "bg-red-500/20"
                  }`}
                >
                  {notification.type === "success" ? (
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-bold text-lg ${
                      notification.type === "success"
                        ? "text-green-300"
                        : "text-red-300"
                    }`}
                  >
                    {notification.type === "success" ? "¡Éxito!" : "Error"}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      notification.type === "success"
                        ? "text-green-200/80"
                        : "text-red-200/80"
                    }`}
                  >
                    {notification.message}
                  </p>
                </div>
                <button
                  onClick={() => setNotification(null)}
                  className="text-gray-400 hover:text-gray-200 transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 fade-in-up ${
            headerVisible ? "animate" : ""
          }`}
        >
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
        <div
          ref={formRef}
          className={`fade-in-up-delay ${formVisible ? "animate" : ""}`}
        >
          <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-white text-lg font-semibold mb-3"
                >
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
                <label
                  htmlFor="rubro"
                  className="block text-white text-lg font-semibold mb-3"
                >
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
                <label
                  htmlFor="email"
                  className="block text-white text-lg font-semibold mb-3"
                >
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
                            ? "border-pink-500 bg-pink-500/10"
                            : "border-gray-600 bg-gray-800 hover:border-pink-500/50"
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
                          <IconComponent
                            className={`w-6 h-6 ${
                              formData.contactMethod === method.value
                                ? "text-pink-400"
                                : "text-gray-400"
                            }`}
                          />
                          <span
                            className={`text-sm font-medium ${
                              formData.contactMethod === method.value
                                ? "text-pink-400"
                                : "text-gray-300"
                            }`}
                          >
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
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25 flex items-center justify-center space-x-3"
                >
                  <Send className="w-5 h-5" />
                  <span>
                    {isSubmitting ? "Enviando..." : t.quote.form.submit}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">{t.quote.footerNote}</p>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
