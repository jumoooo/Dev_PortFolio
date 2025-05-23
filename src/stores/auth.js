import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useLocalStorage, StorageSerializers } from '@vueuse/core';
import { getUserById } from 'src/services';
import i18n from 'src/utils/i18n/i18n';

export const useAuthStore = defineStore('auth', () => {
  // 기본값으로 로컬에 저장된 유저 가져오기
  const user = useLocalStorage('auth/user', null, {
    serializer: StorageSerializers.object,
  });
  const isAuthenticated = computed(() => !!user.value); // 존재하면 true, 아니면 false
  const uid = computed(() => user.value?.uid || null);

  // 접속한 사용자 정보 셋업
  const setUser = (userData, userDbData) => {
    user.value = userData;
    // 만약 유저 정보 있을시 변경
    if (userData) {
      user.value = {
        uid: userData.uid,
        photoURL: userData.photoURL,
        displayName: userData.displayName,
        email: userData.email,
        emailVerified: userData.emailVerified,
        language: userDbData.language ? userDbData.language : 'ko',
      };
      if (userDbData?.language) {
        i18n.global.locale = userDbData.language;
      } else {
        i18n.global.locale = 'ko';
      }
    } else {
      user.value = null;
    }
  };

  // 게시글 uid 와 접속 계정 uid 비교
  const hasOwnContent = contentUid => {
    if (!isAuthenticated.value) {
      return false;
    }
    return uid.value === contentUid;
  };
  return {
    uid,
    user,
    isAuthenticated,
    setUser,
    hasOwnContent,
  };
});
