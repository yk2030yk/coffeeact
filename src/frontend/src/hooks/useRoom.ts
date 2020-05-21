import { useEffect, useState } from 'react'
import SkyWayPeer, { SfuRoom, MeshRoom } from 'skyway-js'

type Peer = SkyWayPeer | undefined
type Room = SfuRoom | MeshRoom

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
  const open = peer?.open

  useEffect(() => {
    if (!peer || !stream) return
    if (!open) return

    const newRoom = peer.joinRoom(roomName, {
      mode: 'sfu',
      stream: stream,
    }) as SfuRoom

    setRoom(newRoom)
  }, [peer, open, stream, roomName])

  return room
}
