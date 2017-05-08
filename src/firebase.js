import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDXgOkM37UqSNVClWBs_QQ02BdbE2UqNnE",
  authDomain: "chat-7b41d.firebaseapp.com",
  databaseURL: "https://chat-7b41d.firebaseio.com",
  projectId: "chat-7b41d",
  storageBucket: "chat-7b41d.appspot.com",
  messagingSenderId: "444099005362"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
