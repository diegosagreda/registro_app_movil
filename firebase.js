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
  apiKey: "AIzaSyABtkU4hDjkZE84TmhTfKMfrBjLGn5kSr4",
  authDomain: "proyectomoviles-9e9ab.firebaseapp.com",
  projectId: "proyectomoviles-9e9ab",
  storageBucket: "proyectomoviles-9e9ab.appspot.com",
  messagingSenderId: "139336372275",
  appId: "1:139336372275:web:6fc68e6ce3a0dcdad91346",
  measurementId: "G-XFQ5B6H7HR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();


export const registrarUsuario = (cedula,nombre,correo,telefono,username,password) =>
  addDoc(collection(db, "users"), {cedula,nombre,correo,telefono,username,password});
