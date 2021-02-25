import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBHC5GebTCGAeUkFHQe6lQN7CsBJEcHoDE",
    authDomain: "crud-121d4.firebaseapp.com",
    projectId: "crud-121d4",
    storageBucket: "crud-121d4.appspot.com",
    messagingSenderId: "733954312143",
    appId: "1:733954312143:web:c630117e5e0cc8847234ba"
  }

export const firebaseApp = firebase.initializeApp(firebaseConfig)