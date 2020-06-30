import React from 'react'

import * as S from './index.styled'
import DefaultTemplate from '@/components/templates/DefaultTemplate'
import Experiment1 from '@/components/organisms/experiment/Experiment1'
import Experiment2 from '@/components/organisms/experiment/Experiment2'
import Experiment3 from '@/components/organisms/experiment/Experiment3'
import Experiment4 from '@/components/organisms/experiment/Experiment4'

const Page: React.FC = () => (
  <DefaultTemplate>
    <S.Content>
      <S.Box>
        <Experiment1 />
      </S.Box>
      <S.Box>
        <Experiment2 />
      </S.Box>
      <S.Box>
        <Experiment3 />
      </S.Box>
      <S.Box>
        <Experiment4 />
      </S.Box>
    </S.Content>
  </DefaultTemplate>
)

export default Page
