import { styled } from '@/styles'

export const Img = styled.img<{ height: number }>`
  height: ${({ height }) => height}px;
`
