import { useRecoilValue } from 'recoil'

import { userState } from '@/recoil/auth'

export const useProps = () => {
  const user = useRecoilValue(userState)
  return {
    user,
  }
}
