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
  apiKey: "AIzaSyBDFVdN96t6hwtbT4VqAOVpH6pznp_Kz20",
  authDomain: "registro-app-16a81.firebaseapp.com",
  projectId: "registro-app-16a81",
  storageBucket: "registro-app-16a81.appspot.com",
  messagingSenderId: "185388144159",
  appId: "1:185388144159:web:190063eb0e283da10f672a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();


export const registrarUsuario = (cedula,nombres,email,telefono,usuario,contrasena) =>
  addDoc(collection(db, "usuarios"), {cedula,nombres,email,telefono,usuario,contrasena});
