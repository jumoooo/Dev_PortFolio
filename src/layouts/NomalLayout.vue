<template>
  <div class="main-layout bg-grey-2">
    <header bordered class="bg-white text-grey-9">
      <DefaultHeaderToolbar
        @openAuthDialog="openAuthDialog"
        @varifyEmail="varifyEmail"
        @handleOption="handleOption"
        @handleLogout="handleLogout"
      />
    </header>
    <section :style="pageContainerStyless" class="content-section">
      <router-view />
    </section>

    <AuthDialog v-model="authDialog" />
    <OptionDialog
      v-model="optionDialog"
      v-model:language="language"
      @submit="optionSubmit"
    />
  </div>
</template>

<script setup>
import AuthDialog from 'src/components/auth/AuthDialog.vue';
import OptionDialog from '../components/OptionDialog.vue';
import DefaultHeaderToolbar from 'src/components/commen_layouts/DefaultHeaderToolbar.vue';

import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';
import { logout, sendVerificationEmail } from 'src/services';
import { useQuasar } from 'quasar';
import { updateUserOptions } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();

const authStore = useAuthStore();

const route = useRoute();
const $q = useQuasar();

// 모바일 or 모니터 등 해상도에 따른 감지

// content-section Style 부분
const pageContainerStyless = computed(() => ({
  maxWidth: route.meta?.width || '1080px',
  margin: '0 auto',
  padding: '0',
}));
const authDialog = ref(false);
const openAuthDialog = () => (authDialog.value = true);
// 로그아웃
const handleLogout = async () => {
  await logout();
  $q.notify(t('message.1013'));
};

const varifyEmail = async () => {
  sendVerificationEmail();
  $q.notify(t('message.1014'));
};

const optionDialog = ref(false);
const handleOption = () => {
  optionDialog.value = true;
};

const { execute: updateOptions } = useAsyncState(updateUserOptions, null, {
  immediate: false,
  throwError: true,
  onSuccess: res => {
    $q.notify(t('message.1015'));
  },
});

// 다국어 관련
const language = ref(authStore.user?.language);
watch(
  () => authStore.user?.language,
  newLang => {
    if (newLang) {
      language.value = newLang;
    }
  },
);
const optionSubmit = newLang => {
  optionDialog.value = false;
  locale.value = newLang;
  updateOptions(0, authStore.user?.uid, { language: newLang });
};
</script>
<style lang="scss">
header {
  top: 0;
  width: 100%;
  z-index: 1000;
}
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.content-section {
  flex: 1 1 auto;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
}
footer {
  height: 250px;
}
</style>
<style lang="scss" scoped>
@media (max-width: 1080px) {
  .content-section {
    margin: 10px 10px;
  }
}
</style>
