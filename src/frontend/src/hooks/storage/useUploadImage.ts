import { useState, useCallback, useEffect } from 'react'
import { storageService } from '@/service/storage/StorageService'

export const useUploadImage = () => {
  const [blob, setBlob] = useState<Blob>()
  const [src, setSrc] = useState<string>()

  const upload = useCallback(
    (path: string) => {
      if (!blob) return
      storageService.put(path, blob)
    },
    [blob]
  )

  useEffect(() => {
    if (!blob) return
    const blobSrc = URL.createObjectURL(blob)
    setSrc(blobSrc)
  }, [blob])

  return {
    blob,
    src,
    setBlob,
    upload,
  }
}
