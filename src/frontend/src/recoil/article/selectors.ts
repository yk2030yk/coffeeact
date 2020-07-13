import { selector, selectorFamily } from 'recoil'
import { articlesFilterState } from './atoms'
import { articleService } from '@/service/firestore/ArticleService'

export const articleSelector = selectorFamily({
  key: 'articleSelector',
  get: (id: string) => async () => await articleService.get(id),
})

export const articlesSelector = selector({
  key: 'articlesSelector',
  get: async () => await articleService.getList(),
})

export const filteredArticlesSelector = selector({
  key: 'filteredArticlesSelector',
  get: ({ get }) => {
    const articles = get(articlesSelector)
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
