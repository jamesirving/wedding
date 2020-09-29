import firebase from 'firebase/app';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBEFgIdqwWowK1PGAqatipLl_1iAPVf9po',
  authDomain: 'wedding-4fa01.firebaseapp.com',
  databaseURL: 'https://wedding-4fa01.firebaseio.com',
  projectId: 'wedding-4fa01',
  storageBucket: 'wedding-4fa01.appspot.com',
});

const database = firebaseApp.firestore();

export { firebaseApp, database };
