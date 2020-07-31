import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom'

import { SubmitButton } from '@/components/atoms'
import {
  postRequestState,
  isValidSelector,
  articleFormSelector,
  postSelector,
} from '@/recoil/articleForm'
import { useSnackbarMessages } from '@/recoil/global/snackbar'
import { useRecoilValueLoadable } from 'recoil'
import { useSetRecoilState } from 'recoil'

export const CreateButton: React.FC = () => {
  const history = useHistory()
  const isValid = useRecoilValue(isValidSelector)
  const articleForm = useRecoilValue(articleFormSelector)

  const { pushSnackbarMessage } = useSnackbarMessages()
  const setRequest = useSetRecoilState(postRequestState)
  const loadable = useRecoilValueLoadable(postSelector)

  useEffect(() => {
    if (loadable.state !== 'hasValue' || !loadable.contents) return
    pushSnackbarMessage('作成に成功しました。', false)
    history.push(`/admin/article/${loadable.contents}`)
  }, [loadable, history, pushSnackbarMessage])

  return (
    <SubmitButton
      type="submit"
      disabled={!isValid || loadable.state === 'loading'}
      onClick={() => setRequest(articleForm)}
      value={'作成する'}
    />
  )
}
