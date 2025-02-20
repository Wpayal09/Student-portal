// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ2_BeYsAFxgo_p9gD-XeInp-01cuUa7k",
  authDomain: "std-portal-7196e.firebaseapp.com",
  projectId: "std-portal-7196e",
  storageBucket: "std-portal-7196e.firebasestorage.app",
  messagingSenderId: "395063726208",
  appId: "1:395063726208:web:7e76f24fa217a63efe9665",
  measurementId: "G-WN20ELZMFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);