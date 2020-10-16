import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBEFgIdqwWowK1PGAqatipLl_1iAPVf9po',
  authDomain: 'wedding-4fa01.firebaseapp.com',
  databaseURL: 'https://wedding-4fa01.firebaseio.com',
  projectId: 'wedding-4fa01',
  storageBucket: 'wedding-4fa01.appspot.com',
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
