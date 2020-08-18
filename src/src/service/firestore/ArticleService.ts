import { firestore } from 'firebase'

import { FirestoreService } from './FirestoreService'
import { CoffeeActApplicationError } from '@/errors'
import { Article } from '@/models'
import { ArticleConverter } from '@/service/modelConverter'
import { ArticleServiceInterface } from '@/interfaces/services/apiService/ArticleService'
import { COLLECTION_NAMES } from './collections'

export type GetListCondition = {
  current?: boolean
  orderBy?: string
  tag?: string
}

export class ArticleService extends FirestoreService<Article>
  implements ArticleServiceInterface {
  constructor() {
    super({
      collectionName: COLLECTION_NAMES.ARTICLES,
      converter: ArticleConverter,
    })
  }

  public async get(id: string) {
    const doc = await this.collectionWithConverter.doc(id).get()
    return doc.data()
  }

  public async getListByIds(ids: string[]) {
    const querySnapshot = await this.collectionWithConverter
      .where(firestore.FieldPath.documentId(), 'in', ids)
      .get()
    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async getList(condition: GetListCondition) {
    if (condition.tag) {
      return await this.getListByTag(condition.tag)
    } else if (condition.orderBy) {
      return await this.getListByOrderBy(condition.orderBy)
    } else if (condition.current) {
      return await this.getListByCurrent()
    }
    return await this.getListAll()
  }

  public async getListAll() {
    const querySnapshot = await this.collectionWithConverter.get()
    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async getListByOrderBy(orderBy: string) {
    const querySnapshot = await this.collectionWithConverter
      .orderBy(orderBy, 'desc')
      .get()
    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async getListByTag(tag: string) {
    const querySnapshot = await this.collectionWithConverter
      .where('tags', 'array-contains', tag)
      .get()
    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async getListByCurrent() {
    const querySnapshot = await this.collectionWithConverter
      .orderBy('createdAt', 'desc')
      .limit(6)
      .get()
    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async create(article: Article) {
    const timestamp = firestore.FieldValue.serverTimestamp()
    const data = await this.collection.add({
      ...this.converter?.toFirestore(article),
      createdAt: timestamp,
      updatedAt: timestamp,
    })
    return data.id
  }

  public async update(id: string, article: Article) {
    const doc = await this.collectionWithConverter.doc(id).get()

    if (!doc) throw new CoffeeActApplicationError('ドキュメントがありません。')

    const timestamp = firestore.FieldValue.serverTimestamp()
    await doc.ref.update({
      ...this.converter?.toFirestore(article),
      updatedAt: timestamp,
    })
  }

  public async delete(id: string) {
    await this.collection.doc(id).delete()
  }
}
