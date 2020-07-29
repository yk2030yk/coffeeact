import { FirestoreService } from './FirestoreService'

const COLLECTION_NAME = 'articles_tag'

export class ArticleTagService extends FirestoreService {
  public async create(name: string) {
    await this.db.collection(COLLECTION_NAME).add({
      name,
    })
  }

  public async getTagList() {
    const querySnapshot = await this.db.collection(COLLECTION_NAME).get()
    return querySnapshot.docs.map((doc) => doc.data().name)
  }
}

export const articleTagService = new ArticleTagService()
