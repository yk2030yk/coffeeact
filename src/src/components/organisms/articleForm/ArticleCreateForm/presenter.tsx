import React from 'react'

import { ArticleForm } from '../ArticleForm'
import { CreateButton } from '@/components/molecules/articleForm/CreateButton'

export const ArticleCreateFormPresenter: React.FC = () => {
  return <ArticleForm ActionButton={<CreateButton />} />
}
