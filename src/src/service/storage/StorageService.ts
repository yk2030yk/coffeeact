import { storage } from '@/service/firebase'

export class StorageService {
  public async getDownloadURL(path: string) {
    const ref = storage.ref().child(path)
    return await ref.getDownloadURL()
  }

  public async put(path: string, file: File | Blob) {
    const ref = storage.ref()
    const child = ref.child(path)
    await child.put(file)
  }

  public async delete(path: string) {
    const ref = storage.ref()
    const child = ref.child(path)
    await child.delete()
  }
}

export const storageService = new StorageService()
