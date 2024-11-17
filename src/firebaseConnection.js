import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBzoUAgJdoxSDdQvcsQdaAzKLNNY6hKq34",
  authDomain: "galleria-8c337.firebaseapp.com",
  projectId: "galleria-8c337",
  storageBucket: "galleria-8c337.firebasestorage.app",
  messagingSenderId: "733114418967",
  appId: "1:733114418967:web:6a8b9dddb14ae102f0d952",
  measurementId: "G-D6ZVKMNP87"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };