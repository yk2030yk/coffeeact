import { atom, selector } from 'recoil'
import { Article, PUBLISH_STATUS } from '@/models/article/Article'
import { ArticleForm } from '@/models/ArticleForm'
import { articleService } from '@/service/firestore/ArticleService'

export const editArticleIdState = atom<string>({
  key: 'editArticleIdState',
  default: '',
})

export const articleFormState = selector<ArticleForm>({
  key: 'articleFormState',
  get: async ({ get }) => {
    const id = get(editArticleIdState)
    const article = id ? await articleService.get(id) : undefined
    return {
      publishStatus: article?.publishStatus || PUBLISH_STATUS.UN_PUBLISH,
      imgSrc: article?.imgSrc || '',
      title: article?.title || '',
      description: article?.description || '',
      tags: article?.tags || [],
    }
  },
})
