import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwCJfsPCcS8yJsAREo32ABhO_glCsjwm4",
  authDomain: "microproyecto2-292ec.firebaseapp.com",
  projectId: "microproyecto2-292ec",
  storageBucket: "microproyecto2-292ec.appspot.com",
  messagingSenderId: "892788369618",
  appId: "1:892788369618:web:5341432531743cb27e650b",
  measurementId: "G-7B6QQB4JMZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const store = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: "select_account"});