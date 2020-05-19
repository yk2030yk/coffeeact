import { useCallback, useState } from 'react'

import { tokenApiService } from '@/service/TwilioApi/TokenApiService'

/**
 * token
 */
export const useToken = (roomName: string, identity: string) => {
  const [token, setToken] = useState<string>()

  const getToken = useCallback(async () => {
    if (!roomName || !identity) return
    const newToken = await tokenApiService.getToken(roomName, identity)
    setToken(newToken)
  }, [setToken, roomName, identity])

  return {
    token,
    getToken,
    roomName,
  }
}
