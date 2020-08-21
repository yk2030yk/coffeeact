import { useState } from 'react'

export const useProps = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const toggleEdit = () => setIsEdit((old) => !old)

  return {
    isEdit,
    toggleEdit,
  }
}
