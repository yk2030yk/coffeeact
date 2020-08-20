import { useRecoilValue } from 'recoil'

import { tagListState, useArticleTagList } from '@/recoil/articleTag'

export const useProps = () => {
  useArticleTagList()
  const tagList = useRecoilValue(tagListState)

  return { tagList }
}
