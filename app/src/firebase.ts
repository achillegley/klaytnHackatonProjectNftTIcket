// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBManuHdxpSapKYMOGjkc0FHOLOO3lgEuA",
  authDomain: "eventnftticketklaytn.firebaseapp.com",
  databaseURL: "https://eventnftticketklaytn-default-rtdb.firebaseio.com",
  projectId: "eventnftticketklaytn",
  storageBucket: "eventnftticketklaytn.appspot.com",
  messagingSenderId: "1021410617606",
  appId: "1:1021410617606:web:714f3e76e9a430101d9687",
  measurementId: "G-FVWNRG822H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db= firebase.database();