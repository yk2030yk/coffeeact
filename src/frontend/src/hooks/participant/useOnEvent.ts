import { useEffect } from 'react'
import { Participant as TwilioParticipant } from 'twilio-video'

/**
 * イベント一覧
 * 注意: twilio-videoのソースコードから抜粋したものなので最新のものを参照してください
 *
 * Participant
 *   disconnected
 *   networkQualityLevelChanged
 *   reconnected
 *   reconnecting
 *   trackDimensionsChanged
 *   trackStarted
 * RemoteParticipant
 *   reconnected
 *   reconnecting
 *   trackDimensionsChanged
 *   trackDisabled
 *   trackEnabled
 *   trackMessage
 *   trackPublished
 *   trackPublishPriorityChanged
 *   trackStarted
 *   trackSubscribed
 *   trackSubscriptionFailed
 *   trackSwitchedOff
 *   trackSwitchedOn
 *   trackUnpublished
 *   trackUnsubscribed
 * LocalParticipant
 *   reconnected
 *   reconnecting
 *   trackDimensionsChanged
 *   trackDisabled
 *   trackEnabled
 *   trackPublicationFailed
 *   trackPublished
 *   trackStarted
 *   trackStopped
 */
const events = [
  'disconnected',
  'networkQualityLevelChanged',
  'reconnected',
  'reconnecting',
  'trackDimensionsChanged',
  'trackDisabled',
  'trackEnabled',
  'trackMessage',
  'trackPublicationFailed',
  'trackPublished',
  'trackPublishPriorityChanged',
  'trackStarted',
  'trackStopped',
  'trackSubscribed',
  'trackSubscriptionFailed',
  'trackSwitchedOff',
  'trackSwitchedOn',
  'trackUnpublished',
  'trackUnsubscribed',
] as const

type Event = typeof events[number]

type Participant = TwilioParticipant | undefined

export const _useOnEvent = (
  participant: Participant,
  eventName: Event,
  onEventCallBack: any
) => {
  useEffect(() => {
    if (!participant) return
    participant.on(eventName, onEventCallBack)
    return () => {
      participant.off(eventName, onEventCallBack)
    }
  }, [participant, eventName, onEventCallBack])
}

export const useOnTrackPublished = (
  participant: Participant,
  callback: any
) => {
  _useOnEvent(participant, 'trackPublished', callback)
}

export const useOnTrackUnpublished = (
  participant: Participant,
  callback: any
) => {
  _useOnEvent(participant, 'trackUnpublished', callback)
}

export const useOnDisconnected = (participant: Participant, callback: any) => {
  _useOnEvent(participant, 'disconnected', callback)
}

export const useOnReconnecting = (participant: Participant, callback: any) => {
  _useOnEvent(participant, 'reconnecting', callback)
}

export const useOnTrackUnsubscribed = (
  participant: Participant,
  callback: any
) => {
  _useOnEvent(participant, 'trackUnsubscribed', callback)
}
