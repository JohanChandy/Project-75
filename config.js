import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDIaRa-SuuTQ74nz_I-MbBlaDeqLIhT3Xo",
  authDomain: "e-library-c9b5a.firebaseapp.com",
  projectId: "e-library-c9b5a",
  storageBucket: "e-library-c9b5a.appspot.com",
  messagingSenderId: "192122641188",
  appId: "1:192122641188:web:eadb8d57458861c760f1b1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
