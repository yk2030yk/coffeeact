import React, { useState } from 'react'
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

import * as S from './index.styled'
import { getCroppedBlob } from './util'
import { BasicBox, Text, Button } from '@/components/atoms'
import { randomString } from '@/utils/util'

type Props = {
  handleFinish: (blob: Blob | undefined) => void
}

const aspect = 16 / 8
const CoffeeArticleEditor: React.FC<Props> = ({ handleFinish }) => {
  const [src, setSrc] = useState<string>('')
  const [croppedSrc, setCroppedSrc] = useState<string>('')
  const [image, setImage] = useState<HTMLImageElement>(new Image())
  const [previewBlob, setPreviewBlob] = useState<Blob>()
  const [crop, setCrop] = useState<Crop>({ aspect })
  const id = randomString()

  const onChange = (event: any) => {
    const file = event.target.files[0]
    const src = URL.createObjectURL(file)
    setSrc(src)
  }

  const handleImageLoaded = (image: HTMLImageElement) => setImage(image)

  const handleCrop = async (newCrop: Crop) => {
    setCrop(newCrop)
  }

  const handelComplete = async () => {
    try {
      const blob = await getCroppedBlob(image, crop)
      const src = URL.createObjectURL(blob)
      setPreviewBlob(blob)
      setCroppedSrc(src)
    } catch (e) {
      /**  */
    }
  }

  return (
    <S.Wrapper>
      <BasicBox>
        <S.ButtonGroup>
          <S.InputFile id={id} type="file" onChange={(e) => onChange(e)} />
          <S.InputFileLabel htmlFor={id}>画像を選択する</S.InputFileLabel>
          <Button onClick={() => handleFinish(previewBlob)}>決定する</Button>
        </S.ButtonGroup>
      </BasicBox>
      <BasicBox>
        <Text>
          ※画像は縦横比が2:1の画像になるようにトリミングしてください。
        </Text>
      </BasicBox>
      <BasicBox>
        <S.ImageGroup>
          <S.ImageWrapper>
            <Text>元画像</Text>
            <ReactCrop
              src={src}
              crop={crop}
              onImageLoaded={handleImageLoaded}
              onChange={handleCrop}
              onComplete={handelComplete}
            />
          </S.ImageWrapper>
          <S.ImageWrapper>
            <Text>トリミング結果</Text>
            {croppedSrc && <img src={croppedSrc} alt="" />}
          </S.ImageWrapper>
        </S.ImageGroup>
      </BasicBox>
    </S.Wrapper>
  )
}

export default CoffeeArticleEditor
