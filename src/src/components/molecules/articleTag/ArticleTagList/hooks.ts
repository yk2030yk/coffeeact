import { useRecoilValue } from 'recoil'

import {
  tagListState,
  useArticleTagList,
  useFetchArticleTagList,
} from '@/recoil/articleTag'
import { articleTagService } from '@/service/firestore'

export const useProps = () => {
  const fetch = useFetchArticleTagList()
  useArticleTagList()
  const tagList = useRecoilValue(tagListState)

  const handleDeleteButton = async (name: string) => {
    await articleTagService.delete(name)
    fetch()
  }

  return {
    tagList,
    handleDeleteButton,
  }
}
