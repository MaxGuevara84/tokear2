// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// El lite de la importacion es porque no necesito todas las funcionalidades
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSybUw6eOZm3ZH9-yeuNEyBCAgnADwiDM",
  authDomain: "portfolio-dac42.firebaseapp.com",
  projectId: "portfolio-dac42",
  storageBucket: "portfolio-dac42.appspot.com",
  messagingSenderId: "756040059799",
  appId: "1:756040059799:web:0a290268fef50d733152d2",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// Aca vienen todas las funcionalidades de autenticacion
// export const FirebaseAuth = getAuth(FirebaseApp);

// Esta es la configuracion de la base de datos
export const FirebaseDB = getFirestore(FirebaseApp);

// Para usar el storage
export const FirebaseStorage = getStorage(FirebaseApp);
