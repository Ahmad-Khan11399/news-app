import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmEZxpFq4NruB7Qmeqno71YuL4yRkq-yE",
  authDomain: "chat-verse-d54d4.firebaseapp.com",
  projectId: "chat-verse-d54d4",
  storageBucket: "chat-verse-d54d4.appspot.com",
  messagingSenderId: "517633325114",
  appId: "1:517633325114:web:40f5a402a2d889181f9d03",
  measurementId: "G-V4CY985E5V",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
