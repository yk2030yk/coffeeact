import { useState, useEffect, useCallback } from 'react'

export interface SkywayMediaStream extends MediaStream {
  peerId: string
}

export const useMediaStream = () => {
  const [stream, setStream] = useState<SkywayMediaStream>()

  const getStream = useCallback(async () => {
    const s = (await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    })) as SkywayMediaStream
    setStream(s)
  }, [])

  useEffect(() => {
    getStream()
  }, [getStream])

  return { stream }
}
