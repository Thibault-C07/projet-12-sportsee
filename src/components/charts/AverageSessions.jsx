import React from 'react'
import { useState, useEffect } from 'react'
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line } from 'recharts'
import '../../styles/AverageSessions.css'
import { getUserAverageSession } from '../../datas/api'

export const USER_ID = 18

const AverageSessions = () => {
  const [userAverageSession, setUserAverageSession] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedUserAverageSession = await getUserAverageSession(USER_ID)
        setUserAverageSession(fetchedUserAverageSession.sessions)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const tooltipLabelStyle = {
    display: 'none',
  }
  const tooltipItemStyle = {
    color: 'black',
    fontSize: '8px',
  }

  const tooltipWrapperStyle = {
    width: '40px',
    height: '25px',
    fontSize: '7px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={tooltipWrapperStyle}>
          <p style={tooltipItemStyle}>{payload[0].value}</p>
        </div>
      )
    }
    return null
  }

  const xFormatDay = (x) => {
    switch (x) {
      case 'L':
        return 'L'
      case 'M':
        return 'M'
      case 'M':
        return 'M'
      case 'J':
        return 'J'
      case 'V':
        return 'V'
      case 'S':
        return 'S'
      case 'D':
        return 'D'
      default:
        return x
    }
  }
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <div className="sessions" style={{ width: '100%', height: '100%' }}>
        <div className="sessions_title">Durée moyenne des sessions</div>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={userAverageSession}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickFormatter={xFormatDay}
              fill="#ffffff"
              tick={{ fill: 'white', opacity: 0.5, fontSize: '15px' }}
            />

            <Tooltip
              labelStyle={tooltipLabelStyle}
              itemStyle={tooltipItemStyle}
              content={<CustomTooltip />}
              cursor={false}
            />

            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#FFFFFF"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default AverageSessions
