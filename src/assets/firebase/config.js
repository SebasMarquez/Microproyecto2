import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-63OilT6o7VyjEzLBpeMcHdUypHmwp1k",
  authDomain: "microproyecto2-aedbb.firebaseapp.com",
  projectId: "microproyecto2-aedbb",
  storageBucket: "microproyecto2-aedbb.appspot.com",
  messagingSenderId: "972853050268",
  appId: "1:972853050268:web:e3dd1ded9752a3faf82659"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore
//export const store = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: "select_account"});
