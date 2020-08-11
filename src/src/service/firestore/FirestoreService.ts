import { firestore } from 'firebase'
import { db } from '../firebase'

export class FirestoreService {
  protected db: firestore.Firestore = db
}
