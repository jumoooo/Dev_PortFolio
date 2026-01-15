<template>
  <q-page padding>
    <div class="main_wrap row q-col-gutter-lg">
      <!-- 사이드바 메뉴 -->
      <section aria-label="mypage side menu" class="col-md-3 col-12">
        <div class="col-grow">
          <SidebarMenu :items="menuItems" />
        </div>
      </section>
      
      <!-- 메인 컨텐츠 -->
      <div class="mypage-content col-md-9 col-12">
        <router-view />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import SidebarMenu from 'src/components/layout/SidebarMenu.vue';

const { t } = useI18n();

// 메뉴 아이템 구성
const menuItems = computed(() => [
  {
    to: '/mypage/profile',
    icon: 'sym_o_account_circle',
    label: t('profile'),
  },
  {
    to: '/mypage/password',
    icon: 'sym_o_lock',
    label: t('change-password'),
  },
  {
    to: '/mypage/bookmark',
    icon: 'sym_o_bookmark',
    label: t('bookmark'),
  },
]);
</script>

<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  requiresAuth: true
</route>
