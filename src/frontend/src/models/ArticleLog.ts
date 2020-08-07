import { firestore } from 'firebase'
import { BaseModel } from '@/models/BaseModel'

type ArticleLogDocumentData = {
  id: string
  date: number
}

export class ArticleLog extends BaseModel {
  constructor(readonly id: string, readonly date: number) {
    super()
  }
}

export const ArticleLogConverter: firestore.FirestoreDataConverter<ArticleLog> = {
  toFirestore: (articleLog: ArticleLog): firestore.DocumentData => {
    return {
      id: articleLog.id,
      date: articleLog.date,
    }
  },
  fromFirestore: (
    snapshot: firestore.DocumentSnapshot<firestore.DocumentData>,
    options: firestore.SnapshotOptions
  ): ArticleLog => {
    const data = snapshot.data(options)! as ArticleLogDocumentData
    return new ArticleLog(data.id, data.date)
  },
}
