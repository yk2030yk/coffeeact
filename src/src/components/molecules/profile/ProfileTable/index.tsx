import React from 'react'
import { useIntl } from 'react-intl'

import * as S from './styled'

const tableKey = [
  {
    key: 'born',
    isLink: false,
  },
  {
    key: 'lives',
    isLink: false,
  },
  {
    key: 'hobby',
    isLink: false,
  },
  {
    key: 'contact',
    isLink: false,
  },
  {
    key: 'twitter',
    isLink: true,
  },
  {
    key: 'github',
    isLink: true,
  },
  {
    key: 'qiita',
    isLink: true,
  },
]

type Props = {
  label: string
  text: string
  isLink: boolean
}

const TableItem: React.FC<Props> = ({ label, text, isLink }) => (
  <S.Item>
    <S.Label>{label}</S.Label>
    <S.Text>
      {isLink ? (
        <a target="_blank" rel="noopener noreferrer" href={text}>
          {text}
        </a>
      ) : (
        <>{text}</>
      )}
    </S.Text>
  </S.Item>
)

const ProfileTable: React.FC = () => {
  const { formatMessage } = useIntl()
  return (
    <S.Wrapper>
      {tableKey.map(({ key, isLink }) => (
        <TableItem
          key={key}
          label={formatMessage({ id: `profile.contents.${key}.label` })}
          text={formatMessage({ id: `profile.contents.${key}.text` })}
          isLink={isLink}
        />
      ))}
    </S.Wrapper>
  )
}

export default ProfileTable
