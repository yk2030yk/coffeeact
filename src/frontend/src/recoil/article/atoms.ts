import { atom } from 'recoil'
import { Article } from '@/models/article/Article'

type ArticleFilter = {
  keyword: string
}

export const articlesState = atom<Article[]>({
  key: 'articles',
  default: [],
})

export const articlesFilterState = atom<ArticleFilter>({
  key: 'articlesFilterState',
  default: {
    keyword: '',
  },
})
