<template>
  <q-page padding>
    <div class="main_wrap row q-col-gutter-lg">
      <section aria-label="mypage side menu" class="col-md-3 col-12">
        <div class="col-grow">
          <BaseCard>
            <q-list bordered separator>
              <q-item clickable v-ripple to="/mypage/profile">
                <q-item-section avatar>
                  <q-icon name="sym_o_account_circle" />
                </q-item-section>
                <q-item-section>{{ $t('profile') }}</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/mypage/password">
                <q-item-section avatar>
                  <q-icon name="sym_o_lock" />
                </q-item-section>
                <q-item-section>{{ $t('change-password') }}</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/mypage/bookmark">
                <q-item-section avatar>
                  <q-icon name="sym_o_bookmark" />
                </q-item-section>
                <q-item-section>{{ $t('bookmark') }}</q-item-section>
              </q-item>
            </q-list>
          </BaseCard>
        </div>
      </section>
      <div class="mypage-content col-md-9 col-12">
        <router-view />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import BaseCard from 'src/components/base/BaseCard.vue';
</script>

<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  requiresAuth: true
</route>
