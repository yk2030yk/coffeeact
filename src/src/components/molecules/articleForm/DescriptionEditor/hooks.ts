import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { descriptionState } from '@/recoil/articleForm'
import { useResetRecoilState } from 'recoil'

export const useProps = (defaultValue: string) => {
  const [description, setDescription] = useRecoilState(descriptionState)
  const reset = useResetRecoilState(descriptionState)

  useEffect(() => {
    if (defaultValue) setDescription(defaultValue)
    return () => reset()
  }, [defaultValue, setDescription, reset])

  const handleEditorChange = (content: string) => {
    setDescription(content)
  }

  return {
    description,
    handleEditorChange,
    defaultValue,
  }
}
