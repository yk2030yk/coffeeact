import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.mixin.pointer}
`

export const CoffeeImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`

export const CoffeeImage = styled.img`
  width: 100%;
  height: auto;
`

export const Info = styled.div`
  padding: 10px 0;
`

export const CoffeeUpdatedAt = styled.p`
  ${({ theme }) => theme.mixin.smallText}
`

export const CoffeeTitle = styled.p`
  color: ${({ theme }) => theme.color.darkestDungeon};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding-top: 10px;
`

export const CoffeeDescription = styled.p`
  ${({ theme }) => theme.mixin.text}
  padding-top: 10px;
`
