import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import transitionAr from "./locales/ar/transition.json";
import transitionEn from "./locales/en/transition.json";
import transitionFr from "./locales/fr/transition.json";

const resources = {
  en: {
    translation: transitionEn,
  },
  ar: {
    translation: transitionAr,
  },
  fr: {
    translation: transitionFr,
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ar",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
