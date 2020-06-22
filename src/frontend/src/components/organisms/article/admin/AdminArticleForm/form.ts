import { Article, PublishStatus } from '@/models/article/Article'

export type FormValues = {
  title: string
  description: string
  publishStatus: PublishStatus
}

export const formValuesToModel = (
  formValues: FormValues,
  article: Article | undefined
) => {
  return new Article({
    ...article?.toJson(),
    ...formValues,
  })
}
