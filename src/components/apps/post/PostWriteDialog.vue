<template>
  <q-dialog
    persistent
    v-bind="$attrs"
    @hide="onHide"
    transition-show="none"
    transition-hide="none"
  >
    <q-card :style="{ minwidth: '660px' }">
      <q-toolbar>
        <q-toolbar-title>{{ $t('create-post') }}</q-toolbar-title>
        <q-btn v-close-popup flat round dense icon="close" />
      </q-toolbar>
      <q-separator />

      <PostForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
        v-model:tags="form.tags"
        :loading="isLoading"
        @submit="execute(1000, { ...form, uid: authStore.uid })"
      />
    </q-card>
  </q-dialog>
</template>

<!-- <script>
export default {
  inheritAttrs: false,
};
</script> -->

<script>
const getInittialForm = () => ({
  title: '',
  category: '',
  content: '',
  tags: [],
});
</script>
<script setup>
import { ref } from 'vue';
import PostForm from './PostForm.vue';
import { createPost } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { useAuthStore } from 'src/stores/auth';
import { useRouter } from 'vue-router';

const emit = defineEmits(['complete']);

const router = useRouter();
const authStore = useAuthStore();
const form = ref(getInittialForm());

const onHide = () => {
  form.value = getInittialForm();
};
const { isLoading, execute } = useAsyncState(createPost, null, {
  immediate: false,
  throwError: true,
  onSuccess: postID => {
    // console.log(postID);
    emit('complete');
    // router.push(`/posts/${postID}`);
  },
});
</script>

<style lang="scss" scoped></style>
