import { ArticleLog } from '@/models'

export interface ArticleLogServiceInterface {
  push(id: string): void
  getLogs(id: string): Promise<ArticleLog[]>
}
