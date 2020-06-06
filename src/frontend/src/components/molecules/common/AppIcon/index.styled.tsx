import { styled } from '@/styles'

export const Wrapper = styled.p`
  padding: 10px;
`

export const Img = styled.img<{ height: number }>`
  height: ${({ height }) => height}px;
`
