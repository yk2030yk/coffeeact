import React, { useState, useEffect } from 'react'

const messages = ['', '.', '..', '...']
const size = messages.length

/**
 * FIXME: 試して見たかっただけなのであとで消す
 */
const LoadingMessage: React.FC<{ interval?: number }> = ({
  interval = 1000,
}) => {
  const [message, setMessage] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setMessage(messages[index])
  }, [index])

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        const n = i + 1
        return n < size ? n : 0
      })
    }, interval)
    return () => clearInterval(id)
  }, [interval])

  return <span>{message}</span>
}

export default LoadingMessage
