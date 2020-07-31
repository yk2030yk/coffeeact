import { articlesFilterState, articlesState } from './atoms'
import { createSelectorWithKey } from '@/recoil/utils'

const selector = createSelectorWithKey('article')

export const filteredArticlesSelector = selector({
  key: 'filteredArticlesSelector',
  get: ({ get }) => {
    const articles = get(articlesState)
    const { keyword } = get(articlesFilterState)

    if (!keyword) return articles

    return articles.filter((article) => {
      return (
        article.title.indexOf(keyword) !== -1 ||
        article.description.indexOf(keyword) !== -1 ||
        article.tags.indexOf(keyword) !== -1
      )
    })
  },
})
