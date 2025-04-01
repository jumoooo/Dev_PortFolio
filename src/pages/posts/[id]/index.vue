<template>
  <q-page padding>
    <PostDetails :commentCount="commentCount" />
    <q-separator class="q-my-xl" />
    <PostComments @update-comments="updateComments" :comments="comments" />
  </q-page>
</template>

<script setup>
import PostDetails from './components/PostDetails.vue';
import PostComments from './components/PostComments.vue';
import { ref } from 'vue';
import { useAsyncState } from '@vueuse/core';
import { getComments } from 'src/services';
import { useRoute } from 'vue-router';

const route = useRoute();
const commentCount = ref(0);
const updateComments = async val => {
  await executeGetComments(0);
};

const { state: comments, execute: executeGetComments } = useAsyncState(
  () => getComments(route.params.id),
  [],
  {
    resetOnExecute: false,
    onSuccess: res => {
      commentCount.value = res.length;
    },
  },
);
</script>

<style lang="scss" scoped></style>

<route lang="yaml">
meta:
  width: 800px
</route>
