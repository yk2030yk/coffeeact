import React from 'react'

import * as S from './styled'
import { Tag } from '@/components/atoms'
import { SearchResultArticlesListPageRoute } from '@/components/App/Routes/pageRoutes'

type Props = {
  tagList: string[]
}

export const SearchArticleByTagListPresenter: React.FC<Props> = ({
  tagList,
}) => (
  <S.Wrapper>
    <S.TagListBox>
      {tagList.map((tag) => (
        <S.TagItem
          key={tag}
          to={{
            pathname: SearchResultArticlesListPageRoute.formatPath(),
            search: SearchResultArticlesListPageRoute.searchString({ tag }),
          }}
        >
          <Tag>{tag}</Tag>
        </S.TagItem>
      ))}
    </S.TagListBox>
  </S.Wrapper>
)
