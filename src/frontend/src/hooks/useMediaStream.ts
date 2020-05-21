import { useState, useEffect, useCallback } from 'react'

export const useMediaStream = () => {
  const [stream, setStream] = useState<MediaStream>()

  const getStream = useCallback(async () => {
    const s = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    })
    setStream(s)
  }, [])

  useEffect(() => {
    getStream()
  }, [getStream])

  return stream
}
