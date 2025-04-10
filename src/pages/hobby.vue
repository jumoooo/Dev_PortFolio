<template>
  <q-page padding>
    <div class="col q-gutter-y-lg">
      <pokeHeader
        :isLoading="isLoading"
        :placeholder="'* 예시 : Ditto'"
        v-model:cardName="cardName"
        @enterPress="searchCard"
      />
    </div>

    <q-list class="flex" bordered separator>
      <pokeCard
        v-for="card of cardList"
        :key="card.id"
        :image-url="card.images.small"
        style="width: 20%"
      />
    </q-list>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="currentIdx"
        :max="maxCount"
        :max-pages="5"
        icon-first="skip_previous"
        icon-last="skip_next"
        icon-prev="fast_rewind"
        icon-next="fast_forward"
        direction-links
        boundary-links
      />
    </div>
  </q-page>
</template>

<script>
// 페이지 기본값
const defaultPageSize = 15;
const defaultCurrentIdx = 1;
const defaultCardName = '';
const defaultMaxCount = 0;
</script>

<script setup>
import { ref, watch } from 'vue';
import { usePokeCard } from 'src/composables/usePokeCard';
import { useAsyncState } from '@vueuse/core';
import { useQuasar } from 'quasar';

import pokeCard from './hobby/components/pokeCard.vue';
import pokeHeader from './hobby/components/pokeHeader.vue';

const { getPokemonCards } = usePokeCard();
const cardList = ref([]);
const cardName = ref(defaultCardName);

const currentIdx = ref(defaultCurrentIdx);
const maxCount = ref(defaultMaxCount);
const pageSize = ref(defaultPageSize);

const $q = useQuasar();

const { execute, isLoading } = useAsyncState(
  () =>
    getPokemonCards({
      q: cardName.value.length > 0 ? `name:${cardName.value}` : '',
      pageSize: pageSize.value,
      page: currentIdx.value,
      orderBy: 'id',
    }),
  {},
  {
    immediate: true,
    throwError: false,
    onSuccess: res => {
      if (res.data?.length <= 0)
        $q.notify({
          type: 'warning-notif',
          message: '일치하는 카드가 없습니다.',
        });
      cardList.value = res?.data;
      maxCount.value = res?.totalCount
        ? Math.ceil(res?.totalCount / pageSize.value)
        : 1;

      // 현재 페이지가 최대 페이지를 초과하면 되돌리기
      if (currentIdx.value > maxCount.value) {
        currentIdx.value = maxCount.value;
        return;
      }
    },
    onError: err => {
      $q.notify({
        type: 'err-notif',
        message: err.message,
      });
    },
  },
);
const searchCard = () => {
  execute();
};

watch(currentIdx, (val, oldVal) => {
  if (val !== oldVal) {
    execute();
  }
});
</script>

<style lang="scss" scoped></style>
