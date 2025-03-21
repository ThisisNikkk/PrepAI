// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUuUYHepoMImmTcxeIAsr_cLaZt3iI6sc",
  authDomain: "prepai-66525.firebaseapp.com",
  projectId: "prepai-66525",
  storageBucket: "prepai-66525.firebasestorage.app",
  messagingSenderId: "551316000797",
  appId: "1:551316000797:web:b5e58c69a29d3dbe6b76f4",
  measurementId: "G-HL6Q4EZ4QP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);