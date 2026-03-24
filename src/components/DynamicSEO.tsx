import React, { useEffect } from 'react';

interface DynamicSEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
}

// Valores por defecto para SEO
const defaultSEO = {
  title: 'CleverIT AI | Generative AI and Business Automation Solutions',
  description: 'Boost your business with CleverIT AI — intelligent assistants that combine generative AI, automation, and data-driven insights. Chat with your information and enhance productivity through AI-powered solutions.',
  keywords: 'IA, Inteligencia Artificial, LLM, ChatGPT, Automatización, CleverIT, Apps IA, Machine Learning, Productividad, Datos',
  image: `${import.meta.env.BASE_URL}meta/cleverit-cover.png`
};

const DynamicSEO: React.FC<DynamicSEOProps> = ({
  title,
  description,
  image,
  url,
  keywords
}) => {
  useEffect(() => {
    try {
      // Obtener el dominio actual y valores finales
      const currentDomain = window.location.origin;
      const currentUrl = url || window.location.href;
      const finalTitle = title || defaultSEO.title;
      const finalDescription = description || defaultSEO.description;
      const finalKeywords = keywords || defaultSEO.keywords;
      const finalImage = image || defaultSEO.image;
      const imageUrl = finalImage.startsWith('http') ? finalImage : `${currentDomain}${finalImage}`;

      // Actualizar meta tags dinámicamente
      const updateMetaTag = (property: string, content: string, isProperty = false) => {
        const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
        let meta = document.querySelector(selector) as HTMLMetaElement;
        
        if (!meta) {
          meta = document.createElement('meta');
          if (isProperty) {
            meta.setAttribute('property', property);
          } else {
            meta.setAttribute('name', property);
          }
          document.head.appendChild(meta);
        }
        meta.content = content;
      };

      // Actualizar título siempre
      document.title = finalTitle;

      // Actualizar meta tags básicos
      updateMetaTag('description', finalDescription);
      updateMetaTag('keywords', finalKeywords);
      updateMetaTag('author', 'CleverIT');
      updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

      // Actualizar Open Graph tags
      updateMetaTag('og:type', 'website', true);
      updateMetaTag('og:site_name', 'CleverIT AI', true);
      updateMetaTag('og:locale', 'es_ES', true);
      updateMetaTag('og:url', currentUrl, true);
      updateMetaTag('og:title', finalTitle, true);
      updateMetaTag('og:description', finalDescription, true);
      updateMetaTag('og:image', imageUrl, true);
      updateMetaTag('og:image:secure_url', imageUrl, true);
      updateMetaTag('og:image:width', '1200', true);
      updateMetaTag('og:image:height', '630', true);

      // Actualizar Twitter Card tags
      updateMetaTag('twitter:card', 'summary_large_image');
      updateMetaTag('twitter:site', '@CleverIT');
      updateMetaTag('twitter:creator', '@CleverIT');
      updateMetaTag('twitter:url', currentUrl);
      updateMetaTag('twitter:title', finalTitle);
      updateMetaTag('twitter:description', finalDescription);
      updateMetaTag('twitter:image', imageUrl);
      updateMetaTag('twitter:domain', window.location.hostname);

    } catch (error) {
      console.warn('Error updating SEO meta tags:', error);
    }

    // Limpiar al desmontar el componente (opcional)
    return () => {
      // Las meta tags se mantienen para mejor SEO
    };
  }, [title, description, image, url, keywords]);

  return null; // Este componente no renderiza nada
};

export default DynamicSEO;