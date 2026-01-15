import { boot } from 'quasar/wrappers';
import { Notify } from 'quasar';
import { getErrorMessage } from 'src/utils/firebase/error-message';

export default boot(async ({ app }) => {
  // 전역 에러 핸들러
  app.config.errorHandler = (err, instance, info) => {
    // Firebase 관련 에러인 경우 특화된 메시지 표시
    if (err.code) {
      Notify.create({
        type: 'negative',
        message: getErrorMessage(err.code),
        timeout: 3000,
        position: 'top',
      });
    } else {
      // 일반 에러 처리
      console.error('전역 에러 발생:', {
        error: err,
        component: instance?.$options?.name || '알 수 없는 컴포넌트',
        info,
      });

      Notify.create({
        type: 'negative',
        message: '예상치 못한 오류가 발생했습니다.',
        caption: err.message || '잠시 후 다시 시도해주세요.',
        timeout: 3000,
        position: 'top',
      });
    }
  };

  // 처리되지 않은 Promise rejection 캐치
  window.addEventListener('unhandledrejection', event => {
    console.error('처리되지 않은 Promise 에러:', event.reason);

    Notify.create({
      type: 'negative',
      message: '요청 처리 중 오류가 발생했습니다.',
      caption: '잠시 후 다시 시도해주세요.',
      timeout: 3000,
      position: 'top',
    });

    // 기본 동작 방지
    event.preventDefault();
  });
});
