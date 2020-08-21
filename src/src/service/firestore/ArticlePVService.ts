import { FirestoreService } from './FirestoreService'
import { ArticlePv } from '@/models'
import { ArticlePvConverter } from '@/service/modelConverter'
import { COLLECTION_NAMES } from './collections'
import { ArticlePVServiceInterface } from '@/interfaces/services/apiService/ArticlePVService'

export class ArticlePVService extends FirestoreService<ArticlePv>
  implements ArticlePVServiceInterface {
  constructor() {
    super({
      collectionName: COLLECTION_NAMES.ARTICLES_PV,
      converter: ArticlePvConverter,
    })
  }

  public async push(id: string) {
    const querySnapshot = await this.collection.where('id', '==', id).get()

    if (querySnapshot.empty) {
      await this.collection.add({
        id,
        pv: 1,
      })
    } else {
      await querySnapshot.forEach((doc) =>
        doc.ref.update({ pv: doc.data().pv + 1 })
      )
    }
  }

  public async getArticlePvList(limit = 5) {
    const querySnapshot = await this.collectionWithConverter
      .orderBy('pv', 'desc')
      .limit(limit)
      .get()

    return querySnapshot.docs.map((doc) => doc.data())
  }
}
