import { useRecoilState } from 'recoil'

import { tagsState } from '@/recoil/articleForm'

export const useProps = () => {
  const [tags, setTags] = useRecoilState(tagsState)

  const deleteTag = (tag: string) => {
    setTags((old) => old.filter((t) => t !== tag))
  }

  return {
    tags,
    deleteTag,
  }
}
