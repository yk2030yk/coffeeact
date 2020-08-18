import { firestore } from 'firebase'
import { db } from '../firebase'
import { CoffeeActApplicationError } from '@/errors'

type FirestoreServicePayload<T> = {
  collectionName: string
  converter?: firestore.FirestoreDataConverter<T>
}

export class FirestoreService<T = undefined> {
  protected db: firestore.Firestore = db
  protected collectionName: string
  protected converter: firestore.FirestoreDataConverter<T> | undefined

  constructor({ collectionName, converter }: FirestoreServicePayload<T>) {
    this.collectionName = collectionName
    this.converter = converter
  }

  protected get collection() {
    return this.db.collection(this.collectionName)
  }

  protected get collectionWithConverter() {
    if (!this.converter)
      throw new CoffeeActApplicationError('converterがありません。')

    return this.db.collection(this.collectionName).withConverter(this.converter)
  }
}
