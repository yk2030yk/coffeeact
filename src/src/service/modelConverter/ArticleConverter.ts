import { firestore } from 'firebase'

import { formatTimestamp } from '@/service/firestore/utils'
import { Article } from '@/models'
import { PublishStatus } from '@/models/Article'

type ArticleDocumentData = {
  id?: string
  publishStatus?: PublishStatus
  imgSrc?: string
  title?: string
  description?: string
  tags?: string[]
  createdAt?: firestore.Timestamp | undefined
  updatedAt?: firestore.Timestamp | undefined
}

export const ArticleConverter: firestore.FirestoreDataConverter<Article> = {
  toFirestore: (article: Article): firestore.DocumentData => {
    return {
      publishStatus: article.publishStatus,
      imgSrc: article.imgSrc,
      title: article.title,
      description: article.description,
      tags: article.tags,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
    }
  },
  fromFirestore: (
    snapshot: firestore.DocumentSnapshot<firestore.DocumentData>,
    options: firestore.SnapshotOptions
  ): Article => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const data = snapshot.data(options)! as ArticleDocumentData
    return new Article({
      ...data,
      id: snapshot.id,
      createdAt: formatTimestamp(data.createdAt),
      updatedAt: formatTimestamp(data.updatedAt),
    })
  },
}
