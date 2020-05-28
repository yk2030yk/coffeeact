import { format } from 'date-fns'

export class RecommendedCoffee {
  imgSrc: string
  title: string
  description: string
  updatedAt: string

  constructor({
    imgSrc,
    title,
    description,
    updatedAt,
  }: {
    imgSrc: string
    title: string
    description: string
    updatedAt: string
  }) {
    this.imgSrc = imgSrc
    this.title = title
    this.description = description
    this.updatedAt = updatedAt
  }

  public get formatUpdatedAt() {
    return format(new Date(this.updatedAt), 'yyyy/M/d(eee) hh:mm')
  }
}
