import { PublishStatus } from './article/Article'

export type ArticleForm = {
  publishStatus: PublishStatus
  imgSrc: string
  title: string
  description: string
  tags: string[]
}
