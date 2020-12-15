import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyC-9N8H9VasX89il9t4Sd-NSM3ZB5_5PJQ',
  authDomain: 'mutzcraft-nuxt.firebaseapp.com',
  projectId: 'mutzcraft-nuxt',
  storageBucket: 'mutzcraft-nuxt.appspot.com',
  messagingSenderId: '944843167176',
  appId: '1:944843167176:web:a1567c5e33eeb371569cfd',
  measurementId: 'G-GCFV2NZ59N',
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export { auth, db, storage }