# 🤖 Cleverit AI | Perfiles de Inteligencia Artificial

Una plataforma web de última generación diseñada para presentar el ecosistema de **Perfiles de IA** de Cleverit. Este proyecto no es solo una landing page; es el resultado de nuestra metodología **AI-Augmented Workflow**, utilizando herramientas de élite como GitHub Copilot Enterprise y Claude para acelerar la entrega de soluciones de software robustas y escalables.

![Cleverit AI](https://img.shields.io/badge/Cleverit-AI--Experts-3cdb7c)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind--CSS-3.4.1-38B2AC)

---

## 🚀 AI-Augmented Workflow

Nuestra propuesta de valor diferencial reside en cómo construimos software. Todos nuestros proyectos son impulsados por:
- **GitHub Copilot Enterprise:** Integración profunda en el ciclo de vida del desarrollo.
- **Claude (Anthropic):** Superpoder de análisis y resolución de problemas complejos.
- **Reducción del Time-to-Market:** Logramos una entrega hasta 10x más rápida sin comprometer la calidad del código.

## 🌟 Roles de Expertos en IA

Presentamos dos perfiles clave que lideran la transformación digital:

1. **Clever AI Architect** 🏗️
   - **Misión:** Diseñar la estrategia y escalabilidad del ecosistema de IA corporativo.
   - **Enfoque:** Gobernanza, seguridad, selección de stack tecnológico y arquitecturas de LLMs.

2. **Clever AI Developer** 💻
   - **Misión:** Transformar conceptos en soluciones de IA tangibles y eficientes.
   - **Enfoque:** Integración de APIs (OpenAI, Anthropic, Gemini), Sistemas RAG, Ingeniería de Prompts y Agentes Autónomos.

## 🛠️ Stack Tecnológico

- **Core:** React 18, TypeScript, Vite.
- **Estilos:** Tailwind CSS con un sistema de diseño premium (Dark Mode, Glassmorphism).
- **Animaciones:** Framer Motion (PlzMotion) para efectos de scroll y transiciones suaves.
- **SEO:** Optimización dinámica para buscadores (DynamicSEO) en múltiples idiomas.
- **Internacionalización:** Soporte nativo para Español e Inglés (LanguageContext).

## 🏗️ Estructura del Proyecto

```
src/
├── components/plz/      # Componentes premium exclusivos
│   ├── PlzNavbar.tsx    # Navegación con selector de idioma
│   ├── PlzFooter.tsx    # Pie de página con marca Cleverit AI
│   ├── PlzMotion.tsx    # Envoltorios de Framer Motion para animaciones
│   ├── PlzTechStackCard.tsx # Tarjetas de stack tecnológico IA
│   └── ...              # Componentes de UI (Bento, Cases, FAQ)
├── pages/               # Páginas principales del sitio
│   ├── WebPlzProfilesPage.tsx    # Landing principal de perfiles (Home)
│   ├── WebPlzExpertDetailPage.tsx # Plantilla dinámica de detalle (Architect/Developer)
│   ├── WebPlzContactPage.tsx    # Formulario de contacto inteligente
│   └── ...                      # Páginas de industria (Mining, Retail, Performance)
├── locales/             # Diccionarios de traducción
│   ├── es.json          # Soporte para Español
│   └── en.json          # Soporte para Inglés
└── App.tsx              # Configuración de rutas y contextos
```

## 📦 Instalación y Desarrollo

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar servidor local:**
   ```bash
   npm run dev
   ```

3. **Construir para producción:**
   ```bash
   npm run build
   ```

## 🌐 Despliegue en GitHub Pages

El proyecto está configurado con **GitHub Actions** para un despliegue continuo (CI/CD):
- Repositorio: `nlpt`
- URL: `https://fhormazabalcleverit.github.io/nlpt/`

> **Nota:** La configuración de `base` en `vite.config.ts` es dinámica para permitir tanto el desarrollo local (`/`) como el despliegue en GitHub (`/nlpt/`).

---

**Desarrollado con ❤️ por el equipo de Cleverit AI - 2026**  
*Transformando el futuro del desarrollo de software a través de la Inteligencia Artificial.*
