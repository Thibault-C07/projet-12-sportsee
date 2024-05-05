import React from 'react'
import { useState, useEffect } from 'react'
import UserInfos from '../components/UserInfos'
import '../styles/Home.css'
import Metrics from '../components/Metrics'
import { getUserInfo } from '../datas/api'

export const USER_ID = 18

const Home = () => {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    async function fetchData() {
      const fetchedUser = await getUserInfo(USER_ID)
      setUser(fetchedUser)
    }
    fetchData()
  }, [])
  return (
    <>
      <UserInfos />
      <Metrics />
    </>
  )
}

export default Home
