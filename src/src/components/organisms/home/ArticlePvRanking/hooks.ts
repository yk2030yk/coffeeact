import { useArticlePvRanking } from '@/hooks/useArticlePvRanking'

export const useProps = () => {
  const { articles } = useArticlePvRanking()
  return { articles }
}
