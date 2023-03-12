
import { async } from "@firebase/util";
import { signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "./config";
import { createUserProfile } from "./users-service";

export const signInWithGoogle = async () =>{
    try{
        const result = await signInWithPopup(auth,googleProvider);
    } 
    catch(error){

    }
}
export const registerWithEmailAndPassword = async (email, password) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Register email and password");
        await createUserProfile(result.user.uid, {
            email,
            password,
        });
    } catch (error) {
        
    }
};

export const signinWithEmailAndPassword = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {}
};