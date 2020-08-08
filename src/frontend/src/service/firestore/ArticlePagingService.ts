import { firestore } from 'firebase'

import { FirestoreService } from './FirestoreService'
import { ArticlePagingConverter } from '@/models/ArticlePaging'

const COLLECTION_NAME = 'articles_paging'

export class ArticlePagingService extends FirestoreService {
  public async push(id: string) {
    await this.db.collection(COLLECTION_NAME).add({
      id,
      date: firestore.FieldValue.serverTimestamp(),
    })
  }

  public async getList(page: number, limit: number) {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .withConverter(ArticlePagingConverter)
      .orderBy('date', 'desc')
      .limit(limit)
      .get()

    return querySnapshot.docs.map((doc) => doc.data())
  }
}

export const articlePagingService = new ArticlePagingService()
