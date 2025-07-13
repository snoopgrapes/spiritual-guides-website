import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCYgcA2gwY2SuG-OakUbc_B9PJa9TcvHI",
    authDomain: "zedsonlinejournal.firebaseapp.com",
    projectId: "zedsonlinejournal",
    storageBucket: "zedsonlinejournal.firebasestorage.app",
    messagingSenderId: "406154101112",
    appId: "1:406154101112:web:f40092f4c6a4658e96088d",
    measurementId: "G-62QTC1EVJY"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);