import { useEffect } from 'react'
import { LocalTrackPublication, RemoteTrackPublication } from 'twilio-video'

/**
 * イベント一覧
 * 注意: twilio-videoのソースコードから抜粋したものなので最新のものを参照してくださ
 *
 * TrackPublication
 *   trackDisabled
 *   trackEnabled
 * RemoteTrackPublication
 *   publishPriorityChanged
 *   subscribed
 *   subscriptionFailed
 *   trackDisabled
 *   trackEnabled
 *   trackSwitchedOff
 *   trackSwitchedOn
 *   unsubscribed
 * RemoteTrackAudioPublication
 *   subscribed
 *   subscriptionFailed
 *   trackDisabled
 *   trackEnabled
 *   unsubscribed
 * RemoteDataTrackPublication
 *   subscribed
 *   subscriptionFailed
 *   unsubscribed
 * RemoteVideoTrackPublication
 *   subscribed
 *   subscriptionFailed
 *   trackDisabled
 *   trackEnabled
 *   unsubscribed
 */

const events = [
  'publishPriorityChanged',
  'subscribed',
  'subscriptionFailed',
  'trackDisabled',
  'trackEnabled',
  'trackSwitchedOff',
  'trackSwitchedOn',
  'unsubscribed',
] as const

type Event = typeof events[number]

type Publication = LocalTrackPublication | RemoteTrackPublication | undefined

export const _useOnEvent = (
  publication: Publication,
  eventName: Event,
  onEventCallBack: any
) => {
  useEffect(() => {
    if (!publication) return
    publication.on(eventName, onEventCallBack)
    return () => {
      publication.off(eventName, onEventCallBack)
    }
  }, [publication, eventName, onEventCallBack])
}

export const useOnSubscribed = (publication: Publication, callback: any) => {
  _useOnEvent(publication, 'subscribed', callback)
}

export const useOnUnsubscribed = (publication: Publication, callback: any) => {
  _useOnEvent(publication, 'unsubscribed', callback)
}
