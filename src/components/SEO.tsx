import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  robots?: string;
  canonical?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  dynamic?: boolean; // New prop to enable dynamic meta tag updates
}

// Valores por defecto
const defaultSEO = {
  title: 'LLMApps by CleverIT | Generative AI and Business Automation Solutions',
  description: 'Transformamos tu negocio con LLM Apps que potencian la productividad y automatización. Carga, memoriza y conversa con tus datos de manera inteligente.',
  keywords: 'IA, Inteligencia Artificial, LLM, ChatGPT, Automatización, CleverIT, Apps IA, Machine Learning, Productividad, Datos',
  ogImage: 'https://llmapps.cleveritgroup.ai/meta/thumbnail.png',
  twitterCard: 'summary_large_image' as const,
  robots: 'index, follow',
  type: 'website' as const,
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  twitterCard = defaultSEO.twitterCard,
  robots = defaultSEO.robots,
  canonical,
  type = defaultSEO.type,
  dynamic = false,
}) => {
  // Construir título completo
  const fullTitle = title 
    ? `${title} | LLMApps by CleverIT`
    : defaultSEO.title;

  // Usar valores por defecto si no se proporcionan
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoImage = ogImage || defaultSEO.ogImage;
  
  // URL canónica - usar la prop o construir desde window.location
  const canonicalUrl = canonical || ogUrl || (typeof window !== 'undefined' ? window.location.href : '');

  // Function to update meta tags dynamically
  const updateMetaTag = (selector: string, attribute: string, content: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute(attribute, content);
    }
  };

  // Dynamic meta tag updates (only when dynamic prop is true)
  useEffect(() => {
    if (!dynamic || typeof window === 'undefined') return;

    // Update document title
    document.title = fullTitle;

    // Update meta description
    updateMetaTag('meta[name="description"]', 'content', seoDescription);

    // Update Open Graph meta tags
    updateMetaTag('meta[property="og:title"]', 'content', fullTitle);
    updateMetaTag('meta[property="og:description"]', 'content', seoDescription);
    updateMetaTag('meta[property="og:image"]', 'content', seoImage);
    if (canonicalUrl) {
      updateMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    }

    // Update Twitter Card meta tags
    updateMetaTag('meta[name="twitter:title"]', 'content', fullTitle);
    updateMetaTag('meta[name="twitter:description"]', 'content', seoDescription);
    updateMetaTag('meta[name="twitter:image"]', 'content', seoImage);

    // Update keywords if provided
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', 'content', seoKeywords);
    }

    // Update canonical URL
    if (canonicalUrl) {
      const canonicalElement = document.querySelector('link[rel="canonical"]');
      if (canonicalElement) {
        canonicalElement.setAttribute('href', canonicalUrl);
      }
    }
  }, [fullTitle, seoDescription, seoImage, canonicalUrl, seoKeywords, keywords, dynamic]);

  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:site_name" content="LLMApps by CleverIT" />
      <meta property="og:locale" content="es_ES" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:site" content="@CleverIT" />
      <meta name="twitter:creator" content="@CleverIT" />

      {/* Additional SEO Tags */}
      <meta name="author" content="CleverIT" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href={`${import.meta.env.BASE_URL}favicon.svg`} />
      
      {/* Theme color for mobile browsers */}
      <meta name="theme-color" content="#ec4899" />
      <meta name="msapplication-TileColor" content="#ec4899" />
    </Helmet>
  );
};

export default SEO;