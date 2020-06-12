import { firestore } from 'firebase'

export class BaseModel {
  doc: firestore.DocumentSnapshot | undefined
  constructor(doc: firestore.DocumentSnapshot | undefined) {
    this.doc = doc
  }
}
