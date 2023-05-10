// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, updatePassword, sendEmailVerification, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import toast from "react-hot-toast";

import store from "../redux/store";
import { login as loginHandle, logout as logoutHandle } from "../redux/authSlice"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBY_us-fDafcJ-Dx2gDW8Q6hcDF-Joxqb4",
    authDomain: "login-page-fc6e4.firebaseapp.com",
    projectId: "login-page-fc6e4",
    storageBucket: "login-page-fc6e4.appspot.com",
    messagingSenderId: "775673952481",
    appId: "1:775673952481:web:4bb2fb97bf67abbde71fa0"
};



// REACT_APP_API_KEY= "AIzaSyDcsaKyUNWjvikydlaVzFP8vyGqu3xdwjc",
// REACT_APP_AUTH_DOMAIN= "bookshelf-auth-19bb1.firebaseapp.com",
// REACT_APP_PROJECT_ID= "bookshelf-auth-19bb1",
// REACT_APP_STORAGE_BUCKET= "bookshelf-auth-19bb1.appspot.com",
// REACT_APP_MESSAGING_SENDER_ID= "42643719973",
// REACT_APP_ID= "1:42643719973:web:8b5af3d89714dff337bccc"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const register = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        return user
    }
    catch (error) {
        toast.error(error.message);
    }

}


export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        return user
    }
    catch (error) {
        toast.error(error.message);
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
        return true
    }
    catch (error) {
        toast.error(error.message);
    }
}

export const update = async data => {
    try {
        await updateProfile(auth.currentUser, data)
        toast.success("Profile updated")
        return true
    }
    catch (error) {
        toast.error(error.message)
    }

}


export const resetPassword = async password => {
    try {
        await updatePassword(auth.currentUser, password)
        toast.success("Password updated")
        return true
    }
    catch (error) {
        toast.error(error.message)
    }

}

export const emailVerification = async () => {
    try {
        await sendEmailVerification(auth.currentUser)
        toast.success(`Verification mail sent to ${auth.currentUser.email}. Please check out your email`)
    } catch (error) {
        toast.error(error.message)
    }
}


onAuthStateChanged(auth, (user) => {
    if (user) {
        store.dispatch(loginHandle({
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
            uid: user.uid
        }))
    } else {
        store.dispatch(logoutHandle())
    }
})

export default app;