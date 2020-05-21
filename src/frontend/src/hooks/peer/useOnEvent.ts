import { useEffect } from 'react'
import SkyWayPeer from 'skyway-js'

/**
 * windowイベントを設定する
 */

const events = ['open', 'error', 'connection'] as const

type Event = typeof events[number]

type Peer = SkyWayPeer | undefined

export const _useOnEvent = (
  peer: Peer,
  eventName: Event,
  onEventCallBack: any
) => {
  useEffect(() => {
    if (!peer) return
    peer.on(eventName, onEventCallBack)
    return () => {
      peer.off(eventName, onEventCallBack)
    }
  }, [peer, eventName, onEventCallBack])
}

export const useOnOpen = (peer: Peer, callback: any) => {
  _useOnEvent(peer, 'open', callback)
}

export const useOnError = (peer: Peer, callback: any) => {
  _useOnEvent(peer, 'error', callback)
}

export const useOnConnection = (peer: Peer, callback: any) => {
  _useOnEvent(peer, 'connection', callback)
}
