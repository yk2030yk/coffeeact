import React from 'react'

import AppLayout from '../layouts/AppLayout'
import { useVideo } from '@/hooks/useVideo'
import { usePeer } from '@/hooks/usePeer'
import { useRoom } from '@/hooks/useRoom'
import { useMediaStream } from '@/hooks/useMediaStream'

const PageContainer: React.FC = () => {
  const peer = usePeer('my-name')
  const stream = useMediaStream()
  const ref = useVideo(peer, stream)
  const room = useRoom({ peer, stream, roomName: 'my-room' })

  if (!ref) return null

  return (
    <AppLayout>
      <video ref={ref}></video>
    </AppLayout>
  )
}

export default PageContainer
