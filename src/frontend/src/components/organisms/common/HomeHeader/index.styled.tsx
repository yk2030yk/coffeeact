import { styled, theme } from '@/styles'

export const Wrapper = styled.div<{ bgSrc: string }>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url(${({ bgSrc }) => bgSrc});
  background-size: cover;
  background-position: center;
`

export const Overlay = styled.div`
  height: ${theme.height.homeHeader};
  display: flex;
  align-items: center;
  border-bottom: solid 1px ${theme.color.plaster};
  padding: 0 ${theme.space.basic};
  width: 100%;
  height: 500px;
  background-color: rgb(0, 0, 0, 0.4);
`

export const Item = styled.div`
  padding-left: ${theme.space.basic};
  color: #fff;
`
