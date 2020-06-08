import { styled, mixins } from '@/styles'

export const Card = styled.div`
  width: 100%;
  height: auto;
  ${mixins.card}

  &:hover {
    opacity: 0.8;
  }
`
