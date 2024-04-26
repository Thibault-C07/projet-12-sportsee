import calorieIcon from '../assets/icon-calorie.png'
import proteinIcon from '../assets/icon-protein.png'
import carbohydrateIcon from '../assets/icon-carbohydrate.png'
import lipidIcon from '../assets/icon-lipid.png'
import React from 'react'
import { useState, useEffect } from 'react'
import { getUserInfo } from '../datas/api'
import { USER_ID } from './charts/ScorePieChart'

const CardKeyData = ({ name, content }) => {
  const [userKeyData, setUserKeyData] = useState(undefined)

  let spanTraduction = ''
  let img = ''
  let unit = ''
  switch (name) {
    case 'calorie':
      spanTraduction = 'Calories'
      img = calorieIcon
      unit = 'Cal'
      break
    case 'protein':
      spanTraduction = 'Protéines'
      img = proteinIcon
      unit = 'g'
      break
    case 'carbohydrate':
      spanTraduction = 'Glucides'
      img = carbohydrateIcon
      unit = 'g'

      break
    case 'lipid':
      spanTraduction = 'Lipides'
      img = lipidIcon
      unit = 'g'

      break
    default:
      break
  }

  useEffect(() => {
    async function fetchData() {
      const fetchedUserKeyData = await getUserInfo(USER_ID)
      setUserKeyData(fetchedUserKeyData)
    }
    fetchData()
  }, [])

  console.log({ userKeyData })

  return (
    <div className={name}>
      <img src={img} alt="" />
      <div className="cardKeyData_content">
        {content}
        {unit} <br />
        <span className="cardKeyData_content_span">{spanTraduction}</span>
      </div>
    </div>
  )
}

export default CardKeyData
