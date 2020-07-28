import { styled, theme, colorUtils } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colorUtils.alpha(theme.color.white)};
  display: grid;
  grid-template-columns: 300px 1fr;
  margin-bottom: ${theme.space.atom};
  padding-right: ${theme.space.atom};
  grid-gap: ${theme.space.atom};
`

export const LeftContent = styled.div``

export const RightContent = styled.div``
