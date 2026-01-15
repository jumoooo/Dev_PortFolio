<template>
  <div class="q-gutter-y-md">
    <!-- 프로필 변경 폼 -->
    <SettingFormCard
      :title="$t('change-profile')"
      :loading="isLoadingProfile"
      :submit-label="t('save_01')"
      @submit="handleSubmitProfile"
    >
      <q-input
        v-model="displayName"
        outlined
        dense
        :label="t('nickname')"
      />
    </SettingFormCard>

    <!-- 이메일 변경 폼 -->
    <SettingFormCard
      :title="$t('change-email')"
      :loading="isLoadingEmail"
      :submit-label="t('save_01')"
      @submit="handleSubmitEmail"
    >
      <q-input v-model="email" outlined dense :label="t('email')" />
    </SettingFormCard>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar';
import SettingFormCard from 'src/components/base/SettingFormCard.vue';
import { useAsyncState } from '@vueuse/core';
import { updateuserEmail, updateuserProfile } from 'src/services';
import { useAuthStore } from 'src/stores/auth';
import { ref, watchEffect } from 'vue';
import { getErrorMessage } from 'src/utils/firebase/error-message';
import { useI18n } from 'vue-i18n';

const authStore = useAuthStore();
const $q = useQuasar();
const { t } = useI18n();

const { isLoading: isLoadingProfile, execute: executeProfile } = useAsyncState(
  updateuserProfile,
  null,
  {
    immediate: false,
    onSuccess: () => {
      $q.notify(t('message.1021'));
    },
    onError: err => {
      console.log('err :', err);
      $q.notify({
        type: 'negative',
        message: getErrorMessage(err.code),
      });
    },
  },
);

const displayName = ref('');
const handleSubmitProfile = () => executeProfile(0, displayName.value);
// const handleSubmitProfile = async () => {
//   await updateuserProfile(displayName.value);
//   $q.notify('프로필 수정 완료.');
// };

const { isLoading: isLoadingEmail, execute: executeEmail } = useAsyncState(
  updateuserEmail,
  null,
  {
    immediate: false,
    onSuccess: () => {
      $q.notify(t('message.1022'));
    },
    onError: err => {
      $q.notify({
        type: 'negative',
        message: getErrorMessage(err.code),
      });
    },
  },
);
const email = ref('');
const handleSubmitEmail = () => executeEmail(0, email.value);
// const handleSubmitEmail = async () => {
//   await updateuserEmail(email.value);
//   $q.notify('이메일 수정 완료.');
// };
watchEffect(() => {
  displayName.value = authStore.user?.displayName;
  email.value = authStore.user?.email;
});
</script>

<style lang="scss" scoped></style>
