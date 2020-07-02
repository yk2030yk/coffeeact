import { firestore } from 'firebase'

import { FirestoreService } from './FirestoreService'
import { Article, PUBLISH_STATUS } from '@/models/article/Article'

const COLLECTION_NAME = 'articles'

export class ArticleService extends FirestoreService {
  private docToModel(doc: firestore.DocumentSnapshot) {
    const data = doc.data() as ConstructorParameters<typeof Article>[0]
    const id = doc.id
    return new Article({ ...data, id, doc })
  }

  private modelToJson(article: Article) {
    const timestamp = firestore.FieldValue.serverTimestamp()
    return {
      publishStatus: article.publishStatus,
      description: article.description,
      imgSrc: article.imgSrc,
      title: article.title,
      tags: article.tags,
      createdAt:
        article.createdAt === undefined ? timestamp : article.createdAt,
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
      // .where('publishStatus', '==', PUBLISH_STATUS.PUBLISH)
      .orderBy('createdAt', 'desc')
      .limit(limit)
      .get()
    return querySnapshot.docs.map((doc) => this.docToModel(doc))
  }

  public async create(article: Article) {
    const data = await this.db
      .collection(COLLECTION_NAME)
      .add(this.modelToJson(article))
    return data.id
  }

  public async update(article: Article) {
    if (!article.doc) throw new Error('ドキュメントがありません。')
    await article.doc.ref.update(this.modelToJson(article))
  }
}

export const articleService = new ArticleService()
