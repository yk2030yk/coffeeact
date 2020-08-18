import { BaseModel } from './BaseModel'

export class ArticlePaging extends BaseModel {
  constructor(readonly id: string, readonly date: number) {
    super()
  }
}
