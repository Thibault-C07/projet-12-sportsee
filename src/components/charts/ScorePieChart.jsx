import React from 'react'
import { useState, useEffect } from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'
import '../../styles/ScorePieChart.css'
import { getUserInfo } from '../../datas/api'

export const USER_ID = 18

const Score = ({ userScore }) => {
  const [userChart, setUserChart] = useState(undefined)

  const scorePercentage = userScore.score * 100
  const remainingPercentage = 100 - scorePercentage
  const filledData = [{ name: 'Score atteint', value: scorePercentage }]
  const remainingData = [{ name: 'Restant', value: remainingPercentage }]

  useEffect(() => {
    async function fetchData() {
      const fetchedUserChart = await getUserInfo(USER_ID)
      setUserChart(fetchedUserChart)
    }
    fetchData()
  }, [])

  console.log({ userChart })

  return (
    <>
      <div className="score_title">Score</div>
      <div className="score_text">
        <span className="number_score">{userScore.score * 100}%</span> de votre
        objectif
      </div>
      <div className="score_chart">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <text />
            <Pie
              data={filledData}
              dataKey={'value'}
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#FFFFFF"
            />
            <Pie
              data={remainingData}
              dataKey="value"
              startAngle={180}
              endAngle={180 - scorePercentage * 3.6}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={80}
              cornerRadius={5}
              fill="#ff0101"
            />
          </PieChart>{' '}
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default Score
