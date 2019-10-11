import firebase, { User as FirebaseUser } from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { Roles, User } from '../types'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

async function toUser(authData: FirebaseUser | null) {
  if (authData) {
    const { uid, email } = authData

    const snapshot = await firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .get()

    const documentData = snapshot.data()
    if (!documentData) throw new Error('[firebase] User not found')

    const { firstName, lastName, role } = documentData

    return new User(
      firstName,
      lastName,
      email || '',
      role in Roles ? role : Roles.DEFAULT,
    )
  }

  return null
}

class FirebaseService {
  static async initialize(): Promise<User | null> {
    firebase.initializeApp(config)

    return new Promise(async (resolve: (user: User | null) => void) => {
      const unsubscribe = firebase
        .auth()
        .onAuthStateChanged(async (firebaseUser: FirebaseUser | null) => {
          const user = await toUser(firebaseUser)

          unsubscribe()
          resolve(user)
        })
    })
  }

  static async login(email: string, password: string): Promise<User | null> {
    const { user: firebaseUser } = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

    return toUser(firebaseUser)
  }

  static async logout(): Promise<boolean> {
    await firebase.auth().signOut()

    return true
  }
}

export default FirebaseService
