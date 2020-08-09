import { firestore } from 'firebase'
import { BaseModel } from '@/models/BaseModel'

type ArticlePagingDocumentData = {
  id: string
  date: number
}

export class ArticlePaging extends BaseModel {
  constructor(readonly id: string, readonly date: number) {
    super()
  }
}

export const ArticlePagingConverter: firestore.FirestoreDataConverter<ArticlePaging> = {
  toFirestore: (articleLog: ArticlePaging): firestore.DocumentData => {
    return {
      id: articleLog.id,
      date: articleLog.date,
    }
  },
  fromFirestore: (
    snapshot: firestore.DocumentSnapshot<firestore.DocumentData>,
    options: firestore.SnapshotOptions
  ): ArticlePaging => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const data = snapshot.data(options)! as ArticlePagingDocumentData
    return new ArticlePaging(data.id, data.date)
  },
}
