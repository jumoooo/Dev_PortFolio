<template>
  <div class="main-layout bg-grey-2">
    <header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense to="/">
          <q-toolbar-title>
            <q-avatar>
              <img src="/logo.png" />
            </q-avatar>
            JM WEB
          </q-toolbar-title>
        </q-btn>
        <q-space />

        <q-btn stretch flat to="/">
          <span v-if="!isMobileScreen">{{ $t('home') }}</span>
          <q-tooltip v-if="isMobileScreen"> {{ $t('home') }} </q-tooltip>
          <q-icon name="home" v-if="isMobileScreen" />
        </q-btn>
        <q-btn stretch flat to="/portfolio">
          <span v-if="!isMobileScreen">{{ $t('portfolio') }}</span>
          <q-tooltip v-if="isMobileScreen"> {{ $t('portfolio') }} </q-tooltip>
          <q-icon name="assignment" v-if="isMobileScreen" />
        </q-btn>
        <q-btn stretch flat>
          <span v-if="!isMobileScreen">{{ $t('hobby') }}</span>
          <q-tooltip v-if="isMobileScreen"> {{ $t('hobby') }} </q-tooltip>
          <q-icon name="sports_esports" v-if="isMobileScreen" />
          <q-menu self="top left" :auto-close="false">
            <q-list style="min-width: 140px">
              <q-item clickable v-close-popup to="/pokeCardPage">
                <q-item-section>{{ $t('poke-card') }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-separator vertical class="q-my-md q-mr-md" />
        <q-btn
          v-if="!authStore.isAuthenticated"
          no-caps
          unelevated
          rounded
          color="primary"
          @click="openAuthDialog"
        >
          <span v-if="!isMobileScreen">{{
            `${$t('log-in')} / ${$t('sign-up')}`
          }}</span>
          <q-tooltip v-if="isMobileScreen"> {{ $t('log-in') }} </q-tooltip>
          <q-icon name="person" v-if="isMobileScreen" />
        </q-btn>
        <q-btn v-if="authStore.isAuthenticated" round flat>
          <q-avatar>
            <img
              :src="
                authStore.user.photoURL ||
                generateDefaultPhotoURL(authStore.user.uid)
              "
            />
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 140px">
              <q-item
                v-if="authStore.user.emailVerified"
                clickable
                v-close-popup
                :to="`/mypage/profile`"
              >
                <q-item-section>{{ $t('profile') }}</q-item-section>
              </q-item>
              <q-item v-else clickable v-close-popup :to="`/mypage/profile`">
                <q-item-section class="text-red" @click="varifyEmail">{{
                  $t('message.1003')
                }}</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="handleOption">
                <q-item-section>{{ $t('setting') }}</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="handleLogout">
                <q-item-section>{{ $t('sign-out') }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </header>
    <section :style="pageContainerStyless" class="content-section">
      <router-view />
      <footer class="hi-footer text-black bg-grey-2 flex flex-center">
        <div class="footer-title">
          <q-icon size="sm" color="#1f1f1f" name="email" class="q-mr-sm" />
          <span class="footer-email" style="font-size: 22px"
            >rnsdlsdmltk@gmail.com
          </span>
        </div>
      </footer>
    </section>

    <AuthDialog v-model="authDialog" />
    <OptionDialog
      v-model="optionDialog"
      v-model:language="language"
      @submit="optionSubmit"
    />
  </div>
</template>

<script setup>
import AuthDialog from 'src/components/auth/AuthDialog.vue';
import OptionDialog from '../components/OptionDialog.vue';

import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';
import { logout, sendVerificationEmail } from 'src/services';
import { useQuasar } from 'quasar';
import { updateUserOptions } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

import { generateDefaultPhotoURL } from 'src/services';

const { locale, t } = useI18n();

const authStore = useAuthStore();

const route = useRoute();
const $q = useQuasar();

// 모바일 or 모니터 등 해상도에 따른 감지
const isMobileScreen = computed(() => $q.screen.lt.md);

// content-section Style 부분
const pageContainerStyless = computed(() => ({
  maxWidth: route.meta?.width || '1080px',
  // overflowY: 'scroll',
  // margin: '0 auto',
}));
const authDialog = ref(false);
const openAuthDialog = () => (authDialog.value = true);
// 로그아웃
const handleLogout = async () => {
  await logout();
  $q.notify(t('message.1013'));
};

const varifyEmail = async () => {
  sendVerificationEmail();
  $q.notify(t('message.1014'));
};

const optionDialog = ref(false);
const handleOption = () => {
  optionDialog.value = true;
};

const { execute: updateOptions } = useAsyncState(updateUserOptions, null, {
  immediate: false,
  throwError: true,
  onSuccess: res => {
    $q.notify(t('message.1015'));
  },
});

// 다국어 관련
const language = ref(authStore.user?.language);
watch(
  () => authStore.user?.language,
  newLang => {
    if (newLang) {
      language.value = newLang;
    }
  },
);
const optionSubmit = newLang => {
  optionDialog.value = false;
  locale.value = newLang;
  updateOptions(0, authStore.user?.uid, { language: newLang });
};
</script>
<style lang="scss">
header {
  top: 0;
  width: 100%;
  z-index: 1000;
}
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.content-section {
  flex: 1 1 auto;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  overflow-y: scroll;
}
footer {
  height: 250px;
}
</style>
