import { styled, theme } from '@/styles'

export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-gap: ${theme.space.atom};
  grid-template-columns: repeat(auto-fit, 490px);

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`
