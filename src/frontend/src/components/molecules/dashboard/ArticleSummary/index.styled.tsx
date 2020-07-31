import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  width: 100px;

  table {
    width: 100%;
    border-right: solid 1px ${theme.color.blackCat};
    border-top: solid 1px ${theme.color.blackCat};
  }

  tr {
  }

  td {
    border-left: solid 1px ${theme.color.blackCat};
    border-bottom: solid 1px ${theme.color.blackCat};
  }
`
