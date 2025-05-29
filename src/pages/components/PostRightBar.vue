<template>
    <StickySideBar class="right_bar_wrap">
        <button id="more_menu_btn" ref="moreMenuBtn" :class="{ open: isOpen }">
            {{ isOpen ? '−' : '+' }}
        </button>
        <q-btn
        padding="8px 12px 8px 8px"
        unelevated
        color="primary"
        text-color="white"
        class="write full-width"
        @click="$emit('openWriteDialog')"
        >
        <q-avatar class="q-mr-sm" color="white" text-color="primary" size="22px">
            <q-icon name="edit" size="14px" />
        </q-avatar>
        <span class="text-weight-bold">{{ $t('message.1000') }}</span>
        <!--새 포스트 작성하기-->
        </q-btn>
        <q-card class="tag_wrap q-mt-md bg-grey-1" bordered flat>
        <q-card-section class="flex items-center q-pb-none">
            <div class="text-weight-bold">{{ $t('tag') }}</div>
            <q-space />
            <q-btn
            icon="refresh"
            dense
            size="sm"
            flat
            round
            color="grey"
            @click="execute"
            />
        </q-card-section>
        <q-card-section class="q-pb-sm">
            <q-card class="q-px-sm" bordered flat square>
            <q-input
                borderless
                dense
                input-style="font-size: 12px;"
                :placeholder="$t('message.1001')"
                @keypress.enter.prevent="addTag"
            /><!--태그로 검색해보세요-->
            <div class="q-gutter-sm q-pb-sm">
                <q-btn
                v-for="(tag, index) in tags"
                :key="tag"
                size="10px"
                padding="2px 4px 2px 7px"
                color="grey-3"
                text-color="dark"
                unelevated
                @click="removeTag(index)"
                >
                {{ tag }}
                <q-icon name="clear" size="12px" color="grey" />
                </q-btn>
            </div>
            </q-card>
        </q-card-section>
        <div v-if="isLoading" class="flex flex-center q-mt-sm">loading...</div>
        <q-list padding>
            <q-item
            v-for="{ name, count } in postTags"
            :key="name"
            clickable
            dense
            @click="addTag(name)"
            >
            <q-item-section class="text-teal text-caption">
                #{{ name }}
            </q-item-section>
            <q-item-section side class="text-teal text-caption">
                {{ count }}
            </q-item-section>
            </q-item>
        </q-list>
        </q-card>
        <q-btn
        padding="8px 12px 8px 8px"
        unelevated
        color="primary"
        text-color="white"
        class="search full-width q-mt-md"
        @click="$router.push('/search')"
        >
        <q-avatar class="q-mr-sm" color="white" text-color="primary" size="22px">
            <q-icon class="search" name="manage_search" size="18px" />
        </q-avatar>
        <span class="text-weight-bold">{{ $t('message.1002') }}</span>
        <!--검색 페이지로 이동-->
        </q-btn>
    </StickySideBar>
</template>

<script setup>
import { ref, toRef, onMounted } from 'vue';
import StickySideBar from 'src/components/StickySideBar.vue';
import { useTag } from 'src/composables/useTag';
import { useAsyncState } from '@vueuse/core';
import { getTags } from 'src/services';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(['openWriteDialog', 'update:tags']);

const { addTag, removeTag } = useTag({
  tags: toRef(props, 'tags'),
  updateTags: tags => emit('update:tags', tags),
  maxLengthMessage: '태그는 10개 이상 등록할 수 없습니다.',
});
const { state: postTags, isLoading, execute } = useAsyncState(() => getTags());

const moreMenuBtn = ref(null);
const isOpen = ref(false);

onMounted(() => {
  if (moreMenuBtn.value) {
    moreMenuBtn.value.addEventListener('click', () => {
      isOpen.value = !isOpen.value;
    });
  }
});

</script>

<style lang="scss" scoped></style>
