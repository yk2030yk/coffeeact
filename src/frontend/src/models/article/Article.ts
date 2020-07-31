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
    doc = undefined,
  }: {
    id?: string
    publishStatus?: PublishStatus
    imgSrc?: string
    title?: string
    description?: string
    tags?: string[]
    createdAt?: firestore.Timestamp | undefined
    updatedAt?: firestore.Timestamp | undefined
    doc?: firestore.DocumentSnapshot | undefined
  } = {}) {
    super(doc)
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

  public toJson() {
    return {
      publishStatus: this.publishStatus,
      imgSrc: this.imgSrc,
      title: this.title,
      description: this.description,
      tags: this.tags,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      doc: this.doc,
    }
  }
}
