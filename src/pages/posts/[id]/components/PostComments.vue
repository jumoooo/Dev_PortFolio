<template>
  <div>
    <div class="text-subtitle1 text-weight-bold q-mb-lg">
      댓글 {{ comments?.length }}
    </div>
    <div v-if="isActive">
      <q-form @submit.prevent="handleAddComment">
        <q-input
          v-model="message"
          type="textarea"
          outlined
          hide-bottom-space
          :placeholder="messagePlaceholer"
          ref="focusInput"
        />
        <div class="flex justify-end q-gutter-x-sm q-mt-sm">
          <q-btn label="취소" color="dark" unelevated @click="toggleActive" />
          <q-btn
            type="submit"
            label="등록"
            color="primary"
            unelevated
            :loading="isLoading"
          />
        </div>
      </q-form>
    </div>

    <BaseCard v-if="!isActive" @click="toggleActive" class="cursor-pointer">
      <q-card-section class="flex items-center">
        <q-avatar>
          <img :src="authStore.user.photoURL" />
        </q-avatar>
        <div class="text-grey-6 q-ml-md">댓글을 작성해보세요.</div>
      </q-card-section>
    </BaseCard>

    <CommentList
      :post-id="$route.params.id"
      :items="comments"
      @deleted="deletedComment"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRoute } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';
import { useAsyncState } from '@vueuse/core';
import { addComment, getComments } from 'src/services';
import CommentList from 'src/components/apps/comment/CommentList.vue';
import BaseCard from 'src/components/base/BaseCard.vue';
import { validateRequired } from 'src/utils/validate-rules';

const $q = useQuasar();
const route = useRoute();
const authStore = useAuthStore();

const messagePlaceholer = ref(null);
const focusInput = ref(null);

const props = defineProps({
  comments: {
    type: Array,
    default: () => [],
  },
});

const isActive = ref(false); // 댓글 작성창 활성화
const toggleActive = () => {
  if (!isActive.value && !authStore.isAuthenticated) {
    alert('로그인 후 이용 가능합니다.');
    return;
  }
  isActive.value = !isActive.value;
};

// const { state: comments, execute: executeGetComments } = useAsyncState(
//   () => getComments(route.params.id),
//   [],
//   {
//     resetOnExecute: false, // 초기값으로 설정후 다시 로딩이 아니
//   },
// );
const message = ref('');
const { isLoading, execute: executeAddComment } = useAsyncState(
  addComment,
  null,
  {
    immediate: false,
    throwError: true,
    onSuccess: () => {
      message.value = '';
      isActive.value = false;
      // executeGetComments(0);
    },
  },
);

// 댓글 추가
const handleAddComment = async () => {
  if (!message.value || message.value?.length <= 0) {
    messagePlaceholer.value = '댓글을 입력해 주세요';
    focusInput.value?.focus();
    return;
  }
  executeAddComment(0, route.params.id, {
    message: message.value,
    uid: authStore.uid,
  });
  emit('updateComments', true);
};
const deletedComment = () => {
  // executeGetComments(0);
  emit('updateComments', true);
};

const emit = defineEmits(['updateComments']);
</script>

<style lang="scss" scoped></style>
