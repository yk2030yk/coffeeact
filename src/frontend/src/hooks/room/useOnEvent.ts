import { useEffect } from 'react'
import { Room as TwilioRoom } from 'twilio-video'

/**
 * イベント一覧
 * 注意: twilio-videoのソースコードから抜粋したものなので最新のものを参照してください
 */
const events = [
  'disconnected',
  'participantConnected',
  'participantDisconnected',
  'reconnected',
  'reconnecting',
  'recordingStarted',
  'recordingStopped',
  'trackDimensionsChanged',
  'trackDisabled',
  'trackEnabled',
  'trackMessage',
  'trackPublished',
  'trackPublishPriorityChanged',
  'trackStarted',
  'trackSubscribed',
  'trackSwitchedOff',
  'trackSwitchedOn',
  'trackUnpublished',
  'trackUnsubscribed',
] as const

type Event = typeof events[number]

type Room = TwilioRoom | undefined

export const _useOnEvent = (
  room: Room,
  eventName: Event,
  onEventCallBack: any
) => {
  useEffect(() => {
    if (!room) return
    room.on(eventName, onEventCallBack)
    return () => {
      room.off(eventName, onEventCallBack)
    }
  }, [room, eventName, onEventCallBack])
}

export const useOnDisconnect = (room: Room | undefined, callback: any) => {
  _useOnEvent(room, 'disconnected', callback)
}

export const useOnParticipantConnected = (room: Room, callback: any) => {
  _useOnEvent(room, 'participantConnected', callback)
}

export const useOnParticipantDisconnected = (room: Room, callback: any) => {
  _useOnEvent(room, 'participantDisconnected', callback)
}
