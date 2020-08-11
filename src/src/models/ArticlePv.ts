import { firestore } from 'firebase'
import { BaseModel } from '@/models/BaseModel'

type ArticlePvDocumentData = {
  id: string
  pv: number
}

export class ArticlePv extends BaseModel {
  constructor(readonly id: string, readonly pv: number) {
    super()
  }
}

export const ArticlePvConverter: firestore.FirestoreDataConverter<ArticlePv> = {
  toFirestore: (articlePv: ArticlePv): firestore.DocumentData => {
    return {
      id: articlePv.id,
      pv: articlePv.pv,
    }
  },
  fromFirestore: (
    snapshot: firestore.DocumentSnapshot<firestore.DocumentData>,
    options: firestore.SnapshotOptions
  ): ArticlePv => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const data = snapshot.data(options)! as ArticlePvDocumentData
    return new ArticlePv(data.id, data.pv)
  },
}
