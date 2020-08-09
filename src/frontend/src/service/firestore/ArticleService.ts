import { firestore } from 'firebase'

import { FirestoreService } from './FirestoreService'
import { CoffeeActApplicationError } from '@/errors'
import { ArticleConverter } from '@/models/Article'
import { ArticleForm } from '@/models/ArticleForm'

const COLLECTION_NAME = 'articles'

export type GetListCondition = {
  current?: boolean
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
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .withConverter(ArticleConverter)
      .get()
    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async getListByOrderBy(orderBy: string) {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .withConverter(ArticleConverter)
      .orderBy(orderBy, 'desc')
      .get()
    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async getListByTag(tag: string) {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .withConverter(ArticleConverter)
      .where('tags', 'array-contains', tag)
      .get()
    return querySnapshot.docs.map((doc) => doc.data())
  }

  public async getListByCurrent() {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .withConverter(ArticleConverter)
      .orderBy('createdAt', 'desc')
      .limit(6)
      .get()
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

    if (!doc) throw new CoffeeActApplicationError('ドキュメントがありません。')

    const timestamp = firestore.FieldValue.serverTimestamp()
    await doc.ref.update({ ...articleForm, updatedAt: timestamp })
  }

  public async delete(id: string) {
    await this.db.collection(COLLECTION_NAME).doc(id).delete()
  }
}

export const articleService = new ArticleService()
