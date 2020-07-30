import React from 'react'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'

import * as S from './index.styled'
import { Tag } from '@/components/atoms'
import { tagListState } from '@/recoil/articleTag/atoms'
import { useArticleTagList } from '@/recoil/articleTag/hooks'

export const SearchArticleByTagList: React.FC = () => {
  useArticleTagList()
  const tagList = useRecoilValue(tagListState)

  return (
    <S.Wrapper>
      <S.TagListBox>
        {tagList.map((tag) => (
          <Link
            key={tag}
            to={{
              pathname: '/articles/search',
              search: `?tag=${tag}`,
            }}
          >
            <Tag>{tag}</Tag>
          </Link>
        ))}
      </S.TagListBox>
    </S.Wrapper>
  )
}
