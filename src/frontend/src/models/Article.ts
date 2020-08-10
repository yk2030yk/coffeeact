import { firestore } from 'firebase'
import isBefore from 'date-fns/isBefore'
import subDays from 'date-fns/subDays'

import { BaseModel } from '@/models/BaseModel'
import { formatTimestamp } from '@/service/firestore/utils'

export const PUBLISH_STATUS = {
  PUBLISH: 'publish',
  UN_PUBLISH: 'unPublish',
} as const

export type PublishStatus = typeof PUBLISH_STATUS[keyof typeof PUBLISH_STATUS]

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

export class Article extends BaseModel {
  public readonly id: string
  public readonly publishStatus: PublishStatus
  public imgSrc: string
  public readonly title: string
  public readonly description: string
  public readonly tags: string[]
  public readonly createdAt: firestore.Timestamp | undefined
  public readonly updatedAt: firestore.Timestamp | undefined

  constructor({
    id = '',
    publishStatus = PUBLISH_STATUS.UN_PUBLISH,
    imgSrc = '',
    title = '',
    description = '',
    tags = [],
    createdAt = undefined,
    updatedAt = undefined,
  }: ArticleDocumentData = {}) {
    super()
    this.id = id
    this.publishStatus = publishStatus
    this.imgSrc = imgSrc
    this.title = title
    this.description = description
    this.tags = tags
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  public get formatCreated() {
    return formatTimestamp(this.createdAt)
  }

  public get formatUpdatedAt() {
    return formatTimestamp(this.updatedAt)
  }

  public get isPublish() {
    return this.publishStatus === PUBLISH_STATUS.PUBLISH
  }

  public get isNewArrival() {
    return (
      this.createdAt &&
      isBefore(subDays(new Date(), 7), this.createdAt.toDate())
    )
  }
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
    return new Article({ ...data, id: snapshot.id })
  },
}
