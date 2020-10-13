import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.GATSBY_SITE_FIREBASE_API_KEY,
  authDomain: 'wedding-4fa01.firebaseapp.com',
  databaseURL: 'https://wedding-4fa01.firebaseio.com',
  projectId: 'wedding-4fa01',
  storageBucket: 'wedding-4fa01.appspot.com',
});

const database = firebaseApp.firestore().collection('Wedding');

export { firebaseApp, database };
