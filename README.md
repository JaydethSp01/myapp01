# Aplicación Multilingüe React

Esta aplicación es un ejemplo de internacionalización en React utilizando **i18next** y **react-i18next**. Permite cambiar el idioma de forma dinámica (soporte para Español, Inglés, Francés y Alemán) y muestra una imagen representativa del país según el idioma seleccionado.

## Características

- **Internacionalización Dinámica:** Cambia entre Español, Inglés, Francés y Alemán.
- **Detección de Idioma:** Utiliza `i18next-browser-languagedetector` para detectar el idioma del navegador y guardar la preferencia en `localStorage`.
- **Componentes Modulares:** Estructura clara con componentes `Header`, `Content`, `Footer` y `CountryImage`.
- **Diseño Moderno y Responsive:** Utiliza CSS con variables personalizadas, soporte para dark mode y ajustes responsivos.
- **Integración con Backend:** Opcionalmente, se puede cargar traducciones desde un backend utilizando `i18next-http-backend`.

## Tecnologías Utilizadas

- **React** para la creación de la interfaz de usuario.
- **i18next & react-i18next** para la internacionalización.
- **i18next-browser-languagedetector** para la detección del idioma.
- **i18next-http-backend** para cargar traducciones de forma remota.
- **CSS personalizado** con variables para un diseño moderno y adaptable.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   ```

2. **Ingresa al directorio del proyecto:**

   ```bash
   cd nombre-del-proyecto
   ```

3. **Instala las dependencias:**

   Con Yarn:
   ```bash
   yarn install
   ```
   O, si prefieres npm:
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo:**

   Con Yarn:
   ```bash
   yarn start
   ```
   O, con npm:
   ```bash
   npm start
   ```

5. **Abre la aplicación en tu navegador:**

   Navega a [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.

## Estructura del Proyecto

```plaintext
.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Content.js
│   │   ├── Footer.js
│   │   └── CountryImage.js
│   ├── App.js
│   ├── App.css
│   └── i18n.js
├── package.json
└── README.md
```

## Uso

- **Cambio de Idioma:** Utiliza el selector ubicado en el `Header` para cambiar entre Español, Inglés, Francés y Alemán.
- **Imagen Representativa:** El componente `CountryImage` muestra la bandera del país correspondiente al idioma seleccionado.
- **Contenido Dinámico:** El resto de la aplicación se actualiza de forma automática con las traducciones definidas en el archivo `i18n.js`.

## Cómo Agregar un Nuevo Idioma

1. **Actualizar `i18n.js`:**  
   Agrega la clave del nuevo idioma y sus traducciones en el objeto `resources`. Por ejemplo:

   ```javascript
   const resources = {
     // ... otros idiomas
     it: {  // Italiano
       translation: {
         title: "Applicazione multilingue",
         welcome: "Benvenuto nella nostra app",
         change_language: "Cambia lingua",
         footer: {
           rights: "Tutti i diritti riservati."
         },
         country: {
           name: "Italia"
         }
       }
     }
   };
   ```

2. **Actualizar el Selector de Idioma en `Header.js`:**  
   Añade la opción correspondiente en el `<select>`:

   ```jsx
   <option value="it">Italiano</option>
   ```

3. **Actualizar `CountryImage.js`:**  
   Mapea la imagen representativa del nuevo idioma:

   ```javascript
   const countryImages = {
     // ... otros idiomas
     it: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"
   };
   ```

## Personalización

- **Estilos:**  
  Puedes personalizar la apariencia de la aplicación modificando el archivo `App.css`. Se han utilizado variables CSS para facilitar la tematización y el soporte a dark mode.

- **Traducciones:**  
  Si deseas modificar algún texto, edita las traducciones en el objeto `resources` dentro de `i18n.js`.

## Contribución

Si deseas contribuir a este proyecto:

1. Haz un **fork** del repositorio.
2. Crea una **rama** para tus cambios (`git checkout -b feature/nuevo-idioma`).
3. Realiza tus cambios y **commit**.
4. Envía un **pull request** explicando tus mejoras.

¡Toda contribución es bienvenida!

