
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjK3hfbPjAbRj1EGC9WZW4iAb3qWTJ0j4",
  authDomain: "mini-tasks-722db.firebaseapp.com",
  projectId: "mini-tasks-722db",
  storageBucket: "mini-tasks-722db.firebasestorage.app",
  messagingSenderId: "1043190078398",
  appId: "1:1043190078398:web:cf177fa00ac4f89390f7ef",
  measurementId: "G-R0V6N1WZPF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth(app);