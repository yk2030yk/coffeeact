import { createAtomWithKey } from '../utils'
import { NAME_SPACE } from '../namespace'

import { Article } from '@/models/article/Article'
import { GetListCondition } from '@/service/firestore/ArticleService'

const atom = createAtomWithKey(NAME_SPACE.article)

export const articleState = atom<Article>({
  key: 'articleState',
  default: new Article(),
})

export const articlesState = atom<Article[]>({
  key: 'articlesState',
  default: [],
})

export const articlesConditionState = atom<GetListCondition>({
  key: 'articlesConditionState',
  default: {},
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
