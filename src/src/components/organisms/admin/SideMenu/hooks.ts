import { useHistory, useLocation } from 'react-router-dom'

export const useProps = () => {
  const history = useHistory()
  const { pathname } = useLocation()

  return {
    history,
    pathname,
  }
}
