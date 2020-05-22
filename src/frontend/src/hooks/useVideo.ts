import { useCallback, useRef, useEffect } from 'react'

export interface SkywayMediaStream extends MediaStream {
  peerId: string
}

export const useVideo = (stream: SkywayMediaStream | undefined) => {
  const ref = useRef<HTMLVideoElement>(null)

  const play = useCallback(async () => {
    if (!stream || !ref.current) return
    ref.current.srcObject = stream
    ref.current.autoplay = true
    ref.current.muted = true
    await ref.current.play()
  }, [stream])

  useEffect(() => {
    play()
  }, [play])

  return { ref }
}
