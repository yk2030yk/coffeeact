import { ArticleLogService } from './ArticleLogService'
import { ArticlePagingService } from './ArticlePagingService'
import { ArticlePVService } from './ArticlePVService'
import { ArticleService } from './ArticleService'
import { ArticleTagService } from './ArticleTagService'

export const articleLogService = new ArticleLogService()
export const articlePagingService = new ArticlePagingService()
export const articlePVService = new ArticlePVService()
export const articleService = new ArticleService()
export const articleTagService = new ArticleTagService()
