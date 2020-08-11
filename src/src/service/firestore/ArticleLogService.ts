import { firestore } from 'firebase'

import { FirestoreService } from './FirestoreService'
import { ArticleLogConverter } from '@/models/ArticleLog'

const COLLECTION_NAME = 'articles_log'

export class ArticleLogService extends FirestoreService {
  public async push(id: string) {
    await this.db.collection(COLLECTION_NAME).add({
      id,
      date: firestore.FieldValue.serverTimestamp(),
    })
  }

  public async getLogs(id: string) {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .withConverter(ArticleLogConverter)
      .where('id', '==', id)
      .get()

    return querySnapshot.docs.map((doc) => doc.data())
  }
}

export const articleLogService = new ArticleLogService()
