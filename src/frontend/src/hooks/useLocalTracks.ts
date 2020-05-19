import { useCallback, useEffect, useState } from 'react'
import Video, {
  LocalVideoTrack,
  LocalAudioTrack,
  CreateLocalTrackOptions,
} from 'twilio-video'

import { ensureMediaPermissions } from '@/utils/media'
import { useOnStopped } from './track/useOnEvent'

/**
 * 自分のオーディオをビデオtrack
 */

const createOptions = (
  options: CreateLocalTrackOptions = {}
): CreateLocalTrackOptions => {
  return {
    ...options,
  }
}

/**
 * オーディオtrack
 */
export function useLocalAudioTrack() {
  const [audioTrack, setAudioTrack] = useState<LocalAudioTrack>()

  const getLocalAudioTrack = useCallback(async (deviceId?: string) => {
    const createLocalTrackOptions = createOptions(
      deviceId
        ? {
            deviceId: { exact: deviceId },
          }
        : {}
    )

    try {
      await ensureMediaPermissions()
    } catch (e) {
      // FIXME: メディアの権限を確保できなかった場合どうするのか考える
      return
    }

    const newTrack = await Video.createLocalAudioTrack(createLocalTrackOptions)
    setAudioTrack(newTrack)
  }, [])

  useEffect(() => {
    getLocalAudioTrack()
  }, [getLocalAudioTrack])

  const handleStopped = useCallback(() => setAudioTrack(undefined), [])
  useOnStopped(audioTrack, handleStopped)

  return { audioTrack, getLocalAudioTrack } as const
}

/**
 * ビデオtrack
 */
export const useLocalVideoTrack = () => {
  const [videoTrack, setVideoTrack] = useState<LocalVideoTrack>()

  const getLocalVideoTrack = useCallback(
    async (options?: CreateLocalTrackOptions) => {
      const createLocalTrackOptions = createOptions(options)
      try {
        await ensureMediaPermissions()
      } catch (e) {
        // FIXME: メディアの権限を確保できなかった場合どうするのか考える
        return
      }

      const newTrack = await Video.createLocalVideoTrack(
        createLocalTrackOptions
      )
      setVideoTrack(newTrack)
    },
    []
  )

  useEffect(() => {
    getLocalVideoTrack()
  }, [getLocalVideoTrack])

  const handleStopped = useCallback(() => setVideoTrack(undefined), [])
  useOnStopped(videoTrack, handleStopped)

  return { videoTrack, getLocalVideoTrack }
}

export const useLocalTracks = () => {
  const { audioTrack, getLocalAudioTrack } = useLocalAudioTrack()
  const { videoTrack, getLocalVideoTrack } = useLocalVideoTrack()

  const localTracks = [audioTrack, videoTrack].filter(
    (t) => t !== undefined
  ) as (LocalAudioTrack | LocalVideoTrack)[]

  return {
    localTracks,
    getLocalAudioTrack,
    getLocalVideoTrack,
  }
}
