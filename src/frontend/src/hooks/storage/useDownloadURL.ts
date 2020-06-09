import { useState, useCallback, useEffect } from 'react'
import { storage } from '@/service/firebase'

export const useDownloadURL = (path: string) => {
  const [downloadURL, setDownloadURL] = useState()

  const download = useCallback(async () => {
    if (!path) return
    const ref = storage.ref().child(path)
    const url = await ref.getDownloadURL()
    setDownloadURL(url)
  }, [path])

  useEffect(() => {
    download()
  }, [download])

  return downloadURL
}
