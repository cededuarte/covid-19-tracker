import firebase from 'firebase'

    const firebaseConfig = {
        apiKey: "AIzaSyAWT3gsUe-nPZdjw1aVtmUP9bFuzydHM_U",
        authDomain: "covid-19-tracker-985cb.firebaseapp.com",
        projectId: "covid-19-tracker-985cb",
        storageBucket: "covid-19-tracker-985cb.appspot.com",
        messagingSenderId: "337027062975",
        appId: "1:337027062975:web:28e59cef5072eedc7f3a0a",
        measurementId: "G-J1JMHB2232"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db



