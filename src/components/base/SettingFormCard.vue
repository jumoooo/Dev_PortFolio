<template>
  <BaseCard>
    <q-form @submit.prevent="handleSubmit">
      <q-card-section class="q-gutter-y-md">
        <!-- 제목 -->
        <div v-if="title" class="text-h6">{{ title }}</div>
        
        <!-- 폼 입력 필드 슬롯 -->
        <slot></slot>
      </q-card-section>
      
      <q-separator />
      
      <q-card-actions>
        <q-space />
        <q-btn
          type="submit"
          :label="submitLabel"
          flat
          color="primary"
          :loading="loading"
        />
      </q-card-actions>
    </q-form>
  </BaseCard>
</template>

<script setup>
import BaseCard from './BaseCard.vue';

// Props 정의
const props = defineProps({
  // 폼 제목
  title: {
    type: String,
    default: '',
  },
  // 로딩 상태
  loading: {
    type: Boolean,
    default: false,
  },
  // 제출 버튼 텍스트
  submitLabel: {
    type: String,
    default: '저장',
  },
});

// Events 정의
const emit = defineEmits(['submit']);

// 폼 제출 핸들러
const handleSubmit = () => {
  emit('submit');
};
</script>

<style lang="scss" scoped></style>
