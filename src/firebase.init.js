// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbLnO0ebhBxGrxYxyYZn_Ujn67rVmovFs",
  authDomain: "coffeeshop-72f50.firebaseapp.com",
  projectId: "coffeeshop-72f50",
  storageBucket: "coffeeshop-72f50.appspot.com",
  messagingSenderId: "256987828637",
  appId: "1:256987828637:web:505d0aeb58459b3b179f74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth ;