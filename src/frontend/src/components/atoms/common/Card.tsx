import { styled, mixins } from '@/styles'

export default styled.div`
  width: 100%;
  height: 100%;
  ${mixins.card}

  &:hover {
    opacity: 0.8;
  }
`
