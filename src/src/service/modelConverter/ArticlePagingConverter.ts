import { firestore } from 'firebase'
import { ArticlePaging } from '@/models'

type ArticlePagingDocumentData = {
  id: string
  date: number
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
