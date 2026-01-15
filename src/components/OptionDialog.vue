<template>
  <q-dialog
    class="modal"
    v-bind="$attrs"
    @hide="onHide"
    transition-show="none"
    transition-hide="none"
    position="standard"
  >
    <q-card class="option-wrap column">
      <q-toolbar>
        <q-avatar style="width: 30px; height: 30px">
          <img src="https://cdn-icons-png.flaticon.com/128/17/17789.png" alt="옵션 아이콘 이미지"/>
        </q-avatar>
        <q-toolbar-title>{{ $t('option') }}</q-toolbar-title>
        <q-btn v-close-popup flat round dense icon="close" />
      </q-toolbar>
      <q-separator />
      <q-form @submit.prevent="handleSubmit" class="col column">
        <q-card-section class="q-gutter-y-sm col">
          <q-select
            filled
            v-model="languageModel"
            :options="languages"
            :label="$t('language')"
            emit-value
            map-options
          />
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat type="submit"> {{ $t('save') }}</q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const onHide = () => {};
const props = defineProps({
  language: {
    type: String,
    default: 'ko',
  },
});

const emit = defineEmits(['language', 'submit']);

const languages = computed(() => [
  { label: t('ko'), value: 'ko' },
  { label: t('en'), value: 'en' },
]);

const languageModel = computed({
  get: () => props.language,
  set: val => emit('update:language', val),
});

const handleSubmit = () => {
  emit('submit', languageModel.value);
};
</script>

<style lang="scss" scoped>
@media (min-width: 786px) {
  .option-wrap {
    min-width: 460px;
    height: 550px;
    aspect-ratio: 460 / 550;
  }
}
</style>
