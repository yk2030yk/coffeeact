import { useRecoilValue } from 'recoil'

import { articleState } from '@/recoil/article'

export const useProps = () => {
  const article = useRecoilValue(articleState)
  return { article }
}
