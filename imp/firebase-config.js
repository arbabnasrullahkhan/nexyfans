// imp/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAziGPAAiMNuweQWTLTicivBTMu_8NzXOg",
  authDomain: "nexy-fans.firebaseapp.com",
  projectId: "nexy-fans",
  storageBucket: "nexy-fans.firebasestorage.app",
  messagingSenderId: "1014196903392",
  appId: "1:1014196903392:web:d6877449c75c6244791f85",
  measurementId: "G-W8CLEDDLGG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
