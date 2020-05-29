import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #000;
  height: ${({ theme }) => theme.height.header};
  color: #fff;
  display: flex;
  align-items: center;
  z-index: ${({ theme }) => theme.zindex.header};
  padding: 0 20px;
`

export const Item = styled.div`
  padding-left: 20px;
`
