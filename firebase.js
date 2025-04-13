// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA39GC_hD4M9RkpAoJlh1HC-7VRQO1N4-8",
    authDomain: "komentar-web-295fa.firebaseapp.com",
    projectId: "komentar-web-295fa",
    storageBucket: "komentar-web-295fa.firebasestorage.app",
    messagingSenderId: "214048213848",
    appId: "1:214048213848:web:244675ae77479e9864732d",
    measurementId: "G-DBBD6HWJY4"
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { db };
