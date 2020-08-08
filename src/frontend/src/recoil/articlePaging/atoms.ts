import { createAtomWithKey } from '../utils'
import { NAME_SPACE } from '../namespace'
import { Article } from '@/models/Article'

const atom = createAtomWithKey(NAME_SPACE.articlePaging)

export const articlesState = atom<Article[]>({
  key: 'articlesState',
  default: [],
})

export const pageState = atom<number>({
  key: 'pageState',
  default: 1,
})

export const limitState = atom<number>({
  key: 'limitState',
  default: 10,
})
