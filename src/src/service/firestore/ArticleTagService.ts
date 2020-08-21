import { FirestoreService } from './FirestoreService'
import { ArticleTagServiceInterface } from '@/interfaces/services/apiService/ArticleTagService'
import { COLLECTION_NAMES } from './collections'

export class ArticleTagService extends FirestoreService
  implements ArticleTagServiceInterface {
  constructor() {
    super({ collectionName: COLLECTION_NAMES.ARTICLES_TAG })
  }

  public async create(name: string) {
    await this.collection.add({
      name,
    })
  }

  public async delete(name: string) {
    const querySnapshot = await this.collection.where('name', '==', name).get()
    await Promise.all(
      querySnapshot.docs.map(async (doc) => await doc.ref.delete())
    )
  }

  public async getTagList() {
    const querySnapshot = await this.collection.get()
    return querySnapshot.docs.map((doc) => doc.data().name)
  }
}
