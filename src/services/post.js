import { db } from 'src/boot/firebase';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
  query,
  where,
  orderBy,
  getDoc,
  updateDoc,
  deleteDoc,
  startAfter,
  limit,
  increment,
} from 'firebase/firestore';
import bookmark from 'src/pages/mypage/bookmark.vue';
import { getUserById } from './user';

// 생성
export async function createPost(data) {
  const docRef = await addDoc(collection(db, 'posts'), {
    ...data,
    readCount: 0,
    likeCount: 0,
    commentCount: 0,
    bookmarkCount: 0,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

// 목록들 조회
export async function getPosts(params) {
  //#region 2) 컬렉션에 있는 문서를 쿼리해서 조회
  const conditions = [];
  if (params?.category) {
    conditions.push(where('category', '==', params?.category));
  }
  if (params?.tags && params?.tags.length > 0) {
    conditions.push(where('tags', 'array-contains-any', params?.tags));
  }
  if (params?.sort) {
    conditions.push(orderBy(params.sort, 'desc'));
  }
  if (params?.start) {
    conditions.push(startAfter(params.start));
  }
  if (params?.limit) {
    conditions.push(limit(params.limit));
  }

  const q = query(collection(db, 'posts'), ...conditions);
  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map(docs => {
    const data = docs.data();
    return {
      ...data,
      id: docs.id,
      createdAt: data.createdAt?.toDate(),
    };
  });
  //#endregion 2) 컬렉션에 있는 문서를 쿼리해서 조회
  const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
  return {
    items: posts,
    lastItem: lastDoc,
  };
}

// 목록 조회
export async function getPost(id) {
  const docSnap = await getDoc(doc(db, 'posts', id));

  if (!docSnap.exists()) {
    throw new Error('No such document');
  }

  const data = docSnap.data();
  return {
    id: docSnap.id,
    ...data,
    createdAt: data.createdAt?.toDate(),
  };
}

async function incrementReadCount(id) {
  await updateDoc(doc(db, 'posts', id), {
    readCount: increment(1),
  });
}

export async function getPostDetails(id) {
  await incrementReadCount(id);
  const post = await getPost(id);
  const postUser = await getUserById(post.uid);
  return {
    post,
    postUser,
  };
}

// 수정
export async function updatePost(id, data) {
  await updateDoc(doc(db, 'posts', id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

// 삭제
export async function deletePost(id) {
  await deleteDoc(doc(db, 'posts', id));
}

//#region "게시글 좋아요 관련 기능"
/**
 * 1] 게시글 좋아요 추가
 * 2] 게시글 좋아요 삭제
 * 3] 게시글 좋아요 조회
 */
export async function addLike(uid, postId) {
  setDoc(doc(db, 'post_likes', `${uid}_${postId}`), {
    uid,
    postId,
    createdAt: serverTimestamp(),
  });
}

export async function removeLike(uid, postId) {
  deleteDoc(doc(db, 'post_likes', `${uid}_${postId}`));
}

export async function hasLike(uid, postId) {
  const docSnap = await getDoc(doc(db, 'post_likes', `${uid}_${postId}`));
  return docSnap.exists();
}
//#endregion "게시글 좋아요 관련 기능"

//#region "북마크 기능"

export async function addBookmark(uid, postId) {
  await setDoc(doc(db, 'users', uid, 'bookmarks', postId), {
    createdAt: serverTimestamp(),
  });
}

export async function removeBookmark(uid, postId) {
  await deleteDoc(doc(db, 'users', uid, 'bookmarks', postId));
}

export async function hasBookmark(uid, postId) {
  const docSnap = await getDoc(doc(db, 'users', uid, 'bookmarks', postId));
  return docSnap.exists();
}

export async function getUserBookmarks(uid) {
  const q = query(
    collection(db, 'users', uid, 'bookmarks'),
    orderBy('createdAt', 'desc'),
    limit(6),
  );
  const querySnapshot = await getDocs(q);

  return Promise.all(
    querySnapshot.docs.map(bookmarkDoc => getPost(bookmarkDoc.id)),
  );
}
//#endregion "북마크 기능"

export async function getTags() {
  const q = query(
    collection(db, 'tags'),
    where('count', '>', 0),
    orderBy('count', 'desc'),
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docu => docu.data());
}
