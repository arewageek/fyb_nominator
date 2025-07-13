import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWUmOfK5kfdHum0Hcwe8cjeYTEyD1-hWw",
  authDomain: "norminator-82bf1.firebaseapp.com",
  databaseURL: "https://norminator-82bf1-default-rtdb.firebaseio.com/",
  projectId: "norminator-82bf1",
  storageBucket: "norminator-82bf1.firebasestorage.app",
  messagingSenderId: "244631727394",
  appId: "1:244631727394:web:77a2596cea42c5559a897b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
