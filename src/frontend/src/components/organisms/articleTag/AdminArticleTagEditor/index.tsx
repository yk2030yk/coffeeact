import React from 'react'

import { BasicBox } from '@/components/atoms'
import { ArticleTagEditor } from '@/components/molecules/articleTag/ArticleTagEditor'
import { ArticleTagList } from '@/components/molecules/articleTag/ArticleTagList'

export const AdminArticleTagEditor: React.FC = () => {
  return (
    <>
      <BasicBox>
        <ArticleTagEditor />
      </BasicBox>
      <BasicBox>
        <ArticleTagList />
      </BasicBox>
    </>
  )
}
