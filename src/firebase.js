import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAZP9oYhKKgJHzcHb08SS0EGH-dPHGReHo",
  authDomain: "sup-chat-3dbce.firebaseapp.com",
  databaseURL: "https://sup-chat-3dbce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sup-chat-3dbce",
  storageBucket: "sup-chat-3dbce.appspot.com",
  messagingSenderId: "536588590934",
  appId: "1:536588590934:web:e9b08ef84ee49033a3c0f7",
  measurementId: "G-FQJMDZHB82"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

