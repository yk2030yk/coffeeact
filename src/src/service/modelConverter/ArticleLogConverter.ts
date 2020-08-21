import { firestore } from 'firebase'
import { ArticleLog } from '@/models'

type ArticleLogDocumentData = {
  id: string
  date: number
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
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const data = snapshot.data(options)! as ArticleLogDocumentData
    return new ArticleLog(data.id, data.date)
  },
}
