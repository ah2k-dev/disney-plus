import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
const firebaseConfig = {
  apiKey: "AIzaSyARmt7Xjiy5a45z3AQiI7qc0Ka-uZUzPHo",
  authDomain: "disney-clone-a5e96.firebaseapp.com",
  projectId: "disney-clone-a5e96",
  storageBucket: "disney-clone-a5e96.appspot.com",
  messagingSenderId: "612412359838",
  appId: "1:612412359838:web:5a9b895220066fc7b3e78f"
};
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;