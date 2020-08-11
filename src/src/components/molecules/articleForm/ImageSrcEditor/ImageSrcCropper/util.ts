import { CoffeeActApplicationError } from '@/errors'
import { Crop } from 'react-image-crop'

const getCanvasBlob = (
  canvas: HTMLCanvasElement,
  type = 'image/png',
  quality = 1
) => {
  return new Promise((resolve: (blob: Blob) => void, reject) => {
    canvas.toBlob(
      (blob: Blob | null) => {
        if (blob) {
          resolve(blob)
        } else {
          reject('Blobへの変換に失敗しました。')
        }
      },
      type,
      quality
    )
  })
}
export const getCroppedBlob = async (image: HTMLImageElement, crop: Crop) => {
  if (
    crop.width === undefined ||
    crop.height === undefined ||
    crop.x === undefined ||
    crop.y === undefined
  )
    throw new CoffeeActApplicationError('Crop Value is required.')

  const canvas = document.createElement('canvas')
  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height
  canvas.width = 600
  canvas.height = 300
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    600,
    300
  )

  return await getCanvasBlob(canvas)
}
