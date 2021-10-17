import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBN5FIqSgcahC8b9YHpP-T3vFXxRzFS2Zg",
    authDomain: "whatsapp-clone-6fff2.firebaseapp.com",
    projectId: "whatsapp-clone-6fff2",
    storageBucket: "whatsapp-clone-6fff2.appspot.com",
    messagingSenderId: "927445636225",
    appId: "1:927445636225:web:9b0b082e52b82ff9f36980",
    measurementId: "G-P80GBFXKFR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;