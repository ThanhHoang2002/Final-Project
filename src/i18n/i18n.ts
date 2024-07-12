import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HEADER_EN from '../locales/en/header.json'
import HEADER_VI from '../locales/vi/header.json'
import HEADER_KO from '../locales/ko/header.json'
import RECEIVING_METHOD_EN from '../locales/en/recievingMethod.json'
import RECEIVING_METHOD_VI from '../locales/vi/recievingMethod.json'
import RECEIVING_METHOD_KO from '../locales/ko/recievingMethod.json'
import HOME_EN from '../locales/en/home.json'
import HOME_VI from '../locales/vi/home.json'
import HOME_KO from '../locales/ko/home.json'
export const resources = {
  en: {
    header: HEADER_EN,
    receivingMethod: RECEIVING_METHOD_EN,
    home: HOME_EN
  },
  vi: {
    header: HEADER_VI,
    receivingMethod: RECEIVING_METHOD_VI,
    home: HOME_VI
  },
  ko: {
    header: HEADER_KO,
    receivingMethod: RECEIVING_METHOD_KO,
    home: HOME_KO
  }
}
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    ns: ['header'],
    fallbackLng: 'vi',
    debug: true,
    detection: {
      order: ['localStorage'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  })
