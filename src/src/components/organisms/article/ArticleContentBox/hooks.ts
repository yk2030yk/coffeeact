import { useRecoilValue } from 'recoil'

import { loadableSelector } from '@/recoil/loadable'

export const useProps = () => {
  const loadable = useRecoilValue(loadableSelector('article'))
  return {
    loadable,
  }
}
