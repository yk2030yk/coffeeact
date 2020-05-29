import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.yankeesBlue};
  height: 200px;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
`
