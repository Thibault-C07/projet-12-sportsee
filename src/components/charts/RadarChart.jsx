import React from 'react'
import { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts'
import UserPerformances from '../../datas/user_performance.json'

const Performances = () => {
  const [userPerformances, setUserPerformances] = useState([])

  useEffect(() => {
    setUserPerformances(UserPerformances.data)
  }, [])

  const kindFormatter = (perfsData) => {
    switch (perfsData) {
      case 'cardio':
        return 'Cardio'
      case 'energy':
        return 'Énergie'
      case 'endurance':
        return 'Endurance'
      case 'strength':
        return 'Force'
      case 'speed':
        return 'Vitesse'
      case 'intensity':
        return 'Intensité'
      default:
        break
    }
  }

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          innerRadius="0"
          outerRadius="69%"
          data={userPerformances.data}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={(value) =>
              kindFormatter(userPerformances.kind[value])
            }
            tickLine={false}
            dy={4}
            tickSize={15}
            tick={{ fill: 'white' }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            dataKey="value"
            fill="#FF0101B2"
            fillOpacity={1}
            stroke="#FF0101B2"
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  )
}

export default Performances
