import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJmKrvh9iep_FKP9K7n5t_WoNaILG2Zio",
  authDomain: "entregafinal-barros.firebaseapp.com",
  projectId: "entregafinal-barros",
  storageBucket: "entregafinal-barros.appspot.com",
  messagingSenderId: "845465735426",
  appId: "1:845465735426:web:3c61b2d1a4d46bc931321b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
