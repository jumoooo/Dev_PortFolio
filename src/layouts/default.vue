<template>
  <q-layout class="main-layout bg-grey-2">
    <DefaultHeader
      @openAuthDialog="openAuthDialog"
      @varifyEmail="varifyEmail"
      @handleOption="handleOption"
      @handleLogout="handleLogout"
    />
    <div class="container-wrap">
      <q-page-container :style="pageContainerStyless" class="content-section">
        <router-view />
      </q-page-container>
    </div>
    <AuthDialog v-model="authDialog" />
    <OptionDialog
      v-model="optionDialog"
      v-model:language="language"
      @submit="handleSubmit"
    />
  </q-layout>
</template>

<script setup>
import AuthDialog from 'src/components/auth/AuthDialog.vue';
import OptionDialog from '../components/OptionDialog.vue';
import DefaultHeader from 'src/components/commen_layouts/DefaultHeader.vue';

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

const pageContainerStyless = computed(() => ({
  maxWidth: route.meta?.width || '1080px',
  margin: '0 auto',
  padding: '0',
  overflow: 'hidden',
}));
const authDialog = ref(false);
const openAuthDialog = () => (authDialog.value = true);
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
const language = ref(authStore.user?.language);
watch(
  () => authStore.user?.language,
  newLang => {
    if (newLang) {
      language.value = newLang;
    }
  },
);
const handleSubmit = newLang => {
  optionDialog.value = false;
  locale.value = newLang;
  updateOptions(0, authStore.user?.uid, { language: newLang });
};
</script>
<style lang="scss">
.main-layout {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
}
</style>

<style lang="scss" scoped>
.container-wrap {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
</style>
