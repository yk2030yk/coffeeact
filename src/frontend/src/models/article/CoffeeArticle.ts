import { format } from 'date-fns'

export class CoffeeArticle {
  id: string
  imgSrc: string
  title: string
  description: string
  updatedAt: string

  constructor({
    id,
    imgSrc,
    title,
    description,
    updatedAt,
  }: {
    id: string
    imgSrc: string
    title: string
    description: string
    updatedAt: string
  }) {
    this.id = id
    this.imgSrc = imgSrc
    this.title = title
    this.description = description
    this.updatedAt = updatedAt
  }

  public get formatUpdatedAt() {
    return format(new Date(this.updatedAt), 'yyyy/M/d(eee) hh:mm')
  }
}
