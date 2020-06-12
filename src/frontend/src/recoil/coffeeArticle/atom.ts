import { atom } from 'recoil'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

export const coffleArticleAtom = atom<CoffeeArticle | undefined>({
  key: 'coffleArticleAtom',
  default: undefined,
})
