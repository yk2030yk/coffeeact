import { PublishStatus, PUBLISH_STATUS } from '@/models/article/Article'

export const validateTitle = (title: string) => {
  return Boolean(title)
}

export const validateDescription = (description: string) => {
  return Boolean(description)
}

export const validateTags = (tags: string[]) => {
  return Boolean(tags)
}

export const validatePublishStatus = (publishStatus: PublishStatus) => {
  return (
    Boolean(publishStatus) &&
    Object.values(PUBLISH_STATUS).findIndex((s) => s === publishStatus) > -1
  )
}

export const validateImgSrc = (imgSrc: string) => {
  return Boolean(imgSrc)
}

export const validatePreviewImageSrcBlob = (blob: Blob | undefined) => {
  return Boolean(blob)
}
