// imp/firebase-config.js

// Import the functions you need from the Firebase v10 Modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAziGPAAiMNuweQWTLTicivBTMu_8NzXOg",
  authDomain: "nexy-fans.firebaseapp.com",
  projectId: "nexy-fans",
  storageBucket: "nexy-fans.firebasestorage.app",
  messagingSenderId: "1014196903392",
  appId: "1:1014196903392:web:d6877449c75c6244791f85",
  measurementId: "G-W8CLEDDLGG"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Setup Google Auth Provider
const googleProvider = new GoogleAuthProvider();
// Force account selection every time user clicks Google Login
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Export all services to be used directly inside our individual HTML pages
export { app, analytics, auth, db, storage, googleProvider };
