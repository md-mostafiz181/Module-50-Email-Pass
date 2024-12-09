// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG3aOCUcCqN-uQSHpK9PFpp2aS5kT1xJA",
  authDomain: "module-50-email-and-pass.firebaseapp.com",
  projectId: "module-50-email-and-pass",
  storageBucket: "module-50-email-and-pass.firebasestorage.app",
  messagingSenderId: "198127231469",
  appId: "1:198127231469:web:9cc5f6d81fd43802a107e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;