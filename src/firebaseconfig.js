import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBk_oSKrLs6ZDIOKPYbNPOiXx9ZDoWaZqk",
    authDomain: "otp-verification-e1f88.firebaseapp.com",
    projectId: "otp-verification-e1f88",
    storageBucket: "otp-verification-e1f88.appspot.com",
    messagingSenderId: "870706566020",
    appId: "1:870706566020:web:b8ee6de8025c26c341c3d1",
    measurementId: "G-SWX0SL8PQB"
  };
  firebase.initializeApp(firebaseConfig);
export default firebase;