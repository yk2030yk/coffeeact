import { firestore } from 'firebase'
import { format, isValid } from 'date-fns'

export class CoffeeArticle {
  id: string
  imgSrc: string
  title: string
  description: string
  updatedAt: firestore.Timestamp | undefined

  constructor({
    id = '',
    imgSrc = '',
    title = '',
    description = '',
    updatedAt = undefined,
  }: {
    id?: string
    imgSrc?: string
    title?: string
    description?: string
    updatedAt?: firestore.Timestamp | undefined
  }) {
    this.id = id
    this.imgSrc = imgSrc
    this.title = title
    this.description = description
    this.updatedAt = updatedAt
  }

  public get formatUpdatedAt() {
    if (!this.updatedAt) return ''
    return format(this.updatedAt.toDate(), 'yyyy/M/d(eee) hh:mm')
  }
}
