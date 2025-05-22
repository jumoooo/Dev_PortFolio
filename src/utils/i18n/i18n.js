import { createI18n } from 'vue-i18n';
import en from './dictionary/ko.json';
import ko from './dictionary/ko.json';

const messages = {
  en,
  ko,
};

const i18n = createI18n({
  locale: 'ko', // 기본 언어
  fallbackLocale: 'en', // 번역 누락시 대체 언어
  messages,
});
export default i18n;
