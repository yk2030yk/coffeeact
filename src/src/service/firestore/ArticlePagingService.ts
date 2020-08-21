import { firestore } from 'firebase'

import { FirestoreService } from './FirestoreService'
import { ArticlePaging } from '@/models'
import { ArticlePagingConverter } from '@/service/modelConverter'
import { ArticlePagingServiceInterface } from '@/interfaces/services/apiService/ArticlePagingService'
import { COLLECTION_NAMES } from './collections'

export class ArticlePagingService extends FirestoreService<ArticlePaging>
  implements ArticlePagingServiceInterface {
  constructor() {
    super({
      collectionName: COLLECTION_NAMES.ARTICLES_PAGING,
      converter: ArticlePagingConverter,
    })
  }

  public async push(id: string) {
    await this.collection.add({
      id,
      date: firestore.FieldValue.serverTimestamp(),
    })
  }

  public async getList(page: number, limit: number) {
    const querySnapshot = await this.collectionWithConverter
      .orderBy('date', 'desc')
      .limit(limit)
      .get()

    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async getListAll() {
    const querySnapshot = await this.collectionWithConverter
      .orderBy('date', 'desc')
      .get()

    return querySnapshot.docs.map((doc) => doc.data())
  }
}
