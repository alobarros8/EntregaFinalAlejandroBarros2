import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJmKrvh9iep_FKP9K7n5t_WoNaILG2Zio",
  authDomain: "entregafinal-barros.firebaseapp.com",
  projectId: "entregafinal-barros",
  storageBucket: "entregafinal-barros.appspot.com",
  messagingSenderId: "845465735426",
  appId: "1:845465735426:web:3c61b2d1a4d46bc931321b",
};
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
