import { BaseModel } from './BaseModel'

export class ArticleLog extends BaseModel {
  constructor(readonly id: string, readonly date: number) {
    super()
  }
}
