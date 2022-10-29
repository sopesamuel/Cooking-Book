import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAKxZz_sfXsw2PF1KPfpmauoQ1ZHHlf-Eg",
    authDomain: "cooking-ninja-project-e5c40.firebaseapp.com",
    projectId: "cooking-ninja-project-e5c40",
    storageBucket: "cooking-ninja-project-e5c40.appspot.com",
    messagingSenderId: "714970656071",
    appId: "1:714970656071:web:39ce46b066374abc623062"
  };

  //initialize firbase
  firebase.initializeApp(firebaseConfig)

//initialize services
  const projectFirestore = firebase.firestore()

  export {projectFirestore}