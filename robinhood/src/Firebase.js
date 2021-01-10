import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnt2it-Xyin37wHzXQsGsBF0cazA115oI",
  authDomain: "robinhood-ddd4b.firebaseapp.com",
  projectId: "robinhood-ddd4b",
  storageBucket: "robinhood-ddd4b.appspot.com",
  messagingSenderId: "6083207740",
  appId: "1:6083207740:web:096c9f669eb45297a4d939",
  measurementId: "G-JH6T0XC7JZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
