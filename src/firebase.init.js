import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaF3zGHqk_akU73Xr0hUcrXCrSKxhuqHw",
    authDomain: "travel-mania-project.firebaseapp.com",
    projectId: "travel-mania-project",
    storageBucket: "travel-mania-project.appspot.com",
    messagingSenderId: "712252273417",
    appId: "1:712252273417:web:6e5e7d68c13c03115899d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;