import { firestore } from 'firebase'

export class BaseModel {
  public readonly doc: firestore.DocumentSnapshot | undefined

  constructor(doc: firestore.DocumentSnapshot | undefined) {
    this.doc = doc
  }
}
