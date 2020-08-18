import { Article } from '@/models'
import { ArticleForm } from '@/models'

export type GetListCondition = {
  current?: boolean
  orderBy?: string
  tag?: string
}

export interface ArticleServiceInterface {
  get(id: string): Promise<Article | undefined>
  getListByIds(ids: string[]): Promise<Article[]>
  getList(condition: GetListCondition): Promise<Article[]>
  getListAll(): Promise<Article[]>
  getListByOrderBy(orderBy: string): Promise<Article[]>
  getListByTag(tag: string): Promise<Article[]>
  getListByCurrent(): Promise<Article[]>
  create(articleForm: ArticleForm): Promise<string>
  update(id: string, articleForm: ArticleForm): void
  delete(id: string): void
}
