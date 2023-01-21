import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
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

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { auth, db };
