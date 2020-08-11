import { useEffect, useCallback } from 'react'
import { useSetRecoilState, useResetRecoilState } from 'recoil'

import { tagListState } from './atoms'
import { articleTagService } from '@/service/firestore/ArticleTagService'
import { useAsyncTask } from '@/hooks/common/useAsyncTask'

export const useFetchArticleTagList = () => {
  const setTagList = useSetRecoilState(tagListState)
  const { execute } = useAsyncTask(
    'articleTags',
    useCallback(async () => {
      setTagList(await articleTagService.getTagList())
    }, [setTagList])
  )
  return execute
}

export const useArticleTagList = () => {
  const fetch = useFetchArticleTagList()
  const resetTagList = useResetRecoilState(tagListState)

  useEffect(() => {
    fetch()
    return () => {
      resetTagList()
    }
  }, [fetch, resetTagList])
}
