import { useArticlePvRanking } from '@/hooks/useArticlePvRanking'

export const useProps = () => {
  const { articles, articlePvList } = useArticlePvRanking()
  return { articles, articlePvList }
}
