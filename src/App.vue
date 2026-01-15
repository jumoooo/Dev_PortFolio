<template>
  <router-view />
</template>

<script setup>
import { onErrorCaptured } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

// 컴포넌트 에러 캡처 및 사용자 피드백
onErrorCaptured((err, instance, info) => {
  console.error('컴포넌트 에러 발생:', {
    error: err,
    component: instance?.$options?.name || '알 수 없는 컴포넌트',
    info,
  });

  // 사용자에게 친화적인 에러 메시지 표시
  $q.notify({
    type: 'negative',
    message: '일시적인 오류가 발생했습니다.',
    caption: '문제가 계속되면 페이지를 새로고침해주세요.',
    timeout: 3000,
    position: 'top',
  });

  // 에러 전파 중지 (true 반환)
  return false;
});
</script>
