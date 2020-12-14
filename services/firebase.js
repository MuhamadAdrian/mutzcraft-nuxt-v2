import firebase from 'firebase/app'
import config from './config'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

!firebase.apps.length ? firebase.initializeApp(config) : ''

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export { auth, db, storage }
