<template>
  <SettingFormCard
    :title="$t('change-password')"
    :loading="isLoading"
    :submit-label="t('save_01')"
    @submit="handleSubmit"
  >
    <q-input
      v-model="form.newPassword"
      type="password"
      outlined
      dense
      :label="t('new-password')"
    />
    <q-input
      v-model="form.newPasswordconfirm"
      type="password"
      outlined
      dense
      :label="t('check-the-new-password')"
    />
  </SettingFormCard>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { useAsyncState } from '@vueuse/core';
import SettingFormCard from 'src/components/base/SettingFormCard.vue';
import { updateUserPassword } from 'src/services';
import { ref } from 'vue';
import { getErrorMessage } from 'src/utils/firebase/error-message';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const $q = useQuasar();
const { isLoading, error, execute } = useAsyncState(updateUserPassword, null, {
  immediate: false,
  onSuccess: () => {
    $q.notify(t('message.1023'));
    form.value.newPassword = '';
    form.value.newPasswordconfirm = '';
  },
  onError: err => {
    $q.notify({
      type: 'negative',
      message: getErrorMessage(err.code),
    });
  },
});
const form = ref({
  newPassword: '',
  newPasswordconfirm: '',
});

const handleSubmit = () => execute(0, form.value.newPassword);
// const handleSubmit = async () => {
//   await updateUserPassword(form.value.newPassword);
//   $q.notify('비밀번호가 변경되었습니다.');
//   form.value.newPassword = '';
//   form.value.newPasswordconfirm = '';
// };
</script>

<style lang="scss" scoped></style>
