import { createSelectorWithKey } from '../utils'
import { NAME_SPACE } from '../namespace'
import { pageState, limitState, articlePagingListState } from './atoms'
import { arrayChunk, range } from '@/utils/util'
import { ArticlePaging } from '@/models/ArticlePaging'

const selector = createSelectorWithKey(NAME_SPACE.articlePaging)

export const dividedArticlePagingListSelector = selector({
  key: 'dividedArticlePagingListSelector',
  get: ({ get }) => {
    const limit = get(limitState)
    const articlePagingList = get(articlePagingListState)
    return arrayChunk<ArticlePaging[]>(articlePagingList, limit)
  },
})

export const maxPageNumberSelector = selector({
  key: 'maxPageNumberSelector',
  get: ({ get }) => {
    const dividedArticlePagingList = get(dividedArticlePagingListSelector)
    return dividedArticlePagingList.length
  },
})

export const validPageNumberSelector = selector({
  key: 'validPageNumberSelector',
  get: ({ get }) => {
    const maxPageNumber = get(maxPageNumberSelector)
    const page = get(pageState)

    if (page > maxPageNumber) {
      return maxPageNumber
    } else if (page <= 0) {
      return 1
    } else {
      return page
    }
  },
})

export const pageArticlePagingListSelector = selector({
  key: 'pageArticlePagingListSelector',
  get: ({ get }) => {
    const pageNumber = get(validPageNumberSelector)
    const dividedArticlePagingList = get(dividedArticlePagingListSelector)
    if (dividedArticlePagingList.length === 0) return []
    return dividedArticlePagingList[pageNumber - 1]
  },
})

export const pagerSelector = selector({
  key: 'pagerSelector',
  get: ({ get }) => {
    const pageNumber = get(validPageNumberSelector)
    const maxPageNumber = get(maxPageNumberSelector)
    return range(1, maxPageNumber).map((number) => ({
      number,
      isSelected: number === pageNumber,
    }))
  },
})
