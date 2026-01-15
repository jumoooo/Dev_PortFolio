<template>
  <BaseCard>
    <q-list bordered separator>
      <q-item
        v-for="item in items"
        :key="item.to"
        clickable
        v-ripple
        :to="item.to"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section>{{ item.label }}</q-item-section>
      </q-item>
    </q-list>
  </BaseCard>
</template>

<script setup>
import BaseCard from 'src/components/base/BaseCard.vue';

// Props 정의
defineProps({
  // 메뉴 아이템 배열
  items: {
    type: Array,
    required: true,
    /*
      items: [{
        to: String,      // 라우터 경로
        icon: String,    // 아이콘 이름
        label: String,   // 메뉴 레이블
      }]
    */
  },
});
</script>

<style lang="scss" scoped></style>
