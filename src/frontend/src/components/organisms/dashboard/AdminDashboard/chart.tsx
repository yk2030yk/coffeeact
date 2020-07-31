import React from 'react'
import { VictoryChart, VictoryBar } from 'victory'

export const DummyChart: React.FC = () => {
  return (
    <VictoryChart>
      <VictoryBar
        style={{ data: { fill: '#c43a31' } }}
        data={[
          { x: 1, y: 2, y0: 1 },
          { x: 2, y: 3, y0: 2 },
          { x: 3, y: 5, y0: 2 },
          { x: 4, y: 4, y0: 3 },
          { x: 5, y: 6, y0: 3 },
        ]}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
      />
    </VictoryChart>
  )
}
