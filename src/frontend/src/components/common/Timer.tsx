import React, { useState, useEffect } from 'react'
import * as moment from 'moment'
import 'moment-duration-format'

const useTimer = (maxTime: number) => {
  const [currentTime, setCurrentTime] = useState(maxTime)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime((i) => {
        const n = i - 1
        return n < 0 ? 0 : n
      })
    }, 1000)
    return () => clearInterval(id)
  }, [maxTime])

  return { currentTime }
}

/**
 * FIXME: 試して見たかっただけなのであとで消す
 */
const Timer: React.FC<{ maxTime?: number }> = ({ maxTime = 1000 }) => {
  const { currentTime } = useTimer(maxTime)
  return (
    // @ts-ignore
    <span>{moment.duration(currentTime, 'second').format('hh:mm:ss')}</span>
  )
}

export default Timer
