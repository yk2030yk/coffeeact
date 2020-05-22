import { useState, useCallback } from 'react'
import SkyWayPeer, { SfuRoom, MeshRoom } from 'skyway-js'

import { useOnOpen } from '@/hooks/peer/useOnEvent'

type Peer = SkyWayPeer | undefined
type Room = SfuRoom

export const useRoom = ({
  peer,
  stream,
  roomName,
}: {
  peer: Peer
  stream: MediaStream | undefined
  roomName: string
}) => {
  const [room, setRoom] = useState<Room>()

  const joinRoom = useCallback(() => {
    if (!peer || !peer.open || !stream) return

    const newRoom = peer.joinRoom(roomName, {
      mode: 'sfu',
      stream: stream,
    }) as SfuRoom

    setRoom(newRoom)
  }, [peer, stream, roomName])

  useOnOpen(peer, joinRoom)

  return { room }
}
