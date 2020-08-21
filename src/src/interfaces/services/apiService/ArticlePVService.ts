import { ArticlePv } from '@/models'

export interface ArticlePVServiceInterface {
  push(id: string): void
  getArticlePvList(limit: number): Promise<ArticlePv[]>
}
