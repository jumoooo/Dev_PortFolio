<template>
  <q-dialog
    persistent
    v-bind="$attrs"
    @hide="onHide"
    transition-show="none"
    transition-hide="none"
  >
    <q-card :style="{ minwidth: '660px' }">
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn-icons-png.flaticon.com/128/17/17789.png" />
        </q-avatar>
        <q-toolbar-title>{{ $t('option') }}</q-toolbar-title>
        <q-btn v-close-popup flat round dense icon="close" />
      </q-toolbar>
      <q-separator />
      <q-form>
        <q-select
          v-model="languageModel"
          outlined
          :options="languages"
          emit-value
          map-options
        >
          <template v-if="!languageModel" #selected>
            <span class="text-grey-7">카테고리를 선택하세요.</span>
          </template>
        </q-select>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';
const onHide = () => {};
const props = defineProps({
  language: {
    type: String,
    default: 'ko',
  },
});
const languages = ['ko', 'en'];

const languageModel = computed({
  get: () => props.language,
  set: val => emit('update:language', val),
});
</script>

<style lang="scss" scoped></style>
