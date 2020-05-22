import { useState, useEffect } from 'react'
import { SfuRoom, RoomStream } from 'skyway-js'

export const useRemoteStreams = (room: SfuRoom | undefined) => {
  const [remoteStreams, setRemoteStreams] = useState<RoomStream[]>([])

  useEffect(() => {
    if (!room) return
    room.on('stream', async (stream) => {
      setRemoteStreams((streams) => {
        return [...streams, stream]
      })
    })
  }, [room])

  return { remoteStreams }
}
