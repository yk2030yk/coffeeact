import { ChangeEventHandler, ChangeEvent } from 'react'
import { useSetRecoilState } from 'recoil'

import { inputImageSrcState } from '@/recoil/articleForm'

export const useProps = () => {
  const setInputImageSrc = useSetRecoilState(inputImageSrcState)

  const handleChange: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) return
    const file = event.target.files[0]
    const src = URL.createObjectURL(file)
    setInputImageSrc(src)
  }

  return {
    handleChange,
  }
}
