import { useCallback, useState } from 'react'
import { connect as _connect, Room } from 'twilio-video'

import { useOnDisconnect } from './room/useOnEvent'
import { roomApiService } from '@/service/TwilioApi/RoomApiService'

/**
 * ルーム
 */
export const useRoom = (token: string | undefined) => {
  const [room, setRoom] = useState<Room>()
  const [connectError, setConnectError] = useState()
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [isDisconnected, setIsDisconnected] = useState(false)

  const connect = useCallback(async () => {
    if (!token) return
    setIsConnecting(true)
    setIsDisconnected(false)
    try {
      const newRoom = await _connect(token)
      setRoom(newRoom)
      setIsConnected(true)
    } catch (e) {
      setConnectError(e)
    }
    setIsConnecting(false)
  }, [token, setRoom, setIsDisconnected])

  const onDisconnect = useCallback(() => {
    setIsDisconnected(true)
  }, [setIsDisconnected])

  useOnDisconnect(room, onDisconnect)

  const complete = useCallback(() => {
    if (!room) return
    roomApiService.complete(room.name)
    //roomApiService.complete(room.sid)
  }, [room])

  return {
    room,
    connect,
    complete,
    isConnecting,
    isConnected,
    isDisconnected,
    connectError,
  }
}
