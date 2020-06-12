import { selector } from 'recoil'
import { coffleArticleAtom } from './atom'

export const coffleArticle = selector({
  key: 'coffleArticleSelector',
  get: ({ get }) => {
    return get(coffleArticleAtom)
  },
})
