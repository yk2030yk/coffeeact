import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: hidden;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: solid 3px ${({ theme }) => theme.color.blackCat};
`

export const Img = styled.img`
  width: 100%;
`
