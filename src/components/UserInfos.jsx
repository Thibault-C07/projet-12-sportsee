import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/UserInfos.css'
import { USER_ID } from './charts/BarChart'
import { getUserInfo } from '../datas/api'

const UserInfos = () => {
  const [user, setUser] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const fetchedUserInfos = await getUserInfo(USER_ID)
  //       setUser(fetchedUserInfos)
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
        setUser(userData)
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
    <div className="user-infos">
      <h1>
        Bonjour <span className="firstname">{user.firstName}</span>
      </h1>

      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default UserInfos
