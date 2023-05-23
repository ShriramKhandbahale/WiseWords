// config for firebase auth (Google SSO)

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "wisewords-98ba2.firebaseapp.com",
    projectId: "wisewords-98ba2",
    storageBucket: "wisewords-98ba2.appspot.com",
    messagingSenderId: "14297276915",
    appId: "1:14297276915:web:d3f89e7ff888a3c4157286"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();