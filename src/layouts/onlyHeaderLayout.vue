<template>
  <q-layout view="hHh LpR fff" class="bg-grey-2">
    <q-header bordered class="bg-white text-grey-9">
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

        <q-btn stretch flat :label="$t('home')" to="/" />
        <q-btn stretch flat :label="$t('portfolio')" to="/portfolio" />
        <q-btn stretch flat :label="$t('hobby')">
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
          :label="`${$t('log-in')} / ${$t('sign-up')}`"
          @click="openAuthDialog"
        />
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
    </q-header>
    <q-page-container :style="pageContainerStyless">
      <router-view />
    </q-page-container>
    <q-footer class="text-black bg-grey-2 flex flex-center">
      <div class="footer-title flex flex-center">
        <q-icon size="sm" color="#1f1f1f" name="email" class="q-mr-sm" />
        <span class="footer-email" style="font-size: 22px"
          >rnsdlsdmltk@gmail.com
        </span>
      </div>
    </q-footer>
    <AuthDialog v-model="authDialog" />
    <OptionDialog
      v-model="optionDialog"
      v-model:language="language"
      @submit="handleSubmit"
    />
  </q-layout>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';
import {
  logout,
  generateDefaultPhotoURL,
  sendVerificationEmail,
} from 'src/services';

import AuthDialog from 'src/components/auth/AuthDialog.vue';
import OptionDialog from '../components/OptionDialog.vue';
import { useQuasar } from 'quasar';
import { updateUserOptions } from 'src/services';
import { useAsyncState } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();

const authStore = useAuthStore();

const route = useRoute();
const $q = useQuasar();

const pageContainerStyless = computed(() => ({
  maxWidth: route.meta?.width || '1080px',
  margin: '0 auto',
}));
// console.log(pageContainerStyless.value);
const authDialog = ref(false);
const openAuthDialog = () => (authDialog.value = true);
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
const language = ref(authStore.user?.language);
watch(
  () => authStore.user?.language,
  newLang => {
    if (newLang) {
      language.value = newLang;
    }
  },
);
const handleSubmit = newLang => {
  optionDialog.value = false;
  locale.value = newLang;
  updateOptions(0, authStore.user?.uid, { language: newLang });
};
</script>
<style lang="scss" scoped>
.q-footer {
  height: 250px;
}
</style>
