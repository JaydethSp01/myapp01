import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

const resources = {
    es: {
      translation: {
        title: "Aplicación Multilingüe",
        welcome: "Bienvenido a nuestra app",
        change_language: "Cambiar idioma",
        footer: {
          rights: "Todos los derechos reservados."
        },
        country: {
          name: "España"
        }
      }
    },
    en: {
      translation: {
        title: "Multilingual Application",
        welcome: "Welcome to our app",
        change_language: "Change language",
        footer: {
          rights: "All rights reserved."
        },
        country: {
          name: "United States"
        }
      }
    },
    fr: {
      translation: {
        title: "Application Multilingue",
        welcome: "Bienvenue dans notre application",
        change_language: "Changer la langue",
        footer: {
          rights: "Tous droits réservés."
        },
        country: {
          name: "France"
        }
      }
    },
    de: {
      translation: {
        title: "Mehrsprachige Anwendung",
        welcome: "Willkommen in unserer App",
        change_language: "Sprache ändern",
        footer: {
          rights: "Alle Rechte vorbehalten."
        },
        country: {
          name: "Deutschland"
        }
      }
    }
  };
  

i18n
  .use(HttpBackend) // Permite cargar traducciones desde un backend
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Inicializa con React
  .init({
    resources,
    fallbackLng: 'es',
    debug: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
