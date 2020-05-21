import { useCallback, useRef } from 'react'

import { useOnOpen } from './peer/useOnEvent'
import Peer from 'skyway-js'

export const useVideo = (
  peer: Peer | undefined,
  stream: MediaStream | undefined
) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const onOpen = useCallback(() => {
    if (!peer || !stream || !videoRef.current) return
    videoRef.current.srcObject = stream
    videoRef.current.play()
    videoRef.current.autoplay = true
    videoRef.current.muted = true
  }, [peer, stream])

  useOnOpen(peer, onOpen)

  return videoRef
}
