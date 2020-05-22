import React from 'react'

import AppLayout from '../layouts/AppLayout'
import { useVideo } from '@/hooks/useVideo'
import { usePeer } from '@/hooks/usePeer'
import { useRoom } from '@/hooks/useRoom'
import { useRemoteStreams } from '@/hooks/useRemoteStreams'
import { useMediaStream } from '@/hooks/useMediaStream'
import { SfuRoom } from 'skyway-js'

export interface SkywayMediaStream extends MediaStream {
  peerId: string
}

const RemoteVideo: React.FC<{ stream: SkywayMediaStream }> = ({ stream }) => {
  const { ref } = useVideo(stream)

  return <video ref={ref}></video>
}

const RemoteVideos: React.FC<{ room: SfuRoom | undefined }> = ({ room }) => {
  const { remoteStreams } = useRemoteStreams(room)

  return (
    <>
      {remoteStreams.map((stream) => (
        <RemoteVideo key={stream.peerId} stream={stream} />
      ))}
    </>
  )
}

const PageContainer: React.FC = () => {
  const { peer } = usePeer('my-name')
  const { stream } = useMediaStream()
  const { ref } = useVideo(stream)
  const { room } = useRoom({ peer, stream, roomName: 'my-room' })

  if (!ref) return null

  return (
    <AppLayout>
      <video ref={ref}></video>
      <RemoteVideos room={room} />
    </AppLayout>
  )
}

export default PageContainer
