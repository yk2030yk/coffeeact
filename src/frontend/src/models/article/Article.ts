import { firestore } from 'firebase'
import { format } from 'date-fns'

import { BaseModel } from '@/models/BaseModel'

export class Article extends BaseModel {
  id: string
  imgSrc: string
  title: string
  description: string
  tags: string[]
  updatedAt: firestore.Timestamp | undefined

  constructor({
    id = '',
    imgSrc = '',
    title = '',
    description = '',
    tags = [],
    updatedAt = undefined,
    doc = undefined,
  }: {
    id?: string
    imgSrc?: string
    title?: string
    description?: string
    tags?: string[]
    updatedAt?: firestore.Timestamp | undefined
    doc?: firestore.DocumentSnapshot | undefined
  }) {
    super(doc)
    this.id = id
    this.imgSrc = imgSrc
    this.title = title
    this.description = description
    this.tags = tags
    this.updatedAt = updatedAt
  }

  public get formatUpdatedAt() {
    if (!this.updatedAt) return ''
    return format(this.updatedAt.toDate(), 'yyyy/M/d(eee) hh:mm')
  }

  public toJson() {
    return {
      description: this.description,
      imgSrc: this.imgSrc,
      title: this.title,
      tags: this.tags,
      updatedAt: this.updatedAt,
      doc: this.doc,
    }
  }
}
