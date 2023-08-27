import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIaDjhJlF0Vlo782hbZ5HTlHz3qpKVKJE",
  authDomain: "webblog-ufape.firebaseapp.com",
  projectId: "webblog-ufape",
  storageBucket: "webblog-ufape.appspot.com",
  messagingSenderId: "693169831397",
  appId: "1:693169831397:web:ba4e374f174d578722430c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };