import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from 'src/boot/firebase';

export async function getUserById(id) {
  const docSnap = await getDoc(doc(db, 'users', id));
  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      id,
      ...data,
      createdAt: data.createdAt.toDate(),
    };
  }
  return null;
}

export async function updateUserOptions(uid, params) {
  const docSnap = await getDoc(doc(db, 'users', uid));
  if (docSnap.exists()) {
    await updateDoc(doc(db, 'users', uid), {
      language: params.language,
    });
  }
}
