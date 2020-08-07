import { createAtomWithKey } from '../utils'
import { NAME_SPACE } from '../namespace'

import { PUBLISH_STATUS, PublishStatus } from '@/models/Article'
import { ArticleForm } from '@/models/ArticleForm'

const atom = createAtomWithKey(NAME_SPACE.articleForm)

export const imageSrcState = atom<string>({
  key: 'imageSrcState',
  default: '',
})

export const titleState = atom<string>({
  key: 'titleState',
  default: '',
})

export const descriptionState = atom<string>({
  key: 'descriptionState',
  default: '',
})

export const tagsState = atom<string[]>({
  key: 'tagsState',
  default: [],
})

export const publishStatusState = atom<PublishStatus>({
  key: 'publishStatusState',
  default: PUBLISH_STATUS.UN_PUBLISH,
})

export const inputImageSrcState = atom<string>({
  key: 'inputImageSrcState',
  default: '',
})

export const croppedImageSrcState = atom<string>({
  key: 'croppedImageSrcState',
  default: '',
})

export const previewImageSrcBlobState = atom<Blob | undefined>({
  key: 'previewImageSrcBlobState',
  default: undefined,
})

export const postRequestState = atom<undefined | ArticleForm>({
  key: 'postRequestState',
  default: undefined,
})
