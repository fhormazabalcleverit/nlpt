# 🤖 LLMApps by CleverIT

Una aplicación web moderna construida con React, TypeScript y Vite que presenta las soluciones de inteligencia artificial y aplicaciones LLM de CleverIT. La plataforma permite a las empresas transformar sus operaciones mediante IA avanzada, automatización y análisis inteligente de datos.

![LLMApps by CleverIT](https://img.shields.io/badge/LLMApps-by%20CleverIT-blue)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.2-orange)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-teal)

[![Deploy Vite site to GitHub Pages](https://github.com/CleveritDemo/LLMApps-by-CleverIT/actions/workflows/deploy.yml/badge.svg)](https://github.com/CleveritDemo/LLMApps-by-CleverIT/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/github/deployments/CleveritDemo/LLMApps-by-CleverIT/github-pages?label=pages%20deploy)](https://github.com/CleveritDemo/LLMApps-by-CleverIT/deployments/github-pages)

**🌐 Sitio en vivo:** [https://llmapps.cleveritgroup.ai/](https://llmapps.cleveritgroup.ai/)

## 🌟 Características Principales

- **🎨 Diseño Moderno**: Interfaz elegante con efectos visuales aurora y gradientes dinámicos
- **🌐 Multiidioma**: Soporte completo para español e inglés con contexto de localización
- **📱 Responsive**: Diseño completamente adaptable para dispositivos móviles y desktop
- **⚡ Performance**: Optimizada con Vite para carga rápida y hot reload
- **🎯 SEO Optimizado**: Meta tags dinámicos y configuración SEO completa
- **🔄 SPA Routing**: Navegación fluida con React Router DOM
- **🎭 Animaciones**: Efectos de scroll y transiciones suaves personalizadas
- **💫 Efectos Visuales**: Componente Aurora personalizado con WebGL

## 🏗️ Arquitectura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Aurora.tsx       # Efecto visual aurora con WebGL
│   ├── ChatInterface.tsx# Interfaz de chat simulada
│   ├── Hero.tsx         # Sección principal de landing
│   ├── Navbar.tsx       # Navegación principal
│   ├── Footer.tsx       # Pie de página
│   ├── SEO.tsx          # Component para meta tags
│   ├── MastraHighlight.tsx # Destaque de tecnología Mastra
│   ├── Benefits.tsx     # Sección de beneficios
│   ├── Testimonials.tsx # Testimonios de clientes
│   ├── FAQ.tsx          # Preguntas frecuentes
│   ├── Process.tsx      # Proceso de implementación
│   ├── NewProcess.tsx   # Nuevo proceso visualizado
│   ├── Pricing.tsx      # Planes y precios
│   └── QuoteForm.tsx    # Formulario de cotización
├── pages/               # Páginas de la aplicación
│   ├── PricingPage.tsx  # Página de planes y precios
│   ├── QuotePage.tsx    # Página de cotización
│   ├── TeamPage.tsx     # Página del equipo
│   ├── UseCasesPage.tsx # Casos de uso
│   └── UseCaseDetailPage.tsx # Detalle de casos de uso
├── context/             # Contextos de React
│   └── LanguageContext.tsx # Manejo de idiomas
├── hooks/               # Custom hooks
│   └── useScrollAnimation.ts # Hook para animaciones
├── locales/             # Archivos de traducción
│   ├── es.json         # Español
│   └── en.json         # Inglés
├── lib/                # Utilidades
│   └── utils.ts        # Funciones utilitarias
└── App.tsx             # Componente principal
```

## 🚀 Tecnologías Utilizadas

### Frontend Core
- **React 18.3.1** - Biblioteca de UI con hooks y componentes funcionales
- **TypeScript 5.5.3** - Tipado estático para JavaScript
- **Vite 5.4.2** - Build tool y dev server ultrarrápido

### Estilizado y UI
- **Tailwind CSS 3.4.1** - Framework CSS utility-first
- **Tailwind Animate** - Animaciones CSS personalizadas
- **Class Variance Authority** - Manejo de variantes de clases
- **Lucide React** - Iconos SVG modernos

### Navegación y SEO
- **React Router DOM 7.8.2** - Enrutamiento SPA
- **React Helmet Async** - Manejo dinámico de meta tags

### Desarrollo y Calidad
- **ESLint 9.9.1** - Linting y calidad de código
- **TypeScript ESLint** - Reglas específicas para TypeScript
- **PostCSS & Autoprefixer** - Procesamiento de CSS

### Efectos Visuales
- **OGL 1.0.11** - Biblioteca WebGL para efectos aurora
- **CSS Custom Properties** - Variables CSS dinámicas

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/CleveritDemo/LLMApps-by-CleverIT.git
cd LLMApps-by-CleverIT
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno** (opcional)
```bash
cp .env.example .env.local
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con hot reload

# Construcción
npm run build        # Build para producción

# Linting
npm run lint         # Ejecutar ESLint

# Preview
npm run preview      # Preview del build de producción
```

## 🌐 Despliegue

### GitHub Pages (Configurado)
El proyecto incluye un workflow de GitHub Actions para despliegue automático:

```yaml
# .github/workflows/deploy.yml
- Despliegue automático en cada push a main  
- Build con Vite
- Configuración SPA con 404.html
- Deploy a GitHub Pages
```

### Configuración Base URL
```typescript
// vite.config.ts
export default defineConfig({
  base: '/LLMApps-by-CleverIT/', // Configurado para GitHub Pages
})
```

### Otros Proveedores
- **Vercel**: Conectar directamente el repositorio
- **Netlify**: Subir carpeta `dist/` después de `npm run build`
- **AWS S3**: Configurar bucket estático con `dist/`

## 🎨 Personalización

### Colores y Tema
```javascript
// tailwind.config.js
colors: {
  backblack: '#040809',    // Color de fondo principal
  // Gradientes personalizados desde pink-500 a purple-600
}
```

### Fuentes
```css
/* Google Fonts - Plus Jakarta Sans */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800');
```

### Efectos Aurora
```typescript
// Personalizar en componentes/Aurora.tsx
<Aurora 
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  speed={0.6}
  blend={0.5}
  amplitude={1.2}
/>
```

## 📝 Contenido y Localización

### Agregar Nuevos Idiomas
1. Crear archivo en `src/locales/[idioma].json`
2. Actualizar `LanguageContext.tsx`
3. Agregar tipo al union type `Language`

### Estructura de Traducciones
```json
{
  "navbar": { "team": "...", "useCases": "..." },
  "hero": { "title": "...", "description": "..." },
  "pricing": { "starter": { "name": "...", "features": [...] } }
}
```

## 📊 Casos de Uso Incluidos

La aplicación presenta tres casos de uso principales:

1. **Production Insight** 🏭
   - Optimización de procesos manufactureros
   - Análisis predictivo de producción
   - Dashboard en tiempo real

2. **Mining Intelligence** ⛏️
   - Monitoreo de operaciones mineras
   - Análisis de seguridad y eficiencia
   - Gestión de recursos

3. **Development Metrics** 📈
   - Métricas de desarrollo de software
   - KPIs de equipos de desarrollo
   - Análisis de productividad

## 🔧 Configuración de Desarrollo

### VS Code Extensions Recomendadas
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### Configuración de TypeScript
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

### Convenciones de Código
- Usar TypeScript para todos los archivos
- Seguir convenciones de ESLint configuradas
- Componentes en PascalCase
- Hooks personalizados con prefijo `use`
- Archivos de páginas con sufijo `Page`

## 📄 Licencia

Este proyecto es propiedad de CleverIT Group. Todos los derechos reservados.

## 📞 Contacto

- **Email**: info@llmaps.com
- **Website**: [CleverIT Group](https://www.cleveritgroup.com)
- **Demo**: [LLMApps Demo](https://phoenix.cleveritgroup.ai/)

---

**Desarrollado con ❤️ por CleverIT Group - 2025**

> Transformando negocios a través de la inteligencia artificial y aplicaciones LLM innovadoras.
