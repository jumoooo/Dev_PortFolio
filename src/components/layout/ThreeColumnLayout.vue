<template>
  <div :class="['main_wrap', 'row', gapClass]">
    <!-- 왼쪽 사이드바 -->
    <section
      v-if="$slots.left"
      :class="[leftColClass, 'main_left_sidebar']"
      :aria-label="leftAriaLabel"
    >
      <slot name="left"></slot>
    </section>

    <!-- 중앙 컨텐츠 -->
    <section
      :class="[centerColClass, 'main_content_wrap']"
      :aria-label="centerAriaLabel"
    >
      <slot name="center"></slot>
    </section>

    <!-- 오른쪽 사이드바 (선택적) -->
    <section
      v-if="$slots.right"
      :class="[rightColClass, 'main_right_sidebar']"
      :aria-label="rightAriaLabel"
    >
      <slot name="right"></slot>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Props 정의
const props = defineProps({
  // 왼쪽 컬럼 크기 (Quasar col 클래스)
  leftCol: {
    type: String,
    default: 'col-grow',
  },
  // 중앙 컬럼 크기
  centerCol: {
    type: String,
    default: 'col-7',
  },
  // 오른쪽 컬럼 크기
  rightCol: {
    type: String,
    default: 'col-3',
  },
  // Gutter 크기
  gap: {
    type: String,
    default: 'q-col-gutter-x-lg',
  },
  // Aria labels
  leftAriaLabel: {
    type: String,
    default: 'left sidebar',
  },
  centerAriaLabel: {
    type: String,
    default: 'main content',
  },
  rightAriaLabel: {
    type: String,
    default: 'right sidebar',
  },
});

// Computed classes
const leftColClass = computed(() => props.leftCol);
const centerColClass = computed(() => props.centerCol);
const rightColClass = computed(() => props.rightCol);
const gapClass = computed(() => props.gap);
</script>

<style lang="scss" scoped>
.main_wrap {
  width: 100%;
}
</style>
