import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBEFgIdqwWowK1PGAqatipLl_1iAPVf9po',
  authDomain: 'wedding-4fa01.firebaseapp.com',
  databaseURL: 'https://wedding-4fa01.firebaseio.com',
  projectId: 'wedding-4fa01',
  storageBucket: 'wedding-4fa01.appspot.com',
});

const database = firebaseApp.firestore().collection('Wedding');
const auth = firebase.auth();

export { auth, database };
