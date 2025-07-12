# Mi Portafolio - Desarrollador Full Stack

Un portafolio personal moderno y responsivo desarrollado con React, Tailwind CSS y Framer Motion. Diseñado para mostrar proyectos, habilidades y experiencia de desarrollo web.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con gradientes y efectos visuales
- **Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Animaciones Suaves**: Transiciones fluidas con Framer Motion
- **Navegación Intuitiva**: Menú de navegación con scroll suave
- **Formulario de Contacto**: Integrado con Formspree para recibir mensajes
- **SEO Optimizado**: Estructura semántica y metadatos apropiados

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.10
- **Animaciones**: Framer Motion 12.18.1
- **Iconos**: Lucide React
- **Build Tool**: Vite 6.3.5
- **Formulario**: Formspree

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.jsx      # Navegación principal
│   ├── BackToTop.jsx   # Botón volver arriba
│   └── FadeInWhenVisible.jsx # Animaciones de entrada
├── pages/              # Páginas principales
│   ├── About.jsx       # Sección sobre mí
│   ├── Projects.jsx    # Galería de proyectos
│   └── Contact.jsx     # Formulario de contacto
├── assets/             # Imágenes y recursos
└── App.jsx             # Componente principal
```

## 🎨 Secciones

### Hero Section
- Presentación personal con foto de perfil
- Descripción profesional
- Botones de llamada a la acción
- Stack tecnológico visual

### Sobre Mí
- Información personal y profesional
- Habilidades técnicas con barras de progreso
- Estadísticas de proyectos
- Características destacadas

### Proyectos
- **RUMI Personal**: Plataforma educativa para aprendizaje autodidacta
- **RUMI Enterprise**: Solución integral de gestión educativa (en construcción)
- Detalles técnicos y características de cada proyecto
- Enlaces a repositorios y demos

### Contacto
- Información de contacto
- Enlaces a redes sociales
- Formulario funcional con validación
- Estados de envío con feedback visual

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/RumiSoftware2/Portfolio.git
   cd Portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

El portafolio está optimizado para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Características Técnicas

- **Performance**: Lazy loading y optimizaciones de rendimiento
- **Accesibilidad**: Navegación por teclado y lectores de pantalla
- **SEO**: Metadatos y estructura semántica
- **Animaciones**: Transiciones suaves y efectos hover
- **Formularios**: Validación y estados de envío

## 🔧 Personalización

### Actualizar Información Personal
- Modificar `src/App.jsx` para cambiar la información del hero
- Actualizar `src/pages/About.jsx` para información personal
- Editar `src/pages/Projects.jsx` para proyectos

### Cambiar Colores
- Los colores principales están en las clases de Tailwind
- Gradientes: `from-blue-600 to-purple-600`
- Colores de acento: `blue-600`, `purple-600`

### Agregar Proyectos
- Editar el array `proyectos` en `src/pages/Projects.jsx`
- Agregar imágenes en `public/projects/`
- Actualizar enlaces y descripciones

## 📞 Contacto

- **Email**: smendowork@gmail.com
- **GitHub**: [RumiSoftware2](https://github.com/RumiSoftware2)
- **LinkedIn**: [Sebastian Mendoza Duitama](https://www.linkedin.com/in/sebastian-mendoza-duitama-694845203)
- **YouTube**: [Math Suit](https://youtube.com/@map_314)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

### MIT License

Copyright (c) 2024 Sebastian Mendoza Duitama

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

Desarrollado con ❤️ por Sebastian Mendoza Duitama ([RumiSoftware2](https://github.com/RumiSoftware2))
