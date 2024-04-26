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
import { getUserPerformances } from '../../datas/api'

export const USER_ID = 18

const Performances = ({ perfsKind, perfsData }) => {
  const [userPerformances, setUserPerformances] = useState([])

  useEffect(() => {
    async function fetchData() {
      const fetcheUserPerformances = await getUserPerformances(USER_ID)
      setUserPerformances(fetcheUserPerformances.data)
    }
    fetchData()
  }, [])

  console.log({ userPerformances })

  const kindArray = Object.entries(perfsKind)
  const kindFormatter = (perfsData) => {
    switch (kindArray[perfsData - 1][1]) {
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
      <ResponsiveContainer>
        <RadarChart
          className="radarchart-background"
          innerRadius="0"
          outerRadius="69%"
          data={userPerformances}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickFormatter={kindFormatter}
            tickLine={false}
            dy={4}
            tickSize={15}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            name=""
            dataKey="value"
            fill="#ff0101B2"
            fillOpacity={1}
            stroke="#FF0101B2"
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  )
}

export default Performances
