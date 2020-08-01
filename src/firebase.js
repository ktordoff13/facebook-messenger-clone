import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.MESSENGER_CLONE_API_KEY,
  authDomain: "facebook-messenger-clone-5512a.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-5512a.firebaseio.com",
  projectId: "facebook-messenger-clone-5512a",
  storageBucket: "facebook-messenger-clone-5512a.appspot.com",
  messagingSenderId: "995626234470",
  appId: "1:995626234470:web:e286eccb8d1ed980c4b3a7",
  measurementId: "G-JMXVV8L3CG",
});

const db = firebaseApp.firestore();

export default db;
