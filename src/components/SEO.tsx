import React from 'react';
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
}

// Valores por defecto
const defaultSEO = {
  title: 'LLMApps by CleverIT - Soluciones de IA Avanzadas',
  description: 'Transformamos tu negocio con LLM Apps que potencian la productividad y automatización. Carga, memoriza y conversa con tus datos de manera inteligente.',
  keywords: 'IA, Inteligencia Artificial, LLM, ChatGPT, Automatización, CleverIT, Apps IA, Machine Learning, Productividad, Datos',
  ogImage: `${import.meta.env.BASE_URL}meta/thumbnail.png`,
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