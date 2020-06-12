import { firestore } from 'firebase'

import { FirestoreService } from './FirestoreService'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'

const COLLECTION_NAME = 'coffeeArticles'

export class CoffeeArticleService extends FirestoreService {
  private docToModel(doc: firestore.DocumentSnapshot) {
    const data = doc.data() as ConstructorParameters<typeof CoffeeArticle>[0]
    const id = doc.id
    return new CoffeeArticle({ ...data, id, doc })
  }

  private modelToJson(coffeeArticle: CoffeeArticle) {
    return {
      description: coffeeArticle.description,
      imgSrc: coffeeArticle.imgSrc,
      title: coffeeArticle.title,
      tags: coffeeArticle.tags,
      updatedAt: firestore.FieldValue.serverTimestamp(),
    }
  }

  public async get(id: string) {
    const doc = await this.db.collection(COLLECTION_NAME).doc(id).get()
    return this.docToModel(doc)
  }

  public async getList() {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .orderBy('updatedAt', 'desc')
      .get()
    return querySnapshot.docs.map((doc) => this.docToModel(doc))
  }

  public async newArrivalList(limit = 10) {
    const querySnapshot = await this.db
      .collection(COLLECTION_NAME)
      .orderBy('updatedAt', 'desc')
      .limit(limit)
      .get()
    return querySnapshot.docs.map((doc) => this.docToModel(doc))
  }

  public async create(coffeeArticle: CoffeeArticle) {
    const data = await this.db
      .collection(COLLECTION_NAME)
      .add(this.modelToJson(coffeeArticle))
    return data.id
  }

  public async update(coffeeArticle: CoffeeArticle) {
    if (!coffeeArticle.doc) throw new Error('ドキュメントがありません。')
    await coffeeArticle.doc.ref.update(this.modelToJson(coffeeArticle))
  }
}

export const coffeeArticleService = new CoffeeArticleService()
