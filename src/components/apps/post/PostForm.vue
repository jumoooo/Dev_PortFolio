<template>
  <q-form @submit.prevent="handleSubmit">
    <q-card-section class="q-gutter-y-sm">
      <q-input
        v-model="titleModel"
        outlined
        :placeholder="$t('title')"
        hide-bottom-space
        :rules="[validateRequired]"
        counter
        maxlength="40"
      />
      <q-select
        v-model="categoryModel"
        outlined
        :options="categories"
        emit-value
        map-options
      >
        <template v-if="!categoryModel" #selected>
          <span class="text-grey-7">{{ $t('message.1004') }}</span>
        </template>
      </q-select>
      <TiptapEditor v-model="contentModel" />
      <q-input
        outlined
        :placeholder="$t('message.1005')"
        prefix="#"
        @keypress.enter.prevent="addTag"
      />
      <q-chip
        v-for="(tag, index) in tags"
        :key="tag"
        outline
        dense
        color="teal"
        removable
        @remove="removeTag(index)"
      >
        {{ tag }}
      </q-chip>
      <q-separator />
      <q-card-actions align="right">
        <slot name="actions">
          <q-btn flat :label="$t('cancel')" v-close-popup />
          <q-btn
            type="submit"
            flat
            :label="$t('save')"
            color="primary"
            :loading="loading"
          />
        </slot>
      </q-card-actions>
    </q-card-section>
  </q-form>
</template>

<script setup>
import { computed, toRef } from 'vue';
import { getCategories } from 'src/services/category';
import { validateRequired } from 'src/utils/validate-rules';
import { useQuasar } from 'quasar';
import { useTag } from 'src/composables/useTag';
import { useI18n } from 'vue-i18n';

import TiptapEditor from 'src/components/tiptap/TiptapEditor.vue';

const { t } = useI18n();

const props = defineProps({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  content: {
    type: String,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  'update:title',
  'update:category',
  'update:content',
  'update:tags',
  'submit',
]);

const $q = useQuasar();

const titleModel = computed({
  get: () => props.title,
  set: val => emit('update:title', val),
});
const categoryModel = computed({
  get: () => props.category,
  set: val => emit('update:category', val),
});
const contentModel = computed({
  get: () => props.content,
  set: val => emit('update:content', val),
});

const { addTag, removeTag } = useTag({
  tags: toRef(props, 'tags'),
  updateTags: tags => emit('update:tags', tags),
  maxLengthMessage: t('message.1006'), // 태그는 10개 이상 등록할 수 없습니다.
});

const categories = getCategories();

const handleSubmit = () => {
  if (!contentModel.value) {
    $q.notify(t('message.1007')); // 내용을 작성하세요.
    return;
  }
  emit('submit');
};
</script>

<style lang="scss" scoped></style>
