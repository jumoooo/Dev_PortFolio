import { createI18n } from 'vue-i18n';
import en from './dictionary/en.json';
import ko from './dictionary/ko.json';

const savedLocale = localStorage.getItem('locale') || 'ko';

const i18n = createI18n({
  legacy: false, // false = Composition API 모드 활성화
  locale: savedLocale, // 기본 언어
  fallbackLocale: 'en', // 번역 누락시 대체 언어
  missingWarn: false, // 다국어 없을 시 console 경고 여부
  fallbackWarn: false, // 다국어 실패 console 경고 여부
  messages: {
    en,
    ko,
  },
});
export default i18n;
