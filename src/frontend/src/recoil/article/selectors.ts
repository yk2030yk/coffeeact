import { createSelectorWithKey } from '../utils'
import { NAME_SPACE } from '../namespace'
import { articlesFilterState, articlesState } from './atoms'

const selector = createSelectorWithKey(NAME_SPACE.article)

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
