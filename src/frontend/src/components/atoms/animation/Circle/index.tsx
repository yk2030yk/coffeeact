import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Circle: React.FC = ({ children }) => {
  const [enter, setEnter] = useState(false)
  const spring = useSpring({
    fontSize: enter ? '100px' : '80px',
  })

  return (
    <animated.div
      style={spring}
      onMouseEnter={(e) => setEnter(true)}
      onMouseLeave={(e) => setEnter(false)}
    >
      {children}
    </animated.div>
  )
}

export default Circle
