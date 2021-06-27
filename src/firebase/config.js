import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCqhMYj1Sttw26eaGeEzaXE4W3Lb3j58BY",
    authDomain: "olx-clone-65047.firebaseapp.com",
    projectId: "olx-clone-65047",
    storageBucket: "olx-clone-65047.appspot.com",
    messagingSenderId: "677687213598",
    appId: "1:677687213598:web:7d2879d8200d11c731780f",
    measurementId: "G-9LWCLY92T3"
  };

 export default firebase.initializeApp(firebaseConfig)