// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASu3sHHNYs2Ghj6VKSb4jmoNpmVGS5z5k",
    authDomain: "job-task-2.firebaseapp.com",
    projectId: "job-task-2",
    storageBucket: "job-task-2.appspot.com",
    messagingSenderId: "601074492131",
    appId: "1:601074492131:web:290817ffd470ad6a2d5bd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;