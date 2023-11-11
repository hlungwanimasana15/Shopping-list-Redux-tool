import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxGU-6SINwDqxBOAaLFq0kYuJmJt4X__4",
  authDomain: "react-n-shopping-list.firebaseapp.com",
  projectId: "react-n-shopping-list",
  storageBucket: "react-n-shopping-list.appspot.com",
  messagingSenderId: "587345246513",
  appId: "1:587345246513:web:66e3a42baffcea86af5810",
  measurementId: "G-NYYLKZH6DE"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };