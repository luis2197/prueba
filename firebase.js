// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

//---------------------------------------------------------------------------------------
import {
    getFirestore, 
    collection, 
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
//---------------------------------------------------------------------------------------

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGi05Y4Ki-fkoLvcX5Tha8ZFVHIouW1mM",
  authDomain: "test-web-740f4.firebaseapp.com",
  projectId: "test-web-740f4",
  storageBucket: "test-web-740f4.appspot.com",
  messagingSenderId: "359936263442",
  appId: "1:359936263442:web:54d86b04a7934e8efd1fcb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//---------------------------------------------------------------------------------------
const db = getFirestore(); // Trae la conexión a la base de datos

export const guardarPublicacion = (titulo, autor, contenido) => {
    addDoc(collection(db, 'publicaciones'), {titulo, autor, contenido})
}

export const getPublicacion = () => getDocs(collection(db, 'publicaciones'))