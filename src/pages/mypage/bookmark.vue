<template>
  <PostList :items="items" />
</template>

<script setup>
import { useAsyncState } from '@vueuse/core';
import { getUserBookmarks } from 'src/services';
import PostList from 'src/components/apps/post/PostList.vue';
import { useAuthStore } from 'src/stores/auth';

const authStore = useAuthStore();

const { state: items } = useAsyncState(() => getUserBookmarks(authStore.uid));
</script>

<style lang="scss" scoped></style>
