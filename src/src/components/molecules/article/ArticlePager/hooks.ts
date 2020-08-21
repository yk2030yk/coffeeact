import { useRecoilValue, useSetRecoilState } from 'recoil'

import { pagerSelector, pageState } from '@/recoil/articlePaging'

export const useProps = () => {
  const pager = useRecoilValue(pagerSelector)
  const setPage = useSetRecoilState(pageState)

  const handleClickPageNumber = (number: number) => setPage(number)

  return {
    pager,
    handleClickPageNumber,
  }
}
