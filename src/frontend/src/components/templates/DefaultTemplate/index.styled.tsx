import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.height.header};
`

export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`

export const Footer = styled.div`
  width: 100%;
  margin-top: auto;
`
