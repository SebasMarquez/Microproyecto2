
import { async } from "@firebase/util";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./config";

export const signInWithGoogle = async () =>{
    try{
        const result = await signInWithPopup(auth,googleProvider);
    } 
    catch(error){

    }
}
export const registerWithEmailAndPassword = async () => {};

export const signInWithEmailAndPassword = async () => {};

export const logout = async () => {};