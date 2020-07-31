import { FirestoreService } from './FirestoreService'

const COLLECTION_NAME = 'articles_pv'

export class ArticlePVService extends FirestoreService {
  public async push(id: string) {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .where('id', '==', id)
      .get()

    if (querySnapshot.empty) {
      await this.db.collection(COLLECTION_NAME).add({
        id,
        pv: 1,
      })
    } else {
      await querySnapshot.forEach((doc) =>
        doc.ref.update({ pv: doc.data().pv + 1 })
      )
    }
  }

  public async getTopPvIdList(limit = 5) {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .orderBy('pv', 'desc')
      .limit(limit)
      .get()
    return querySnapshot.docs.map((doc) => doc.data().id)
  }
}

export const articlePVService = new ArticlePVService()
