<template>
  <BaseCard>
    <q-form @submit.prevent="handleSubmit">
      <q-card-section class="q-gutter-y-md">
        <div class="text-h6">{{ $t('change-password') }}</div>
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
      </q-card-section>
      <q-separator />
      <q-card-actions>
        <q-space />
        <q-btn
          type="submit"
          :label="t('save_01')"
          flat
          color="primary"
          :loading="isLoading"
        />
      </q-card-actions>
    </q-form>
  </BaseCard>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { useAsyncState } from '@vueuse/core';
import BaseCard from 'src/components/base/BaseCard.vue';
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
