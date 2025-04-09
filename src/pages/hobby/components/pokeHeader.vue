<template>
  <div class="flex items-center q-mb-lg">
    <div class="text-h3 q-py-sm">Pokémon TCG Guru</div>
    <q-space />
    <q-input
      outlined
      label="포켓몬 명으로 검색"
      hint="영문으로 검색 가능"
      dense
      class="q-ma-lg row-3"
      v-model="cardNameModel"
      :placeholder="placeholder"
      :loading="isLoading"
      @keypress.enter.prevent="$emit('enterPress')"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  cardName: {
    type: String,
  },
  isLoading: {
    type: Boolean,
  },
  placeholder: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['enterPress', 'update:cardName']);

const cardNameModel = computed({
  get: () => props.cardName,
  set: val => emit('update:cardName', val),
});
</script>

<style lang="scss" scoped></style>
