import { useState, useCallback, useEffect } from 'react'
import { storage } from '@/service/firebase'
import { useAsyncTask } from '@/hooks/common/useAsyncTask'

export const useDownloadURL = (path: string) => {
  const [downloadURL, setDownloadURL] = useState()

  const asyncTask = useAsyncTask(
    useCallback(async () => {
      if (!path) throw new Error('pathがありません。')
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
