import { firestore } from 'firebase'

import { FirestoreService } from './FirestoreService'
import { ArticleConverter } from '@/models/Article'
import { ArticleForm } from '@/models/ArticleForm'

const COLLECTION_NAME = 'articles'

export type GetListCondition = {
  limit?: number
  orderBy?: string
  tag?: string
}

export class ArticleService extends FirestoreService {
  public async get(id: string) {
    const doc = await this.db
      .collection(COLLECTION_NAME)
      .withConverter(ArticleConverter)
      .doc(id)
      .get()
    return doc.data()
  }

  public async getListByIds(ids: string[]) {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .withConverter(ArticleConverter)
      .where(firestore.FieldPath.documentId(), 'in', ids)
      .get()
    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async getList(condition: GetListCondition) {
    const collection = this.db
      .collection(COLLECTION_NAME)
      .withConverter(ArticleConverter)

    let query = collection.orderBy(
      condition.orderBy ? condition.orderBy : 'createdAt',
      'desc'
    )

    // if (condition.tag) {
    //   query = query.where('tags', 'array-contains', condition.tag)
    // }

    if (condition.limit) query = query.limit(condition.limit)

    const querySnapshot = await query.get()
    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async create(articleForm: ArticleForm) {
    const timestamp = firestore.FieldValue.serverTimestamp()
    const data = await this.db.collection(COLLECTION_NAME).add({
      ...articleForm,
      createdAt: timestamp,
      updatedAt: timestamp,
    })
    return data.id
  }

  public async update(id: string, articleForm: ArticleForm) {
    const doc = await this.db
      .collection(COLLECTION_NAME)
      .doc(id)
      .withConverter(ArticleConverter)
      .get()

    if (!doc) throw new Error('ドキュメントがありません。')

    const timestamp = firestore.FieldValue.serverTimestamp()
    await doc.ref.update({ ...articleForm, updatedAt: timestamp })
  }

  public async delete(id: string) {
    await this.db.collection(COLLECTION_NAME).doc(id).delete()
  }
}

export const articleService = new ArticleService()
