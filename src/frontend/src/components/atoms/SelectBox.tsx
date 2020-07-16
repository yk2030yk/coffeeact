import { styled, mixins } from '@/styles'

export default styled.select`
  ${mixins.button()}
  position: relative;
  appearance: none;
  padding-right: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    right: 0;
    width: 0;
    height: 0;
    padding: 0;
    border-left: 6px solid #000;
    border-right: 6px solid #000;
    border-top: 6px solid #666666;
    pointer-events: none;
  }
`
