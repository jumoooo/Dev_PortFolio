import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { useAuthStore } from 'src/stores/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA75UioB4LkxZBOmmJhIvUvRjfUrySC6nk',
  authDomain: 'kjm01-vue3-firebase-app-c56f7.firebaseapp.com',
  projectId: 'kjm01-vue3-firebase-app-c56f7',
  storageBucket: 'kjm01-vue3-firebase-app-c56f7.firebasestorage.app',
  messagingSenderId: '1093570967237',
  appId: '1:1093570967237:web:b05e745dd9d30813b522ac',
  measurementId: 'G-RFLEFK40QF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

export default boot(async () => {
  const authStore = useAuthStore();
  // 사용자 인증 정보 변환시 감지 => 셋업 진행
  onAuthStateChanged(auth, user => {
    authStore.setUser(user);
  });
});
