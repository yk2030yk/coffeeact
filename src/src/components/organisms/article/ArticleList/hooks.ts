import { useRecoilValue } from 'recoil'

import {
  articlesState,
  useArticles,
  useArticlePaging,
} from '@/recoil/articlePaging'
import { loadableSelector } from '@/recoil/loadable'

export const useProps = () => {
  useArticlePaging()
  useArticles()

  const articles = useRecoilValue(articlesState)
  const loadable = useRecoilValue(loadableSelector('articles'))

  return {
    articles,
    loadable,
  }
}
