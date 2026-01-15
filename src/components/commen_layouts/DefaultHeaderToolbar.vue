<template>
  <q-toolbar>
    <q-btn flat dense to="/">
      <q-toolbar-title class="flex flex-center">
        <img class="main_logo" src="/assets/main_logo.png" alt="헤더 로고" />
        <span class="title-text" v-if="!isMobileScreen"
          >코드로 완성한 픽셀</span
        >
      </q-toolbar-title>
    </q-btn>
    <q-space />
    <div class="right-btn-wrap">
      <q-btn stretch flat to="/">
        <span v-if="!isMobileScreen">{{ $t('board') }}</span>
        <q-tooltip v-if="isMobileScreen"> {{ $t('board') }} </q-tooltip>
        <q-icon name="assignment" v-if="isMobileScreen" />
      </q-btn>
      <q-btn stretch flat to="/about">
        <span v-if="!isMobileScreen">{{ $t('about') }}</span>
        <q-tooltip v-if="isMobileScreen"> {{ $t('about') }} </q-tooltip>
        <q-icon name="info" v-if="isMobileScreen" />
      </q-btn>
      <!-- <q-btn stretch flat>
        <span v-if="!isMobileScreen">{{ $t('hobby') }}</span>
        <q-tooltip v-if="isMobileScreen"> {{ $t('hobby') }} </q-tooltip>
        <q-icon name="sports_esports" v-if="isMobileScreen" />
        <q-menu self="top left" :auto-close="false">
          <q-list style="min-width: 140px">
            <q-item clickable v-close-popup to="/pokeCardPage">
              <q-item-section>{{ $t('poke-card') }}</q-item-section>
            </q-item>
            <q-item clickable v-close-popup to="/chatbot">
              <q-item-section>{{ $t('chatbot') }}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn> -->
    </div>
    <q-separator vertical class="q-my-md q-mr-md" />
    <q-btn
      v-if="!authStore.isAuthenticated"
      class="user-icon"
      no-caps
      unelevated
      rounded
      color="primary"
      @click="$emit('openAuthDialog')"
    >
      <span v-if="!isMobileScreen">{{
        `${$t('log-in')} / ${$t('sign-up')}`
      }}</span>
      <q-tooltip v-if="isMobileScreen"> {{ $t('log-in') }} </q-tooltip>
      <q-icon name="person" v-if="isMobileScreen" />
    </q-btn>
    <q-btn v-if="authStore.isAuthenticated" class="user-icon" round flat>
      <q-avatar>
        <img
          :src="
            authStore.user.photoURL ||
            generateDefaultPhotoURL(authStore.user.uid)
          "
          alt="계정 이미지"
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
            <q-item-section class="text-red" @click="$emit('varifyEmail')">{{
              $t('message.1003')
            }}</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="$emit('handleOption')">
            <q-item-section>{{ $t('setting') }}</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="$emit('handleLogout')">
            <q-item-section>{{ $t('sign-out') }}</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-toolbar>
</template>

<script setup>
import { useAuthStore } from 'src/stores/auth';
import { generateDefaultPhotoURL } from 'src/services';
import { useQuasar } from 'quasar';
import { computed } from 'vue';

const authStore = useAuthStore();
const $q = useQuasar();

const isMobileScreen = computed(() => $q.screen.lt.md);

defineEmits(['openAuthDialog', 'varifyEmail', 'handleOption', 'handleLogout']);
</script>

<style lang="scss" scoped>
.main_logo {
  width: 150px;
  margin-right: 7px;
  aspect-ratio: 204 / 43;
}
.right-btn-wrap {
  display: flex;
}
.title-text {
  font-size: 11px;
  color: #bebebe;
  height: 35px;
  display: flex;
  align-items: end;
  margin-bottom: 4px;
}

@media (max-width: 786px) {
  .right-btn-wrap {
    gap: 15px;
    padding: 0 15px;
    .q-btn {
      padding: 4px 0px;
    }
  }

  .main_logo {
    width: 120px;
    margin-right: 0;
  }
  .user-icon {
    width: 36px;
    height: 36px;
  }
}
</style>
