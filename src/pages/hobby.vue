<template>
  <q-page padding>
    <div class="col q-gutter-y-lg">
      <pokeHeader
        :isLoading="isLoading"
        :placeholder="'* 예시 : Ditto'"
        v-model:cardName="cardName"
        @enterPress="searchCard"
      />
      <q-list class="flex" bordered separator>
        <template v-for="card of cardList" :key="card.id">
          <pokeCard :image-url="card.images.small" style="width: 20%" />
        </template>
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import pokeCard from './hobby/components/pokeCard.vue';
import { usePokeCard } from 'src/composables/usePokeCard';
import { useAsyncState } from '@vueuse/core';
import { useQuasar } from 'quasar';
import pokeHeader from './hobby/components/pokeHeader.vue';

const { fetchCards } = usePokeCard();
const cardList = ref([]);
const cardName = ref('');
const $q = useQuasar();
// Mimikyu
const { execute, isLoading } = useAsyncState(
  fetchCards,
  {},
  {
    immediate: false,
    throwError: true,
    onSuccess: res => {
      if (res?.length <= 0) $q.notify('검색한 카드가 없습니다.');
      cardList.value = res;
    },
  },
);
const searchCard = () => {
  execute(0, cardName.value);
};
</script>

<style lang="scss" scoped></style>
