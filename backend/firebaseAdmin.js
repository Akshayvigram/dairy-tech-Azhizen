// import admin from 'firebase-admin';
// import { readFileSync } from 'fs';
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Read the service account key file
// const serviceAccountPath = join(__dirname, 'serviceAccountKey.json');
// const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));

// // Initialize Firebase Admin
// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
//   });
// }

// const db = admin.firestore();
// export default db;

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your friend's Firebase Web Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDRX8tVe_SEbJ8zHGF6yyKJUvplk_BTGc",
  authDomain: "dairy-tech-2411d.firebaseapp.com",
  projectId:  "dairy-tech-2411d",
  storageBucket: "dairy-tech-2411d.firebasestorage.app",
  messagingSenderId: "989462243216",
  appId: "1:989462243216:web:b6c5eba8371c6cf0ecf515"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app, collection, addDoc, serverTimestamp };
export default db;