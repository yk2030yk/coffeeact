import { useState, useCallback, useEffect } from 'react'

import defaultArticleImageSrc from '@/assets/images/defaultArticleImage.png'
import { storage } from '@/service/firebase'
import { useAsyncTask } from '@/hooks/common/useAsyncTask'

export const useDownloadURL = (path: string) => {
  const [downloadURL, setDownloadURL] = useState<string>()

  const asyncTask = useAsyncTask(
    useCallback(async () => {
      if (!path) {
        console.log(defaultArticleImageSrc)
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
  }, [execute])

  return downloadURL
}
