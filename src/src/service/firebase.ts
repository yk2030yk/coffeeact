import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import firebaseConfig from '@/firebaseConfig'

firebase.initializeApp(firebaseConfig)

export default firebase
export const db = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()

auth.setPersistence(
  process.env.NODE_ENV === 'test'
    ? firebase.auth.Auth.Persistence.NONE
    : firebase.auth.Auth.Persistence.SESSION
)
