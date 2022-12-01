// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUynpBcjo-hvz4BGscs2EXog80RWoaRVA",
  authDomain: "car-sell-buy-client.firebaseapp.com",
  projectId: "car-sell-buy-client",
  storageBucket: "car-sell-buy-client.appspot.com",
  messagingSenderId: "257291104023",
  appId: "1:257291104023:web:a6b49fd90db8f3ffbbd152"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;