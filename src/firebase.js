// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP6XJrEVSHXANOjrg_acz-Bc6QPaLfeDo",
  authDomain: "react-dashboard-c95a5.firebaseapp.com",
  projectId: "react-dashboard-c95a5",
  storageBucket: "react-dashboard-c95a5.appspot.com",
  messagingSenderId: "456417772771",
  appId: "1:456417772771:web:0b431473faeec14e1f71d6",
  measurementId: "G-ELE5G38Z73"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);