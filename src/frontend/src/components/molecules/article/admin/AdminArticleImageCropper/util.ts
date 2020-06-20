import { Crop } from 'react-image-crop'

const getCanvasBlob = (
  canvas: HTMLCanvasElement,
  type = 'image/jpeg',
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
    throw new Error('Crop Value is required.')

  const canvas = document.createElement('canvas')
  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height
  canvas.width = crop.width
  canvas.height = crop.height
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  )

  return await getCanvasBlob(canvas)
}
