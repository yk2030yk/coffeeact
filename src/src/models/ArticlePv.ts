import { BaseModel } from './BaseModel'

export class ArticlePv extends BaseModel {
  constructor(readonly id: string, readonly pv: number) {
    super()
  }
}
