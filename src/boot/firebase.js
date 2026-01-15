import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { useAuthStore } from 'src/stores/auth';
// import i18n from 'src/utils/i18n/i18n'; // <-- 여기서 i18n 인스턴스를 직접 가져옴

// 환경변수에서 Firebase 설정 가져오기
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
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
  onAuthStateChanged(auth, async user => {
    let userDbData = null;
    if (user) {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          userDbData = userSnap.data();
        }
      } catch (err) {
        console.error('언어 설정 중 오류 발생:', err);
      }
    }
    authStore.setUser(user, userDbData);
  });
});
