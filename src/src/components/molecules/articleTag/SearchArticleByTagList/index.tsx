import React from 'react'
import { useRecoilValue } from 'recoil'

import * as S from './index.styled'
import { Tag } from '@/components/atoms'
import { tagListState, useArticleTagList } from '@/recoil/articleTag'
import { formatPath } from '@/components/App/Routes/pageRoutes/SearchResultArticlesListPageRoute'

export const SearchArticleByTagList: React.FC = () => {
  useArticleTagList()
  const tagList = useRecoilValue(tagListState)

  return (
    <S.Wrapper>
      <S.TagListBox>
        {tagList.map((tag) => (
          <S.TagItem
            key={tag}
            to={{
              pathname: formatPath(),
              search: `?tag=${tag}`,
            }}
          >
            <Tag>{tag}</Tag>
          </S.TagItem>
        ))}
      </S.TagListBox>
    </S.Wrapper>
  )
}