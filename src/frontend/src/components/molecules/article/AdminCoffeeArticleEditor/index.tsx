import React, { useState } from 'react'

import * as S from './index.styled'
import InputText from '@/components/atoms/article/InputText'
import TextArea from '@/components/atoms/article/TextArea'
import ImageInput from '@/components/molecules/article/ImageInput'
import { CoffeeArticle } from '@/models/article/CoffeeArticle'
import StorageImage from '@/components/atoms/common/StorageImage'
import { RiCloseLine } from 'react-icons/ri'

type Props = {
  register: any
  coffeeArticle: CoffeeArticle
  updateModel: (value: any) => void
  file: File | undefined
  setFile: (file: File) => void
}

const CoffeeArticleEditor: React.FC<Props> = ({
  coffeeArticle,
  updateModel,
  register,
  file,
  setFile,
}) => {
  const [inputTag, setInputTag] = useState<string>('')
  const handleChange = (e: any) => setInputTag(e.target.value)
  const addTag = () => {
    if (!inputTag) {
      alert('入力されたタグが空です')
      return
    }
    updateModel({ tags: [...coffeeArticle.tags, inputTag] })
    setInputTag('')
  }

  const deleteTag = (tag: string) => {
    updateModel({ tags: coffeeArticle.tags.filter((t) => t !== tag) })
  }

  return (
    <S.Wrapper>
      {coffeeArticle && (
        <>
          <S.Title>見出し画像</S.Title>
          <S.ImageBox>
            <ImageInput setFile={setFile} />
            {!file && (
              <S.PreviewCurrentImageWrapper>
                <StorageImage path={coffeeArticle.imgSrc} />
              </S.PreviewCurrentImageWrapper>
            )}
          </S.ImageBox>

          <S.Title>記事タグ</S.Title>
          <S.AddTagBox>
            <S.TagInput type="text" value={inputTag} onChange={handleChange} />
            <S.AddTagButton onClick={addTag}>タグを追加する</S.AddTagButton>
          </S.AddTagBox>
          <S.TagsBox>
            {coffeeArticle.tags.map((tag) => (
              <S.TagLabel key={tag}>
                <S.Tag>{tag}</S.Tag>
                <RiCloseLine size={20} onClick={(e) => deleteTag(tag)} />
              </S.TagLabel>
            ))}
          </S.TagsBox>

          <S.Title>記事タイトル</S.Title>
          <S.TitleInputText>
            <InputText
              name="title"
              value={coffeeArticle.title}
              register={register}
            />
          </S.TitleInputText>

          <S.Title>記事コンテンツ</S.Title>
          <S.DescriptionTextArea>
            <TextArea
              name="description"
              value={coffeeArticle.description}
              register={register}
            />
          </S.DescriptionTextArea>
        </>
      )}
    </S.Wrapper>
  )
}

export default CoffeeArticleEditor
