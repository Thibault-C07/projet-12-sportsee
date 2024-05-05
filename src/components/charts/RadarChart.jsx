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

const Performances = ({ perfsKind }) => {
  const [userPerformances, setUserPerformances] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [fontSize, setFontSize] = useState(window.innerWidth < 1440 ? 10 : 15)
  const [tickSize, setTickSize] = useState(window.innerWidth < 1440 ? 8 : 15)

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedUserPerformances = await getUserPerformances(USER_ID)
        if (fetchedUserPerformances && fetchedUserPerformances.performance) {
          setUserPerformances(fetchedUserPerformances.performance)
        }
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    const handleResize = () => {
      setFontSize(window.innerWidth < 1440 ? 10 : 14)
      setTickSize(window.innerWidth < 1440 ? 8 : 15)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const kindFormatter = (value) => {
    if (typeof value === 'string') {
      switch (value) {
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
          return value
      }
    } else {
      return value
    }
  }
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <div
      className="performances"
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <ResponsiveContainer width="100%" height={180}>
        <RadarChart
          className="radarchart-background"
          innerRadius="10%"
          outerRadius="70%"
          data={userPerformances}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickFormatter={kindFormatter}
            tickLine={false}
            dy={4}
            tickSize={tickSize}
            tick={{ fontSize: fontSize }}
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
    </div>
  )
}

export default Performances
