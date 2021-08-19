import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCzErshz9mcuxPJ1ek5kRxinVHqzPgrW0s",
  authDomain: "react-chat-6adfd.firebaseapp.com",
  projectId: "react-chat-6adfd",
  storageBucket: "react-chat-6adfd.appspot.com",
  messagingSenderId: "898194710994",
  appId: "1:898194710994:web:0c1ff413972136c9bd680b",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, firestore, provider }
