import { useEffect } from 'react'

/**
 * windowイベントを設定する
 */

const events = ['beforeunload'] as const

type Event = typeof events[number]

export const _useOnEvent = (eventName: Event, onEventCallBack: any) => {
  useEffect(() => {
    window.addEventListener(eventName, onEventCallBack)
    return () => {
      window.removeEventListener(eventName, onEventCallBack)
    }
  }, [eventName, onEventCallBack])
}

export const useOnBeforeunload = (callback: any) => {
  _useOnEvent('beforeunload', callback)
}
