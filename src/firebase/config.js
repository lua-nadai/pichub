import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAeiC-o1gHYppRs3_AoRNSRyK0ubPWUYaU",
  authDomain: "pichub-aff31.firebaseapp.com",
  projectId: "pichub-aff31",
  storageBucket: "pichub-aff31.appspot.com",
  messagingSenderId: "358082640893",
  appId: "1:358082640893:web:83d7aa3dd9ac3f40ef7794"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }
