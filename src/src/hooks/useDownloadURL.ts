import { useState, useEffect, useCallback } from 'react'

import defaultArticleImageSrc from '@/assets/images/defaultArticleImage.png'
import { storage } from '@/service/firebase'
import { useAsyncTask } from '@/hooks/useAsyncTask'

export const useDownloadURL = (path: string) => {
  const [downloadURL, setDownloadURL] = useState<string>()

  const asyncTask = useAsyncTask(
    'downloadURLTask',
    useCallback(async () => {
      if (!path) {
        setDownloadURL(defaultArticleImageSrc)
        return
      }

      const ref = storage.ref().child(path)
      const url = await ref.getDownloadURL()
      setDownloadURL(url)
    }, [path])
  )

  const { execute } = asyncTask
  useEffect(() => {
    execute()
    return () => setDownloadURL(defaultArticleImageSrc)
  }, [execute])

  return downloadURL
}
