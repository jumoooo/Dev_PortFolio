<template>
  <div class="flex items-center q-mb-lg">
    <div class="text-h5">{{ category }}</div>
    <q-space />
    <q-tabs
      narrow-indicator
      dense
      :model-value="sort"
      @update:model-value="value => $emit('update:sort', value)"
    >
      <q-tab :rapple="false" label="최신순" name="createdAt" />
      <q-tab :rapple="false" label="조회순" name="readCount" />
      <q-tab :rapple="false" label="좋아요 순" name="likeCount" />
    </q-tabs>
  </div>
</template>

<script setup>
defineProps({
  sort: {
    type: String,
    default: 'createdAt',
  },
  category: {
    type: String,
    default: '전체',
  },
});
defineEmits(['update:sort']);
</script>

<style lang="scss" scoped></style>
