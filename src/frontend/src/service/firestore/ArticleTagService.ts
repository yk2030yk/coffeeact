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

  public async delete(name: string) {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .where('name', '==', name)
      .get()
    await Promise.all(
      querySnapshot.docs.map(async (doc) => await doc.ref.delete())
    )
  }
}

export const articleTagService = new ArticleTagService()
