import { createAtomWithKey } from '@/recoil/utils'
import { Article } from '@/models/article/Article'

const atom = createAtomWithKey('article')

export const articleState = atom<Article>({
  key: 'articleState',
  default: new Article(),
})

export const articlesState = atom<Article[]>({
  key: 'articlesState',
  default: [],
})

type ArticleFilter = {
  keyword: string
  maxLength: number | undefined
}

export const articlesFilterState = atom<ArticleFilter>({
  key: 'articlesFilterState',
  default: {
    keyword: '',
    maxLength: undefined,
  },
})
