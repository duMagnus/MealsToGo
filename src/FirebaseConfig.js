import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "mealstogo-52743.firebaseapp.com",
  projectId: "mealstogo-52743",
  storageBucket: "mealstogo-52743.appspot.com",
  messagingSenderId: "837254532469",
  appId: "1:837254532469:web:5e9753413981645134d73c",
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
