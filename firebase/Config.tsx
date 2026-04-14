import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
    apiKey: "AIzaSyDzTdjMG_cuYqZ7jEpAq3MrS3qp7VSPHkM",
    authDomain: "app-03-nucleo-iii.firebaseapp.com",
    projectId: "app-03-nucleo-iii",
    storageBucket: "app-03-nucleo-iii.firebasestorage.app",
    messagingSenderId: "145427874705",
    appId: "1:145427874705:web:e2aac4510b45eb71991030",
    measurementId: "G-XEP1RPRDS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db =getDatabase(app);