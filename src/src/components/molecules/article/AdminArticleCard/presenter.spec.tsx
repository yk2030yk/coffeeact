import React from 'react'
import { render } from '@testing-library/react'

import { AdminArticleCardPresenter } from './presenter'
import { Article, PUBLISH_STATUS } from '../../../../models/Article'
import { RecoilRoot } from 'recoil'

describe('PUBLISH status', () => {
  it('PUBLISH', () => {
    const article = new Article({
      id: 'id',
      publishStatus: PUBLISH_STATUS.PUBLISH,
      imgSrc: 'imgSrc',
      title: 'title',
      description: 'description',
      tags: ['tag1', 'tag2'],
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01',
    })

    const { getByText } = render(
      <RecoilRoot>
        <AdminArticleCardPresenter article={article} />
      </RecoilRoot>
    )

    const label = getByText('公開中')

    expect(label).not.toBeNull()
  })

  it('UN_PUBLISH', () => {
    const article = new Article({
      id: 'id',
      publishStatus: PUBLISH_STATUS.UN_PUBLISH,
      imgSrc: 'imgSrc',
      title: 'title',
      description: 'description',
      tags: ['tag1', 'tag2'],
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01',
    })

    const { getByText } = render(
      <RecoilRoot>
        <AdminArticleCardPresenter article={article} />
      </RecoilRoot>
    )

    const label = getByText('非公開')

    expect(label).not.toBeNull()
  })
})
