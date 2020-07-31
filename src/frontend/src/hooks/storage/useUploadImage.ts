import { useCallback } from 'react'
import { storageService } from '@/service/storage/StorageService'

export const useUploadImage = () => {
  const upload = useCallback((path: string, blob: Blob) => {
    if (!blob) return
    storageService.put(path, blob)
  }, [])

  return { upload }
}
