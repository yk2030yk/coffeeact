import { ArticlePaging } from '@/models'

export interface ArticlePagingServiceInterface {
  push(id: string): void
  getList(page: number, limit: number): Promise<ArticlePaging[]>
  getListAll(): Promise<ArticlePaging[]>
}
