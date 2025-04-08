// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBShTLzKVMNIlaufVvFQdEuLKyoMcI5Pxk",
  authDomain: "product-575bf.firebaseapp.com",
  projectId: "product-575bf",
  storageBucket: "product-575bf.firebasestorage.app",
  messagingSenderId: "709751906222",
  appId: "1:709751906222:web:b1fe3ebf4f60971a9cb23f",
  measurementId: "G-X9Y9ZKNVQQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);