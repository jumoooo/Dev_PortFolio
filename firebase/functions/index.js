// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const functions = require('firebase-functions');
// const { logger } = require('firebase-functions');
const {
  onDocumentCreated,
  onDocumentDeleted,
  onDocumentUpdated,
} = require('firebase-functions/v2/firestore');

// The Firebase Admin SDK to access Firestore.
const { initializeApp, cert } = require('firebase-admin/app');
const {
  getFirestore,
  FieldValue,
  Timestamp,
} = require('firebase-admin/firestore');
const serviceAccount = require('./serviceAccountKey.json');
const { validate } = require('uuid');
const { logger } = functions;

const app = initializeApp({
  // credential : 접근 자격
  credential: cert(serviceAccount),
});
const db = getFirestore(app);
const region = 'asia-northeast3';

exports.onCreateBookmark = onDocumentCreated(
  {
    region,
    document: 'users/{uid}/bookmarks/{postId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      bookmarkCount: FieldValue.increment(1),
    });
  },
);
exports.onDeleteBookmark = onDocumentDeleted(
  {
    region,
    document: 'users/{uid}/bookmarks/{postId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      bookmarkCount: FieldValue.increment(-1),
    });
  },
);

exports.onCreateComment = onDocumentCreated(
  {
    region,
    document: 'posts/{postId}/comments/{commentId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      commentCount: FieldValue.increment(1),
    });
  },
);

exports.onDeleteComment = onDocumentDeleted(
  {
    region,
    document: 'posts/{postId}/comments/{commentId}',
  },
  event => {
    const postId = event.params.postId;
    db.doc(`posts/${postId}`).update({
      commentCount: FieldValue.increment(-1),
    });
  },
);

exports.onCreateLike = onDocumentCreated(
  {
    region,
    document: 'post_likes/{id}',
  },
  event => {
    const snapshot = event.data;
    const data = snapshot.data();
    logger.log('## data ## : ', data);
    db.doc(`posts/${data.postId}`).update({
      likeCount: FieldValue.increment(1),
    });
  },
);

exports.onDeleteLike = onDocumentDeleted(
  {
    region,
    document: 'post_likes/{id}',
  },
  event => {
    const snapshot = event.data;
    const data = snapshot.data();
    logger.log('## data ## : ', data);
    db.doc(`posts/${data.postId}`).update({
      likeCount: FieldValue.increment(-1),
    });
  },
);

exports.onCreateUser = functions
  .region(region)
  .auth.user()
  .onCreate(user => {
    // logger.log('## user ## : ', user);
    const isPasswordProvider = user.providerData.some(
      userInfo => userInfo.providerId === 'password',
    );
    const defaultPhotoURL = `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${user.uid}`;
    const displayName = isPasswordProvider
      ? user.email.split('@')[0]
      : user.displayName;
    const photoURL = isPasswordProvider ? defaultPhotoURL : user.photoURL;

    db.doc(`users/${user.uid}`).set({
      email: user.email,
      displayName,
      photoURL,
      createdAt: Timestamp.fromDate(new Date(user.metadata.creationTime)),
      language: 'ko',
    });
  });

exports.onDeleteUser = functions
  .region(region)
  .auth.user()
  .onDelete(user => {
    // logger.log('## user ## : ', user);
    db.doc(`users/${user.uid}`).delete();
  });

exports.onCreatePost = onDocumentCreated(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const data = event.data.data();
    if (data.tags) {
      updateTags(data.tags);
    }
  },
);

exports.onDeletePost = onDocumentDeleted(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const data = event.data.data();
    if (data.tags) {
      updateTags(data.tags, -1);
    }
  },
);

exports.onUpdatePost = onDocumentUpdated(
  {
    region,
    document: 'posts/{postId}',
  },
  event => {
    const prevDate = event.data.before.data();
    const data = event.data.after.data();

    const tagsToRemove = differenceTags(prevDate.tags, data.tags);
    const tagsToAdd = differenceTags(data.tags, prevDate.tags);
    if (tagsToRemove) {
      updateTags(tagsToRemove, -1);
    }
    if (tagsToAdd) {
      updateTags(tagsToAdd);
    }
  },
);

function differenceTags(arr1, arr2) {
  if (!arr1 || !arr2) {
    return arr1;
  }
  return arr1.filter(value => arr2.includes(value) === false);
}

function updateTags(tags = [], incrementValue = 1) {
  tags?.forEach(tag => {
    db.doc(`tags/${tag.toLowerCase()}`).set(
      { name: tag, count: FieldValue.increment(incrementValue) },
      { merge: true },
    );
  });
}
