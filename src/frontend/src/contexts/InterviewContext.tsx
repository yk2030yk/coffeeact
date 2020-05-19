import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from 'react'
import { Room, LocalAudioTrack, LocalVideoTrack } from 'twilio-video'

import { useParams } from 'react-router'
import { useToken } from '@/hooks/useToken'
import { useRoom } from '@/hooks/useRoom'
import { useLocalTracks } from '@/hooks/useLocalTracks'
import { useOnBeforeunload } from '@/hooks/window/useOnEvent'
import { UseContextError } from '@/errors'

type ContextValue = {
  tokenError: Error | undefined
  room: Room | undefined
  roomName: string
  complete: () => void
  isConnecting: boolean
  isConnected: boolean
  isInterviewing: boolean
  isDisconnected: boolean
  connectError: Error | undefined
  localTracks: (LocalAudioTrack | LocalVideoTrack)[]
}

const InterviewContext = createContext<ContextValue>({} as ContextValue)

type Props = {
  identity: string
}

export const InterviewContextProvider: React.FC<Props> = ({
  children,
  identity,
}) => {
  const { roomName } = useParams()
  const [isInterviewing, setInterviewing] = useState(false)
  const [tokenError, setTokenError] = useState()
  const { token, getToken } = useToken(roomName, identity)
  const {
    room,
    connect: connectRoom,
    isConnecting,
    isConnected,
    isDisconnected,
    connectError,
    complete,
  } = useRoom(token)
  const {
    localTracks,
    getLocalVideoTrack,
    getLocalAudioTrack,
  } = useLocalTracks()

  useEffect(() => {
    const execute = async () => {
      try {
        await getToken()
      } catch (e) {
        setTokenError(e)
      }
    }
    execute()
  }, [getToken, setTokenError])

  useEffect(() => {
    connectRoom()
  }, [connectRoom])

  useEffect(() => {
    getLocalVideoTrack()
  }, [getLocalVideoTrack])

  useEffect(() => {
    getLocalAudioTrack()
  }, [getLocalAudioTrack])

  useEffect(() => {
    setInterviewing(isConnected)
  }, [isConnected])

  const onBeforeunload = useCallback(() => {
    if (!room) return
    // 画面を移動する時にroomをdisconnectする
    room.disconnect()
  }, [room])

  useOnBeforeunload(onBeforeunload)

  return (
    <InterviewContext.Provider
      value={{
        room,
        roomName,
        tokenError,
        isConnecting,
        isConnected,
        isDisconnected,
        connectError,
        complete,
        isInterviewing,
        localTracks,
      }}
    >
      {children}
    </InterviewContext.Provider>
  )
}

export const useInterviewContext = () => {
  const context = useContext(InterviewContext)
  if (!context) {
    throw new UseContextError('InterviewContext')
  }
  return context
}
