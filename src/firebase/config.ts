// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// El lite de la importacion es porque no necesito todas las funcionalidades
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// Aca vienen todas las funcionalidades de autenticacion
// export const FirebaseAuth = getAuth(FirebaseApp);

// Esta es la configuracion de la base de datos
export const FirebaseDB = getFirestore(FirebaseApp);

// Para usar el storage
export const FirebaseStorage = getStorage(FirebaseApp);
