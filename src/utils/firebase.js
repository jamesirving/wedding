import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
};

let firebaseApp;

const getFirebase = () => {
  if (typeof window !== 'undefined') {
    if (firebaseApp) return firebaseApp;
    firebaseApp = firebase.initializeApp(config);
    return firebaseApp;
  }

  return null;
};

const getFirebaseDB = () => {
  const fb = getFirebase();

  if (!fb) {
    return null;
  }

  return fb.firestore().collection('Wedding');
};

const getFirebaseAuth = () => {
  const fb = getFirebase();

  if (!fb) {
    return null;
  }

  return fb.auth();
};

export { getFirebaseAuth, getFirebaseDB };
