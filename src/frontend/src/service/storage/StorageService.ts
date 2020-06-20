import { storage } from '@/service/firebase'

export class StorageService {
  public async put(path: string, file: File | Blob) {
    const ref = storage.ref()
    const child = ref.child(path)
    await child.put(file)
  }
}

export const storageService = new StorageService()
