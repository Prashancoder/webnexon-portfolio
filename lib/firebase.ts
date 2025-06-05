// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRDijR48Yid_wl1pOAIWDTeNBAjOzPA_I",
  authDomain: "my-portfolio-8cc89.firebaseapp.com",
  projectId: "my-portfolio-8cc89",
  storageBucket: "my-portfolio-8cc89.firebasestorage.app",
  messagingSenderId: "938174873695",
  appId: "1:938174873695:web:566a02a32550d2eaaedbea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore (Database)
const db = getFirestore(app);

// Export it for use in your project
export { db };
