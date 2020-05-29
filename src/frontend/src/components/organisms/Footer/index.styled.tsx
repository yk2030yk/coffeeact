import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.blackCat};
  height: 200px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
`
