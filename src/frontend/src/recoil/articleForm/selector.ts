import { selector } from 'recoil'

import * as validate from './validate'
import {
  idState,
  titleState,
  imageSrcState,
  descriptionState,
  tagsState,
  publishStatusState,
  previewImageSrcBlobState,
} from './atom'
import { ArticleForm } from '@/models/ArticleForm'

export const articleFormSelector = selector<ArticleForm>({
  key: 'formValuesState',
  get: ({ get }) => {
    const title = get(titleState)
    const imgSrc = get(imageSrcState)
    const description = get(descriptionState)
    const tags = get(tagsState)
    const publishStatus = get(publishStatusState)
    return {
      imgSrc,
      title,
      description,
      tags,
      publishStatus,
    }
  },
})

export const isValidSelector = selector<boolean>({
  key: 'validateFormState',
  get: ({ get }) => {
    const { title, description, tags, publishStatus, imgSrc } = get(
      articleFormSelector
    )
    const blob = get(previewImageSrcBlobState)
    return (
      validate.validateTitle(title) &&
      validate.validateDescription(description) &&
      validate.validateTags(tags) &&
      validate.validatePublishStatus(publishStatus) &&
      (validate.validateImgSrc(imgSrc) ||
        validate.validatePreviewImageSrcBlob(blob))
    )
  },
})
