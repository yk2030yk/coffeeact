import { selectorFamily } from 'recoil'
import { storageService } from '@/service/storage/StorageService'
import defaultArticleImageSrc from '@/assets/images/defaultArticleImage.png'

export const storageDownloadURLsSelector = selectorFamily({
  key: 'storageDownloadURLsSelector',
  get: (path: string) => async () => {
    try {
      return await storageService.getDownloadURL(path)
    } catch (error) {
      return defaultArticleImageSrc
    }
  },
})
