import React from 'react'
import { useState, useEffect } from 'react'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from 'recharts'
import '../../styles/BarChart.css'
import { getUserActivity } from '../../datas/api'

export const USER_ID = 18

const Weight = ({ activity }) => {
  const [userActivity, setUserActivity] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedUserActivity = await getUserActivity(USER_ID)
        setUserActivity(fetchedUserActivity.sessions)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [activity])

  const tooltipLabelStyle = {
    display: 'none',
  }

  const tooltipWrapperStyle = {
    color: 'white',
    backgroundColor: '#ff0101 !important',
    width: '40px',
    height: '63px',
    fontSize: '7px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  }

  const tooltipItemStyle = {
    color: 'white',
    backgroundColor: '#ff0101',
    fontSize: '7px',
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={tooltipWrapperStyle}>
          <p style={tooltipItemStyle}>{payload[0].value}Kg</p>
          <p style={tooltipItemStyle}>{payload[1].value}KCal</p>
        </div>
      )
    }
    return null
  }

  const renderLegendText = (value) => {
    switch (value) {
      case 'kilogram':
        value = 'Poids (kg)'
        break
      case 'calories':
        value = 'Calories brûlées (kCal)'
        break
      default:
        break
    }
    return <span className="text_style">{value}</span>
  }

  const xTickFormat = (x) => {
    let i = 0
    activity.forEach((act) => {
      if (act.day === x) {
        i = activity.indexOf(act)
      }
    })
    return i + 1
  }

  const yTickFormat = (y) => {
    return y / 1
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <div className="weight">
        <div className="weight_text_title">Activité quotidienne</div>
        <ResponsiveContainer width="100%" height={270}>
          <BarChart data={userActivity}>
            <CartesianGrid strokeDasharray="1 3" vertical={false} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickFormatter={xTickFormat}
            />
            <YAxis
              orientation="right"
              dataKey="calories"
              axisLine={false}
              tickLine={false}
              tickFormatter={yTickFormat}
            />
            <Tooltip
              separator=""
              wrapperStyle={tooltipWrapperStyle}
              itemStyle={tooltipItemStyle}
              contentStyle={tooltipWrapperStyle}
              labelStyle={tooltipLabelStyle}
              content={<CustomTooltip />}
              cursor={{ fill: '#DFDFDF' }}
            />
            <Legend
              verticalAlign="top"
              height={80}
              iconType="circle"
              iconSize="7"
              margin={{ top: 0, left: '20px', right: 0, bottom: 0 }}
              formatter={renderLegendText}
              className="title"
            />
            <Bar
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default Weight
