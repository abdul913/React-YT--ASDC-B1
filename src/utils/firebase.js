// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjO_YmR6dVQcbTJxLcz2UX_i9-YpiBiJ0",
    authDomain: "clone-89789.firebaseapp.com",
    projectId: "clone-89789",
    storageBucket: "clone-89789.appspot.com",
    messagingSenderId: "286691682776",
    appId: "1:286691682776:web:b3b6f6c2f376de8c04eaad",
    measurementId: "G-FQE7G2YMEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();