import { useState, useCallback } from 'react'
import { storageService } from '@/service/storage/StorageService'

export const useUploadImage = () => {
  const [file, setFile] = useState<File>()

  const upload = useCallback(
    (path: string) => {
      if (!file) return
      storageService.put(path, file)
    },
    [file]
  )

  return {
    file,
    setFile,
    upload,
  }
}
