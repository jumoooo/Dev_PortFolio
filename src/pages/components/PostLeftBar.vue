<template>
  <StickySideBar class="sub_menu">
    <q-card flat bordered>
      <q-list bordered separator>
        <q-item
          clickable
          v-ripple
          :active="category === null"
          @click="changeCategory(null)"
        >
          <q-item-section>{{ $t('all') }}</q-item-section>
        </q-item>
        <q-item
          v-for="cate in categories"
          :key="cate.value"
          clickable
          v-ripple
          :active="category === cate.value"
          @click="changeCategory(cate.value)"
        >
          <q-item-section>{{ $t(cate.value) }}</q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </StickySideBar>
</template>

<script setup>
import StickySideBar from 'src/components/StickySideBar.vue';
import { getCategories } from 'src/services/category';
import { computed } from 'vue';
defineProps({
  category: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['update:category']);

const changeCategory = value => {
  emit('update:category', value);
};

const categories = computed(() => getCategories());
</script>
