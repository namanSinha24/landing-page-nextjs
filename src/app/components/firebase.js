import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEyj0ymAdbJs1eNZObCXh0MXwK8_suARI",
  authDomain: "consumableai-landing.firebaseapp.com",
  projectId: "consumableai-landing",
  storageBucket: "consumableai-landing.appspot.com",
  messagingSenderId: "28888027476",
  appId: "1:28888027476:web:7abeadcac5af6e0a9db8c1",
  measurementId: "G-5QN3MTC5V0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
