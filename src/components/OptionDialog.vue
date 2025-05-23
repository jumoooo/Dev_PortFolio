<template>
  <q-dialog
    class="modal"
    persistent
    v-bind="$attrs"
    @hide="onHide"
    transition-show="none"
    transition-hide="none"
    position="standard"
  >
    <q-card style="min-width: 460px; height: 550px" class="column">
      <q-toolbar>
        <q-avatar style="width: 30px; height: 30px">
          <img src="https://cdn-icons-png.flaticon.com/128/17/17789.png" />
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

const onHide = () => {};
const props = defineProps({
  language: {
    type: String,
    default: 'ko',
  },
});

const emit = defineEmits(['language', 'submit']);

const languages = ['ko', 'en'];

const languageModel = computed({
  get: () => props.language,
  set: val => emit('update:language', val),
});

const handleSubmit = () => {
  emit('submit', languageModel.value);
};
</script>

<style lang="scss" scoped></style>
