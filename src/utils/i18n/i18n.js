import { createI18n } from 'vue-i18n';
import en from './dictionary/en.json';
import ko from './dictionary/ko.json';

const i18n = createI18n({
  legacy: false, // false = Composition API 모드 활성화
  locale: 'ko', // 기본 언어
  fallbackLocale: 'en', // 번역 누락시 대체 언어
  messages: {
    en,
    ko,
  },
});
export default i18n;
