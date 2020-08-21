export interface ArticleTagServiceInterface {
  create(name: string): Promise<void>
  delete(name: string): Promise<void>
  getTagList(): Promise<any[]>
}
