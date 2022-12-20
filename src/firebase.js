
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD2ojGpdk9617Al-dtL0tU_QuUhAezeE6M",
  authDomain: "news-api-782e5.firebaseapp.com",
  projectId: "news-api-782e5",
  storageBucket: "news-api-782e5.appspot.com",
  messagingSenderId: "558769721935",
  appId: "1:558769721935:web:ab7edd4c34808b6508903a",
  measurementId: "G-KQ14N01LTD"
};


const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
export default auth;