// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd-2YYbAMaX8LWvoAU6_Dp4fTjnPiIPuE",
  authDomain: "capt-c29da.firebaseapp.com",
  projectId: "capt-c29da",
  storageBucket: "capt-c29da.appspot.com",
  messagingSenderId: "171015715762",
  appId: "1:171015715762:web:bbbfe5ee05af2c35fc42ab",
  measurementId: "G-BN2VQXW9N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app)

export {storage,auth}