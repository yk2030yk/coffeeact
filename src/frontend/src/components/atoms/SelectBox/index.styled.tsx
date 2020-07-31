import { styled, mixins } from '@/styles'

export const SelectBox = styled.select`
  ${mixins.inputBox}
  display: inline-block;
  width: 150px;
  outline: none;
  appearance: none;
  border-radius: 5px;

  & > option {
    background-color: #fff;
    color: #333;
  }

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    right: 0px;
    width: 30px;
    height: 30px;
    background-color: #000;
  }

  &::-ms-expand {
    display: none;
  }
`

export const Label = styled.label`
  position: relative;

  &:after {
    display: block;
    content: ' ';
    position: absolute;
    top: 42%;
    right: 10px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #666666;
    pointer-events: none;
  }
`
