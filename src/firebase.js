import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAhhldkhGiBQPrzMjlZ1FQi81afu-hCavk",
  authDomain: "tinder-clone-87918.firebaseapp.com",
  databaseURL: "https://tinder-clone-87918.firebaseio.com",
  projectId: "tinder-clone-87918",
  storageBucket: "tinder-clone-87918.appspot.com",
  messagingSenderId: "30360611274",
  appId: "1:30360611274:web:2e49eeb18c417f1c188733"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;