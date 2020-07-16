import { firestore } from 'firebase'

import { FirestoreService } from './FirestoreService'
import { Article } from '@/models/article/Article'
import { ArticleForm } from '@/models/ArticleForm'

const COLLECTION_NAME = 'articles'

export class ArticleService extends FirestoreService {
  private docToModel(doc: firestore.DocumentSnapshot) {
    const data = doc.data() as ConstructorParameters<typeof Article>[0]
    const id = doc.id
    return new Article({ ...data, id })
  }

  private formToJson(articleForm: ArticleForm) {
    const timestamp = firestore.FieldValue.serverTimestamp()
    return {
      ...articleForm,
      createdAt: timestamp,
      updatedAt: timestamp,
    }
  }

  public async get(id: string) {
    const doc = await this.db.collection(COLLECTION_NAME).doc(id).get()
    return this.docToModel(doc)
  }

  public async getList() {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .orderBy('createdAt', 'desc')
      .get()
    return querySnapshot.docs.map((doc) => this.docToModel(doc))
  }

  public async newArrivalList(limit = 10) {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .orderBy('createdAt', 'desc')
      .limit(limit)
      .get()
    return querySnapshot.docs.map((doc) => this.docToModel(doc))
  }

  public async create(articleForm: ArticleForm) {
    const data = await this.db
      .collection(COLLECTION_NAME)
      .add(this.formToJson(articleForm))
    return data.id
  }

  public async update(id: string, articleForm: ArticleForm) {
    const doc = await this.db.collection(COLLECTION_NAME).doc(id).get()

    if (!doc) throw new Error('ドキュメントがありません。')

    await doc.ref.update(articleForm)
  }
}

export const articleService = new ArticleService()
