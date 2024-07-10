import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import translationEn from "./locales/en";
import translationPt from "./locales/pt";

const resources = {
    en: { translation: translationEn },
    pt: { translation: translationPt },
};

i18n.use(detector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "pt",
        keySeparator: false,
        interpolation: { escapeValue: false }
    });

export default i18n;