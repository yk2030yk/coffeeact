import { firestore } from 'firebase'

import { FirestoreService } from './FirestoreService'
import { ArticleLog } from '@/models'
import { ArticleLogConverter } from '@/service/modelConverter'
import { ArticleLogServiceInterface } from '@/interfaces/services/apiService/ArticleLogService'
import { COLLECTION_NAMES } from './collections'

export class ArticleLogService extends FirestoreService<ArticleLog>
  implements ArticleLogServiceInterface {
  constructor() {
    super({
      collectionName: COLLECTION_NAMES.ARTICLES_LOG,
      converter: ArticleLogConverter,
    })
  }

  public async push(id: string) {
    await this.collection.add({
      id,
      date: firestore.FieldValue.serverTimestamp(),
    })
  }

  public async getLogs(id: string) {
    const querySnapshot = await this.collectionWithConverter
      .where('id', '==', id)
      .get()

    return querySnapshot.docs.map((doc) => doc.data())
  }
}
