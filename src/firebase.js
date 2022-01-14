// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpAFu-3KHC0jU9A2D4C6IxQbIv1vcc874",
  authDomain: "video-conferencing-101.firebaseapp.com",
  projectId: "video-conferencing-101",
  storageBucket: "video-conferencing-101.appspot.com",
  messagingSenderId: "632349685215",
  appId: "1:632349685215:web:96e0e1c57d97172096406a",
  measurementId: "G-JES278B04L",
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
