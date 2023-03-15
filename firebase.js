// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  query
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import {ref, onValue} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVT4q7J1AbIe6UcPdXn9YNECg1adgrLew",
  authDomain: "app-movil-ef2ab.firebaseapp.com",
  projectId: "app-movil-ef2ab",
  storageBucket: "app-movil-ef2ab.appspot.com",
  messagingSenderId: "232983626384",
  appId: "1:232983626384:web:954a7621ed366c59078e15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();


export const registrarUsuario = (cedula,nombres,email,telefono,usuario,contrasena) =>
  addDoc(collection(db, "usuarios"), {cedula,nombres,email,telefono,usuario,contrasena});
