import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLsNAmqpoMjBWcIHlkVZVizI_dYyuuBQc",
  authDomain: "rafaelpersonalapp.firebaseapp.com",
  projectId: "rafaelpersonalapp",
  storageBucket: "rafaelpersonalapp.appspot.com",
  messagingSenderId: "332598835699",
  appId: "1:332598835699:web:b4e71175e3471d3446ba86",
  measurementId: "G-567T005Y4C",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
