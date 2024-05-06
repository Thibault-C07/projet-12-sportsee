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
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const fetchedUserKeyData = await getUserInfo(USER_ID)
  //       setUserKeyData(fetchedUserKeyData)
  //     } catch (error) {
  //       setError(error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   fetchData()
  // }, [])
  useEffect(() => {
    async function fetchData() {
      try {
        const { userData, error } = await getUserInfo(USER_ID)
        if (error) {
          throw new Error(error)
        }
        setUserKeyData(userData)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error while fetching data {error.message}</div>
  }

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
