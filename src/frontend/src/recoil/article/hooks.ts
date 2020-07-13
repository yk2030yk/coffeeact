import { useEffect } from 'react'
import { useRecoilCallback } from 'recoil'
import { articleService } from '@/service/firestore/ArticleService'
import { articlesState } from './atoms'

export const useFetchArticles = () => {
  const fetch = useRecoilCallback(
    ({ set }) => async () => {
      set(articlesState, await articleService.getList())
    },
    []
  )

  useEffect(() => {
    fetch()
  }, [fetch])
}
