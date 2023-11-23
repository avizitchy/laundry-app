import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcgauRB-4f3NE_MVVObVoHszi9s4e38h8",
  authDomain: "laundry-app-78034.firebaseapp.com",
  projectId: "laundry-app-78034",
  storageBucket: "laundry-app-78034.appspot.com",
  messagingSenderId: "347280343104",
  appId: "1:347280343104:web:a9e59030ab8d7130e19fa5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};