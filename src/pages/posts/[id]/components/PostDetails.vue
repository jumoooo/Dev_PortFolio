<template>
  <BaseCard class="q-pa-lg">
    <div class="flex q-mb-md">
      <q-btn
        icon="sym_o_arrow_back"
        flat
        round
        dense
        color="grey"
        size="16px"
        aria-label="Back"
        @click="$router.back()"
      />
      <q-space />
      <q-btn
        :icon="isLike ? 'favorite' : 'sym_o_favorite'"
        flat
        round
        dense
        color="red"
        size="16px"
        aria-label="Favorite"
        @click="toggleLike"
      />
      <q-btn
        :icon="isBookmark ? 'bookmark' : 'sym_o_bookmark'"
        flat
        round
        dense
        color="blue"
        size="16px"
        aria-label="Bookmark"
        @click="toggleBookmark"
      />
    </div>
    <div class="flex items=center">
      <q-avatar>
        <img :src="postUser?.photoURL" alt="사용자 아바타 이미지" />
      </q-avatar>
      <div class="q-ml-md">
        <div>{{ postUser.displayName }}</div>
        <div class="text-grey-6">
          {{
            `${$t(post?.category ? post?.category : '...')} / ${
              date?.formatDate(post.createdAt, 'YYYY. MM. DD HH:mm:ss')
                ? date?.formatDate(post.createdAt, 'YYYY. MM. DD HH:mm:ss')
                : ''
            }`
          }}
        </div>
      </div>
      <q-space />
      <q-btn v-if="hasOwnContent(post.uid)" icon="more_horiz" round flat>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item
              clickable
              v-close-popup
              :to="`/posts/${$route.params.id}/edit`"
            >
              <q-item-section>{{ $t('modify_01') }}</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="handleDeletePost">
              <q-item-section>{{ $t('delete_01') }}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
    <div class="q-mt-md text-h5 text-weight-bold">{{ post.title }}</div>
    <div class="text-teal q-mt-xs">
      <span v-for="tag in post.tags" :key="tag"> #{{ tag }}&nbsp;</span>
    </div>
    <div class="row items-center q-gutter-x-md q-mt-md justify-end">
      <PostIcon name="sym_o_visibility" :label="post.readCount" />
      <PostIcon name="sym_o_sms" :label="props.commentCount" />
      <PostIcon name="sym_o_favorite" :label="likeCount" />
      <PostIcon name="sym_o_bookmark" :label="bookmarkCount" />
    </div>
    <q-separator class="q-my-lg" />
    <TiptapViewer v-if="post.content" :content="post.content" />
  </BaseCard>
</template>

<script setup>
import { ref } from 'vue';
import { date, useQuasar } from 'quasar';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';
import { deletePost, getPostDetails } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { useLike } from 'src/composables/useLike';
import { useBookmark } from 'src/composables/useBookmark';
import { useI18n } from 'vue-i18n';

import PostIcon from 'src/components/apps/post/PostIcon.vue';
import BaseCard from 'src/components/base/BaseCard.vue';
import TiptapViewer from 'src/components/tiptap/TiptapViewer.vue';

const { t } = useI18n();

const route = useRoute();
const router = useRouter();
const $q = useQuasar();
const { hasOwnContent } = useAuthStore();

const props = defineProps({
  commentCount: {
    type: Number,
    default: 0,
  },
});

const post = ref({});
const postUser = ref({});
const { error } = useAsyncState(
  () => getPostDetails(route.params.id),
  {},
  {
    onSuccess: result => {
      post.value = result.post;
      postUser.value = result.postUser;
      updateLikeCount(result.post.likeCount);
      updateBookmarkCount(result.post.bookmarkCount);
    },
  },
);
const { execute: executeDeletePost } = useAsyncState(deletePost, null, {
  immediate: false,
  throwError: true,
  onSuccess: () => {
    $q.notify(t('message.1016')); // 삭제 완료.
    router.push('/');
  },
});
const handleDeletePost = async () => {
  if (confirm(t('message.1017')) === false) return; // 삭제 하시겠어요?

  await executeDeletePost(0, route.params.id);
};
const { isLike, likeCount, toggleLike, updateLikeCount } = useLike(
  route.params.id,
);
const { isBookmark, bookmarkCount, toggleBookmark, updateBookmarkCount } =
  useBookmark(route.params.id);
</script>

<style lang="scss" scoped></style>
