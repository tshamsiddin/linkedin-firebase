import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBz45NYybKCnfX0jb5_ML9gXBwLF_nfRVQ",
  authDomain: "linkedin-52d85.firebaseapp.com",
  projectId: "linkedin-52d85",
  storageBucket: "linkedin-52d85.appspot.com",
  messagingSenderId: "863737408461",
  appId: "1:863737408461:web:bcddd37f635e722030f284"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
