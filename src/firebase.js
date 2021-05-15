import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCSjdemLE3L2PlErLGR3jinhDn9eQGiQ60",
  authDomain: "mysllne.firebaseapp.com",
  projectId: "mysllne",
  storageBucket: "mysllne.appspot.com",
  messagingSenderId: "505092349415",
  appId: "1:505092349415:web:150280e4b6b912411cb142",
  measurementId: "G-Q45H3XRZ3Y",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, db, provider };
