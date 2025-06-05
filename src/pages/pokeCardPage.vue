<template>
  <q-page padding>
    <div class="main-wrap">
      <div class="col q-gutter-y-lg">
        <pokeHeader
          :isLoading="isLoading"
          :placeholder="'* 예시 : Ditto'"
          v-model:cardName="cardName"
          @enterPress="searchCard"
        />
      </div>

      <!-- 카드 리스트 -->
      <div class="card-list-wrapper q-pa-md q-mt-md">
        <div class="card-list-container">
          <pokeCard
            v-for="card of cardList"
            :key="card.id"
            :image-url="card.images.small"
            class="card-item"
            @click="selectedCard = card"
          />
        </div>
        <div
          v-if="selectedCard"
          class="overlay"
          @click.self="selectedCard = null"
        >
          <div class="enlarged-card" @click.stop>
            <pokeCard
              :image-url="selectedCard.images.small"
              :width="enlargedCardSize.width"
              :height="enlargedCardSize.height"
            />
          </div>
        </div>
      </div>
      <!-- 페이지네이션 -->
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
          flat
          dense
        />
      </div>
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
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
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

const selectedCard = ref(null);
const windowSize = ref({
  width: window.innerWidth,
  height: window.innerHeight,
});
const updateWindowSize = () => {
  windowSize.value.width = window.innerWidth;
  windowSize.value.height = window.innerHeight;
};
onMounted(() => {
  window.addEventListener('resize', updateWindowSize);
});
onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize);
});

// 카드 비율 계산 (비율: 190 / 280)
const enlargedCardSize = computed(() => {
  // baseSize : 작은 화면크기의 80% 크기 값
  const baseSize =
    Math.min(windowSize.value.width, windowSize.value.height) * 0.8;
  const aspectRatio = 190 / 280;

  // baseSize는 세로 기준, width 계산
  return {
    width: `${baseSize * aspectRatio}px`,
    height: `${baseSize}px`,
  };
});
</script>

<style lang="scss" scoped>
.card-list-wrapper {
  // border: 1px solid #ccc;
  border-radius: 8px;
}

.card-list-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center; // <-- 여기만 바꿔주면 됨!
}

.card-item {
  flex: 1 0 21%; // 5개씩 표시 (100/5 - gap 고려)
  max-width: 21%;
  min-width: 180px;
  display: flex;
  justify-content: center;
}
.main-wrap {
  margin: 8px;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
}
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20vh;
}

.enlarged-card {
  aspect-ratio: 190 / 280;
  // background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
}
</style>
