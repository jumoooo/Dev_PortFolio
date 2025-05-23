<template>
  <div class="flex items-center q-mb-lg">
    <div class="text-h5">{{ $t(category) }}</div>
    <q-space />
    <q-tabs
      narrow-indicator
      dense
      :model-value="sort"
      @update:model-value="value => $emit('update:sort', value)"
    >
      <q-tab :rapple="false" :label="$t('update-orderby')" name="createdAt" />
      <q-tab :rapple="false" :label="$t('inquiry-orderby')" name="readCount" />
      <q-tab :rapple="false" :label="$t('like-orderby')" name="likeCount" />
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
    default: 'all',
  },
});
defineEmits(['update:sort']);
</script>

<style lang="scss" scoped></style>
