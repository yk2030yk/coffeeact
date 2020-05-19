import { useEffect } from 'react'
import { Track as TwilioTrack } from 'twilio-video'

/**
 * イベント一覧
 * 注意: twilio-videoのソースコードから抜粋したものなので最新のものを参照してください
 */
const events = ['disabled', 'enabled', 'started', 'stopped'] as const

type Event = typeof events[number]

type Track = TwilioTrack | undefined

export const _useOnEvent = (
  track: Track,
  eventName: Event,
  onEventCallBack: any
) => {
  useEffect(() => {
    if (!track) return
    track.on(eventName, onEventCallBack)
    return () => {
      track.off(eventName, onEventCallBack)
    }
  }, [track, eventName, onEventCallBack])
}

export const useOnStarted = (track: Track, callback: any) => {
  _useOnEvent(track, 'started', callback)
}

export const useOnStopped = (track: Track, callback: any) => {
  _useOnEvent(track, 'stopped', callback)
}
