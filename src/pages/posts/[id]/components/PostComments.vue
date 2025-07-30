<template>
  <div>
    <div class="text-subtitle1 text-weight-bold q-mb-lg">
      {{ $t('comment') }} {{ comments?.length }}
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
          <q-btn
            :label="t('cancel')"
            color="dark"
            unelevated
            @click="toggleActive"
          />
          <q-btn
            type="submit"
            :label="t('post')"
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
          <img
            :src="
              authStore.user
                ? authStore.user?.photoURL
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2NAjCcjjk7ac57mKCQvgWVTmP0ysxnzQnQ&s'
            "
            alt="사용자 아바타 이미지"
          />
        </q-avatar>
        <div class="text-grey-6 q-ml-md">{{ $t('message.1018') }}</div>
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
import { addComment } from 'src/services';
import { validateRequired } from 'src/utils/validate-rules';
import { useI18n } from 'vue-i18n';

import CommentList from 'src/components/apps/comment/CommentList.vue';
import BaseCard from 'src/components/base/BaseCard.vue';

const $q = useQuasar();
const route = useRoute();
const authStore = useAuthStore();
const { t } = useI18n();

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
    $q.notify(t('message.1019'));
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
    messagePlaceholer.value = t('message.1020');
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
