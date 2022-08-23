import firebase from "firebase/app";
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBmGodatZdIkCDU5YfCCiU5EirSNqvVRuo",
    authDomain: "tesla-clone-671ba.firebaseapp.com",
    projectId: "tesla-clone-671ba",
    storageBucket: "tesla-clone-671ba.appspot.com",
    messagingSenderId: "279399319616",
    appId: "1:279399319616:web:fa89b5c5b303fc2931b7a5",
    measurementId: "G-HWJXMR9EWJ"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebaseConfig