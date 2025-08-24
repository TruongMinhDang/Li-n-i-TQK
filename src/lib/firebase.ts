// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  "projectId": "website-lin-i",
  "appId": "1:646891921337:web:fd2be80aa6676a62ac2068",
  "storageBucket": "website-lin-i.firebasestorage.app",
  "apiKey": "AIzaSyAMhNU7iK1-I__0WUMyI-ehPlA954MjgVA",
  "authDomain": "website-lin-i.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "646891921337"
};

// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
}

// Initialize Firestore
getFirestore(firebaseApp);

export default firebaseApp;
