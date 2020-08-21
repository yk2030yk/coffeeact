import { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

import { titleState } from '@/recoil/articleForm'

export const useProps = (defaultValue = '') => {
  const [title, setTitle] = useRecoilState(titleState)
  const reset = useResetRecoilState(titleState)

  useEffect(() => {
    if (defaultValue) setTitle(defaultValue)
    return () => reset()
  }, [defaultValue, setTitle, reset])

  return {
    title,
    setTitle,
  }
}
