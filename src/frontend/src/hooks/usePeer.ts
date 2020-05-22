import { useState, useEffect } from 'react'
import Peer from 'skyway-js'

const API_KEY = '8cc0781e-299c-4782-9486-a4300678169e'

export const usePeer = (id: string) => {
  const [peer, setPeer] = useState<Peer>()

  useEffect(() => {
    const newPeer = new Peer(id, {
      key: API_KEY,
      debug: 3,
    })
    setPeer(newPeer)
  }, [id])

  return { peer }
}
